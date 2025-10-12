"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard"; 

// 🔹 Update user + create industry insight if missing
export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  // Step 1: check if industry insights already exist
  let existingInsight = await db.industryInsight.findUnique({
    where: { industry: data.industry },
  });

  // Step 2: If not exist, generate AI insights (outside transaction to avoid timeout)
  let insightData = null;
  if (!existingInsight) {
    insightData = await generateAIInsights(data.industry);
  }

  try {
    // Step 3: Run DB transaction with ONLY queries
    const result = await db.$transaction(async (tx) => {
      let industryInsight = existingInsight;

      if (!industryInsight && insightData) {
        industryInsight = await tx.industryInsight.create({
          data: {
            industry: data.industry,
            ...insightData,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
          },
        });
      }

      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        },
      });

      return { updatedUser, industryInsight };
    });

    return { success: true, ...result };
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Error updating user and industry: " + error.message);
  }
}

// 🔹 Get user's onboarding status
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });

  if (!user) throw new Error("User not found");

  return { isOnboarded: !!user.industry };
}

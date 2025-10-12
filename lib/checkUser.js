import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        // Pehle check karo user DB me hai ya nahi
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        // Agar nahi mila to naya create karo
        const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                email: user.emailAddresses[0]?.emailAddress || "",
                imageUrl: user.imageUrl,
            },
        });

        return newUser;
    } catch (error) {
        console.log("Error checking user:", error.message);
        return null;
    }
};

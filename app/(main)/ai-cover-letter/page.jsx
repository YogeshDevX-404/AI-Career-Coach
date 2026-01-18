import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

// Server Component
export default async function CoverLetterPage() {
  let coverLetters = [];

  try {
    coverLetters = await getCoverLetters();
  } catch (error) {
    console.error("Error fetching cover letters:", error);
    coverLetters = [];
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header / Navigation */}
      <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between mb-6">
        <h1 className="text-4xl md:text-6xl font-bold gradient-title">
          My Cover Letters
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Cover Letter List */}
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}

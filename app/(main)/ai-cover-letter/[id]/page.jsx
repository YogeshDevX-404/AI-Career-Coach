import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";

// This is a Server Component
export default async function CoverLetterPage({ params }) {
  const { id } = params;

  let coverLetter;

  try {
    coverLetter = await getCoverLetter(id);
  } catch (error) {
    console.error("Error fetching cover letter:", error);
    coverLetter = null;
  }

  if (!coverLetter) {
    return (
      <div className="container mx-auto py-20 text-center text-gray-400">
        Cover letter not found.
        <div className="mt-4">
          <Link href="/ai-cover-letter">
            <Button variant="outline">Back to Cover Letters</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      {/* Header / Navigation */}
      <div className="flex flex-col space-y-2 mb-6 md:flex-row md:items-center md:justify-between">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold gradient-title mt-2 md:mt-0">
          {coverLetter.jobTitle} at {coverLetter.companyName}
        </h1>
      </div>

      {/* Cover Letter Content */}
      <CoverLetterPreview content={coverLetter.content} />
    </div>
  );
}

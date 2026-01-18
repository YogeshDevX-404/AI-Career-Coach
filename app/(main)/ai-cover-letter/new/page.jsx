"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="container mx-auto py-8 px-4 flex flex-col items-center">
      {/* Header / Navigation */}
      <div className="flex flex-col items-center mb-6 space-y-4">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-title">
            Create Cover Letter
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>

      {/* Cover Letter Generator Form */}
      <div className="w-full max-w-3xl mt-6">
        <CoverLetterGenerator />
      </div>
    </div>
  );
}

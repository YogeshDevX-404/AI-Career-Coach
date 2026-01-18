"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => {
  if (!content) {
    return (
      <div className="text-gray-400 text-center py-20">
        No cover letter content to display.
      </div>
    );
  }

  return (
    <div className="py-4 max-w-5xl mx-auto">
      <MDEditor
        value={content}
        preview="preview"
        height={700}
        visiableDragbar={false}
        className="border rounded-md p-2 bg-background"
      />
    </div>
  );
};

export default CoverLetterPreview;

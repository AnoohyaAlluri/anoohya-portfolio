import { readdirSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const resumeDirectory = path.join(process.cwd(), "public", "Resume");

  let resumeFiles: string[];

  try {
    resumeFiles = readdirSync(resumeDirectory)
      .filter((file) => file.toLowerCase().endsWith(".pdf"))
      .sort();
  } catch {
    return new Response("Resume folder could not be read.", {
      status: 500,
    });
  }

  if (resumeFiles.length === 0) {
    return new Response(
      "Resume PDF not found. Add one PDF inside public/Resume.",
      {
        status: 404,
      }
    );
  }

  if (resumeFiles.length > 1) {
    return new Response(
      "Multiple resume PDFs found. Keep exactly one PDF inside public/Resume.",
      {
        status: 500,
      }
    );
  }

  const resumePath = `/Resume/${encodeURIComponent(resumeFiles[0])}`;

  return NextResponse.redirect(new URL(resumePath, request.url), 307);
}

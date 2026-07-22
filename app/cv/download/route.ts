import { readFile } from "node:fs/promises";
import path from "node:path";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export async function GET() {
  const cvPath = path.join(process.cwd(), "public", "cv", "Mohammed_Boungab_CV.pdf");
  const cv = await readFile(cvPath);

  return new Response(new Uint8Array(cv), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Disposition": `attachment; filename="${profile.cvDownloadName}"`,
      "Content-Type": "application/pdf",
    },
  });
}

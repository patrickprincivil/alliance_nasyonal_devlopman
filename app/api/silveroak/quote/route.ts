import { NextRequest, NextResponse } from "next/server";
import { quoteFromCatalog } from "@/lib/silveroak/pricing";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const packageId = params.get("package") ?? "";
  const addonIds = params.getAll("addon");
  try {
    const quote = quoteFromCatalog(packageId, addonIds);
    return NextResponse.json(quote, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Invalid package or add-on selection" }, { status: 400 });
  }
}

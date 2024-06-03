// app/api/preview.ts

import { NextRequest, NextResponse } from "next/server";
import client from "../../../sanity/sanity.client";

export async function GET(req: NextRequest) {
  const documentId = req.nextUrl.searchParams.get("documentId");
  const query = `*[_id == $documentId || _id == "drafts." + $documentId][0]`;
  const params = { documentId };

  try {
    const document = await client.fetch(query, params);
    if (!document) {
      return new NextResponse(
        JSON.stringify({ message: "Document not found" }),
        { status: 404 }
      );
    }
    return NextResponse.json(document);
  } catch (error) {
    console.error("Error fetching document:", error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error }),
      { status: 500 }
    );
  }
}

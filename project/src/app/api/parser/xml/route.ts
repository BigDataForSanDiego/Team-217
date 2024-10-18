import { NextResponse } from "next/server";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

/**
 * parser that extracts <question> xml tags from string
 * @param request string with xml like tags
 * @returns questions: json object questions that is an array of strings { question: [] }
 */
export async function POST(request: Request) {
  const { text } = await request.json();

  const parser = new XMLParser();
  const result = parser.parse(text);

  // extract question tags only
  const { answer: question } = result;

  console.log(question);

  return NextResponse.json({ success: true, question });
}

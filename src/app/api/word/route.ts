import { NextResponse } from "next/server";
import { words } from "@/data/words";


export async function GET() {
  const response = await fetch('http://localhost:8000/api/word');
  console.log(response)
  const data = await response.json();
  console.log("I am here")
  return NextResponse.json({ data });
}


import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  const json = await req.json().catch(()=>null);
  const parsed = schema.safeParse(json);
  if(!parsed.success) return NextResponse.json({ ok:false, error:"Invalid" }, { status: 400 });
  // TODO: integrate with Resend or SMTP
  console.log("CONTACT", parsed.data);
  return NextResponse.json({ ok:true });
}

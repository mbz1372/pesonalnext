"use client";
import { useState } from "react";
export default function ContactPage(){
  const [state, setState] = useState<{ok:boolean; msg:string}|null>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const res = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setState(json.ok ? {ok:true, msg:"Thanks! I'll get back to you soon."} : {ok:false, msg: json.error || "Something went wrong"});
    if(json.ok) form.reset();
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form onSubmit={submit} className="grid gap-3 mt-6">
        <input name="name" required placeholder="Your name" className="rounded-2xl border px-3 py-2"/>
        <input name="email" type="email" required placeholder="Email" className="rounded-2xl border px-3 py-2"/>
        <textarea name="message" required placeholder="Message" className="rounded-2xl border px-3 py-2 min-h-[140px]"/>
        <button className="rounded-2xl px-4 py-2 bg-black text-white w-fit">Send</button>
        {state && <p className={state.ok ? "text-emerald-600" : "text-red-600"}>{state.msg}</p>}
      </form>
    </main>
  );
}

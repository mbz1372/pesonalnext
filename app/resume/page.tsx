import { site } from "@/lib/site";
export default function ResumePage(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Resume</h1>
      <a className="mt-4 inline-block rounded-2xl px-4 py-2 bg-black text-white" href={site.resumeUrl}>Download PDF</a>
      <section className="mt-8 space-y-6">
        <Role company="IranHotelOnline" title="Supply Chain Operations Manager" period="Apr 2025 – Present" bullets={[
          "Aligning ops, product and growth.",
          "Building KPI rhythms and dashboards."
        ]}/>
        <Role company="IranHotelOnline" title="Product Manager" period="Oct 2024 – Apr 2025" bullets={[
          "Launched product experiments and improved conversion."
        ]}/>
      </section>
    </main>
  );
}
function Role({company,title,period,bullets}:{company:string;title:string;period:string;bullets:string[]}) {
  return (
    <div className="rounded-2xl border p-5">
      <h3 className="font-semibold">{company} — {title}</h3>
      <p className="text-xs text-neutral-500 mt-1">{period}</p>
      <ul className="list-disc pl-5 mt-3 text-sm text-neutral-700">
        {bullets.map((b,i)=><li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

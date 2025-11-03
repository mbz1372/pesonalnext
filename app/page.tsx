import { site } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">{site.name}</h1>
      <p className="mt-2 text-lg text-neutral-600">{site.role}</p>
      <p className="mt-4 max-w-2xl text-neutral-700">{site.bio}</p>
      <div className="mt-6 flex gap-3">
        <Link href="/resume" className="rounded-2xl px-4 py-2 bg-black text-white">View Resume</Link>
        <a href={site.resumeUrl} className="rounded-2xl px-4 py-2 border">Download CV</a>
      </div>
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <HomeCard title="Articles" href="/articles" />
        <HomeCard title="Books" href="/books" />
        <HomeCard title="Videos" href="/videos" />
      </section>
    </main>
  );
}

function HomeCard({title, href}:{title:string; href:string}) {
  return (
    <a href={href} className="block rounded-2xl border p-5 hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-neutral-600 mt-1">Explore latest {title.toLowerCase()}.</p>
    </a>
  );
}

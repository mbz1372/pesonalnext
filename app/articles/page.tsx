import { allArticles } from 'contentlayer/generated';
import Link from "next/link";

export default function ArticlesPage() {
  const items = allArticles.slice().sort((a,b)=> b.date.localeCompare(a.date));
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Articles</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map(a=>(
          <Link key={a._id} href={a.url} className="border rounded-2xl p-5 hover:shadow-md">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-xs text-neutral-500 mt-1">{new Date(a.date).toLocaleDateString()}</p>
            <p className="text-sm text-neutral-600 mt-2">{a.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

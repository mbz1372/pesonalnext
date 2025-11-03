import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateStaticParams(){
  return allArticles.map(p=>({ slug: p._raw.flattenedPath.split("/").slice(-1)[0] }));
}
export default function Article({ params }:{ params:{ slug:string } }){
  const doc = allArticles.find(p => p._raw.flattenedPath.endsWith(params.slug));
  if(!doc) return notFound();
  // @ts-expect-error contentlayer typing for body.html
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
      <h1>{doc.title}</h1>
      <p className="text-sm text-neutral-500">{new Date(doc.date).toLocaleDateString()} · {Math.round(doc.readingTime.minutes)} min</p>
      {/* @ts-ignore */}
      <article dangerouslySetInnerHTML={{__html: doc.body.html}} />
    </main>
  );
}

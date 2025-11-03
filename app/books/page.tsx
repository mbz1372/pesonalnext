import { allBooks } from 'contentlayer/generated';
export default function BooksPage(){
  const items = allBooks.slice().sort((a,b)=> (b.title||'').localeCompare(a.title||''));
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Books & Notes</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map(b=>(
          <a key={b._id} href={b.url} className="border rounded-2xl p-5 hover:shadow-md">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{b.author}</p>
            {b.noteSummary && <p className="text-xs text-neutral-500 mt-2">{b.noteSummary}</p>}
          </a>
        ))}
      </div>
    </main>
  );
}

import { allVideos } from 'contentlayer/generated';
export default function VideosPage(){
  const items = allVideos.slice().sort((a,b)=> (b.publishedAt||'').localeCompare(a.publishedAt||''));
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Videos</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map(v=>(
          <a key={v._id} href={v.url} target="_blank" className="border rounded-2xl p-5 hover:shadow-md">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-xs text-neutral-500 mt-1">{v.platform} {v.duration ? `· ${v.duration}`: ''}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

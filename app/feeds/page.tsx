import { ARTICLES } from "@/lib/data";
import Link from "next/link";

export default function FeedsPage() {
  // Filter khusus artikel The Feeds
  const feedArticles = ARTICLES.filter(a => a.category === "The Feeds");

  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 border-l-4 border-[#800020] pl-6">
          <h1 className="font-serif text-5xl font-black uppercase tracking-tighter text-[#181717] text-[#800020] italic">
            THE FEEDS
          </h1>
          <p className="mt-2 text-zinc-500 font-sans text-xs font-bold uppercase tracking-widest">
            Quick Explainer • Trending • Snackable
          </p>
        </header>

        <div className="space-y-6">
          {feedArticles.map((item) => (
            <Link 
              key={item.id} 
              href={`/articles/${item.category}/${item.slug}`}
              className="group block bg-white border border-zinc-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-6 items-center">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-zinc-900">
                  <img 
                    src={item.image} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    alt={item.title}
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#800020] uppercase tracking-widest">
                    {item.date}
                  </span>
                  <h2 className="text-xl font-bold font-serif text-zinc-800 group-hover:text-[#181717]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500 line-clamp-1 italic">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
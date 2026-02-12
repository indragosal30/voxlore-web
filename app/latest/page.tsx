import { ARTICLES } from "@/lib/data";
import Link from "next/link";

export default function LatestPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 border-b-4 border-[#181717] pb-8">
          <h1 className="font-serif text-5xl font-black uppercase italic tracking-tighter text-[#800020]">
            Latest Articles
          </h1>
          <p className="mt-4 font-sans text-sm font-bold uppercase tracking-[0.3em] opacity-60">
            Archive — {ARTICLES.length} Stories Collected
          </p>
        </header>

        <div className="space-y-16"> {/* Gue lebarin dikit jarak antar artikel biar lega */}
          {ARTICLES.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.category}/${article.slug}`}
              className="group grid gap-8 md:grid-cols-12 items-start touch-manipulation"
            >
              {/* Thumbnail - SEKARANG DIKUNCI BIAR GAK BERANTAKAN */}
              <div className="md:col-span-4 overflow-hidden bg-zinc-900 aspect-square w-full relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Overlay dikit biar kesan premium */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Info */}
              <div className="md:col-span-8 pt-2">
                <span className="text-[#800020] text-[10px] font-black uppercase tracking-[0.2em]">
                  {article.category}
                </span>
                
                {/* Judul dengan efek Burgundy pas Hover/Active */}
                <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-black group-hover:text-[#800020] group-active:text-[#800020] transition-colors duration-300">
                  {article.title}
                </h2>
                
                <p className="mt-4 text-zinc-600 line-clamp-3 leading-relaxed font-sans text-sm">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <span>{article.date}</span>
                  <span className="h-px w-8 bg-zinc-200"></span>
                  <span className="text-[#181717] group-hover:translate-x-2 transition-transform duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
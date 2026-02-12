import { ARTICLES } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const featuredArticle = ARTICLES[0];
  const otherArticles = ARTICLES.slice(1);

  return (
    <main className="bg-[#f8f7f3] min-h-screen">
      {/* --- FEATURED SECTION --- */}
      <section className="px-6 py-12 md:py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <Link 
            href={`/articles/${featuredArticle.category}/${featuredArticle.slug}`} 
            className="group grid md:grid-cols-2 gap-12 items-center touch-manipulation"
          >
            <div className="overflow-hidden bg-zinc-200 aspect-video relative shadow-sm">
              <img 
                src={featuredArticle.image} 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={featuredArticle.title}
              />
            </div>

            <div>
              <span className="text-[#800020] font-bold uppercase tracking-[0.3em] text-[10px]">
                Featured Story
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-black mt-4 leading-[0.9] tracking-tighter text-[#181717] group-hover:text-[#800020] transition-colors duration-300">
                {featuredArticle.title}
              </h2>
              <p className="mt-6 text-lg text-zinc-600 leading-relaxed italic font-serif">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-6 font-bold text-xs uppercase tracking-widest inline-block border-b-2 border-[#181717] text-[#181717] group-hover:border-[#800020] group-hover:text-[#800020] transition-all">
                Read Full Story
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* --- LATEST ARTICLES SECTION --- */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b-2 border-[#181717] pb-4">
          <h3 className="font-serif text-3xl font-bold italic text-[#800020]">Latest Articles</h3>
          <Link 
            href="/latest" 
            className="text-xs font-bold uppercase tracking-widest hover:text-[#800020] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
          {otherArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.category}/${article.slug}`}
              className="group touch-manipulation border-b border-zinc-200 pb-12 last:border-0 md:border-0 md:pb-0 transition-all"
            >
              {/* Thumbnail: FIX ASPECT RATIO TANPA ERROR */}
              <div className="overflow-hidden bg-zinc-200 mb-6 aspect-[4/3] relative">
                <img 
                  src={article.image} 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={article.title}
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-[#800020] text-[10px] font-black uppercase tracking-[0.2em]">
                  {article.category}
                </span>
                
                <h4 className="font-serif text-2xl font-black mt-2 leading-tight text-[#181717] group-hover:text-[#800020] group-active:text-[#800020] transition-colors duration-300">
                  {article.title}
                </h4>
                
                <p className="mt-3 text-sm text-zinc-500 line-clamp-2 font-sans leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#181717] text-[#f8f7f3] px-6 py-16 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-black tracking-tighter uppercase italic">
              Voxlore
            </h2>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mt-2">
              The Digital Journal • Est. 2026
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#800020] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#800020] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#800020] transition-colors">Newsletter</a>
          </div>

          <div className="text-[10px] opacity-40 uppercase tracking-widest">
            © {new Date().getFullYear()} Voxlore Media
          </div>
        </div>
      </footer>
    </main>
  );
}
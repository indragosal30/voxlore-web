import { ARTICLES } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const featuredArticle = ARTICLES[0];
  const otherArticles = ARTICLES.slice(1);

  return (
    <main className="bg-[#f8f7f3] min-h-screen">
      <section className="px-6 py-12 md:py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          
          <Link href={`/articles/${featuredArticle.category}/${featuredArticle.slug}`} className="group grid md:grid-cols-2 gap-12 items-center touch-manipulation">
            <div className="overflow-hidden bg-zinc-900">
              <img 
                src={featuredArticle.image} 
                className="aspect-video object-cover group-hover:scale-105 transition-all duration-700" 
                alt="Featured"
              />
            </div>
            <div>
              <span className="text-[#800020] font-bold uppercase tracking-[0.3em] text-[10px]">Featured Story</span>
              {/* duration kita cepetin jadi 300ms biar pas disentuh langsung 'jepret' berubah warna */}
              <h2 className="font-serif text-5xl md:text-7xl font-black mt-4 leading-[0.9] tracking-tighter text-[#181717] group-hover:text-[#800020] transition-colors duration-300">
                {featuredArticle.title}
              </h2>
              <p className="mt-6 text-lg text-zinc-600 leading-relaxed italic">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-5 font-bold text-xs uppercase tracking-widest inline-block border-b-2 border-[#181717] text-[#181717] group-hover:border-[#800020] group-hover:text-[#800020]">
                Read More
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b-2 border-[#181717] pb-4">
          <h3 className="font-serif text-3xl font-bold italic text-[#800020]">Latest Articles</h3>
          <Link href="/latest" className="text-xs font-bold uppercase tracking-widest hover:text-[#800020]">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {otherArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.category}/${article.slug}`}
              className="group touch-manipulation"
            >
              <div className="overflow-hidden bg-zinc-900 mb-6">
                <img 
                  src={article.image} 
                  className="aspect-ratio: 4/3;object-cover transition-all duration-500" 
                  alt={article.title}
                />
              </div>
              <span className="text-[#800020] text-[10px] font-black uppercase tracking-[0.2em]">
                {article.category}
              </span>
              <h4 className="font-serif text-2xl font-black mt-2 leading-tight transition-colors duration-300 text-[#181717] group-hover:text-[#800020] group-hover:underline underline-offset-4 decoration-[#800020]">
                {article.title}
              </h4>
              <p className="mt-3 text-sm text-zinc-500 line-clamp-2">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
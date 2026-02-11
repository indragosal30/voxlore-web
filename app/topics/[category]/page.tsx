import { ARTICLES } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Filter artikel yang kategorinya cocok (kita abaikan case sensitive)
  const filteredArticles = ARTICLES.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  if (filteredArticles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-serif text-2xl italic">No stories found in this pillar yet.</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16">
          <span className="text-[#800020] text-xs font-black uppercase tracking-widest">Pillar Archive</span>
          <h1 className="mt-2 font-serif text-6xl font-black uppercase italic text-[#800020]">{category.replace('-', ' ')}</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.category}/${article.slug}`} className="group">
              <div className="overflow-hidden bg-zinc-900 aspect-video mb-6">
                <img src={article.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-zinc-800 transition-all duration-300 group-hover:text-[#800020]">
                {article.title}
              </h2>
              <p className="mt-4 text-zinc-600 line-clamp-2">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
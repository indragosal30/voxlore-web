import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    // 1. Ambil slug dari URL
    const { slug } = await params;

    // 2. Cari datanya di gudang data.ts
    const article = ARTICLES.find((a) => a.slug === slug);

    // 3. Kalau datanya nggak ada, kasih halaman 404
    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8f7f3] text-[#181717]">
            <article className="mx-auto max-w-4xl px-6 py-20">
                {/* Judul & Meta */}
                <header className="mb-12 text-center">
                    <span className="text-[#800020] text-xs font-black uppercase tracking-[0.4em]">
                        {article.category}
                    </span>
                    <h1 className="mt-6 font-serif text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                        {article.title}
                    </h1>
                    <div className="mt-8 border-y border-zinc-200 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Published on {article.date} — By Voxlore Editorial Team
                    </div>
                </header>

                {/* Gambar Utama */}
                <div className="mb-16 overflow-hidden bg-zinc-900">
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full aspect-video object-cover grayscale contrast-125"
                    />
                </div>

                {/* AREA CONTENT (Ini yang lo cari!) */}
                <div className="max-w-2xl mx-auto">
                    <div className="font-sans text-lg leading-[1.8] space-y-8 text-zinc-800">
                        {/* Trik split untuk bikin paragraf otomatis */}
                        {article.content && article.content.split('\n').map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
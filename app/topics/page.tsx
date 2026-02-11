import Link from 'next/link';

const TOPICS_LIST = [
  {
    name: "Beyond System",
    desc: "Membedah akar masalah, geopolitik, dan struktur kekuasaan.",
    color: "bg-[#800020]", // Burgundy
    slug: "beyond-system"
  },
  {
    name: "Every Lore",
    desc: "Eksplainer tentang sejarah, etimologi, dan fenomena sosial sehari-hari.",
    color: "bg-[#181717]", // Noir
    slug: "every-lore"
  },
  {
    name: "Untold Case",
    desc: "Investigasi mendalam kasus kriminal dan sejarah kelam secara eksplisit.",
    color: "bg-zinc-800",
    slug: "untold-case"
  },
  {
    name: "The Feeds",
    desc: "Snackable content. Isu terkini yang perlu lo tau sekarang juga.",
    color: "bg-zinc-500",
    slug: "the-feeds"
  }
];

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-black uppercase tracking-tighter">
            <span className="text-[#800020]">THE PILLARS</span>
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.4em] opacity-50 text-zinc-600">
            Select your lens to view the world
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOPICS_LIST.map((topic) => (
            <Link 
              key={topic.slug} 
              href={`/topics/${topic.slug}`}
              className="group relative overflow-hidden bg-white p-12 border border-zinc-200 hover:border-[#800020] transition-all duration-500"
            >
              {/* Vibe Noir: Angka Background */}
              <span className="absolute -right-4 -bottom-10 font-serif text-[12rem] font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {topic.name.charAt(0)}
              </span>

              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#800020]">
                  Pillar
                </span>
                <h2 className="mt-4 font-serif text-4xl font-bold text-zinc-800 transition-all duration-300 group-hover:text-[#800020] group-hover:italic group-hover:translate-x-2">
                  {topic.name}
                </h2>
                <p className="mt-6 max-w-sm text-zinc-500 leading-relaxed italic">
                  "{topic.desc}"
                </p>
                
                <div className="mt-12 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                  <span className="h-px w-8 bg-[#800020]"></span>
                  <span className="text-[#800020]">Explore Archive</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
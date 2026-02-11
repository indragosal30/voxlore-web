export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#181717] selection:bg-[#800020] selection:text-white">
      {/* 1. MANIFESTO HEADER */}
      <section className="px-6 py-24 md:py-40">
        <div className="mx-auto max-w-4xl">
          <span className="text-[#800020] text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            The Studio
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-12">
            WE TELL THE <span className="italic text-[#800020]">LORE</span> <br /> 
            BEHIND THE <span className="text-[#800020] italic">VOX.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-20 border-t border-zinc-200 pt-12">
            <p className="font-serif text-2xl italic leading-relaxed text-zinc-800">
              "Voxlore Media hadir bukan untuk sekadar memberi tahu apa yang sedang terjadi, tapi untuk membedah mengapa hal itu bisa terjadi. Kami adalah Creative Media-Explainer yang percaya bahwa di setiap suara selalu ada cerita yang belum terungkap."
            </p>
            <div className="font-sans text-sm leading-relaxed text-zinc-500 space-y-6">
              <p>
                Di bawah naungan <strong className="text-[#181717] italic">Gosal Group</strong>, kami mengkurasi narasi melalui tiga pilar utama: investigasi mendalam, etimologi fenomena sosial, dan analisis sistem global.
              </p>
              <p>
                Pendekatan kami adalah rasa ingin tahu tanpa batas. Kami percaya bahwa setiap sudut jalan, setiap kata umpatan, dan setiap kebijakan politik memiliki lore yang layak diceritakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PILLARS (Minimalist List) */}
      <section className="bg-[#181717] text-[#f8f7f3] py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl mb-16 border-b border-zinc-800 pb-4">Our Method</h2>
          <div className="space-y-12">
            {[
              { n: "01", t: "Deep Investigation", d: "Kami tidak takut menyentuh sisi eksplisit dan kelam dari sebuah kasus." },
              { n: "02", t: "Visual Storytelling", d: "Setiap artikel adalah pengalaman visual. Bukan sekadar filter, tapi lensa." },
              { n: "03", t: "Systematic Analysis", d: "Membedah struktur kekuasaan dan geopolitik dari akar paling bawah." }
            ].map((item) => (
              <div key={item.n} className="group flex gap-8 items-start">
                <span className="font-serif text-[#800020] text-2xl italic">{item.n}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest group-hover:text-[#800020] transition-colors">
                    {item.t}
                  </h3>
                  <p className="mt-2 opacity-50 max-w-md text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT / FOOTER ACTION */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-4xl mb-8 uppercase font-black">Join The Lore.</h2>
          <p className="text-zinc-500 mb-12 italic">Punya cerita yang belum terungkap? Atau ingin berkolaborasi dengan Voxlore Media?</p>
          <a 
            href="mailto:contact@voxlore.media" 
            className="inline-block bg-[#800020] text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#181717] transition-all duration-500"
          >
            Contact the Editor
          </a>
        </div>
      </section>
    </main>
  );
}
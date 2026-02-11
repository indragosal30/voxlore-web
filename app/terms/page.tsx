export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#181717] px-6 py-24 md:py-40">
      <div className="mx-auto max-w-3xl">
        <span className="text-[#800020] text-xs font-black uppercase tracking-[0.5em] mb-8 block">
          Legal Document
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
          Terms of <br /> <span className="italic text-[#800020]">Service.</span>
        </h1>
        
        <div className="prose prose-zinc font-sans text-sm leading-relaxed space-y-8 text-zinc-600">
          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">01. Content Ownership</h2>
            <p className="mt-4">
              Semua konten, narasi, dan aset visual di Voxlore adalah milik intelektual Gosal Group. Penggunaan ulang tanpa izin tertulis adalah pelanggaran lore kami.
            </p>
          </section>

          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">02. Ethical Reading</h2>
            <p className="mt-4">
              Voxlore menyajikan konten investigasi yang mungkin bersifat eksplisit. Dengan mengakses platform ini, Anda setuju untuk mengonsumsi informasi dengan bijak dan dewasa.
            </p>
          </section>

          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">03. Disclaimer</h2>
            <p className="mt-4">
              Informasi yang disajikan adalah hasil riset mendalam, namun kami tidak bertanggung jawab atas interpretasi radikal pembaca terhadap data yang kami sajikan.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
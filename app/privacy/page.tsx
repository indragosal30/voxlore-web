export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#181717] px-6 py-24 md:py-40">
      <div className="mx-auto max-w-3xl">
        <span className="text-[#800020] text-xs font-black uppercase tracking-[0.5em] mb-8 block">
          Legal Document
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
          Privacy <br /> <span className="italic text-[#800020]">Policy.</span>
        </h1>
        
        <div className="prose prose-zinc font-sans text-sm leading-relaxed space-y-8 text-zinc-600">
          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">01. Data Collection</h2>
            <p className="mt-4">
              Voxlore Media (Gosal Group) menghargai privasi Anda. Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela saat berlangganan newsletter kami atau berinteraksi dengan platform kami.
            </p>
          </section>

          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">02. Usage of Information</h2>
            <p className="mt-4">
              Informasi yang dikumpulkan digunakan semata-mata untuk meningkatkan pengalaman membaca Anda dan mengirimkan intelijen atau narasi terbaru langsung ke inbox Anda. Kami tidak menjual data Anda kepada pihak ketiga.
            </p>
          </section>

          <section>
            <h2 className="text-[#181717] font-bold uppercase tracking-widest text-xs">03. Cookies</h2>
            <p className="mt-4">
              Platform kami menggunakan cookies fungsional untuk mengingat preferensi tampilan Anda (terutama mode visual Noir yang Anda pilih).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
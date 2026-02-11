import Link from "next/link"; // Pastikan Link sudah di-import di paling atas ya!

export default function Footer({ className = "" }) {
  return (
    <footer className={`bg-[#181717] text-[#f8f7f3] px-6 py-16 ${className}`}>
      <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
        {/* Logo Besar */}
        <h2 className="font-serif text-5xl md:text-7xl font-black text-[#800020] tracking-tighter">
          VOXLORE
        </h2>
        <p className="mt-2 font-serif italic text-sm md:text-xl opacity-80">
          A Creative Media-Explainer.
        </p>

        {/* Copyright & Info */}
        <div className="mt-20 flex flex-col md:flex-row justify-between w-full border-t border-zinc-800 pt-8 gap-6 text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
          <p>© 2026 BY GOSAL GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-[#800020] transition">Privacy</Link>
            <Link href="/terms" className="hover:text-[#800020] transition">Terms</Link>
          </div>
        </div> {/* <--- INI DIV YANG TADI ILANG, COY! */}
      </div> {/* <--- INI JUGA PENUTUP UNTUK CONTAINER UTAMA */}
    </footer>
  );
}
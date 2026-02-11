"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-zinc-200 bg-[#f8f7f3]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        
        {/* LOGO - Kiri */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-serif text-2xl font-black tracking-tighter text-[#800020] md:text-3xl">
            VOXLORE<span className="text-[#181717]">.</span>
          </h1>
        </Link>

        {/* MENU TENGAH - Responsive Scrollable di Mobile */}
        <div className="mx-4 flex flex-1 items-center justify-center overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 font-sans text-[9px] font-black uppercase tracking-[0.2em] text-[#181717] md:gap-8 md:text-[10px]">
            <Link href="/latest" className="hover:text-[#800020] whitespace-nowrap">Latest</Link>
            <Link href="/topics" className="hover:text-[#800020] whitespace-nowrap">Topics</Link>
            <Link href="/feeds" className="hover:text-[#800020] whitespace-nowrap">Feeds</Link>
            <Link href="/search" className="hover:text-[#800020] whitespace-nowrap">Search</Link>
            <Link href="/about" className="hidden sm:block hover:text-[#800020] whitespace-nowrap">About</Link>
          </div>
        </div>

        {/* SUBSCRIBE BUTTON - Kanan */}
        <div className="flex-shrink-0">
          <button className="bg-[#181717] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-white hover:bg-[#800020] transition-colors md:px-5 md:py-2.5 md:text-[10px]">
            Subscribe
          </button>
        </div>

      </div>
    </nav>
  );
}
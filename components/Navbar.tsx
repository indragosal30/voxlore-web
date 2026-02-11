"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-black bg-[#f2f0ea] z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
        
        {/* LOGO - Kita paksa tetep di depan */}
        <div className="relative z-[60]">
          <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter text-black">
            VOXLORE.
          </Link>
        </div>

        {/* RIGHT SIDE (Menu Desktop & Buttons) */}
        <div className="flex items-center gap-2 md:gap-8">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest">
            <Link href="/topics" className="hover:opacity-60 transition">TOPICS</Link>
            <Link href="/feeds" className="hover:opacity-60 transition">FEEDS</Link>
            <Link href="/search" className="hover:opacity-60 transition">SEARCH</Link>
          </div>

          {/* SUBSCRIBE - Kita kecilin dikit di HP biar muat */}
          <button className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest z-[60]">
            Subscribe
          </button>

          {/* HAMBURGER / CLOSE BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN - Sekarang dia beneran di bawah navbar */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-[#f2f0ea] transition-all duration-500 ease-in-out z-[55] shadow-xl ${isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-bold tracking-[0.3em] uppercase">
          <Link href="/topics" onClick={() => setIsOpen(false)}>TOPICS</Link>
          <Link href="/feeds" onClick={() => setIsOpen(false)}>FEEDS</Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>SEARCH</Link>
        </div>
      </div>
    </nav>
  );
}
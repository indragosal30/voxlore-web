"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-100 w-full border-b border-zinc-200 bg-[#d7d5c6]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <h1 className="font-serif text-2xl font-black tracking-tighter text-[#800020] md:text-3xl">
            VOXLORE<span className="text-[#800020]">.</span>
          </h1>
        </Link>

        <div className="mx-4 hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-8 font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#181717]">
            <Link href="/latest" className="hover:text-[#800020] whitespace-nowrap">Latest</Link>
            <Link href="/topics" className="hover:text-[#800020] whitespace-nowrap">Topics</Link>
            <Link href="/feeds" className="hover:text-[#800020] whitespace-nowrap">Feeds</Link>
            <Link href="/search" className="hover:text-[#800020] whitespace-nowrap">Search</Link>
            <Link href="/about" className="hover:text-[#800020] whitespace-nowrap">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-[#181717] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-white hover:bg-[#800020] transition-colors md:px-5 md:py-2.5 md:text-[10px]">
            Subscribe
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 md:hidden p-1">
            <span className={`block w-5 h-0.5 bg-[#181717] transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[#181717] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-[#181717] transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#f8f7f3] border-b border-zinc-200 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4 p-6 font-sans text-[11px] font-black uppercase tracking-[0.2em] text-[#181717]">
          <Link href="/latest" onClick={() => setIsOpen(false)}>Latest</Link>
          <Link href="/topics" onClick={() => setIsOpen(false)}>Topics</Link>
          <Link href="/feeds" onClick={() => setIsOpen(false)}>Feeds</Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>Search</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
  );
}
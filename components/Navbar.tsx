"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-black bg-[#f2f0ea] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter">
              VOXLORE.
            </Link>
          </div>

          {/* DESKTOP MENU (Muncul di Laptop) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest">
            <Link href="/topics" className="hover:opacity-60 transition">TOPICS</Link>
            <Link href="/feeds" className="hover:opacity-60 transition">FEEDS</Link>
            <Link href="/search" className="hover:opacity-60 transition">SEARCH</Link>
          </div>

          {/* RIGHT SIDE (Hamburger & Subscribe) */}
          <div className="flex items-center gap-4">
            {/* SUBSCRIBE BUTTON */}
            <button className="bg-black text-white px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
              Subscribe
            </button>

            {/* HAMBURGER BUTTON (Muncul cuma di HP) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 focus:outline-none p-2"
            >
              <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#f2f0ea] border-b border-black transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-4 p-6 text-sm font-bold tracking-[0.2em]">
          <Link href="/topics" onClick={() => setIsOpen(false)}>TOPICS</Link>
          <Link href="/feeds" onClick={() => setIsOpen(false)}>FEEDS</Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>SEARCH</Link>
        </div>
      </div>
    </nav>
  );
}
"use client";
import { useState } from "react";
import { ARTICLES } from "@/lib/data";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = ARTICLES.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <span className="text-[#800020] text-[10px] font-black uppercase tracking-[0.5em]">System Discovery</span>
          <input
            type="text"
            placeholder="Search the lore..."
            className="mt-4 w-full bg-transparent border-b-2 border-zinc-300 py-4 font-serif text-5xl focus:outline-none focus:border-[#800020] transition-all placeholder:text-zinc-200 text-[#181717]"
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </header>

        <div className="space-y-10">
          {query !== "" ? (
            results.length > 0 ? (
              results.map((article) => (
                <Link key={article.id} href={`/articles/${article.category}/${article.slug}`} className="group block border-b border-zinc-100 pb-8">
                  <span className="text-[#800020] text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                  <h2 className="mt-2 font-serif text-3xl font-bold group-hover:italic transition-all text-zinc-800">
                    {article.title}
                  </h2>
                </Link>
              ))
            ) : (
              <p className="font-serif text-xl italic text-zinc-400 text-center py-20">"Records not found in our intelligence..."</p>
            )
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-xl italic text-zinc-300">Enter keywords to begin investigation.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
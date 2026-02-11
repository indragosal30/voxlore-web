"use client";
import { useEffect, useState } from "react";

export default function ReadingBar() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const ScrollTop = el.scrollTop || document.body.scrollTop;
    const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div className="fixed top-[64px] left-0 z-50 h-[2px] w-full bg-transparent">
      <div 
        className="h-full bg-[#800020] transition-all duration-150" 
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
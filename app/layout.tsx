import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingBar from "@/components/ReadingBar";

// Setup Font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "VOXLORE | High-End Noir Journalism",
  description: "Modern, Vintage, and Masculine Media Concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#f8f7f3] antialiased`}>
        <Navbar />
        <ReadingBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
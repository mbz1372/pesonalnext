"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
      <nav className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">MB Zolfaghari</Link>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/resume">Resume</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/books">Books</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/contact">Contact</Link>
          <button
            aria-label="Toggle theme"
            onClick={()=>setTheme(isDark ? "light":"dark")}
            className="p-1 rounded-lg border"
          >
            {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
          </button>
        </div>
      </nav>
    </header>
  );
}

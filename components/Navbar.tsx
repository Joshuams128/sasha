"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-emerald-400">SS</span>
          <span className="text-slate-100 ml-1">Learning Design</span>
        </Link>

        <button
          className="md:hidden rounded border border-slate-700 px-2 py-1 text-sm"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        <ul className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="flex flex-col px-4 py-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-slate-200 hover:text-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "EVENTS", href: "/events" },
    { name: "EXHIBIT", href: "/exhibit" },
    { name: "VISIT", href: "/visit" },
    { name: "PARTNERS", href: "/partners" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#03142A] text-white border-b border-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* Official Logo Image */}
            <div className="w-12 h-12 relative flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-white border border-[#EAA500]/40 group-hover:border-[#EAA500] transition-colors shadow-sm">
              <img
                src="/logo.jpeg"
                alt="Tobgyel Global Expos Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-widest text-white font-sans uppercase leading-none">
                Tobgyel
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase leading-tight mt-0.5">
                Global Expos
              </span>
              <span className="text-[10px] text-[#EAA500] tracking-wider font-semibold leading-tight hidden sm:inline-block">
                Connect • Collaborate • Grow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-bold tracking-widest transition-colors py-2 relative ${isActive
                      ? "text-[#EAA500] border-b-2 border-[#EAA500]"
                      : "text-white hover:text-[#EAA500]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Vertical Separator + Search Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block h-6 w-[1px] bg-slate-700/60 mx-1" />

            <button
              aria-label="Search"
              className="p-2 text-white hover:text-[#EAA500] transition-colors"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-white hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EAA500]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03142A] border-t border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-bold tracking-widest ${isActive
                    ? "bg-[#0a2347] text-[#EAA500] border-l-4 border-[#EAA500]"
                    : "text-white hover:bg-slate-800"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}


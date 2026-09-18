"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f6f1]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-5 lg:h-[74px] lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="3VIEW Home"
        >
          <Image
            src="/logo.png"
            alt="3VIEW"
            width={60}
            height={25}
            priority
            className="h-auto w-[54px] object-contain sm:w-[60px] lg:w-[65px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
          <Link
            href="/"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/80 sm:flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-black/10 bg-[#f8f6f1] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-base transition-opacity hover:opacity-50"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-base transition-opacity hover:opacity-50"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-base transition-opacity hover:opacity-50"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition-all hover:bg-black/80"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

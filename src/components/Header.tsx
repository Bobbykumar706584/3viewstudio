import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f6f1]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="3VIEW Home">
          <Image
            src="/logo.png"
            alt="3VIEW"
            width={60}
            height={25}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/" className="transition-opacity hover:opacity-50">
            Home
          </Link>

          <Link href="/about" className="transition-opacity hover:opacity-50">
            About
          </Link>

          <Link href="/contact" className="transition-opacity hover:opacity-50">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm text-white transition-transform hover:-translate-y-0.5 sm:flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            className="rounded-full p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}

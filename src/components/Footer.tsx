import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151412] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="text-xl font-semibold tracking-[0.28em]">
            3VIEW STUDIO
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
            A visualization partner connecting customers with professional 3D
            artists, designers and visualization specialists.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Navigation
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Legal
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} 3VIEW. All rights reserved.
      </div>
    </footer>
  );
}

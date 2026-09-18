import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="bg-[#e9e4d9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            About 3VIEW
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.04em] sm:text-7xl">
            Making 3D visualization easier to access.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#686157]">
            3VIEW is a connection platform for people who need high-quality
            visualizations and the professionals who create them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
              Our role
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight">
              We make the connection simple.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#666057]">
            <p>
              Customers often know what they want to see but may not know
              which visualization specialist is right for the job. On the
              other side, talented 3D professionals need access to clear,
              relevant opportunities.
            </p>
            <p>
              3VIEW sits between these two sides. We aim to understand the
              requirement, help create a clear starting point and connect the
              customer with appropriate visualization expertise.
            </p>
            <p>
              As 3VIEW grows, this connection can become a more structured
              experience for projects, communication, quality and delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#171613] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c0a271]">
            Our principles
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Clarity", "A project should begin with a clear understanding of what needs to be visualized."],
              ["Connection", "The right visualization skill should be easier to find and approach."],
              ["Quality", "The visual result should communicate the idea with care and purpose."],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-white/10 p-7">
                <span className="text-xs text-white/30">0{index + 1}</span>
                <h3 className="mt-12 text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="rounded-[32px] bg-[#eee9df] p-8 sm:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            Looking ahead
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
            Building a trusted bridge between customers and visualization
            professionals.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Architecture & interiors",
              "Product visualization",
              "Commercial spaces",
              "3D walkthroughs & immersive visuals",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm">
                <Check size={18} className="shrink-0 text-[#94794e]" />
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm text-white"
          >
            Talk to 3VIEW <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

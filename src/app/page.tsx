import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MoveUpRight } from "lucide-react";

const work = [
  {
    title: "Residential",
    description: "Interior & living spaces",
    image: "/portfolio/living.jpg",
  },
  {
    title: "Hospitality",
    description: "Café & restaurant spaces",
    image: "/portfolio/cafe.jpg",
  },
  {
    title: "Retail",
    description: "Product & showroom visuals",
    image: "/portfolio/jewellery.jpg",
  },
  {
    title: "Workplace",
    description: "Office & corporate spaces",
    image: "/portfolio/office.jpg",
  },
  {
    title: "Healthcare",
    description: "Clinic & patient environments",
    image: "/portfolio/healthcare.jpg",
  },
  {
    title: "Architecture",
    description: "Exterior & facade visuals",
    image: "/portfolio/exterior.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-[#e9e4d9]">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#94794e]">
              3D Visualization
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-[84px]">
              See the space.
              <br />
              <span className="font-serif italic">Before it exists.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#696258] sm:text-lg sm:leading-8">
              3VIEW connects customers with professional 3D visualization
              specialists to turn ideas, drawings and spaces into compelling
              visual experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm text-white"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-black/20 px-6 py-3.5 text-sm"
              >
                Discover 3VIEW
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-xs uppercase tracking-[0.15em] text-[#7b7368]">
              <span>Interiors</span>
              <span>Architecture</span>
              <span>Commercial</span>
            </div>
          </div>

          <div className="relative h-[510px] overflow-hidden rounded-[32px] sm:h-[620px] lg:h-[690px]">
            <Image
              src="/portfolio/hero.jpg"
              alt="3D interior visualization"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-black/60 p-5 text-white backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                The 3VIEW approach
              </p>
              <p className="mt-2 max-w-md text-base leading-6">
                One clear point of contact between the customer and the
                visualization professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
              What is 3VIEW?
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-medium tracking-tight sm:text-5xl">
              A simple bridge between an idea and its visual reality.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#5f5a52]">
              Finding the right visualization professional can be difficult.
              Understanding what to ask for can be even harder. 3VIEW is built
              to make that connection simpler.
            </p>
            <p className="mt-5 text-base leading-7 text-[#756f65]">
              We help customers communicate their requirements and connect them
              with suitable 3D visualization professionals. The goal is
              straightforward: make high-quality visualization easier to access,
              understand and arrange.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              Learn more about 3VIEW <MoveUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#171613] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c0a271]">
                What we connect
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
                Visualize spaces, products and ideas.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              From a single interior image to a complete architectural
              presentation, 3VIEW helps point your project toward the right
              visualization expertise.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Interior", "Rooms, homes and design concepts"],
              ["02", "Exterior", "Architecture, elevations and facades"],
              [
                "03",
                "Commercial",
                "Retail, hospitality, healthcare and offices",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-[#171613] p-7">
                <span className="text-xs text-white/30">{number}</span>
                <h3 className="mt-12 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              A visual portfolio.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#756f65]">
            A selection of visual categories represented in your 3VIEW Studio
            material.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} 3D visualization`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#756f65]">
                    {item.description}
                  </p>
                </div>
                <ArrowRight size={18} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#eee9df]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
                Why 3VIEW
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                A clearer way to start your visualization project.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "One simple place to explain your requirements.",
                "Connection with relevant visualization expertise.",
                "A professional and organized project experience.",
                "Visual work that helps you communicate your idea clearly.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-black/10 pb-5 text-base"
                >
                  <Check size={19} className="mt-0.5 shrink-0 text-[#94794e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
          Start with a conversation
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
          Have a space or idea to visualize?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[#756f65]">
          Tell us what you are working on. We&apos;ll help you take the next
          step.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm text-white"
        >
          Contact 3VIEW <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

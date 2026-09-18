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
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-[#e9e4d9]">
        <div
          className="
            mx-auto grid w-full max-w-7xl
            gap-10
            px-5 py-12
            sm:px-6 sm:py-16
            md:gap-12 md:py-20
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:px-8 lg:py-20
          "
        >
          {/* Hero Content */}
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#94794e] sm:text-xs sm:tracking-[0.25em]">
              3D Visualization
            </p>

            <h1
              className="
                mt-5
                max-w-2xl
                text-[46px]
                font-medium
                leading-[0.96]
                tracking-[-0.045em]
                sm:mt-6
                sm:text-6xl
                md:text-7xl
                lg:text-[84px]
                xl:text-[88px]
              "
            >
              See the space.
              <br />
              <span className="font-serif italic">Before it exists.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-[15px]
                leading-7
                text-[#696258]
                sm:mt-7
                sm:text-base
                md:text-lg
                md:leading-8
              "
            >
              3VIEW connects customers with professional 3D visualization
              specialists to turn ideas, drawings and spaces into compelling
              visual experiences.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                xs:flex-row
                sm:mt-9
                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-black
                  px-6
                  py-3.5
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-black/80
                  sm:w-auto
                "
              >
                Start a conversation
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/about"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/20
                  px-6
                  py-3.5
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  sm:w-auto
                "
              >
                Discover 3VIEW
              </Link>
            </div>

            {/* Categories */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-5
                gap-y-3
                border-t
                border-black/10
                pt-5
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-[#7b7368]
                sm:mt-12
                sm:gap-x-8
                sm:pt-6
                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              <span>Interiors</span>
              <span>Architecture</span>
              <span>Commercial</span>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="
              relative
              h-[430px]
              overflow-hidden
              rounded-[24px]
              sm:h-[520px]
              sm:rounded-[28px]
              md:h-[600px]
              lg:h-[690px]
              lg:rounded-[32px]
            "
          >
            <Image
              src="/portfolio/hero.jpg"
              alt="3D interior visualization"
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                55vw
              "
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div
              className="
                absolute
                inset-x-3
                bottom-3
                rounded-xl
                bg-black/60
                p-4
                text-white
                backdrop-blur-md
                sm:inset-x-5
                sm:bottom-5
                sm:rounded-2xl
                sm:p-5
              "
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]">
                The 3VIEW approach
              </p>

              <p className="mt-2 max-w-md text-sm leading-5 sm:text-base sm:leading-6">
                One clear point of contact between the customer and the
                visualization professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS 3VIEW
      ====================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
        <div
          className="
            grid
            gap-8
            md:gap-12
            lg:grid-cols-[0.75fr_1.25fr]
          "
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
              What is 3VIEW?
            </p>

            <h2
              className="
                mt-3
                max-w-md
                text-3xl
                font-medium
                leading-tight
                tracking-tight
                sm:mt-4
                sm:text-4xl
                md:text-5xl
              "
            >
              A simple bridge between an idea and its visual reality.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-[#5f5a52] sm:text-lg sm:leading-8">
              Finding the right visualization professional can be difficult.
              Understanding what to ask for can be even harder. 3VIEW is built
              to make that connection simpler.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#756f65] sm:mt-5 sm:text-base sm:leading-7">
              We help customers communicate their requirements and connect them
              with suitable 3D visualization professionals. The goal is
              straightforward: make high-quality visualization easier to access,
              understand and arrange.
            </p>

            <Link
              href="/about"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                underline
                underline-offset-4
                transition-opacity
                hover:opacity-50
                sm:mt-7
              "
            >
              Learn more about 3VIEW
              <MoveUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE CONNECT
      ====================================================== */}
      <section className="bg-[#171613] text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
              md:gap-8
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c0a271] sm:text-xs sm:tracking-[0.22em]">
                What we connect
              </p>

              <h2
                className="
                  mt-3
                  max-w-2xl
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Visualize spaces, products and ideas.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              From a single interior image to a complete architectural
              presentation, 3VIEW helps point your project toward the right
              visualization expertise.
            </p>
          </div>

          {/* Categories */}
          <div
            className="
              mt-10
              grid
              overflow-hidden
              rounded-2xl
              bg-white/10
              sm:mt-14
              sm:rounded-3xl
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {[
              ["01", "Interior", "Rooms, homes and design concepts"],
              ["02", "Exterior", "Architecture, elevations and facades"],
              [
                "03",
                "Commercial",
                "Retail, hospitality, healthcare and offices",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="
                  bg-[#171613]
                  p-6
                  sm:p-7
                  md:p-8
                "
              >
                <span className="text-xs text-white/30">{number}</span>

                <h3 className="mt-10 text-lg sm:mt-12 sm:text-xl">{title}</h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/45 sm:mt-3">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ====================================================== */}
      <section
        id="portfolio"
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:py-24
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-end
            md:justify-between
            md:gap-6
          "
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
              Selected work
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              A visual portfolio.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#756f65]">
            A selection of visual categories represented in your 3VIEW Studio
            material.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          className="
            mt-9
            grid
            gap-4
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {work.map((item) => (
            <article
              key={item.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                sm:rounded-3xl
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} 3D visualization`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-4
                  sm:p-5
                "
              >
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg">{item.title}</h3>

                  <p className="mt-1 text-xs leading-5 text-[#756f65] sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY 3VIEW
      ====================================================== */}
      <section className="border-y border-black/10 bg-[#eee9df]">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-5
            py-16
            sm:px-6
            sm:py-20
            md:py-24
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-10
              md:gap-12
              lg:grid-cols-2
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
                Why 3VIEW
              </p>

              <h2
                className="
                  mt-3
                  max-w-xl
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                A clearer way to start your visualization project.
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {[
                "One simple place to explain your requirements.",
                "Connection with relevant visualization expertise.",
                "A professional and organized project experience.",
                "Visual work that helps you communicate your idea clearly.",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    gap-3
                    border-b
                    border-black/10
                    pb-4
                    text-sm
                    sm:gap-4
                    sm:pb-5
                    sm:text-base
                  "
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-[#94794e]" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-20
          text-center
          sm:px-6
          sm:py-24
          md:py-28
          lg:px-8
        "
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
          Start with a conversation
        </p>

        <h2
          className="
            mx-auto
            mt-3
            max-w-3xl
            text-3xl
            font-medium
            leading-tight
            tracking-tight
            sm:mt-4
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Have a space or idea to visualize?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#756f65] sm:mt-5 sm:text-base">
          Tell us what you are working on. We&apos;ll help you take the next
          step.
        </p>

        <Link
          href="/contact"
          className="
            mt-7
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-black
            px-7
            py-3.5
            text-sm
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-black/80
            sm:mt-8
            sm:w-auto
            sm:py-4
          "
        >
          Contact 3VIEW
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

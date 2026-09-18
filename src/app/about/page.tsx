import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function About() {
  return (
    <main>
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
              Customers often know what they want to see but may not know which
              visualization specialist is right for the job. On the other side,
              talented 3D professionals need access to clear, relevant
              opportunities.
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
              [
                "Clarity",
                "A project should begin with a clear understanding of what needs to be visualized.",
              ],
              [
                "Connection",
                "The right visualization skill should be easier to find and approach.",
              ],
              [
                "Quality",
                "The visual result should communicate the idea with care and purpose.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 p-7"
              >
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
    </main>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Check } from "lucide-react";

// const principles = [
//   {
//     title: "Clarity",
//     text: "A project should begin with a clear understanding of what needs to be visualized.",
//   },
//   {
//     title: "Connection",
//     text: "The right visualization skill should be easier to find and approach.",
//   },
//   {
//     title: "Quality",
//     text: "The visual result should communicate the idea with care and purpose.",
//   },
// ];

// const services = [
//   "Architecture & interiors",
//   "Product visualization",
//   "Commercial spaces",
//   "3D walkthroughs & immersive visuals",
// ];

// const partners = [
//   {
//     name: "Partner One",
//     designation: "Partner",
//     image: "/partners/partner-1.jpg",
//   },
//   {
//     name: "Partner Two",
//     designation: "Partner",
//     image: "/partners/partner-2.jpg",
//   },
// ];

// export default function About() {
//   return (
//     <main className="overflow-hidden">
//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="bg-[#e9e4d9]">
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-16
//             sm:px-6
//             sm:py-20
//             md:py-24
//             lg:px-8
//             lg:py-32
//           "
//         >
//           <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
//             About 3VIEW
//           </p>

//           <h1
//             className="
//               mt-4
//               max-w-5xl
//               text-[46px]
//               font-medium
//               leading-[0.96]
//               tracking-[-0.045em]
//               sm:text-6xl
//               md:text-7xl
//               lg:text-[82px]
//             "
//           >
//             Making 3D visualization easier to access.
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-2xl
//               text-base
//               leading-7
//               text-[#686157]
//               sm:mt-7
//               sm:text-lg
//               sm:leading-8
//             "
//           >
//             3VIEW is a connection platform for people who need high-quality
//             visualizations and the professionals who create them.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           OUR ROLE
//       ====================================================== */}
//       <section>
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-16
//             sm:px-6
//             sm:py-20
//             md:py-24
//             lg:px-8
//           "
//         >
//           <div
//             className="
//               grid
//               gap-8
//               md:gap-12
//               lg:grid-cols-2
//             "
//           >
//             <div>
//               <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
//                 Our role
//               </p>

//               <h2
//                 className="
//                   mt-3
//                   max-w-lg
//                   text-3xl
//                   font-medium
//                   leading-tight
//                   tracking-tight
//                   sm:text-4xl
//                   md:text-5xl
//                 "
//               >
//                 We make the connection simple.
//               </h2>
//             </div>

//             <div
//               className="
//                 space-y-4
//                 text-sm
//                 leading-7
//                 text-[#666057]
//                 sm:space-y-5
//                 sm:text-base
//                 sm:leading-8
//               "
//             >
//               <p>
//                 Customers often know what they want to see but may not know
//                 which visualization specialist is right for the job. On the
//                 other side, talented 3D professionals need access to clear,
//                 relevant opportunities.
//               </p>

//               <p>
//                 3VIEW sits between these two sides. We aim to understand the
//                 requirement, help create a clear starting point and connect the
//                 customer with appropriate visualization expertise.
//               </p>

//               <p>
//                 As 3VIEW grows, this connection can become a more structured
//                 experience for projects, communication, quality and delivery.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PARTNERS
//       ====================================================== */}
//       <section className="bg-[#f5f1e9]">
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-16
//             sm:px-6
//             sm:py-20
//             md:py-24
//             lg:px-8
//           "
//         >
//           {/* Heading */}
//           <div className="max-w-2xl">
//             <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
//               Meet the team
//             </p>

//             <h2
//               className="
//                 mt-3
//                 text-3xl
//                 font-medium
//                 tracking-tight
//                 sm:text-4xl
//                 md:text-5xl
//               "
//             >
//               The people behind 3VIEW.
//             </h2>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-[#756f65] sm:text-base sm:leading-7">
//               3VIEW is built with a focus on making the visualization process
//               clearer, more accessible and easier to navigate.
//             </p>
//           </div>

//           {/* Partners */}
//           <div
//             className="
//               mt-10
//               grid
//               gap-6
//               sm:mt-12
//               sm:grid-cols-2
//               sm:gap-7
//             "
//           >
//             {partners.map((partner) => (
//               <article
//                 key={partner.name}
//                 className="
//                   group
//                   overflow-hidden
//                   rounded-3xl
//                   bg-white
//                 "
//               >
//                 {/* Photo */}
//                 <div className="relative aspect-[4/4.2] overflow-hidden">
//                   <Image
//                     src={partner.image}
//                     alt={`${partner.name} - ${partner.designation}`}
//                     fill
//                     sizes="
//                       (max-width: 640px) 100vw,
//                       50vw
//                     "
//                     className="
//                       object-cover
//                       transition-transform
//                       duration-700
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* Details */}
//                 <div className="p-5 sm:p-6">
//                   <h3 className="text-xl font-medium sm:text-2xl">
//                     {partner.name}
//                   </h3>

//                   <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#94794e]">
//                     {partner.designation}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PRINCIPLES
//       ====================================================== */}
//       <section className="bg-[#171613] text-white">
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-16
//             sm:px-6
//             sm:py-20
//             md:py-24
//             lg:px-8
//           "
//         >
//           <p className="text-[10px] uppercase tracking-[0.2em] text-[#c0a271] sm:text-xs sm:tracking-[0.22em]">
//             Our principles
//           </p>

//           <div
//             className="
//               mt-8
//               grid
//               gap-4
//               sm:mt-10
//               md:grid-cols-3
//               md:gap-5
//             "
//           >
//             {principles.map((item, index) => (
//               <div
//                 key={item.title}
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10
//                   p-6
//                   sm:rounded-3xl
//                   sm:p-7
//                   md:p-8
//                 "
//               >
//                 <span className="text-xs text-white/30">0{index + 1}</span>

//                 <h3 className="mt-9 text-xl sm:mt-12 sm:text-2xl">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/50 sm:mt-4">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOOKING AHEAD
//       ====================================================== */}
//       <section>
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-16
//             sm:px-6
//             sm:py-20
//             md:py-24
//             lg:px-8
//           "
//         >
//           <div
//             className="
//               rounded-3xl
//               bg-[#eee9df]
//               p-6
//               sm:rounded-[32px]
//               sm:p-10
//               md:p-12
//               lg:p-16
//             "
//           >
//             <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
//               Looking ahead
//             </p>

//             <h2
//               className="
//                 mt-3
//                 max-w-3xl
//                 text-3xl
//                 font-medium
//                 leading-tight
//                 tracking-tight
//                 sm:mt-4
//                 sm:text-4xl
//                 md:text-5xl
//               "
//             >
//               Building a trusted bridge between customers and visualization
//               professionals.
//             </h2>

//             <div
//               className="
//                 mt-7
//                 grid
//                 gap-4
//                 sm:mt-8
//                 sm:grid-cols-2
//                 sm:gap-5
//               "
//             >
//               {services.map((item) => (
//                 <div
//                   key={item}
//                   className="
//                     flex
//                     items-start
//                     gap-3
//                     text-sm
//                     leading-6
//                   "
//                 >
//                   <Check size={18} className="mt-0.5 shrink-0 text-[#94794e]" />

//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/contact"
//               className="
//                 mt-8
//                 inline-flex
//                 w-full
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-full
//                 bg-black
//                 px-6
//                 py-3.5
//                 text-sm
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-black/80
//                 sm:mt-9
//                 sm:w-auto
//               "
//             >
//               Talk to 3VIEW
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="bg-[#e9e4d9]">
//         <div
//           className="
//             mx-auto
//             w-full
//             max-w-7xl
//             px-5
//             py-20
//             text-center
//             sm:px-6
//             sm:py-24
//             md:py-28
//             lg:px-8
//           "
//         >
//           <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
//             Let&apos;s create something visual
//           </p>

//           <h2
//             className="
//               mx-auto
//               mt-3
//               max-w-3xl
//               text-3xl
//               font-medium
//               leading-tight
//               tracking-tight
//               sm:text-4xl
//               md:text-5xl
//               lg:text-6xl
//             "
//           >
//             Have a project in mind?
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#756f65] sm:text-base">
//             Tell us what you are working on and start a conversation with 3VIEW.
//           </p>

//           <Link
//             href="/contact"
//             className="
//               mt-7
//               inline-flex
//               w-full
//               items-center
//               justify-center
//               gap-2
//               rounded-full
//               bg-black
//               px-7
//               py-3.5
//               text-sm
//               text-white
//               transition-all
//               duration-300
//               hover:-translate-y-0.5
//               hover:bg-black/80
//               sm:mt-8
//               sm:w-auto
//               sm:py-4
//             "
//           >
//             Contact 3VIEW
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

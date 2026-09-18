import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-[#e9e4d9]">
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
            lg:py-28
          "
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
            Contact
          </p>

          <h1
            className="
              mt-4
              max-w-4xl
              text-[44px]
              font-medium
              leading-[0.98]
              tracking-[-0.04em]
              sm:mt-5
              sm:text-6xl
              md:text-7xl
              lg:text-[76px]
            "
          >
            Let&apos;s talk about what you want to visualize.
          </h1>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[#686157]
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Have a project, a question or an idea? Send us a message and the
            3VIEW team will get back to you.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          gap-10
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:py-24
          lg:grid-cols-[0.65fr_1.35fr]
          lg:gap-16
          lg:px-8
          lg:py-24
        "
      >
        {/* =================================================
            CONTACT INFORMATION
        ================================================== */}
        <aside className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#94794e] sm:text-xs sm:tracking-[0.22em]">
            Get in touch
          </p>

          <div
            className="
              mt-6
              grid
              gap-5
              sm:mt-7
              sm:grid-cols-2
              lg:grid-cols-1
              lg:gap-7
            "
          >
            {/* Email */}
            <div
              className="
                rounded-2xl
                border
                border-black/10
                p-5
                sm:rounded-3xl
                sm:p-6
                lg:border-0
                lg:p-0
              "
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8a8379] sm:text-xs">
                Email
              </p>

              <a
                href="mailto:info@3viewstudio.in"
                className="
                  mt-2
                  block
                  break-all
                  text-sm
                  transition-opacity
                  hover:opacity-50
                  sm:text-base
                "
              >
                info@3viewstudio.in
              </a>
            </div>

            {/* Phone */}
            <div
              className="
                rounded-2xl
                border
                border-black/10
                p-5
                sm:rounded-3xl
                sm:p-6
                lg:border-0
                lg:p-0
              "
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8a8379] sm:text-xs">
                Phone
              </p>

              <a
                href="tel:+919318351934"
                className="
                  mt-2
                  block
                  text-sm
                  transition-opacity
                  hover:opacity-50
                  sm:text-base
                "
              >
                +91 9318351934
              </a>
            </div>

            {/* Enquiries */}
            <div
              className="
                rounded-2xl
                border
                border-black/10
                p-5
                sm:rounded-3xl
                sm:p-6
                lg:border-0
                lg:p-0
              "
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8a8379] sm:text-xs">
                Enquiries
              </p>

              <p className="mt-2 max-w-xs text-sm leading-6 text-[#756f65] sm:text-base sm:leading-7">
                Projects, visualization requirements, partnerships and general
                enquiries.
              </p>
            </div>
          </div>
        </aside>

        {/* =================================================
            CONTACT FORM
        ================================================== */}
        <div className="min-w-0">
          <div
            className="
              rounded-3xl
              border
              border-black/10
              bg-[#f8f6f1]
              p-5
              sm:p-7
              md:p-8
              lg:p-10
            "
          >
            <ContactForm />
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#171613] text-white">
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
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c0a271] sm:text-xs sm:tracking-[0.22em]">
                3VIEW
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
                Have something you&apos;d like to bring to life?
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              Tell us about your project and let&apos;s explore how 3D
              visualization can help communicate your idea.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

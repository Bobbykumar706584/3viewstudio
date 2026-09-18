import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main>
      <section className="bg-[#e9e4d9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            Contact
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl">
            Let&apos;s talk about what you want to visualize.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#686157]">
            Have a project, a question or an idea? Send us a message and the
            3VIEW team will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.65fr_1.35fr] lg:px-8 lg:py-24">
        <aside>
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            Get in touch
          </p>
          <div className="mt-7 space-y-7">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8379]">
                Email
              </p>
              <p className="mt-2 text-sm">info@3viewstudio.in</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8379]">
                Phone
              </p>
              <p className="mt-2 text-sm">+91 9318351934</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8379]">
                Enquiries
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#756f65]">
                Projects, visualization requirements, partnerships and general
                enquiries.
              </p>
            </div>
          </div>
        </aside>

        <ContactForm />
      </section>
    </main>
  );
}

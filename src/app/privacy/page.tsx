export default function Privacy() {
  return (
    <main>
      <section className="bg-[#e9e4d9]">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            Legal
          </p>
          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-[#756f65]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="space-y-10 text-sm leading-7 text-[#5f5a52]">
          <Section title="1. Information we collect">
            When you contact 3VIEW through the website, we may collect
            information such as your name, email address, phone number, subject
            and message. We collect this information when you voluntarily
            submit it through our contact form.
          </Section>

          <Section title="2. How we use information">
            We use submitted information to respond to enquiries, understand
            project requirements, communicate with you and improve our
            services. We do not use contact information for unrelated purposes
            unless permitted by applicable law or with appropriate consent.
          </Section>

          <Section title="3. Firebase">
            The website uses Firebase services to store and process contact
            form submissions. Firebase is a service provided by Google. Your
            information may be processed according to the applicable Firebase
            and Google privacy terms.
          </Section>

          <Section title="4. Data security">
            We take reasonable measures to protect information submitted to the
            website. However, no internet transmission or electronic storage
            system can be guaranteed to be completely secure.
          </Section>

          <Section title="5. Data retention">
            We retain enquiry information for as long as reasonably necessary
            to respond to the enquiry, maintain business records and meet
            applicable legal or operational requirements.
          </Section>

          <Section title="6. Third-party links">
            The website may eventually contain links to third-party websites.
            3VIEW is not responsible for the privacy practices or content of
            external websites.
          </Section>

          <Section title="7. Your rights">
            Depending on applicable law, you may have rights relating to
            access, correction or deletion of personal information. Contact us
            if you would like to make a privacy-related request.
          </Section>

          <Section title="8. Updates">
            We may update this policy as our website, services or legal
            obligations change. The updated policy will be published on this
            page with a revised date.
          </Section>

          <Section title="9. Contact">
            Privacy questions can be sent to info.3view@gmail.com.
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-medium text-[#151412]">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}

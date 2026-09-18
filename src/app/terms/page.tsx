export default function Terms() {
  return (
    <main>
      <section className="bg-[#e9e4d9]">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#94794e]">
            Legal
          </p>
          <h1 className="mt-4 text-5xl font-medium tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 text-sm text-[#756f65]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="space-y-10 text-sm leading-7 text-[#5f5a52]">
          <Section title="1. About these terms">
            These Terms &amp; Conditions govern use of the 3VIEW website and
            communication with 3VIEW. By using this website or submitting an
            enquiry, you agree to use the website lawfully and responsibly.
          </Section>

          <Section title="2. 3VIEW's role">
            3VIEW provides a connection and coordination service between
            customers seeking visualization services and independent
            visualization professionals or studios. Unless expressly agreed in
            writing, 3VIEW does not represent that every project, provider or
            deliverable will be available.
          </Section>

          <Section title="3. Project enquiries">
            Information submitted through the website should be accurate and
            sufficiently detailed for 3VIEW to understand the enquiry.
            Submission of a contact form does not by itself create a contract
            for services.
          </Section>

          <Section title="4. Third-party providers">
            Where 3VIEW introduces or coordinates an independent service
            provider, the scope, pricing, timeline, revisions and deliverables
            may be governed by additional project-specific terms. Customers
            should review those terms before approving paid work.
          </Section>

          <Section title="5. Intellectual property">
            Website content, branding, text, graphics and original 3VIEW
            materials are protected by applicable intellectual-property laws.
            Project-specific ownership and usage rights should be agreed in the
            relevant project arrangement.
          </Section>

          <Section title="6. Website availability">
            We aim to keep the website available and accurate, but we do not
            guarantee uninterrupted availability or that every website feature
            will always operate without interruption.
          </Section>

          <Section title="7. Limitation">
            To the extent permitted by applicable law, 3VIEW will not be
            responsible for indirect losses arising solely from use of the
            informational website. Specific project responsibilities should be
            addressed in the applicable project agreement.
          </Section>

          <Section title="8. Changes">
            We may update these terms as the 3VIEW website and services
            develop. The updated version will be posted on this page with a
            revised date.
          </Section>

          <Section title="9. Contact">
            For questions about these terms, contact 3VIEW at
            info.3view@gmail.com.
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

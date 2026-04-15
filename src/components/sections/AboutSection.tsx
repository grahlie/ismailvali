import { FadeInSection } from "@/components/ui/fade-in-section";

export function AboutSection() {
  return (
    <FadeInSection>
      <section id="about" className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-16">About</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <p className="h3 leading-snug">
                Ismail Vali is the President of{" "}
                <a
                  href="https://gamingcompliance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  Gaming Compliance International (GCI)
                </a>{" "}
                and the inventor, founder and former CEO of{" "}
                <a
                  href="https://yieldsec.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  Yield Sec
                </a>
                {
                  ". He leads a global team across the operations of a technical intelligence platform that monitors, polices, enforces, and optimizes the marketplace across online gaming, streaming, crypto and consumer goods. "
                }
                From a career spanning online gaming, product development,
                marketing, and online operations, including multiple C-level
                roles across the betting and gaming industry, and with a BA and
                MA in Law from Brasenose College, Oxford University, Ismail
                created a unique solution to a long-standing online industry
                problem: the impact of crime on commerce, communities, and
                consumers. In his role as President, he drives GCI&apos;s
                AI-powered compliance and regulatory technology platform to
                deliver marketplace transparency, enhanced data capture,
                actionable intelligence, and transaction monitoring that helps
                governments, regulators, tribal nations, and operators move
                their online gaming marketplaces from chaos to control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

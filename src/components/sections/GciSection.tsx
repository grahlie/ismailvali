"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function GciSection() {
  return (
    <FadeInSection>
      <section className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-8">GCI</h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-8">
              <p className="h3 leading-snug">
                GCI is a proven leader in regulatory gaming compliance technology and
                consultancy, providing automated data capture, revenue auditing, operator
                compliance reporting, a single source AI-powered platform for player
                protection, advertising and media content monitoring, and black-market
                mitigation. The focus at GCI is on enhancing revenue optimization, insight,
                and market transparency for government regulators while establishing a
                robust compliance framework that benefits all stakeholders:
                jurisdictions, citizens, and operators.
              </p>
              <p className="h3 leading-snug">
                We provide strategic results within the rapidly expanding regulated iGaming
                and sports betting industry, offering an understanding that a robust,
                healthy, and regulated market with the proper guardrails in place will
                protect the public from harm while generating on-going value for licensed
                operators and maximum tax revenue for government and tribal jurisdictions.
              </p>
            </div>
            <div className="flex justify-start">
              <Button size="lg" className="button-text" asChild>
                <a
                  href="https://gamingcompliance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GamingCompliance.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

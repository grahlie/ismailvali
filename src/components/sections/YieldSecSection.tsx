"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function YieldSecSection() {
  return (
    <FadeInSection>
      <section className="px-6 py-24">
        <div className="w-full">
          <h2 className="section-title mb-8">Yield Sec</h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <p className="h3 leading-snug">
              Yield Sec™ is a technical intelligence platform for online marketplaces. Our data, analytics and advisory products and services allow our clients to decrease costs, mitigate risks, increase revenues or taxation receipts and achieve certainty. Talk to us today to know your total marketplace audience, activity and opportunity, and secure an optimized online future.
            </p>
            <div className="flex justify-start">
              <Button size="lg" className="button-text" asChild>
                <a href="https://www.yieldsec.com/" target="_blank" rel="noopener noreferrer">
                  Visit Yieldsec.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

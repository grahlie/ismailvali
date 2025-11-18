"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function YieldSecSection() {
  return (
    <FadeInSection>
      <section className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-8">Yield Sec</h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <p className="h3 leading-snug">
              Yield Sec™, short for yield security, is a technical intelligence platform monitoring all audience activity across gambling, streaming, crypto and consumer goods to see the total online marketplace - both legal and illegal. Yield Sec delivers analysis, actions and recommendations to ensure online stakeholders make the money they should - and are not stolen from by crime.
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

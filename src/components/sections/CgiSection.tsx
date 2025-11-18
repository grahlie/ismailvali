"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function CgiSection() {
  return (
    <FadeInSection>
      <section className="py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-8">CGI</h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <p className="h3 leading-snug">
            GCI is the proven leader in regulatory gaming compliance technology and consultancy, providing a single-source, AI-powered platform for player protection, advertising and media content monitoring, black-market mitigation, automated data capture, revenue auditing, and operator compliance reporting.
            GCI’s focus is on enhancing marketplace transparency and revenue optimization for regulators and licensed operators while establishing a robust compliance framework that protects jurisdictions, audiences, and the broader gaming ecosystem.
            </p>
            <div className="flex justify-start">
              <Button size="lg" className="button-text" asChild>
                <a href="https://gamingcompliance.com/" target="_blank" rel="noopener noreferrer">
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

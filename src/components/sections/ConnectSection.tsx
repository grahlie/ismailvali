"use client";

import { SocialLinks } from "@/components/SocialLinks";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function ConnectSection() {
  return (
    <FadeInSection>
      <section id="connect" className="connect-section py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-16">Connect</h2>
          <div className="max-w-4xl mx-auto text-center md:text-left min-w-0">
            <div className="space-y-6 mb-12 min-w-0">
              <p className="h2 tracking-tight break-all">ismail.vali@yieldsec.com</p>
              <p className="h2 tracking-tight break-all">ismail.vali@gamingcompliance.com</p>
            </div>

            <SocialLinks variant="dark" className="justify-center md:justify-start" />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

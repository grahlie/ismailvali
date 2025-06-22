"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function ConnectSection() {
  return (
    <FadeInSection>
      <section id="connect" className="connect-section px-6 py-24">
        <div className="w-full">
          <h2 className="section-title mb-16">Connect</h2>
          <div className="max-w-4xl mx-auto text-center md:text-left">
            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              <p className="h2 tracking-tight">ismail.vali@yieldsec.com</p>
              <p className="h2 tracking-tight">+1 323 841 5853</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Button size="icon" className="connect-section-icon-button rounded-full">
                <Twitter className="size-5" />
              </Button>
              <Button size="icon" className="connect-section-icon-button rounded-full">
                <Linkedin className="size-5" />
              </Button>
              <Button size="icon" className="connect-section-icon-button rounded-full">
                <Facebook className="size-5" />
              </Button>
              <Button size="icon" className="connect-section-icon-button rounded-full">
                <Instagram className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

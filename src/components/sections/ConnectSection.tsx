"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { BlueskyIcon } from "../icons/BlueskyIcon";
import { TiktokIcon } from "../icons/TiktokIcon";

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
              <a href="https://x.com/yieldsec" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <Twitter className="size-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/yieldsec/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <Linkedin className="size-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/yieldsec/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <Instagram className="size-5" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@yieldsec" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <TiktokIcon className="size-5" />
                </Button>
              </a>
              <a href="https://bsky.app/profile/yield-sec.bsky.social" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <BlueskyIcon className="size-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@yieldsecglobal" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <Youtube className="size-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinktreeIcon } from "@/components/icons/LinktreeIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";

export function ConnectSection() {
  return (
    <FadeInSection>
      <section id="connect" className="connect-section py-24">
        <div className="w-full px-6">
          <h2 className="section-title mb-16">Connect</h2>
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="space-y-6 mb-12">
              <p className="h2 tracking-tight">ismail.vali@yieldsec.com</p>
              <p className="h2 tracking-tight">ismail.vali@gamingcompliance.com</p>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/ismailvali/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <LinkedinIcon className="size-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/ismailvali_/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <InstagramIcon className="size-5" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@ismailvali_" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <TiktokIcon className="size-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@ismailvali_" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <YoutubeIcon className="size-5" />
                </Button>
              </a>
              <a href="https://linktr.ee/Ismailvali" target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="connect-section-icon-button rounded-full">
                  <LinktreeIcon className="size-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

import { AboutSection } from "@/components/sections/AboutSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { YieldSecSection } from "@/components/sections/YieldSecSection";
import { Button } from "@/components/ui/button";
import fs from "fs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import path from "path";

export default function Home() {
  const masonryDirectory = path.join(process.cwd(), "public/masonry");
  const imageFilenames = fs.readdirSync(masonryDirectory);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Section 1: Header/Hero */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Text and CTA */}
        <div className="flex flex-col justify-center px-6 lg:px-24 py-12 space-y-8 pt-16 lg:pt-12">
          <h1 className="h1 leading-tight">
            Ismail Vali is the inventor, founder and CEO of Yield Sec, a leading technical intelligence platform for online marketplaces.
          </h1>
          <p className="h3 text-muted-foreground">
            Expert in gambling intelligence, streaming analytics, crypto market intelligence, and consumer protection across online marketplaces.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="button-text" asChild>
              <a href="#connect">Get in touch</a>
            </Button>
            <Button variant="outline" size="lg" className="button-text" asChild>
              <a href="#about" className="flex items-center gap-2">
                About me
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative hidden lg:block">
          <Image
              src="/header-image.png"
              alt="Ismail Vali - Founder and CEO of Yield Sec, Technical Intelligence Platform Expert"
              fill
              className="object-cover rounded-l-xl"
              priority
          />
        </div>
      </section>

      <AboutSection imageFilenames={imageFilenames} />
      <YieldSecSection />
      <ConnectSection />
    </main>
  );
}

import { Button } from "@/components/ui/button";
import fs from "fs";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import path from "path";

export default function Home() {
  const masonryDirectory = path.join(process.cwd(), "public/masonry");
  const imageFilenames = fs.readdirSync(masonryDirectory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Section 1: Header/Hero */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Text and CTA */}
        <div className="flex flex-col justify-center px-6 lg:px-24 py-12 space-y-8 pt-16 lg:pt-12">
          <h1 className="h1 leading-tight">
            Ismail Vali is the inventor, founder and CEO of Yield Sec.
          </h1>
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
              alt="Ismail Vali - Professional Portfolio Header"
              fill
              className="object-cover rounded-l-xl"
              priority
          />
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="px-6 py-24">
        <div className="w-full">
          <h2 className="section-title mb-16">About</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <p className="h3 leading-snug">
              Ismail Vali is the inventor, founder and CEO of Yield Sec, and leads a team of experts in the creation of a technical intelligence platform that helps monitor, police, enforce, and optimize the licensed marketplace across online betting, gaming, and lottery activity. Yield Sec's mission focuses on removing black-market threats to revenue, taxation, and consumer protection, benefiting the ecosystem overall.
            </p>

            {/* Image Masonry */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {imageFilenames.map((filename, index) => (
                <div key={index} className="break-inside-avoid">
                  <Image
                    src={`/masonry/${filename}`}
                    alt={`Masonry gallery image ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Yield Sec */}
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

      {/* Section 4: Connect */}
      <section id="connect" className="connect-section px-6 py-24">
        <div className="w-full">
          <h2 className="section-title mb-16">Connect</h2>
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              <p className="h2 tracking-tight">ismail.vali@yieldsec.com</p>
              <p className="h2 tracking-tight">+1 323 841 5853</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
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
    </div>
  );
}

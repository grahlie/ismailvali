import { AboutSection } from "@/components/sections/AboutSection";
import { GciSection } from "@/components/sections/GciSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { YieldSecSection } from "@/components/sections/YieldSecSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const heroSubheading =
  "President of Gaming Compliance International (GCI), Inventor, Founder & former CEO of Yield Sec";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="min-h-screen bg-[#060807] text-white">
        {/* Mobile layout: image above text */}
        <div className="lg:hidden">
          <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#060807]">
            <Image
              src="/header-image.png"
              alt="Ismail Vali - President of GCI, former Founder and CEO of Yield Sec, Technical Intelligence Platform Expert"
              fill
              sizes="100vw"
              className="object-cover object-top scale-x-[-1]"
              priority
            />
          </div>
          <div className="space-y-8 px-6 py-8">
            <div>
              <h1 className="section-title section-title-white mb-4">
                Ismail Vali
              </h1>
              <p className="h3 max-w-xl leading-snug text-white">
                {heroSubheading}
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="button-text text-foreground" asChild>
                <a href="#connect">Get in touch</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="button-text border-white/80 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white focus-visible:ring-white/40"
                asChild
              >
                <a href="#about" className="flex items-center gap-2">
                  About me
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: text left / image right; title may overlap image when wider than column (z-index) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-screen lg:items-stretch">
          <div className="relative z-20 flex flex-col justify-center overflow-visible bg-[#060807] px-24 py-6">
            <div className="mb-10">
              <h1 className="section-title section-title-white mb-4 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
                Ismail Vali
              </h1>
              <p className="h3 max-w-xl leading-snug text-white">
                {heroSubheading}
              </p>
            </div>
            <div className="relative z-20 flex gap-4">
              <Button variant="outline" size="lg" className="button-text text-foreground" asChild>
                <a href="#connect">Get in touch</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="button-text border-white/80 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white focus-visible:ring-white/40"
                asChild
              >
                <a href="#about" className="flex items-center gap-2">
                  About me
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative z-0 h-full min-h-[min(100vh,100%)] bg-[#060807]">
            <Image
              src="/header-image.png"
              alt="Ismail Vali - President of GCI, former Founder and CEO of Yield Sec, Technical Intelligence Platform Expert"
              fill
              sizes="50vw"
              className="object-cover object-top xl:object-center 2xl:object-top rounded-r-xl scale-x-[-1]"
              priority
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <GciSection />
      <YieldSecSection />
      <ConnectSection />
    </main>
  );
}

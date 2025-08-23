import { AboutSection } from "@/components/sections/AboutSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { YieldSecSection } from "@/components/sections/YieldSecSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen">
        {/* Mobile layout: image above text */}
        <div className="lg:hidden">
          <div className="aspect-[4/3] w-full relative overflow-hidden">
            <Image
              src="/header-image.png"
              alt="Ismail Vali - Founder and CEO of Yield Sec, Technical Intelligence Platform Expert"
              fill
              className="object-cover object-top scale-x-[-1]"
              priority
            />
          </div>
          <div className="px-6 py-12 space-y-8">
            <h1 className="h1 leading-tight">
              Ismail Vali is the inventor, founder and CEO of Yield Sec, a leading technical intelligence platform for online marketplaces.
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
        </div>

        {/* Desktop layout: side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-screen">
          <div className="flex flex-col justify-center px-24 py-12 space-y-8 pt-12">
            <h1 className="h1 leading-tight">
              Ismail Vali is the inventor, founder and CEO of Yield Sec, a leading technical intelligence platform for online marketplaces.
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

          <div className="relative">
            <Image
                src="/header-image.png"
                alt="Ismail Vali - Founder and CEO of Yield Sec, Technical Intelligence Platform Expert"
                fill
                className="object-cover object-top xl:object-center 2xl:object-top rounded-r-xl scale-x-[-1]"
                priority
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <YieldSecSection />
      <ConnectSection />
    </main>
  );
}

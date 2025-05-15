
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData, iconMapping, sectionIds } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Download, Send } from "lucide-react";

export function HeroSection() {
  const { contactInfo, aboutMe } = portfolioData;

  return (
    <section id={sectionIds.home} className="bg-secondary dark:bg-gray-900/50 min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-0">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            {contactInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">
            {contactInfo.title}
          </p>
          <p className="text-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            {aboutMe.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {aboutMe.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-sm bg-background text-foreground">
                {keyword}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href={`#${sectionIds.contact}`}>
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              {/* Placeholder for CV download, can be linked to an actual file in /public */}
              <a href="/Yasir_Maqsood_CV.pdf" download="Yasir_Maqsood_CV.pdf">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-96 h-96 mx-auto md:mx-0 md:order-last order-first">
          <Image
            src="/image/Picture_white.jpeg"
            alt={contactInfo.name}
            fill
            className="rounded-full object-cover shadow-2xl border-4 border-primary/20 z-0 scale-90 object-[50%_35%]"
            priority
            sizes="(max-width: 300px) 10vw, (max-width: 1000px) 10vw, 10vw"
            data-ai-hint="profile portrait"
            style={{ objectFit: "cover", transform: "scale(0.8)" }}
          />
          <div className="absolute bottom-0 right-0 md:bottom-3 md:right-1 flex space-x-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-xl z-10">
            <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <iconMapping.LinkedIn className="h-7 w-7 text-primary hover:text-accent transition-colors" />
            </Link>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email">
              <iconMapping.Email className="h-7 w-7 text-primary hover:text-accent transition-colors" />
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} aria-label="Phone">
              <iconMapping.Phone className="h-7 w-7 text-primary hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

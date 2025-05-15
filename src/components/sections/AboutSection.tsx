"use client";
import { portfolioData, sectionIds, iconMapping } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { UserCircle, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  const { aboutMe, contactInfo } = portfolioData;

  return (
    <section id={sectionIds.about} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={UserCircle}>About Me</SectionTitle>
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Target className="h-6 w-6 text-accent" />
                Who Am I?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed text-justify">
                {aboutMe.description}
              </p>
              <p className="text-foreground/80 leading-relaxed text-justify">
                Born on <span className="font-semibold text-primary">{new Date(1997, 0, 31).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>, 
                I hold a Spanish work permit and am eager to apply my skills in challenging environments. 
                My analytical prowess, coupled with a strong work ethic and optimistic outlook, drives me to seek innovative solutions and continuously enhance my expertise.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-primary mb-2">Key Strengths:</h4>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li className="text-justify">Proficiency in Python, SQL, Numpy, OpenCV</li>
                  <li className="text-justify">Efficient problem-solving and data analysis</li>
                  <li className="text-justify">Strong work ethic and effective communication</li>
                  <li className="text-justify">Optimism and analytical thinking</li>
                  <li className="text-justify">Commitment to continuous learning and growth</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

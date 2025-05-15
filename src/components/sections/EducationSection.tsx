"use client";

import { portfolioData, sectionIds, iconMapping } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, BookOpen, Star, MapPin, CalendarDays } from "lucide-react";

export function EducationSection() {
  return (
    <section id={sectionIds.education} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={GraduationCap}>Education & Training</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  {edu.icon && <edu.icon className="h-6 w-6 text-accent" />}
                  {edu.degree}
                </CardTitle>
                <CardDescription className="text-md font-medium text-foreground/80">
                  {edu.institution}
                </CardDescription>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                  <span className="flex items-center gap-1.5">
                    <iconMapping.Location className="h-4 w-4" /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <iconMapping.Calendar className="h-4 w-4" /> {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4" /> {edu.grade}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {edu.thesis && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-primary text-sm flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4 text-accent"/>
                      Thesis
                    </h4>
                    <p className="text-sm text-foreground/90 italic text-justify">"{edu.thesis}"</p>
                  </div>
                )}
                {edu.details && edu.details.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Key Areas:</h4>
                    <ul className="list-disc list-inside text-sm text-foreground/90 space-y-0.5">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-justify">{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

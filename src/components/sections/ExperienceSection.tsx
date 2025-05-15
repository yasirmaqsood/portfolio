"use client";

import { portfolioData, sectionIds, iconMapping } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, MapPin, CalendarDays, CheckCircle } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id={sectionIds.experience} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 hidden sm:block"></div>

          {portfolioData.workExperience.map((exp, index) => (
            <div key={index} className="sm:relative sm:pl-8 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-2 border-background hidden sm:block"></div>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 sm:ml-4 md:ml-0 md:w-[calc(50%-2rem)] data-[align=right]:md:ml-[calc(50%+2rem)] data-[align=left]:md:mr-[calc(50%+2rem)]"
                    data-align={index % 2 === 0 ? 'left' : 'right'}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                    {exp.icon && <exp.icon className="h-6 w-6 text-accent" />}
                    {exp.role}
                  </CardTitle>
                  <CardDescription className="text-md font-medium text-foreground/80">
                    {exp.company}
                  </CardDescription>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1.5">
                      <iconMapping.Location className="h-4 w-4" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <iconMapping.Calendar className="h-4 w-4" /> {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                        <span className="text-justify">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

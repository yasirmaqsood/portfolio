"use client";

import * as React from "react";
import { portfolioData, sectionIds, iconMapping, SkillItem } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2, Languages, CheckSquare, Brain, Wrench, HardDrive } from "lucide-react";

const SkillCategoryIcons: Record<SkillItem['category'], React.ElementType> = {
  Programming: Brain,
  Tools: Wrench,
  Concepts: Settings2,
  Software: HardDrive,
};


export function SkillsSection() {
  const categorizedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillItem['category'], SkillItem[]>);


  return (
    <section id={sectionIds.skills} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={Settings2}>Skills & Proficiencies</SectionTitle>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <Settings2 className="h-6 w-6 text-accent" /> Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium text-primary mb-3 flex items-center gap-2">
                    {React.createElement(SkillCategoryIcons[category as SkillItem['category']] || Settings2, {className: "h-5 w-5 text-accent/80"})}
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 bg-accent/80 text-accent-foreground hover:bg-accent/90 transition-colors cursor-default flex items-center gap-1.5">
                        {skill.icon && <skill.icon className="h-4 w-4" />}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Language Skills */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <Languages className="h-6 w-6 text-accent" /> Language Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {portfolioData.languageSkills.map((lang, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground/90">{lang.language} - <span className="text-sm text-muted-foreground">{lang.level}</span></h4>
                    {lang.listening && (
                       <p className="text-xs text-foreground/70">
                         Listening: {lang.listening} | Reading: {lang.reading} | Writing: {lang.writing} | Spoken: {lang.spokenProduction} / {lang.spokenInteraction}
                       </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Digital Skills */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <CheckSquare className="h-6 w-6 text-accent" /> Digital Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {portfolioData.digitalSkills.map((skill, index) => (
                    <li key={index} className="text-sm text-foreground/90">
                      <span className="font-medium">{skill.area}:</span> {skill.level} ({skill.score})
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3">*Self-assessment based on The Digital Competence Framework 2.1</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-12">
           <h3 className="text-2xl font-semibold text-primary mb-6 text-center flex items-center justify-center gap-2">
              <iconMapping.Interests className="h-7 w-7 text-accent" /> My Interests
            </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.interests.map((interest, index) => (
              <Badge key={index} variant="default" className="text-md px-4 py-2 bg-primary hover:bg-primary transition-colors cursor-default flex items-center gap-2">
                {interest.icon && <interest.icon className="h-5 w-5" />}
                {interest.name}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

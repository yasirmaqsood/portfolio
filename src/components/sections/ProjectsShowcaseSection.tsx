"use client";

import { portfolioData, sectionIds, iconMapping } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, FileText, Award, ExternalLink, CalendarDays } from "lucide-react";
import Link from "next/link";

export function ProjectsShowcaseSection() {
  return (
    <section id={sectionIds.projects} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={Lightbulb}>Publications & Certifications</SectionTitle>
        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
            <TabsTrigger value="publications" className="gap-2">
              <FileText className="h-5 w-5" /> Publications
            </TabsTrigger>
            <TabsTrigger value="certifications" className="gap-2">
              <Award className="h-5 w-5" /> Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <div className="space-y-6">
              {portfolioData.publications.map((pub, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary">{pub.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" /> Published: {pub.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/90 text-justify">Reference: {pub.reference}</p>
                    {pub.link && (
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:underline mt-2 text-sm">
                        View Publication <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {portfolioData.publications.length === 0 && (
              <p className="text-center text-muted-foreground">No publications to display yet.</p>
            )}
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                      {cert.name}
                    </CardTitle>
                    {cert.issuer && (
                      <CardDescription className="text-sm text-muted-foreground">
                        Issuer: {cert.issuer}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {cert.link && (
                  <CardContent>
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:underline text-sm">
                        View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                  </CardContent>
                  )}
                </Card>
              ))}
            </div>
             {portfolioData.certifications.length === 0 && (
              <p className="text-center text-muted-foreground">No certifications to display yet.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

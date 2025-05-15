"use client";

import { portfolioData, sectionIds, iconMapping } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send, Users, MessageSquareQuote } from "lucide-react";

export function ContactSection() {
  const { contactInfo, recommendations } = portfolioData;

  return (
    <section id={sectionIds.contact} className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={Send}>Get In Touch</SectionTitle>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <Card className="lg:col-span-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: iconMapping.Email, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: iconMapping.Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
                { icon: iconMapping.LinkedIn, label: "LinkedIn", value: contactInfo.linkedinUser, href: contactInfo.linkedin, target: "_blank" },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground/90">{item.label}</p>
                    <Link href={item.href} target={item.target} className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href={`mailto:${contactInfo.email}`}>
                  <Send className="mr-2 h-4 w-4" /> Send an Email
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations Card */}
          <Card className="lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <Users className="h-6 w-6 text-accent" /> Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border border-border rounded-lg bg-background/50">
                  <div className="flex items-center gap-2 mb-1">
                     <MessageSquareQuote className="h-5 w-5 text-accent"/>
                    <h4 className="font-semibold text-primary">{rec.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground italic text-justify">{rec.title}</p> 
                  {/* Assuming rec.title might contain longer text that needs justification.
                      If actual recommendation text was a separate field, e.g., rec.quote, it would be:
                      <p className="text-sm text-foreground/90 text-justify">{rec.quote}</p> 
                  */}
                  {(rec.email || rec.phone) && (
                    <div className="mt-2 text-xs text-foreground/80 space-y-0.5">
                      {rec.email && <p>Email: <a href={`mailto:${rec.email}`} className="hover:underline">{rec.email}</a></p>}
                      {rec.phone && <p>Phone: <a href={`tel:${rec.phone.replace(/\s/g, "")}`} className="hover:underline">{rec.phone}</a></p>}
                    </div>
                  )}
                </div>
              ))}
               {recommendations.length === 0 && (
                <p className="text-center text-muted-foreground text-justify">No recommendations available at the moment.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

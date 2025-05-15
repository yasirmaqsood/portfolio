import Link from "next/link";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-justify">
          &copy; {currentYear} {portfolioData.contactInfo.name}. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <a href={`mailto:${portfolioData.contactInfo.email}`} aria-label="Email">
            <Mail className="h-6 w-6 hover:text-primary transition-colors" />
          </a>
           <a href={`tel:${portfolioData.contactInfo.phone.replace(/\s/g, "")}`} aria-label="Phone">
            <Phone className="h-6 w-6 hover:text-primary transition-colors" />
          </a>
          {/* Add Github if available, for now using LinkedIn as a placeholder */}
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Menu, X, CodeXml } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { sectionIds, portfolioData } from "@/lib/portfolio-data";

interface NavItem {
  href: string;
  label: string;
  id: string;
}

const AI_ACCESS_KEY = "mode";
const AI_ACCESS_VALUE = "developerPortfolioView";



export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds.home);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAILink, setShowAILink] = useState(false);

  const baseNavItems: NavItem[] = [
    { href: `#${sectionIds.home}`, label: "Home", id: sectionIds.home },
    { href: `#${sectionIds.about}`, label: "About", id: sectionIds.about },
    { href: `#${sectionIds.experience}`, label: "Experience", id: sectionIds.experience },
    { href: `#${sectionIds.education}`, label: "Education", id: sectionIds.education },
    { href: `#${sectionIds.projects}`, label: "Publications/Certifications", id: sectionIds.projects },
    { href: `#${sectionIds.skills}`, label: "Skills", id: sectionIds.skills },
    { href: `#${sectionIds.contact}`, label: "Contact", id: sectionIds.contact },
  ];

  const navItems = [...baseNavItems];
  if (showAILink) {
    navItems.push({
      href: `#${sectionIds.aiTool}`,
      label: "AI Tool",
      id: sectionIds.aiTool
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = sectionIds.home;
      for (const item of navItems) {
        const sectionElement = document.getElementById(item.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const NavLink = ({ href, label, id, onClick, isSheetLink = false }: NavItem & { onClick?: () => void, isSheetLink?: boolean }) => (
    <Link href={href} legacyBehavior passHref>
      <a
        onClick={onClick}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          activeSection === id ? "text-primary" : "text-foreground/80",
          isSheetLink && "block py-2 text-lg"
        )}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/90 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={`#${sectionIds.home}`} className="flex items-center gap-2">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">{portfolioData.contactInfo.name.split(' ')[0]}</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href={`#${sectionIds.home}`} className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                  <CodeXml className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground">{portfolioData.contactInfo.name.split(' ')[0]}</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close navigation menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <NavLink {...item} isSheetLink onClick={() => setIsSheetOpen(false)} />
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
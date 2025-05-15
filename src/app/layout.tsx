import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// GeistSans and GeistMono are imported as objects.
// Their `variable` property (e.g., GeistSans.variable) provides the CSS variable name.
// The lines below were causing the TypeError because they attempted to call these objects as functions.
// const geistSans = GeistSans({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });
// const geistMono = GeistMono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Yasir Maqsood | DataViz Portfolio',
  description: 'Portfolio of Yasir Maqsood, a Data Science Graduate and Software Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { portfolioData, sectionIds } from "@/lib/portfolio-data";
import { generateCoverLetter, type CoverLetterInput, type CoverLetterOutput } from "@/ai/flows/cover-letter-generator";
import { SectionTitle } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from 'next/navigation';

const AI_ACCESS_KEY = "mode";
const AI_ACCESS_VALUE = "developerPortfolioView";

const formSchema = z.object({
  resume: z.string().min(100, "Resume content is too short.").max(15000, "Resume content is too long."),
  jobDescription: z.string().min(50, "Job description is too short.").max(10000, "Job description is too long."),
});

type FormData = z.infer<typeof formSchema>;

export function AiCoverLetterGeneratorSection() {
  const searchParams = useSearchParams();
  const showSection = searchParams.get(AI_ACCESS_KEY) === AI_ACCESS_VALUE;

  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: portfolioData.fullResumeText,
      jobDescription: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedLetter(null);
    try {
      const input: CoverLetterInput = {
        resume: data.resume,
        jobDescription: data.jobDescription,
      };
      const result: CoverLetterOutput = await generateCoverLetter(input);
      setGeneratedLetter(result.coverLetter);
      toast({
        title: "Success!",
        description: "Cover letter generated successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating cover letter:", error);
      toast({
        title: "Error",
        description: "Failed to generate cover letter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedLetter) {
      navigator.clipboard.writeText(generatedLetter);
      setIsCopied(true);
      toast({ title: "Copied!", description: "Cover letter copied to clipboard." });
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  if (!showSection) {
    return null;
  }

  return (
    <section id={sectionIds.aiTool} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle icon={Wand2}>AI Cover Letter Generator</SectionTitle>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Craft Your Perfect Cover Letter</CardTitle>
            <CardDescription className="text-justify">
              Paste your resume (or use the pre-filled one) and the job description to generate a tailored cover letter using AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Resume</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste your resume here..."
                          className="min-h-[150px] max-h-[300px] bg-secondary/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the job description here..."
                          className="min-h-[150px] max-h-[300px] bg-secondary/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full md:w-auto text-base py-3 px-6">
                  {isLoading ? (
                    <>
                      <Wand2 className="mr-2 h-5 w-5 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" /> Generate Cover Letter
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {(isLoading || generatedLetter) && (
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Generated Cover Letter:</h3>
                {isLoading && !generatedLetter && (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                )}
                {generatedLetter && (
                  <Card className="bg-secondary/30">
                    <CardContent className="p-4">
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleCopy}
                          className="absolute top-2 right-2 h-8 w-8"
                          aria-label="Copy cover letter"
                        >
                          {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                        <ScrollArea className="h-[300px] md:h-[400px] w-full whitespace-pre-wrap text-sm p-1 text-justify">
                          {generatedLetter}
                        </ScrollArea>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

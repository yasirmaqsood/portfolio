'use server';
/**
 * @fileOverview Generates a cover letter based on a resume and job description.
 *
 * - generateCoverLetter - A function that generates the cover letter.
 * - CoverLetterInput - The input type for the generateCoverLetter function.
 * - CoverLetterOutput - The return type for the generateCoverLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CoverLetterInputSchema = z.object({
  resume: z.string().describe('The resume content.'),
  jobDescription: z.string().describe('The job description.'),
});
export type CoverLetterInput = z.infer<typeof CoverLetterInputSchema>;

const CoverLetterOutputSchema = z.object({
  coverLetter: z.string().describe('The generated cover letter.'),
});
export type CoverLetterOutput = z.infer<typeof CoverLetterOutputSchema>;

export async function generateCoverLetter(input: CoverLetterInput): Promise<CoverLetterOutput> {
  return generateCoverLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'coverLetterPrompt',
  input: {schema: CoverLetterInputSchema},
  output: {schema: CoverLetterOutputSchema},
  prompt: `Given the following resume and job description, generate a cover letter tailored to the job description.

Resume:
{{{resume}}}

Job Description:
{{{jobDescription}}}

Cover Letter:
`,
});

const generateCoverLetterFlow = ai.defineFlow(
  {
    name: 'generateCoverLetterFlow',
    inputSchema: CoverLetterInputSchema,
    outputSchema: CoverLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

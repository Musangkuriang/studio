'use server';

/**
 * @fileOverview This file contains a Genkit flow that improves project descriptions using AI.
 *
 * - improveProjectDescription - A function that improves the description of a portfolio project.
 * - ImproveProjectDescriptionInput - The input type for the improveProjectDescription function.
 * - ImproveProjectDescriptionOutput - The return type for the improveProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The current description of the portfolio project.'),
  jobDescription: z.string().describe('The job description for the role.'),
});
export type ImproveProjectDescriptionInput = z.infer<
  typeof ImproveProjectDescriptionInputSchema
>;

const ImproveProjectDescriptionOutputSchema = z.object({
  improvedDescription: z
    .string()
    .describe('The improved description of the portfolio project.'),
});
export type ImproveProjectDescriptionOutput = z.infer<
  typeof ImproveProjectDescriptionOutputSchema
>;

export async function improveProjectDescription(
  input: ImproveProjectDescriptionInput
): Promise<ImproveProjectDescriptionOutput> {
  return improveProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveProjectDescriptionPrompt',
  input: {schema: ImproveProjectDescriptionInputSchema},
  output: {schema: ImproveProjectDescriptionOutputSchema},
  prompt: `You are an AI assistant that helps improve project descriptions for portfolios.

You will be provided with the current project description and the job description for the role the user is applying for.

Your job is to improve the project description so that it is more likely to land the user an interview.

Here is the current project description: {{{projectDescription}}}

Here is the job description: {{{jobDescription}}}

Improved Project Description:`,
});

const improveProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'improveProjectDescriptionFlow',
    inputSchema: ImproveProjectDescriptionInputSchema,
    outputSchema: ImproveProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview Portfolio Optimization flow.
 *
 * This flow suggests which project to highlight in a portfolio based on the job description.
 *
 * - portfolioOptimizerHighlight - A function that takes a portfolio and job description and returns a suggestion on which project to highlight.
 * - PortfolioOptimizerInput - The input type for the portfolioOptimizerHighlight function.
 * - PortfolioOptimizerOutput - The return type for the portfolioOptimizerHighlight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioOptimizerInputSchema = z.object({
  portfolio: z.string().describe('A description of the portfolio, including the projects and skills.'),
  jobDescription: z.string().describe('The job description for the job the user is applying for.'),
});
export type PortfolioOptimizerInput = z.infer<typeof PortfolioOptimizerInputSchema>;

const PortfolioOptimizerOutputSchema = z.object({
  highlightedProject: z.string().describe('The name of the project to highlight in the portfolio.'),
  reason: z.string().describe('The reason for highlighting the project.'),
});
export type PortfolioOptimizerOutput = z.infer<typeof PortfolioOptimizerOutputSchema>;

export async function portfolioOptimizerHighlight(input: PortfolioOptimizerInput): Promise<PortfolioOptimizerOutput> {
  return portfolioOptimizerHighlightFlow(input);
}

const portfolioOptimizerHighlightPrompt = ai.definePrompt({
  name: 'portfolioOptimizerHighlightPrompt',
  input: {schema: PortfolioOptimizerInputSchema},
  output: {schema: PortfolioOptimizerOutputSchema},
  prompt: `You are a portfolio optimization expert. Given a portfolio description and a job description, you will suggest which project in the portfolio to highlight.

Portfolio Description: {{{portfolio}}}

Job Description: {{{jobDescription}}}

Based on the job description, which project from the portfolio should be highlighted? Explain your reasoning.

{{json reason}}
Project to highlight: {{highlightedProject}}`,
});

const portfolioOptimizerHighlightFlow = ai.defineFlow(
  {
    name: 'portfolioOptimizerHighlightFlow',
    inputSchema: PortfolioOptimizerInputSchema,
    outputSchema: PortfolioOptimizerOutputSchema,
  },
  async input => {
    const {output} = await portfolioOptimizerHighlightPrompt(input);
    return output!;
  }
);

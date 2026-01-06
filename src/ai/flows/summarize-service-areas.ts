'use server';
/**
 * @fileOverview Summarizes service areas from submitted homecare requests using GenAI.
 *
 * - summarizeServiceAreas - A function that summarizes service areas.
 * - SummarizeServiceAreasInput - The input type for the summarizeServiceAreas function.
 * - SummarizeServiceAreasOutput - The return type for the summarizeServiceAreas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeServiceAreasInputSchema = z.object({
  requests: z.array(
    z.object({
      address: z.string().describe('The address of the homecare request.'),
      medicalCondition: z.string().describe('The medical condition of the patient.'),
    })
  ).describe('An array of homecare requests.'),
});
export type SummarizeServiceAreasInput = z.infer<typeof SummarizeServiceAreasInputSchema>;

const SummarizeServiceAreasOutputSchema = z.object({
  summary: z.string().describe('A summary of the service areas covered by the homecare requests.'),
});
export type SummarizeServiceAreasOutput = z.infer<typeof SummarizeServiceAreasOutputSchema>;

export async function summarizeServiceAreas(input: SummarizeServiceAreasInput): Promise<SummarizeServiceAreasOutput> {
  return summarizeServiceAreasFlow(input);
}

const summarizeServiceAreasPrompt = ai.definePrompt({
  name: 'summarizeServiceAreasPrompt',
  input: {schema: SummarizeServiceAreasInputSchema},
  output: {schema: SummarizeServiceAreasOutputSchema},
  prompt: `You are a medical service area summarizer. You will be provided with a list of homecare requests, and you will summarize the service areas covered by those requests.

  Requests:
  {{#each requests}}
  Address: {{{address}}}, Medical Condition: {{{medicalCondition}}}
  {{/each}}
  `,
});

const summarizeServiceAreasFlow = ai.defineFlow(
  {
    name: 'summarizeServiceAreasFlow',
    inputSchema: SummarizeServiceAreasInputSchema,
    outputSchema: SummarizeServiceAreasOutputSchema,
  },
  async input => {
    const {output} = await summarizeServiceAreasPrompt(input);
    return output!;
  }
);

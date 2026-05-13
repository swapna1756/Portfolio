'use server';
/**
 * @fileOverview A Genkit flow for generating elegant and poetic taglines based on a creative industry.
 *
 * - generateDynamicTagline - A function that handles the tagline generation process.
 * - GenerateDynamicTaglineInput - The input type for the generateDynamicTagline function.
 * - GenerateDynamicTaglineOutput - The return type for the generateDynamicTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicTaglineInputSchema = z.object({
  creativeIndustry: z
    .string()
    .describe('The creative industry for which to generate a tagline.'),
});
export type GenerateDynamicTaglineInput = z.infer<
  typeof GenerateDynamicTaglineInputSchema
>;

const GenerateDynamicTaglineOutputSchema = z.object({
  tagline: z
    .string()
    .describe('An elegant and poetic tagline for the given creative industry.'),
});
export type GenerateDynamicTaglineOutput = z.infer<
  typeof GenerateDynamicTaglineOutputSchema
>;

export async function generateDynamicTagline(
  input: GenerateDynamicTaglineInput
): Promise<GenerateDynamicTaglineOutput> {
  return generateDynamicTaglineFlow(input);
}

const generateDynamicTaglinePrompt = ai.definePrompt({
  name: 'generateDynamicTaglinePrompt',
  input: {schema: GenerateDynamicTaglineInputSchema},
  output: {schema: GenerateDynamicTaglineOutputSchema},
  prompt: `You are a creative wordsmith, skilled at crafting elegant and poetic taglines.

Generate a single, captivating tagline for a portfolio owner in the '{{{creativeIndustry}}}' industry.
The tagline should be concise, evocative, and reflect a sophisticated and artistic sensibility.
Focus on beauty and elegance.

Creative Industry: {{{creativeIndustry}}}`,
});

const generateDynamicTaglineFlow = ai.defineFlow(
  {
    name: 'generateDynamicTaglineFlow',
    inputSchema: GenerateDynamicTaglineInputSchema,
    outputSchema: GenerateDynamicTaglineOutputSchema,
  },
  async input => {
    const {output} = await generateDynamicTaglinePrompt(input);
    if (!output) {
      throw new Error('Failed to generate tagline.');
    }
    return output;
  }
);

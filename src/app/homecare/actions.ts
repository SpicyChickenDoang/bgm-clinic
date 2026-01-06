'use server';

import { summarizeServiceAreas, type SummarizeServiceAreasInput } from '@/ai/flows/summarize-service-areas';

export async function getSummary(input: SummarizeServiceAreasInput) {
    try {
        if (!input.requests || input.requests.length === 0) {
            return { summary: "No requests submitted yet. The summary will appear here once you submit a homecare request.", error: null };
        }
        const result = await summarizeServiceAreas(input);
        return { summary: result.summary, error: null };
    } catch (e) {
        console.error("AI Summary Error:", e);
        return { summary: null, error: 'Failed to generate AI summary. Please try again later.' };
    }
}

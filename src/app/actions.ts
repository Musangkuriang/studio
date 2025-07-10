
'use server';

import { improveProjectDescription, type ImproveProjectDescriptionInput } from '@/ai/flows/improve-project-description';
import { portfolioOptimizerHighlight, type PortfolioOptimizerInput } from '@/ai/flows/portfolio-optimizer';

export async function runImproveProjectDescription(input: ImproveProjectDescriptionInput) {
    try {
        return await improveProjectDescription(input);
    } catch (error) {
        console.error(error);
        return { error: 'Failed to improve description. Please try again.' };
    }
}

export async function runPortfolioOptimizerHighlight(input: PortfolioOptimizerInput) {
    try {
        return await portfolioOptimizerHighlight(input);
    } catch (error) {
        console.error(error);
        return { error: 'Failed to optimize portfolio. Please try again.' };
    }
}

'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { runImproveProjectDescription, runPortfolioOptimizerHighlight } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Lightbulb, Sparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const portfolioOptimizerSchema = z.object({
  portfolio: z.string().min(50, 'Please provide a summary of your portfolio projects and skills.'),
  jobDescription: z.string().min(50, 'Please paste the job description here.'),
});
type PortfolioOptimizerValues = z.infer<typeof portfolioOptimizerSchema>;

const descriptionImproverSchema = z.object({
  projectDescription: z.string().min(20, 'Please provide your current project description.'),
  jobDescription: z.string().min(50, 'Please paste the job description here.'),
});
type DescriptionImproverValues = z.infer<typeof descriptionImproverSchema>;

type AiResult = {
    highlightedProject?: string;
    reason?: string;
    improvedDescription?: string;
} | null;

export default function AiOptimizer() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('highlight');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiResult>(null);

  const portfolioForm = useForm<PortfolioOptimizerValues>({
    resolver: zodResolver(portfolioOptimizerSchema),
  });

  const descriptionForm = useForm<DescriptionImproverValues>({
    resolver: zodResolver(descriptionImproverSchema),
  });

  const handlePortfolioSubmit: SubmitHandler<PortfolioOptimizerValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    const response = await runPortfolioOptimizerHighlight(data);
    if ('error' in response && response.error) {
        toast({ variant: 'destructive', title: 'Error', description: response.error });
    } else {
        setResult(response);
    }
    setIsLoading(false);
  };

  const handleDescriptionSubmit: SubmitHandler<DescriptionImproverValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    const response = await runImproveProjectDescription(data);
    if ('error' in response && response.error) {
        toast({ variant: 'destructive', title: 'Error', description: response.error });
    } else {
        setResult(response);
    }
    setIsLoading(false);
  };
  
  const renderLoadingSkeleton = () => (
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );

  return (
    <section id="ai-optimizer" className="w-full bg-gray-50 py-20 md:py-32 animated-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex items-center justify-center gap-4">
            <Wand2 className="w-10 h-10 text-primary" />
            AI Portfolio Optimizer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Leverage AI to tailor your portfolio for your dream job. Get suggestions on which project to highlight and how to improve your project descriptions.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setResult(null); }} className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="highlight">
              <Lightbulb className="mr-2 h-4 w-4" />
              Highlight Project
            </TabsTrigger>
            <TabsTrigger value="improve">
              <Sparkles className="mr-2 h-4 w-4" />
              Improve Description
            </TabsTrigger>
          </TabsList>

          <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <TabsContent value="highlight">
                <Card>
                  <CardHeader>
                    <CardTitle>Find Your Star Project</CardTitle>
                    <CardDescription>Get an AI-powered recommendation for which project to feature based on a job description.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...portfolioForm}>
                      <form onSubmit={portfolioForm.handleSubmit(handlePortfolioSubmit)} className="space-y-6">
                        <FormField control={portfolioForm.control} name="portfolio" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Portfolio Summary</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Briefly describe your main projects and key skills..." {...field} rows={6} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <FormField control={portfolioForm.control} name="jobDescription" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Target Job Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Paste the full job description here..." {...field} rows={8} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Optimizing...' : 'Get Suggestion'}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="improve">
                <Card>
                  <CardHeader>
                    <CardTitle>Refine Your Narrative</CardTitle>
                    <CardDescription>Improve your project description to better align with what recruiters are looking for.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...descriptionForm}>
                      <form onSubmit={descriptionForm.handleSubmit(handleDescriptionSubmit)} className="space-y-6">
                        <FormField control={descriptionForm.control} name="projectDescription" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Project Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Paste your current project description here..." {...field} rows={6} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <FormField control={descriptionForm.control} name="jobDescription" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Target Job Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Paste the full job description here..." {...field} rows={8} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? 'Improving...' : 'Improve Description'}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
            
            <div className="lg:mt-0">
                <Card className="sticky top-24 min-h-[300px]">
                    <CardHeader>
                        <CardTitle className="text-gradient">AI Suggestion</CardTitle>
                        <CardDescription>Your personalized feedback will appear here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading && renderLoadingSkeleton()}
                        {!isLoading && result && (
                            <div className="space-y-4 text-gray-700">
                                {result.highlightedProject && (
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">Project to Highlight:</h4>
                                        <p className="font-semibold text-primary text-xl">{result.highlightedProject}</p>
                                    </div>
                                )}
                                {result.reason && (
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">Reasoning:</h4>
                                        <p className="whitespace-pre-wrap">{result.reason}</p>
                                    </div>
                                )}
                                {result.improvedDescription && (
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">Improved Description:</h4>
                                        <p className="whitespace-pre-wrap bg-purple-50/50 p-4 rounded-md border border-purple-200">{result.improvedDescription}</p>
                                    </div>
                                )}
                            </div>
                        )}
                        {!isLoading && !result && (
                            <div className="text-center text-gray-500 py-10">
                                <Lightbulb className="mx-auto h-12 w-12 text-gray-400" />
                                <p className="mt-4">Your insights are waiting.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

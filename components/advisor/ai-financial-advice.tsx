'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AiFinancialAdvice() {
  const { toast } = useToast();
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // This would normally use real data
  const recommendations = [
    {
      id: 1,
      title: 'Reduce food expenses',
      description: 'Based on your recent transactions, you could save approximately $120 per month by cooking at home more frequently instead of ordering takeout.',
      impact: 'High',
    },
    {
      id: 2,
      title: 'Set up an emergency fund',
      description: 'You should aim to have 3-6 months of essential expenses saved. Start with small automatic transfers of $200 per month.',
      impact: 'Medium',
    },
    {
      id: 3,
      title: 'Review your subscriptions',
      description: 'You\'re spending $65 monthly on subscription services. Consider consolidating or canceling unused subscriptions.',
      impact: 'Medium',
    },
  ];
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    
    // Mock AI response - in a real app, this would call an AI API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "AI Response Received",
        description: "Based on your spending patterns, I recommend setting up automatic savings of 15% of your income.",
      });
      setQuestion('');
    }, 2000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Financial Advice
        </CardTitle>
        <CardDescription>Personalized recommendations based on your spending patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.map((rec) => (
            <div key={rec.id} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{rec.title}</h3>
                  <Badge 
                    variant={rec.impact === 'High' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {rec.impact} Impact
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {rec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full space-y-2">
          <Textarea
            placeholder="Ask for financial advice or tips..."
            className="min-h-20"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
              {isLoading ? 'Processing...' : 'Ask AI'}
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
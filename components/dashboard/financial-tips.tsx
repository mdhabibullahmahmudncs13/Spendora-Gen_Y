import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export function FinancialTips() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>AI Financial Tips</CardTitle>
        <CardDescription>Personalized advice for you</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium mb-1">Reduce eating out expenses</p>
              <p className="text-sm text-muted-foreground">
                You spent $214 on restaurants last month. Cooking at home more could save you $120/month.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium mb-1">Set up an emergency fund</p>
              <p className="text-sm text-muted-foreground">
                Based on your income, aim for $9,600 in savings. Start with $200/month contributions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function SavingsSuggestions() {
  // This would normally use real data
  const savingsCategories = [
    {
      category: 'Food & Dining',
      currentSpending: 450,
      recommendedSpending: 380,
      potentialSavings: 70,
      tips: [
        'Meal prep on weekends to reduce takeout',
        'Use grocery store loyalty programs',
        'Shop with a list to avoid impulse purchases',
      ],
    },
    {
      category: 'Entertainment',
      currentSpending: 200,
      recommendedSpending: 150,
      potentialSavings: 50,
      tips: [
        'Use streaming services instead of cable',
        'Look for free local events',
        'Share subscription costs with family',
      ],
    },
    {
      category: 'Transportation',
      currentSpending: 300,
      recommendedSpending: 250,
      potentialSavings: 50,
      tips: [
        'Carpool or use public transport when possible',
        'Combine errands to save on gas',
        'Consider biking for short distances',
      ],
    },
  ];

  const totalPotentialSavings = savingsCategories.reduce(
    (total, category) => total + category.potentialSavings,
    0
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Opportunities</CardTitle>
        <CardDescription>
          Potential monthly savings: ${totalPotentialSavings}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {savingsCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{category.category}</h3>
                  <span className="text-sm font-medium text-green-500">
                    Save ${category.potentialSavings}/mo
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: ${category.currentSpending}</span>
                    <span>Target: ${category.recommendedSpending}</span>
                  </div>
                  <Progress 
                    value={(category.recommendedSpending / category.currentSpending) * 100} 
                    className="h-2"
                  />
                </div>
              </div>
              
              <div className="bg-muted rounded-md p-3">
                <h4 className="text-sm font-medium mb-2">Savings Tips:</h4>
                <ul className="text-sm space-y-1">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Annual Potential Savings</p>
              <p className="text-sm text-muted-foreground">
                If you follow all recommendations
              </p>
            </div>
            <div className="text-2xl font-bold text-green-500">
              ${totalPotentialSavings * 12}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
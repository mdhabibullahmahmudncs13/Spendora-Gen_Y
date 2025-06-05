'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function SpendingByCategory() {
  // This would normally use real data
  const categories = [
    {
      name: 'Housing',
      spent: 1200,
      budget: 1300,
      percentage: 92,
      color: 'hsl(var(--chart-1))',
    },
    {
      name: 'Food',
      spent: 450,
      budget: 500,
      percentage: 90,
      color: 'hsl(var(--chart-2))',
    },
    {
      name: 'Transport',
      spent: 300,
      budget: 350,
      percentage: 86,
      color: 'hsl(var(--chart-3))',
    },
    {
      name: 'Entertainment',
      spent: 200,
      budget: 200,
      percentage: 100,
      color: 'hsl(var(--chart-4))',
    },
    {
      name: 'Other',
      spent: 150,
      budget: 250,
      percentage: 60,
      color: 'hsl(var(--chart-5))',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Budget Status</CardTitle>
        <CardDescription>Monthly spending vs budget</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <div className="text-sm font-medium">
                  ${category.spent} / ${category.budget}
                </div>
              </div>
              <Progress 
                value={category.percentage} 
                className="h-2"
                style={{ 
                  '--progress-background': category.color
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
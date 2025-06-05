'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function SavingsProgress() {
  // This would normally use real data
  const savingsGoals = [
    {
      name: 'Emergency Fund',
      current: 3500,
      target: 10000,
      percentage: 35,
    },
    {
      name: 'Vacation',
      current: 1200,
      target: 3000,
      percentage: 40,
    },
    {
      name: 'New Laptop',
      current: 800,
      target: 1500,
      percentage: 53,
    },
    {
      name: 'Home Down Payment',
      current: 15000,
      target: 50000,
      percentage: 30,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Goals</CardTitle>
        <CardDescription>Track progress towards your savings targets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {savingsGoals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">{goal.name}</p>
                <p className="text-sm">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</p>
              </div>
              <Progress value={goal.percentage} className="h-2" />
              <div className="flex justify-between items-center text-sm">
                <p className="text-muted-foreground">{goal.percentage}% complete</p>
                <p className="text-muted-foreground">
                  ${(goal.target - goal.current).toLocaleString()} to go
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <p className="font-medium">Total Savings</p>
            <p className="font-bold">${(savingsGoals.reduce((sum, goal) => sum + goal.current, 0)).toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
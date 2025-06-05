'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function ExpenseOverview() {
  // This would normally use real data
  const monthlyData = [
    { category: 'Housing', amount: 1200 },
    { category: 'Food', amount: 450 },
    { category: 'Transport', amount: 300 },
    { category: 'Entertainment', amount: 200 },
    { category: 'Utilities', amount: 180 },
    { category: 'Healthcare', amount: 120 },
    { category: 'Other', amount: 150 },
  ];
  
  const weeklyData = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 65 },
    { day: 'Wed', amount: 35 },
    { day: 'Thu', amount: 50 },
    { day: 'Fri', amount: 80 },
    { day: 'Sat', amount: 120 },
    { day: 'Sun', amount: 75 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Overview</CardTitle>
        <CardDescription>A summary of your expenses for June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="categories">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>
          <TabsContent value="categories" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  layout="vertical"
                  margin={{
                    top: 20,
                    right: 30,
                    left: 60,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" tickFormatter={(value) => `$${value}`} />
                  <YAxis dataKey="category" type="category" width={80} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Bar dataKey="amount" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="weekly" className="pt-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Bar dataKey="amount" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-3 gap-4 mt-6 border-t pt-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Expenses</p>
            <p className="text-2xl font-bold">$2,600</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Highest Category</p>
            <p className="text-2xl font-bold">Housing</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">vs Last Month</p>
            <p className="text-2xl font-bold text-green-500">-5.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
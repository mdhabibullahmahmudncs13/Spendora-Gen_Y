'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function SpendingTrends() {
  // This would normally use real data
  const data = [
    { month: 'Jan', Housing: 1100, Food: 420, Transport: 280, Entertainment: 180 },
    { month: 'Feb', Housing: 1100, Food: 440, Transport: 290, Entertainment: 190 },
    { month: 'Mar', Housing: 1150, Food: 430, Transport: 300, Entertainment: 210 },
    { month: 'Apr', Housing: 1150, Food: 460, Transport: 310, Entertainment: 190 },
    { month: 'May', Housing: 1200, Food: 450, Transport: 290, Entertainment: 180 },
    { month: 'Jun', Housing: 1200, Food: 450, Transport: 300, Entertainment: 200 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Trends</CardTitle>
        <CardDescription>6-month category spending trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="Housing" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="Food" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="Transport" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="Entertainment" 
                stroke="hsl(var(--chart-4))" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 border-t pt-6">
          <div>
            <p className="text-sm text-muted-foreground">Housing</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">+9.1%</p>
              <span className="text-red-500 text-sm">↑</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Food</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">+7.1%</p>
              <span className="text-red-500 text-sm">↑</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Transport</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">+7.1%</p>
              <span className="text-red-500 text-sm">↑</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Entertainment</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">+11.1%</p>
              <span className="text-red-500 text-sm">↑</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
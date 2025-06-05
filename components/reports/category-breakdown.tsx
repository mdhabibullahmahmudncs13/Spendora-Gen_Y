'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export function CategoryBreakdown() {
  // This would normally use real data
  const data = [
    { name: 'Housing', value: 1200, color: 'hsl(var(--chart-1))' },
    { name: 'Food', value: 450, color: 'hsl(var(--chart-2))' },
    { name: 'Transport', value: 300, color: 'hsl(var(--chart-3))' },
    { name: 'Entertainment', value: 200, color: 'hsl(var(--chart-4))' },
    { name: 'Utilities', value: 180, color: 'hsl(var(--chart-5))' },
    { name: 'Healthcare', value: 120, color: 'hsl(var(--primary))' },
    { name: 'Other', value: 150, color: 'hsl(var(--muted-foreground))' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentages
  const dataWithPercentage = data.map(item => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1)
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Breakdown</CardTitle>
        <CardDescription>Your spending distribution by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataWithPercentage}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percentage }) => `${name} (${percentage}%)`}
              >
                {dataWithPercentage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {dataWithPercentage.slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="text-sm">
                <span className="font-medium">{item.name}:</span> ${item.value} ({item.percentage}%)
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
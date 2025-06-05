import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Coffee, Home, Car, Film } from 'lucide-react';

export function RecentExpenses() {
  // This would normally use real data
  const expenses = [
    {
      id: 1,
      name: 'Grocery Shopping',
      amount: 78.35,
      date: '2025-06-15',
      category: 'Food',
      icon: <ShoppingBag className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
    {
      id: 2,
      name: 'Coffee Shop',
      amount: 4.50,
      date: '2025-06-14',
      category: 'Food',
      icon: <Coffee className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
    {
      id: 3,
      name: 'Rent Payment',
      amount: 1200.00,
      date: '2025-06-01',
      category: 'Housing',
      icon: <Home className="h-4 w-4" />,
      color: 'bg-chart-1/20 text-chart-1',
    },
    {
      id: 4,
      name: 'Gas Station',
      amount: 45.75,
      date: '2025-06-12',
      category: 'Transport',
      icon: <Car className="h-4 w-4" />,
      color: 'bg-chart-3/20 text-chart-3',
    },
    {
      id: 5,
      name: 'Movie Tickets',
      amount: 24.00,
      date: '2025-06-10',
      category: 'Entertainment',
      icon: <Film className="h-4 w-4" />,
      color: 'bg-chart-4/20 text-chart-4',
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Expenses</CardTitle>
          <CardDescription>Your latest transactions</CardDescription>
        </div>
        <Badge variant="outline">View All</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full ${expense.color} flex items-center justify-center`}>
                  {expense.icon}
                </div>
                <div>
                  <p className="font-medium">{expense.name}</p>
                  <p className="text-sm text-muted-foreground">{new Date(expense.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-medium">-${expense.amount.toFixed(2)}</p>
                <Badge variant="secondary" className="text-xs">{expense.category}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
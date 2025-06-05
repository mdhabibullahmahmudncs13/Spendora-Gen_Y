import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Coffee, Home, Car, Film, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ExpenseList() {
  // This would normally use real data
  const expenses = [
    {
      id: 1,
      name: 'Grocery Shopping',
      amount: 78.35,
      date: '2025-06-15',
      category: 'Food',
      description: 'Weekly groceries from Whole Foods',
      icon: <ShoppingBag className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
    {
      id: 2,
      name: 'Coffee Shop',
      amount: 4.50,
      date: '2025-06-14',
      category: 'Food',
      description: 'Morning coffee at Starbucks',
      icon: <Coffee className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
    {
      id: 3,
      name: 'Rent Payment',
      amount: 1200.00,
      date: '2025-06-01',
      category: 'Housing',
      description: 'Monthly rent for apartment',
      icon: <Home className="h-4 w-4" />,
      color: 'bg-chart-1/20 text-chart-1',
    },
    {
      id: 4,
      name: 'Gas Station',
      amount: 45.75,
      date: '2025-06-12',
      category: 'Transport',
      description: 'Filled up the car',
      icon: <Car className="h-4 w-4" />,
      color: 'bg-chart-3/20 text-chart-3',
    },
    {
      id: 5,
      name: 'Movie Tickets',
      amount: 24.00,
      date: '2025-06-10',
      category: 'Entertainment',
      description: 'Two tickets for the new release',
      icon: <Film className="h-4 w-4" />,
      color: 'bg-chart-4/20 text-chart-4',
    },
    {
      id: 6,
      name: 'Grocery Shopping',
      amount: 65.12,
      date: '2025-06-08',
      category: 'Food',
      description: 'Weekly groceries from Trader Joe\'s',
      icon: <ShoppingBag className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
    {
      id: 7,
      name: 'Coffee Shop',
      amount: 3.75,
      date: '2025-06-07',
      category: 'Food',
      description: 'Morning coffee at local cafe',
      icon: <Coffee className="h-4 w-4" />,
      color: 'bg-chart-2/20 text-chart-2',
    },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>All Expenses</CardTitle>
        <CardDescription>A detailed list of all your expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start sm:items-center gap-4">
                <div className={`h-10 w-10 rounded-full ${expense.color} flex items-center justify-center`}>
                  {expense.icon}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <p className="font-medium">{expense.name}</p>
                    <Badge variant="outline" className="sm:ml-2 w-fit">{expense.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{expense.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">{new Date(expense.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4">
                <p className="text-lg font-medium sm:mr-6">-${expense.amount.toFixed(2)}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <div>
          <p className="text-sm text-muted-foreground">Showing 7 of 124 expenses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CircleDollarSign,
  TrendingDown,
  TrendingUp,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCurrency } from '@/components/currency-provider';
import { formatCurrency } from '@/lib/utils';

export function DashboardHeader() {
  const router = useRouter();
  const { currency } = useCurrency();
  
  // This would normally use real data
  const stats = {
    totalBalance: 4582.23,
    income: 3200.00,
    expenses: 1842.15,
    savings: 425.10,
    change: 12.4 // percentage change from last month
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's an overview of your finances</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Export
          </Button>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button 
              size="sm"
              onClick={() => router.push('/expenses')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.totalBalance, currency)}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CircleDollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Income</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.income, currency)}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Expenses</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.expenses, currency)}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Savings</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.savings, currency)}</p>
                <div className="flex items-center gap-1">
                  <span className={`text-xs ${stats.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stats.change > 0 ? '+' : ''}{stats.change}%
                  </span>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CircleDollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
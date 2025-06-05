import { ExpenseTracker } from '@/components/expenses/expense-tracker';
import { ExpenseList } from '@/components/expenses/expense-list';
import { ExpenseFilters } from '@/components/expenses/expense-filters';

export default function ExpensesPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Expense Management</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <ExpenseTracker />
        </div>
        <div className="md:col-span-2">
          <ExpenseFilters />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}
import { MonthSelector } from '@/components/reports/month-selector';
import { ExpenseOverview } from '@/components/reports/expense-overview';
import { CategoryBreakdown } from '@/components/reports/category-breakdown';
import { SpendingTrends } from '@/components/reports/spending-trends';
import { SavingsProgress } from '@/components/reports/savings-progress';
import { DownloadReport } from '@/components/reports/download-report';

export default function ReportsPage() {
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Monthly Reports</h1>
        <div className="flex items-center gap-4">
          <MonthSelector />
          <DownloadReport />
        </div>
      </div>
      
      <div className="grid gap-6 mb-6">
        <ExpenseOverview />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <CategoryBreakdown />
        <SavingsProgress />
      </div>
      
      <div className="grid gap-6">
        <SpendingTrends />
      </div>
    </div>
  );
}
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { ExpenseSummary } from '@/components/dashboard/expense-summary';
import { RecentExpenses } from '@/components/dashboard/recent-expenses';
import { SpendingByCategory } from '@/components/dashboard/spending-by-category';
import { FinancialTips } from '@/components/dashboard/financial-tips';
import { MonthlyTrend } from '@/components/dashboard/monthly-trend';
import { VideoAdvisor } from '@/components/dashboard/video-advisor';

export default function DashboardPage() {
  return (
    <div className="container py-6">
      <DashboardHeader />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <ExpenseSummary />
        <MonthlyTrend />
        <SpendingByCategory />
      </div>
      
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <div className="md:col-span-2">
          <RecentExpenses />
        </div>
        <div className="space-y-6">
          <FinancialTips />
          <VideoAdvisor />
        </div>
      </div>
    </div>
  );
}
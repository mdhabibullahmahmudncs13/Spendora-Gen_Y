import { AiFinancialAdvice } from '@/components/advisor/ai-financial-advice';
import { VideoConsultation } from '@/components/advisor/video-consultation';
import { SavingsSuggestions } from '@/components/advisor/savings-suggestions';
import { InvestmentRecommendations } from '@/components/advisor/investment-recommendations';

export default function AdvisorPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">AI Financial Advisor</h1>
      
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <VideoConsultation />
        <AiFinancialAdvice />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <SavingsSuggestions />
        <InvestmentRecommendations />
      </div>
    </div>
  );
}
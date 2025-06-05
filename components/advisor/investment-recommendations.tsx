'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, ChevronRight, TrendingUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from 'react';

export function InvestmentRecommendations() {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  
  // This would normally use real data
  const investments = [
    {
      type: 'Index Funds',
      riskLevel: 'Low-Medium',
      expectedReturn: '7-9%',
      recommendation: 'Allocate 40% of investment portfolio',
      description: 'Broad market exposure with lower fees than actively managed funds.',
    },
    {
      type: 'Retirement Account',
      riskLevel: 'Varies',
      expectedReturn: '6-8%',
      recommendation: 'Max out 401(k) match',
      description: 'Take full advantage of employer matching in your retirement account.',
    },
    {
      type: 'High-Yield Savings',
      riskLevel: 'Very Low',
      expectedReturn: '3-4%',
      recommendation: 'Emergency fund (3-6 months expenses)',
      description: 'Keep emergency funds in high-yield savings for liquidity and safety.',
    },
    {
      type: 'Bond ETFs',
      riskLevel: 'Low',
      expectedReturn: '4-5%',
      recommendation: 'Allocate 20% of investment portfolio',
      description: 'Provides income and stability to balance higher-risk investments.',
    },
    {
      type: 'Stock ETFs',
      riskLevel: 'Medium-High',
      expectedReturn: '8-10%',
      recommendation: 'Allocate 30% of investment portfolio',
      description: 'Higher growth potential with managed risk through diversification.',
    },
  ];

  const displayedInvestments = showAllRecommendations 
    ? investments 
    : investments.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Investment Recommendations
        </CardTitle>
        <CardDescription>
          Based on your financial profile and goals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Investment Type</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Expected Return</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedInvestments.map((investment, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{investment.type}</TableCell>
                    <TableCell>{investment.riskLevel}</TableCell>
                    <TableCell>{investment.expectedReturn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {!showAllRecommendations && (
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setShowAllRecommendations(true)}
            >
              Show All Recommendations
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Your Suggested Portfolio Mix</h3>
            </div>
            <div className="w-full h-8 rounded-full overflow-hidden flex">
              <div 
                className="bg-blue-500 h-full flex items-center justify-center text-xs text-white font-medium"
                style={{ width: '40%' }}
              >
                40% Index
              </div>
              <div 
                className="bg-green-500 h-full flex items-center justify-center text-xs text-white font-medium"
                style={{ width: '30%' }}
              >
                30% Stocks
              </div>
              <div 
                className="bg-yellow-500 h-full flex items-center justify-center text-xs text-white font-medium"
                style={{ width: '20%' }}
              >
                20% Bonds
              </div>
              <div 
                className="bg-purple-500 h-full flex items-center justify-center text-xs text-white font-medium"
                style={{ width: '10%' }}
              >
                10% Cash
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              This balanced portfolio is designed for moderate growth while managing risk, based on your age, income, and financial goals.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
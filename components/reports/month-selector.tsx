'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function MonthSelector() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  const previousMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentMonth(newDate);
  };
  
  const nextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentMonth(newDate);
  };
  
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={previousMonth}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="min-w-32 text-center font-medium">
        {formatMonth(currentMonth)}
      </div>
      <Button variant="outline" size="icon" onClick={nextMonth} disabled={currentMonth >= new Date()}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
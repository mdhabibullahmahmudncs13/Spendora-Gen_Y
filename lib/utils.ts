import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type Currency } from '@/lib/currencies';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: Currency): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
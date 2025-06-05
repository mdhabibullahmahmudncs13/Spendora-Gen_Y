'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCurrency } from '@/components/currency-provider';
import { currencies } from '@/lib/currencies';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select
      value={currency.code}
      onValueChange={(value) => {
        const newCurrency = currencies.find(c => c.code === value);
        if (newCurrency) {
          setCurrency(newCurrency);
        }
      }}
    >
      <SelectTrigger className="w-[130px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.symbol} {c.code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
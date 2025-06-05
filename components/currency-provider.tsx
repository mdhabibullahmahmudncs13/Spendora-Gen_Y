'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { type Currency, currencies } from '@/lib/currencies';

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: currencies[0],
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferred_currency');
    if (savedCurrency) {
      try {
        const parsed = JSON.parse(savedCurrency);
        if (currencies.some(c => c.code === parsed.code)) {
          setCurrency(parsed);
        }
      } catch (e) {
        localStorage.removeItem('preferred_currency');
      }
    }
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem('preferred_currency', JSON.stringify(newCurrency));
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingHero() {
  // Normally we'd implement this functionality, but for demo it's just mocked
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup function
    if (email) {
      window.location.href = '/register';
    }
  };
  
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/5 dark:from-background dark:to-background/20 z-0" />
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Your Personal <span className="text-primary">Financial Advisor</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Track expenses, get AI-powered insights, and plan your financial future with confidence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                  <Button type="submit">Get Started</Button>
                </form>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Free 14-day trial. No credit card required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">AI-powered insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Voice expense tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Interactive video advisor</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg border shadow-xl">
              <Image
                src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
                alt="Spendora dashboard"
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Smart Financial Dashboard</h3>
                  <p className="text-sm max-w-md">
                    Get a complete overview of your finances with interactive charts and AI-powered recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-8 -right-12 md:-right-16 w-40 h-24 bg-card rounded-lg border shadow-lg p-3 rotate-6">
              <div className="h-2 w-16 bg-primary/20 rounded mb-2"></div>
              <div className="h-2 w-24 bg-primary/20 rounded mb-2"></div>
              <div className="h-2 w-20 bg-primary/20 rounded"></div>
              <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="text-xs font-bold">+12%</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-12 md:-left-16 w-48 h-28 bg-card rounded-lg border shadow-lg p-3 -rotate-3">
              <div className="h-2 w-16 bg-primary/20 rounded mb-2"></div>
              <div className="h-2 w-32 bg-primary/20 rounded mb-3"></div>
              <div className="flex gap-1">
                <div className="h-8 w-8 rounded-full bg-chart-1/30"></div>
                <div className="h-8 w-8 rounded-full bg-chart-2/30"></div>
                <div className="h-8 w-8 rounded-full bg-chart-3/30"></div>
                <div className="h-8 w-8 rounded-full bg-chart-4/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-background to-muted p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Financial Journey Today</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of users who have transformed their financial habits with Spendora.
                Get started for free and discover the power of AI-driven financial planning.
              </p>
              
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col p-6 bg-card rounded-lg border shadow-sm">
                    <h3 className="text-xl font-bold mb-1">Free</h3>
                    <p className="text-muted-foreground mb-4">For personal use</p>
                    <p className="text-3xl font-bold mb-6">$0<span className="text-muted-foreground text-base font-normal">/month</span></p>
                    <ul className="space-y-2 mb-6 flex-1">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Basic expense tracking
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Monthly reports
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Limited AI insights
                      </li>
                    </ul>
                    <Link href="/register">
                      <Button className="w-full" variant="outline">Get Started</Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col p-6 bg-primary text-primary-foreground rounded-lg border shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary-foreground/10 text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
                      Popular
                    </div>
                    <h3 className="text-xl font-bold mb-1">Pro</h3>
                    <p className="text-primary-foreground/80 mb-4">For power users</p>
                    <p className="text-3xl font-bold mb-6">$9.99<span className="text-primary-foreground/80 text-base font-normal">/month</span></p>
                    <ul className="space-y-2 mb-6 flex-1">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Advanced expense tracking
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Detailed reports & analysis
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Full AI advisor features
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Video consultation
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Voice expense tracking
                      </li>
                    </ul>
                    <Link href="/register">
                      <Button className="w-full" variant="secondary">Start Free Trial</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl md:h-[600px] md:w-[600px]" />
              <div className="space-y-8">
                <div className="relative rounded-xl overflow-hidden border bg-card p-6 shadow-md">
                  <div className="space-y-4">
                    <h4 className="font-semibold">AI-Powered Financial Health Score</h4>
                    <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Your Score: 78/100</span>
                      <span className="text-primary font-medium">Good</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your financial health is improving. We have 3 recommendations to help you reach 85+.
                    </p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden border bg-card p-6 shadow-md">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Potential Savings</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <p className="text-sm text-muted-foreground">Monthly</p>
                        <p className="text-xl font-bold">$145</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <p className="text-sm text-muted-foreground">Yearly</p>
                        <p className="text-xl font-bold">$1,740</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <p className="text-sm text-muted-foreground">5 Years</p>
                        <p className="text-xl font-bold">$9,270</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on your current spending patterns and our AI recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
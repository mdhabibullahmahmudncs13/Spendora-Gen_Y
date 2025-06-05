import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, BarChart3, CircleDollarSign, Lightbulb, LineChart, Mic, Video } from 'lucide-react';

export function Features() {
  const features = [
    {
      title: 'Expense Tracking',
      description: 'Log expenses by category and date with a simple form or voice commands.',
      icon: <BadgeDollarSign className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Monthly Reports',
      description: 'Auto-generated visual reports showing your spending trends and habits.',
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
    },
    {
      title: 'AI Financial Tips',
      description: 'Get personalized savings and investment advice powered by AI.',
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Video Interaction',
      description: 'Interact with AI video agents that explain reports and answer questions.',
      icon: <Video className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Voice Input',
      description: 'Log expenses using natural voice commands for a hands-free experience.',
      icon: <Mic className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Spending Analysis',
      description: 'See where your money goes with detailed spending breakdowns by category.',
      icon: <LineChart className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Financial Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spendora combines powerful tracking tools with AI-powered insights to help you take control of your finances.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl -z-10" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center p-8 rounded-xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">AI-Powered Financial Planning</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Personalized Insights</h4>
                    <p className="text-muted-foreground">Get tailored financial advice based on your spending patterns.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Smart Saving Goals</h4>
                    <p className="text-muted-foreground">AI helps you set achievable saving targets based on your income and expenses.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Investment Recommendations</h4>
                    <p className="text-muted-foreground">Discover investment opportunities tailored to your financial profile.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
                alt="AI Financial Planning"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
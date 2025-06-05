import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Spendora completely changed how I manage my finances. The AI recommendations helped me save an extra $350 each month!",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      stars: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The expense tracking is so intuitive, and the monthly reports give me insights I never had before. Highly recommend!",
      author: "Michael Chen",
      role: "Software Engineer",
      stars: 5,
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Voice input feature is a game-changer! I can log expenses on the go without typing a thing. The future is here.",
      author: "Emma Rodriguez",
      role: "Freelance Designer",
      stars: 4,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50" id="testimonials">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have transformed their financial habits with Spendora.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-5 w-5 text-muted" />
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
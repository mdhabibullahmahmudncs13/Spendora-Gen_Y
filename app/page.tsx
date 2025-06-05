import { LandingHero } from '@/components/landing/landing-hero';
import { Features } from '@/components/landing/features';
import { Testimonials } from '@/components/landing/testimonials';
import { CallToAction } from '@/components/landing/call-to-action';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <LandingHero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
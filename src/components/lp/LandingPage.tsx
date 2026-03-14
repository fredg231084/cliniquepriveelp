'use client';

import { LPConfig } from '@/data/lp/types';
import { Hero } from './Hero';
import { WhyChooseUs } from './WhyChooseUs';
import { BookingOptions } from './BookingOptions';
import { WhatsIncluded } from './WhatsIncluded';
import { PricingCta } from './PricingCta';
import { Faq } from './Faq';
import { FinalCta } from './FinalCta';
import { StickyMobileCta } from './StickyMobileCta';
import { MinimalFooter } from './MinimalFooter';

interface LandingPageProps {
  config: LPConfig;
}

export function LandingPage({ config }: LandingPageProps) {
  return (
    <div
      lang={config.lang}
      className="min-h-screen"
      data-lp-slug={config.slug}
      data-lp-lang={config.lang}
      data-lp-service={config.slug}
    >
      {/* SECTION 1 — Hero + Conversion Form */}
      <Hero config={config} />

      {/* SECTION 2 — Why Choose Us */}
      <WhyChooseUs config={config} />

      {/* SECTION 3 — Booking Options */}
      <BookingOptions config={config} />

      {/* SECTION 4 — What's Included */}
      <WhatsIncluded config={config} />

      {/* SECTION 5 — Pricing / Trust CTA */}
      <PricingCta config={config} />

      {/* SECTION 6 — FAQ */}
      <Faq config={config} />

      {/* SECTION 7 — Final CTA */}
      <FinalCta config={config} />

      {/* Minimal footer */}
      <MinimalFooter config={config} />

      {/* Sticky mobile CTA */}
      <StickyMobileCta config={config} />
    </div>
  );
}

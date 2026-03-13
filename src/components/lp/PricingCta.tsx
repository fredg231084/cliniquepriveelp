'use client';

import { LPConfig } from '@/data/lp/types';
import { trackCtaClick } from '@/lib/tracking';

interface PricingCtaProps {
  config: LPConfig;
}

export function PricingCta({ config }: PricingCtaProps) {
  const { pricingCta } = config;

  const scrollToForm = () => {
    trackCtaClick(config.slug, config.lang, 'pricing-cta');
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="lp-section bg-cream-100" id="pricing">
      <div className="lp-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="lp-overline mb-3">{pricingCta.overline}</p>
          <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
            {pricingCta.heading}
          </h2>

          {/* Price display */}
          {pricingCta.price && (
            <div className="mt-6 inline-flex items-baseline gap-2">
              <span className="text-4xl font-bold text-navy-800 md:text-5xl">
                {pricingCta.price}
              </span>
              {pricingCta.priceLabel && (
                <span className="text-base text-navy-600/60">
                  {pricingCta.priceLabel}
                </span>
              )}
            </div>
          )}

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy-600/70">
            {pricingCta.description}
          </p>

          {/* Feature pills */}
          {pricingCta.features && pricingCta.features.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {pricingCta.features.map((feature, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy-700 shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={scrollToForm}
              className="lp-btn-primary"
              data-tracking="pricing-cta-btn"
            >
              {pricingCta.ctaText}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

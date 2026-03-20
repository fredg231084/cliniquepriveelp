'use client';

import { LPConfig } from '@/data/lp/types';
import { trackCtaClick, trackClickToCall } from '@/lib/tracking';

interface FinalCtaProps {
  config: LPConfig;
}

function bookingUrl(lang: string, utmContent: string) {
  return `https://rendezvous.cliniqueprivee.com?lang=${lang}&utm_source=google&utm_medium=cpc&utm_campaign=lp-clinique&utm_content=${utmContent}`;
}

export function FinalCta({ config }: FinalCtaProps) {
  const { finalCta } = config;

  return (
    <section className="hero-gradient bg-noise relative overflow-hidden" id="final-cta">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-navy-600/20 blur-3xl" />

      <div className="lp-section relative">
        <div className="lp-container text-center">
          <h2 className="mx-auto max-w-lg text-2xl font-bold tracking-tight text-white md:text-3xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
            {finalCta.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={bookingUrl(config.lang, 'bottom-cta')}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn-gold w-full sm:w-auto"
              data-tracking="final-cta-form-btn"
              onClick={() => trackCtaClick(config.slug, config.lang, 'final-cta')}
            >
              {finalCta.ctaText}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href={`tel:${config.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-[15px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5 sm:w-auto"
              id="lp-final-phone-btn"
              data-tracking="final-click-to-call"
              onClick={() => trackClickToCall(config.slug, config.lang)}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {finalCta.phoneCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

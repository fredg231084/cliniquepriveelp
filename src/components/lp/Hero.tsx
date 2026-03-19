'use client';

import Link from 'next/link';
import { LPConfig } from '@/data/lp/types';
import { Logo } from './Logo';
import { ConversionForm } from './ConversionForm';
import { trackClickToCall } from '@/lib/tracking';

interface HeroProps {
  config: LPConfig;
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="hero-gradient bg-noise relative overflow-hidden" id="hero">
      {/* Subtle gradient orbs for depth */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative">
        {/* Top bar — aligned with lp-container, same max-width as hero content */}
        <div className="px-5 pt-5 pb-5 md:px-8 md:pt-8 md:pb-5 lg:px-12">
          <div className="lp-container flex items-center justify-between gap-4">
            {/* Logo */}
            <Logo className="brightness-0 invert" />

            {/* Right side: phone CTA + lang switcher */}
            <div className="flex items-center gap-3">
              {/* Phone CTA button */}
              <a
                href={`tel:${config.phone}`}
                onClick={() => trackClickToCall(config.slug, config.lang)}
                data-tracking="header-click-to-call"
                className="hidden items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-navy-900 shadow-md transition-all duration-200 hover:bg-navy-900 hover:text-white hover:shadow-lg active:scale-[0.98] sm:inline-flex"
              >
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {config.phoneDisplay}
              </a>

              {/* Language switcher — discreet */}
              {config.alternateSlug && (
                <Link
                  href={`/lp/${config.alternateSlug}`}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white/90"
                  data-tracking="lang-switch"
                >
                  {config.labels.langSwitchText}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="lp-container px-5 pb-8 pt-6 md:px-8 md:pb-16 md:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr,420px] lg:gap-12 xl:gap-16">
            {/* Left — Value proposition */}
            <div className="max-w-xl">
              <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                {config.hero.h1}
              </h1>

              <p className="mt-3 text-[15px] leading-relaxed text-white/65 md:mt-4 md:text-lg md:leading-relaxed">
                {config.hero.subtitle}
              </p>

              {/* Trust bullets */}
              <ul className="mt-5 space-y-2.5 md:mt-7 md:space-y-3">
                {config.hero.trustBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/15">
                      <svg className="h-3 w-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[15px] leading-snug text-white/80">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing cue */}
              {config.hero.pricingCue && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/8 px-4 py-2.5 backdrop-blur-sm md:mt-7">
                  <span className="text-sm font-medium text-gold-300">{config.hero.pricingCue}</span>
                </div>
              )}

              {/* Click-to-call — visible on mobile below bullets */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:hidden">
                <a
                  href={`tel:${config.phone}`}
                  className="lp-btn-gold inline-flex flex-1 justify-center"
                  id="lp-hero-phone-btn"
                  data-tracking="hero-click-to-call"
                  onClick={() => trackClickToCall(config.slug, config.lang)}
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {config.lang === 'fr' ? 'Appeler maintenant' : 'Call now'} — {config.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right — Conversion form */}
            <div className="w-full lg:sticky lg:top-6">
              <ConversionForm config={config} variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

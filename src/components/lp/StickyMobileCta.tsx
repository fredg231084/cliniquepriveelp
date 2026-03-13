'use client';

import { useEffect, useState } from 'react';
import { LPConfig } from '@/data/lp/types';
import { trackCtaClick, trackClickToCall } from '@/lib/tracking';

interface StickyMobileCtaProps {
  config: LPConfig;
}

export function StickyMobileCta({ config }: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero form
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    trackCtaClick(config.slug, config.lang, 'sticky-mobile');
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-navy-800/5 bg-white/95 px-4 py-3 shadow-sticky backdrop-blur-lg transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      id="lp-sticky-cta"
      data-tracking="sticky-mobile-cta"
    >
      <div className="flex items-center gap-2.5">
        <button
          onClick={scrollToForm}
          className="lp-btn-primary flex-1 py-3 text-sm"
          data-tracking="sticky-form-btn"
        >
          {config.stickyCta.text}
        </button>
        <a
          href={`tel:${config.phone}`}
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl border border-navy-200 bg-white text-navy-800 transition-colors hover:bg-cream-50"
          data-tracking="sticky-click-to-call"
          onClick={() => trackClickToCall(config.slug, config.lang)}
          aria-label={config.stickyCta.phoneText}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

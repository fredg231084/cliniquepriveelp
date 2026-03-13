// =============================================
// Clinique Privée — Tracking Utilities
// =============================================
// This file provides helpers for GA4 / Google Ads conversion tracking.
// Events are sent via the dataLayer (GTM) pattern.
// Wire these up in GTM once tags are configured.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Push an event to the GTM dataLayer.
 * Safe to call even if GTM hasn't loaded yet.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/**
 * Track LP form submission
 */
export function trackFormSubmission(slug: string, lang: string) {
  trackEvent('lp_form_submit', {
    lp_slug: slug,
    lp_lang: lang,
    lp_service: slug.replace(/-(montreal|fr|en)$/i, ''),
  });
}

/**
 * Track click-to-call
 */
export function trackClickToCall(slug: string, lang: string) {
  trackEvent('lp_click_to_call', {
    lp_slug: slug,
    lp_lang: lang,
  });
}

/**
 * Track CTA click (for any CTA button on the page)
 */
export function trackCtaClick(
  slug: string,
  lang: string,
  location: string
) {
  trackEvent('lp_cta_click', {
    lp_slug: slug,
    lp_lang: lang,
    cta_location: location,
  });
}

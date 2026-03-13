// =============================================
// Clinique Privée — Landing Page Type Definitions
// =============================================

export interface LPConfig {
  // Page metadata
  slug: string;
  lang: 'fr' | 'en';
  alternateSlug?: string; // Slug of the other language version
  title: string;
  description: string;
  phone: string;
  phoneDisplay: string;

  // Hero section
  hero: {
    overline: string;
    h1: string;
    subtitle: string;
    trustBullets: string[];
    pricingCue?: string;
  };

  // Conversion form
  form: {
    heading: string;
    subheading?: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    appointmentLabel?: string;
    appointmentOptions?: string[];
    ctaText: string;
    privacyNote: string;
  };

  // Why choose us
  whyChooseUs: {
    overline: string;
    heading: string;
    cards: {
      icon: 'clock' | 'shield' | 'star' | 'building' | 'heart' | 'check';
      title: string;
      description: string;
    }[];
  };

  // How it works
  howItWorks: {
    overline: string;
    heading: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };

  // What's included
  whatsIncluded: {
    overline: string;
    heading: string;
    items: string[];
  };

  // Pricing / Trust CTA
  pricingCta: {
    overline: string;
    heading: string;
    price?: string;
    priceLabel?: string;
    description: string;
    ctaText: string;
    features?: string[];
  };

  // FAQ
  faq: {
    overline: string;
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  // Final CTA
  finalCta: {
    heading: string;
    subtitle: string;
    ctaText: string;
    phoneCtaText: string;
  };

  // Sticky mobile CTA
  stickyCta: {
    text: string;
    phoneText: string;
  };

  // Shared labels
  labels: {
    langSwitchText: string;
    langSwitchLabel: string;
  };
}

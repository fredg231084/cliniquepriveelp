import { LPConfig } from './types';

export const privateDoctorMontreal: LPConfig = {
  slug: 'private-doctor-montreal',
  lang: 'en',
  alternateSlug: 'medecin-prive-montreal',
  title: 'Private Doctor in Montreal — Appointment in 24–48h | Clinique Privée',
  description:
    'See a private doctor in Montreal this week. No wait list, no referral needed. Modern clinic, transparent pricing.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Private Doctor in Montreal\n— Appointment in 24–48h',
    subtitle:
      'See an experienced physician this week. No wait list, no referral required.',
    trustBullets: [
      'Appointment confirmed within 24–48 hours',
      'Full 30-minute consultation',
      'ENT specialists available on-site',
      'Complete medical follow-up same day',
    ],
    pricingCue: 'Consultations from $200 — Insurance receipts provided',
  },

  form: {
    heading: 'Book your consultation',
    subheading: 'Our team calls you back today',
    namePlaceholder: 'Full name',
    phonePlaceholder: 'Phone number',
    emailPlaceholder: 'Email address',
    appointmentLabel: 'Type of consultation (optional)',
    appointmentOptions: [
      'General consultation',
      'Annual health checkup',
      'Medical follow-up',
      'Urgent concern',
    ],
    ctaText: 'Request my appointment',
    privacyNote: 'Your information is confidential and protected.',
  },

  whyChooseUs: {
    overline: 'Why choose us',
    heading: 'Private medicine, done right.',
    cards: [
      {
        icon: 'clock',
        title: '24–48h, not 6 months',
        description:
          'While the public system makes you wait, we see you this week. Often within 48 hours.',
      },
      {
        icon: 'shield',
        title: '$200, all-inclusive',
        description:
          'Full consultation, complete medical documentation, insurance receipt. No hidden fees.',
      },
      {
        icon: 'building',
        title: 'ENT specialists on-site',
        description:
          'Direct access to our ENT specialists with no extra wait. Everything handled in one visit.',
      },
    ],
  },

  howItWorks: {
    overline: 'How it works',
    heading: 'Simple. Fast. No hassle.',
    steps: [
      {
        number: 1,
        title: 'Submit your request',
        description:
          '30 seconds. Name, phone, email. That\'s it.',
      },
      {
        number: 2,
        title: 'We call you back',
        description:
          'Our team confirms your appointment the same day.',
      },
      {
        number: 3,
        title: 'See your doctor',
        description:
          '30 minutes. An attentive physician, a real consultation.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'What\'s included',
    heading: 'Your private consultation includes',
    items: [
      'Full 30-minute medical consultation',
      'Health assessment and symptom evaluation',
      'Complete medical documentation provided',
      'Guidance toward the right specialist care if needed',
      'Access to ENT specialists on-site',
    ],
  },

  pricingCta: {
    overline: 'Pricing',
    heading: 'One flat fee. Zero surprises.',
    price: '$200',
    priceLabel: 'per consultation',
    description:
      '30-minute consultation with a family physician. Fixed price, no surprises. Insurance receipt provided. Annual family plan available.',
    ctaText: 'Book now',
    features: [
      '30-min consultation',
      'No wait list',
      'Insurance receipts',
    ],
  },

  faq: {
    overline: 'Frequently asked questions',
    heading: 'Everything you need to know',
    items: [
      {
        question: 'How quickly can I get an appointment?',
        answer:
          'Within 24 to 48 hours in most cases. For urgent needs, same-day availability is often possible.',
      },
      {
        question: 'Do I need a referral?',
        answer:
          'No. No referral needed. You book directly with our clinic.',
      },
      {
        question: 'How does payment work?',
        answer:
          'On-site, by credit or debit card. Insurance receipt provided.',
      },
      {
        question: 'What\'s included in the consultation?',
        answer:
          'Full assessment, complete medical documentation, guidance toward specialist care if needed. 30 minutes entirely focused on you.',
      },
      {
        question: 'Where are you located?',
        answer:
          '1100 Beaumont Ave, Suite 302, Mont-Royal. Free on-site parking. Wheelchair accessible.',
      },
    ],
  },

  finalCta: {
    heading: 'Your appointment is 48 hours away.',
    subtitle:
      'Physicians available this week. Submit your request now — spots are limited.',
    ctaText: 'Request my appointment',
    phoneCtaText: '(514) 900-1234',
  },

  stickyCta: {
    text: 'Book now',
    phoneText: 'Call',
  },

  labels: {
    langSwitchText: 'Français',
    langSwitchLabel: 'Passer au français',
  },
};

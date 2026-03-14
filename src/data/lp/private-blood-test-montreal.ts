import { LPConfig } from './types';

export const privateBloodTestMontreal: LPConfig = {
  slug: 'private-blood-test-montreal',
  lang: 'en',
  alternateSlug: 'prise-de-sang-privee-montreal',
  title: 'Private Blood Test in Montreal — No Wait | Clinique Privée',
  description:
    'Private blood tests in Montreal. Fast appointment, reliable results. Modern clinic, transparent pricing.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Private Blood Tests\nin Montreal — No Wait',
    subtitle:
      'Fast appointment in a professional, comfortable setting. Reliable results, often within 48 hours.',
    trustBullets: [
      'Appointments often available within 48 hours',
      'Professional blood draw in a private setting',
      'Wide range of tests available',
      'Fast and confidential results',
    ],
    pricingCue: 'Pricing varies by tests requested',
  },

  form: {
    heading: 'Book your blood test',
    subheading: 'Our team will contact you quickly',
    namePlaceholder: 'Full name',
    phonePlaceholder: 'Phone number',
    emailPlaceholder: 'Email address',
    appointmentLabel: 'Type of test (optional)',
    appointmentOptions: [
      'General blood panel',
      'Hormone testing',
      'STI screening',
      'Medical follow-up / other',
    ],
    ctaText: 'Submit my request',
    privacyNote: 'Your information is confidential and protected.',
  },

  whyChooseUs: {
    overline: 'Why choose us',
    heading: 'Simple, professional private blood testing',
    cards: [
      {
        icon: 'clock',
        title: 'No wait list',
        description:
          'Get a slot within days. No endless queues or months-long delays.',
      },
      {
        icon: 'shield',
        title: 'Transparent pricing',
        description:
          'Clear quote before your appointment. Insurance receipts provided, no surprises.',
      },
      {
        icon: 'check',
        title: 'Fast, reliable results',
        description:
          'Tests processed by certified labs. Results delivered securely and promptly.',
      },
    ],
  },

  howItWorks: {
    overline: 'How it works',
    heading: 'Your blood test in three steps',
    steps: [
      {
        number: 1,
        title: 'Submit your request',
        description:
          'Fill in the form in 30 seconds. No commitment.',
      },
      {
        number: 2,
        title: 'Appointment confirmation',
        description:
          'Our team contacts you to confirm date, time, and any prep needed.',
      },
      {
        number: 3,
        title: 'Blood draw at the clinic',
        description:
          'Come in for a quick, professional blood draw.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'What\'s included',
    heading: 'Your appointment includes',
    items: [
      'Professional blood draw',
      'Fast and simple appointment process',
      'Secure delivery of results',
      'Private and comfortable setting',
      'Follow-up with a doctor if needed',
    ],
  },

  pricingCta: {
    overline: 'Pricing',
    heading: 'Transparent blood test pricing',
    description:
      'Cost depends on the tests requested. Clear quote provided before your appointment. No surprises.',
    ctaText: 'Request an appointment',
    features: [
      'Quote before appointment',
      'Insurance receipts provided',
      'Fast results',
    ],
  },

  faq: {
    overline: 'Frequently asked questions',
    heading: 'Your questions, answered',
    items: [
      {
        question: 'When can I get an appointment?',
        answer:
          'Most blood test appointments are available within 48 business hours.',
      },
      {
        question: 'Do I need a prescription?',
        answer:
          'Some tests require a prescription. If you don\'t have one, our doctor can provide one during a consultation.',
      },
      {
        question: 'Do I need to fast?',
        answer:
          'It depends on the tests. Our team will let you know what prep is needed when confirming your appointment.',
      },
      {
        question: 'How will I receive my results?',
        answer:
          'Results are delivered securely, most available within a few days.',
      },
      {
        question: 'Where are you located?',
        answer:
          '1100 Beaumont Ave, Suite 302, Mont-Royal. On-site parking available.',
      },
    ],
  },

  finalCta: {
    heading: 'Book now — limited availability',
    subtitle:
      'Don\'t put your health on hold. Submit your request or call us directly.',
    ctaText: 'Book my blood test',
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

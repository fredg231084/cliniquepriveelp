import { LPConfig } from './types';

export const privateBloodTestMontreal: LPConfig = {
  slug: 'private-blood-test-montreal',
  lang: 'en',
  alternateSlug: 'prise-de-sang-privee-montreal',
  title: 'Private Blood Test in Montreal — Fast Results | Clinique Privée',
  description:
    'Private blood tests in Montreal within 48h. No long wait. Certified labs, transparent pricing, insurance receipts.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Private Blood Tests\nin Montreal — Fast Results',
    subtitle:
      'Appointment within 48 hours in a professional setting. Reliable results, delivered securely.',
    trustBullets: [
      'Appointment often available within 48 hours',
      'Blood draw by qualified professionals',
      'Wide range of tests available',
      'Fast, confidential results',
    ],
    pricingCue: 'Clear pricing by test — Quote before your appointment',
  },

  form: {
    heading: 'Book your blood test',
    subheading: 'Our team contacts you today',
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
    ctaText: 'Request my appointment',
    privacyNote: 'Your information is confidential and protected.',
  },

  whyChooseUs: {
    overline: 'Why choose us',
    heading: 'Private blood testing, without the hassle.',
    cards: [
      {
        icon: 'clock',
        title: 'Within 48 hours',
        description:
          'No public lab queue. Your slot is confirmed quickly — often the next day.',
      },
      {
        icon: 'shield',
        title: 'Clear quote, zero surprises',
        description:
          'Pricing communicated before your appointment. Insurance receipts provided.',
      },
      {
        icon: 'check',
        title: 'Certified, fast results',
        description:
          'Tests processed by accredited labs. Results delivered securely, typically within a few days.',
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
        title: 'We confirm your appointment',
        description:
          'Our team contacts you and lets you know what prep is needed.',
      },
      {
        number: 3,
        title: 'Blood draw at the clinic',
        description:
          'Quick, professional, in a private and comfortable setting.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'What\'s included',
    heading: 'Your appointment includes',
    items: [
      'Blood draw by qualified professionals',
      'Processing at an accredited laboratory',
      'Secure delivery of your results',
      'Private, clean, and comfortable setting',
      'Doctor follow-up available if needed',
    ],
  },

  pricingCta: {
    overline: 'Pricing',
    heading: 'Clear pricing. Zero surprises.',
    description:
      'Cost varies by tests requested. Quote provided before your appointment. Insurance receipt included. No hidden fees.',
    ctaText: 'Book now',
    features: [
      'Quote before appointment',
      'Insurance receipts',
      'Fast results',
    ],
  },

  faq: {
    overline: 'Frequently asked questions',
    heading: 'Everything you need to know',
    items: [
      {
        question: 'When can I get an appointment?',
        answer:
          'Within 48 business hours in most cases. Contact us for urgent requests.',
      },
      {
        question: 'Do I need a medical request form?',
        answer:
          'Some tests require a medical request. If you don\'t have one, our team can guide you when you contact us.',
      },
      {
        question: 'Do I need to fast?',
        answer:
          'It depends on the tests. Our team will let you know what preparation is needed when confirming your appointment.',
      },
      {
        question: 'How will I receive my results?',
        answer:
          'Securely and confidentially. Most results are available within a few days.',
      },
      {
        question: 'Where are you located?',
        answer:
          '1100 Beaumont Ave, Suite 302, Mont-Royal. Free on-site parking.',
      },
    ],
  },

  finalCta: {
    heading: 'Your results are 48 hours away.',
    subtitle:
      'Limited spots this week. Submit your request now and our team will contact you today.',
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

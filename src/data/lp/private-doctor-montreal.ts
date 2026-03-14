import { LPConfig } from './types';

export const privateDoctorMontreal: LPConfig = {
  slug: 'private-doctor-montreal',
  lang: 'en',
  alternateSlug: 'medecin-prive-montreal',
  title: 'Private Doctor in Montreal — No Wait | Clinique Privée',
  description:
    'Private doctor in Montreal. Appointments within days, no wait list. Modern clinic, transparent pricing.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Private Doctor in Montreal\n— No Wait',
    subtitle:
      'Fast appointment with an experienced physician. Book in minutes.',
    trustBullets: [
      'Appointments available this week',
      'Full 30-minute consultation',
      'Direct access to on-site ENT specialists',
      'Fast results and follow-ups',
    ],
    pricingCue: 'Consultations starting at $200',
  },

  form: {
    heading: 'Request an appointment',
    subheading: 'Quick response from our team',
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
    ctaText: 'Submit my request',
    privacyNote: 'Your information is confidential and protected.',
  },

  whyChooseUs: {
    overline: 'Why choose us',
    heading: 'Private medical care designed around you',
    cards: [
      {
        icon: 'clock',
        title: 'No wait list',
        description:
          'Appointments within days, not months. Skip the endless public system queues.',
      },
      {
        icon: 'shield',
        title: 'Transparent pricing',
        description:
          'No surprises. Clear fees before your visit, receipts for private insurance.',
      },
      {
        icon: 'building',
        title: 'Fast specialist access',
        description:
          'On-site ENT specialists, modern clinic in Montreal. Everything under one roof.',
      },
    ],
  },

  howItWorks: {
    overline: 'How it works',
    heading: 'Three simple steps',
    steps: [
      {
        number: 1,
        title: 'Submit your request',
        description:
          'Fill out the form in 30 seconds. No commitment.',
      },
      {
        number: 2,
        title: 'Our team contacts you',
        description:
          'A team member calls you back quickly to confirm the details.',
      },
      {
        number: 3,
        title: 'See your doctor',
        description:
          'Attend your appointment. Attentive and thorough consultation.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'What\'s included',
    heading: 'Your private consultation includes',
    items: [
      'Full medical consultation with a doctor',
      'Thorough assessment of your health',
      'Prescription if needed',
      'Specialist referral if necessary',
      'Direct access to on-site ENT specialists',
    ],
  },

  pricingCta: {
    overline: 'Pricing',
    heading: 'Accessible and transparent medical care',
    price: '$200',
    priceLabel: 'per consultation',
    description:
      'Complete medical consultation with a family physician. Annual family plan also available.',
    ctaText: 'Book an appointment',
    features: [
      '30-min consultation',
      'No wait list',
      'Fast follow-up',
    ],
  },

  faq: {
    overline: 'Frequently asked questions',
    heading: 'Your questions, answered',
    items: [
      {
        question: 'How quickly can I get an appointment?',
        answer:
          'Most patients get an appointment within a few business days. Walk-in availability also offered for urgent cases.',
      },
      {
        question: 'Do I need a referral?',
        answer:
          'No. You can book directly with our clinic, no referral needed.',
      },
      {
        question: 'How does payment work?',
        answer:
          'Payment on-site by credit or debit card. Insurance receipts provided.',
      },
      {
        question: 'What\'s included in the consultation?',
        answer:
          'Full medical assessment, prescriptions if needed, specialist referrals when appropriate.',
      },
      {
        question: 'Where are you located?',
        answer:
          '1100 Beaumont Ave, Suite 302, Mont-Royal. On-site parking, wheelchair accessible.',
      },
    ],
  },

  finalCta: {
    heading: 'Book now — limited availability',
    subtitle:
      'Don\'t put your health on hold. Submit your request or call us directly.',
    ctaText: 'Request an appointment',
    phoneCtaText: '(514) 900-1234',
  },

  stickyCta: {
    text: 'Book appointment',
    phoneText: 'Call',
  },

  labels: {
    langSwitchText: 'Français',
    langSwitchLabel: 'Passer au français',
  },
};

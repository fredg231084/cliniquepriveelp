import { LPConfig } from './types';

export const privateDoctorMontreal: LPConfig = {
  slug: 'private-doctor-montreal',
  lang: 'en',
  alternateSlug: 'medecin-prive-montreal',
  title: 'Private Doctor in Montreal — Fast Appointments | Clinique Privée',
  description:
    'See a private doctor in Montreal within days. No long wait times. Modern private clinic in the heart of Montreal.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'See a private doctor\nquickly in Montreal',
    subtitle:
      'Get a medical appointment within days at a modern private clinic. Attentive care, no long wait times.',
    trustBullets: [
      'Appointments available this week',
      'Full 30-minute consultation',
      'Direct access to on-site ENT specialists',
      'Fast results and follow-ups',
    ],
    pricingCue: 'Starting at $200 per consultation',
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
        title: 'Fast access',
        description:
          'Get an appointment within days, not months. Your time matters.',
      },
      {
        icon: 'shield',
        title: 'Clear pricing',
        description:
          'No surprises. Our fees are clearly posted and explained before your visit.',
      },
      {
        icon: 'building',
        title: 'Modern clinic',
        description:
          'A private, professional, and welcoming medical environment in Mont-Royal.',
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
          'Fill out the form above. It\'s quick and commitment-free.',
      },
      {
        number: 2,
        title: 'Our team contacts you',
        description:
          'A team member will call you back quickly to confirm the details.',
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
          'Most patients get an appointment within a few business days. For urgent cases, we also offer walk-in availability.',
      },
      {
        question: 'Do I need a referral?',
        answer:
          'No referral is needed. You can book an appointment directly with our clinic.',
      },
      {
        question: 'How does payment work?',
        answer:
          'Payment is collected on-site at the time of your visit. We accept credit and debit cards. Receipts for private insurance claims are provided.',
      },
      {
        question: 'What\'s included in the consultation?',
        answer:
          'Each consultation includes a full medical assessment, a discussion of your health concerns, prescriptions if needed, and referrals to specialists when appropriate.',
      },
      {
        question: 'Where are you located?',
        answer:
          'Our clinic is located at 1100 Beaumont Ave, Suite 302, in Mont-Royal. On-site parking available. Wheelchair accessible.',
      },
    ],
  },

  finalCta: {
    heading: 'Ready to see a doctor quickly?',
    subtitle: 'Submit your request now or call us directly.',
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

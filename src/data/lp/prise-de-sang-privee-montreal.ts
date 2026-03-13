import { LPConfig } from './types';

export const priseDeSangPriveeMontreal: LPConfig = {
  slug: 'prise-de-sang-privee-montreal',
  lang: 'fr',
  alternateSlug: 'private-blood-test-montreal',
  title: 'Prise de sang privée à Montréal — Rendez-vous rapide | Clinique Privée',
  description:
    'Prise de sang privée à Montréal. Rendez-vous rapide, résultats fiables. Clinique moderne avec prélèvements professionnels.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Prise de sang privée\nrapide à Montréal',
    subtitle:
      'Obtenez votre prise de sang rapidement dans un cadre professionnel et confortable. Sans longue attente, avec des résultats fiables.',
    trustBullets: [
      'Rendez-vous rapide, souvent dans les 48 heures',
      'Prélèvement professionnel dans un cadre privé',
      'Large gamme d\'analyses disponibles',
      'Résultats rapides et confidentiels',
    ],
    pricingCue: 'Tarifs selon les analyses demandées',
  },

  form: {
    heading: 'Réserver votre prise de sang',
    subheading: 'Notre équipe vous contacte rapidement',
    namePlaceholder: 'Nom complet',
    phonePlaceholder: 'Numéro de téléphone',
    emailPlaceholder: 'Adresse courriel',
    appointmentLabel: 'Type d\'analyse (optionnel)',
    appointmentOptions: [
      'Bilan sanguin général',
      'Bilan hormonal',
      'Dépistage ITSS',
      'Suivi médical / autre',
    ],
    ctaText: 'Envoyer ma demande',
    privacyNote: 'Vos informations sont confidentielles et protégées.',
  },

  whyChooseUs: {
    overline: 'Pourquoi nous choisir',
    heading: 'Prises de sang privées simples et professionnelles',
    cards: [
      {
        icon: 'clock',
        title: 'Rendez-vous rapide',
        description:
          'Obtenez un créneau pour votre prise de sang en quelques jours. Pas de file d\'attente interminable.',
      },
      {
        icon: 'heart',
        title: 'Cadre privé et confortable',
        description:
          'Un environnement médical moderne et accueillant. Prélèvement réalisé par du personnel qualifié.',
      },
      {
        icon: 'check',
        title: 'Résultats fiables',
        description:
          'Analyses traitées par des laboratoires certifiés. Résultats transmis de façon sécurisée et rapide.',
      },
    ],
  },

  howItWorks: {
    overline: 'Comment ça fonctionne',
    heading: 'Votre prise de sang en trois étapes',
    steps: [
      {
        number: 1,
        title: 'Envoyez votre demande',
        description:
          'Remplissez le formulaire avec vos informations. C\'est rapide et sans engagement.',
      },
      {
        number: 2,
        title: 'Confirmation du rendez-vous',
        description:
          'Notre équipe vous contacte pour confirmer la date, l\'heure et les préparations nécessaires.',
      },
      {
        number: 3,
        title: 'Prélèvement à la clinique',
        description:
          'Présentez-vous à votre rendez-vous pour un prélèvement rapide et professionnel.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'Ce qui est inclus',
    heading: 'Votre rendez-vous comprend',
    items: [
      'Prélèvement sanguin professionnel',
      'Processus de rendez-vous rapide et simple',
      'Transmission sécurisée des résultats',
      'Cadre privé et confortable',
      'Suivi avec un médecin si nécessaire',
    ],
  },

  pricingCta: {
    overline: 'Tarification',
    heading: 'Prises de sang à tarification transparente',
    description:
      'Le coût varie selon les analyses demandées. Notre équipe vous fournira un devis clair avant votre rendez-vous. Aucune surprise.',
    ctaText: 'Demander un rendez-vous',
    features: [
      'Devis avant rendez-vous',
      'Reçu pour assurances',
      'Résultats rapides',
    ],
  },

  faq: {
    overline: 'Questions fréquentes',
    heading: 'Vos questions, nos réponses',
    items: [
      {
        question: 'Quand puis-je avoir mon rendez-vous?',
        answer:
          'La plupart des rendez-vous pour prise de sang sont disponibles dans les 48 heures ouvrables.',
      },
      {
        question: 'Ai-je besoin d\'une ordonnance?',
        answer:
          'Pour certaines analyses, une ordonnance médicale est requise. Si vous n\'en avez pas, notre médecin peut vous en fournir une lors d\'une consultation.',
      },
      {
        question: 'Dois-je être à jeun?',
        answer:
          'Cela dépend des analyses demandées. Notre équipe vous informera des préparations nécessaires lors de la confirmation de votre rendez-vous.',
      },
      {
        question: 'Comment recevrai-je mes résultats?',
        answer:
          'Les résultats sont transmis de façon sécurisée. Les délais varient selon les analyses, mais la plupart sont disponibles en quelques jours.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          'Notre clinique est située au 1100 avenue Beaumont, bureau 302, à Mont-Royal. Stationnement disponible sur place.',
      },
    ],
  },

  finalCta: {
    heading: 'Besoin d\'une prise de sang rapidement?',
    subtitle:
      'Soumettez votre demande maintenant ou appelez-nous directement.',
    ctaText: 'Réserver ma prise de sang',
    phoneCtaText: '(514) 900-1234',
  },

  stickyCta: {
    text: 'Réserver maintenant',
    phoneText: 'Appeler',
  },

  labels: {
    langSwitchText: 'English',
    langSwitchLabel: 'Switch to English',
  },
};

import { LPConfig } from './types';

export const priseDeSangPriveeMontreal: LPConfig = {
  slug: 'prise-de-sang-privee-montreal',
  lang: 'fr',
  alternateSlug: 'private-blood-test-montreal',
  title: 'Prise de sang privée à Montréal — Sans attente | Clinique Privée',
  description:
    'Prise de sang privée à Montréal. Rendez-vous rapide, résultats fiables. Clinique moderne, tarifs transparents.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Prise de Sang Privée\nà Montréal — Sans Attente',
    subtitle:
      'Rendez-vous rapide dans un cadre professionnel. Résultats fiables, souvent sous 48 heures.',
    trustBullets: [
      'Rendez-vous souvent disponibles dans les 48 heures',
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
        title: 'Sans attente',
        description:
          'Créneau disponible en quelques jours. Pas de file d\'attente, pas de délais inutiles.',
      },
      {
        icon: 'shield',
        title: 'Prix transparents',
        description:
          'Devis clair avant votre rendez-vous. Reçus pour assurances privées, aucune surprise.',
      },
      {
        icon: 'check',
        title: 'Résultats fiables et rapides',
        description:
          'Analyses en laboratoires certifiés. Résultats transmis de façon sécurisée.',
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
          'Remplissez le formulaire en 30 secondes. Sans engagement.',
      },
      {
        number: 2,
        title: 'Confirmation du rendez-vous',
        description:
          'Notre équipe vous contacte pour confirmer la date et les préparations nécessaires.',
      },
      {
        number: 3,
        title: 'Prélèvement à la clinique',
        description:
          'Présentez-vous pour un prélèvement rapide et professionnel.',
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
      'Le coût varie selon les analyses demandées. Devis clair fourni avant votre rendez-vous. Aucune surprise.',
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
          'La plupart des rendez-vous sont disponibles dans les 48 heures ouvrables.',
      },
      {
        question: 'Ai-je besoin d\'une ordonnance?',
        answer:
          'Certaines analyses requièrent une ordonnance. Si vous n\'en avez pas, notre médecin peut vous en fournir une.',
      },
      {
        question: 'Dois-je être à jeun?',
        answer:
          'Cela dépend des analyses. Notre équipe vous informera lors de la confirmation de votre rendez-vous.',
      },
      {
        question: 'Comment recevrai-je mes résultats?',
        answer:
          'Résultats transmis de façon sécurisée, généralement disponibles en quelques jours.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          '1100 avenue Beaumont, bureau 302, Mont-Royal. Stationnement sur place.',
      },
    ],
  },

  finalCta: {
    heading: 'Réservez maintenant — disponibilités limitées',
    subtitle:
      'Ne reportez pas votre santé. Soumettez votre demande ou appelez-nous directement.',
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

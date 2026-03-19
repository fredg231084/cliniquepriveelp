import { LPConfig } from './types';

export const priseDeSangPriveeMontreal: LPConfig = {
  slug: 'prise-de-sang-privee-montreal',
  lang: 'fr',
  alternateSlug: 'private-blood-test-montreal',
  title: 'Prise de sang privée à Montréal — Résultats rapides | Clinique Privée',
  description:
    'Prise de sang privée à Montréal sous 48h. Sans ordonnance pour la plupart des analyses. Résultats fiables, tarifs clairs.',
  phone: '+15143603314',
  phoneDisplay: '(514) 360-3314',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Prise de sang privée\nà Montréal — Résultats rapides',
    subtitle:
      'Rendez-vous sous 48 heures dans un cadre professionnel. Résultats fiables, transmis de façon sécurisée.',
    trustBullets: [
      'Rendez-vous souvent disponible sous 48 heures',
      'Prélèvement par du personnel qualifié',
      'Large gamme d\'analyses disponibles',
      'Résultats rapides et confidentiels',
    ],
    pricingCue: 'Tarifs clairs selon les analyses — Devis avant rendez-vous',
  },

  form: {
    heading: 'Réserver votre prise de sang',
    subheading: 'Notre équipe vous contacte aujourd\'hui',
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
    ctaText: 'Demander mon rendez-vous',
    privacyNote: 'Vos informations sont confidentielles et protégées.',
  },

  whyChooseUs: {
    overline: 'Pourquoi nous choisir',
    heading: 'La prise de sang privée, sans complication',
    cards: [
      {
        icon: 'clock',
        title: 'Sous 48 heures',
        description:
          'Pas de file d\'attente au laboratoire public. Votre créneau est confirmé rapidement, souvent le lendemain.',
      },
      {
        icon: 'shield',
        title: 'Devis clair, zéro surprise',
        description:
          'Tarif communiqué avant votre rendez-vous. Reçu fourni pour vos assurances privées.',
      },
      {
        icon: 'check',
        title: 'Résultats certifiés et rapides',
        description:
          'Analyses en laboratoires accrédités. Résultats transmis de façon sécurisée, généralement en quelques jours.',
      },
    ],
  },

  howItWorks: {
    overline: 'Comment ça fonctionne',
    heading: 'Simple. Rapide. Sans tracas.',
    steps: [
      {
        number: 1,
        title: 'Soumettez votre demande',
        description:
          '30 secondes. Nom, téléphone, courriel. C\'est tout.',
      },
      {
        number: 2,
        title: 'On confirme votre rendez-vous',
        description:
          'Notre équipe vous contacte et vous informe des préparations nécessaires.',
      },
      {
        number: 3,
        title: 'Prélèvement à la clinique',
        description:
          'Rapide, professionnel, dans un cadre privé et confortable.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'Ce qui est inclus',
    heading: 'Votre rendez-vous comprend',
    items: [
      'Prélèvement sanguin par du personnel qualifié',
      'Acheminement vers un laboratoire accrédité',
      'Transmission sécurisée de vos résultats',
      'Cadre privé, propre et confortable',
      'Suivi avec un médecin disponible si nécessaire',
    ],
  },

  pricingCta: {
    overline: 'Tarification',
    heading: 'Tarifs clairs. Zéro surprise.',
    description:
      'Le coût varie selon les analyses demandées. Devis communiqué avant votre rendez-vous. Reçu fourni pour vos assurances privées. Aucun frais caché.',
    ctaText: 'Réserver maintenant',
    features: [
      'Devis avant rendez-vous',
      'Reçu pour assurances',
      'Résultats rapides',
    ],
  },

  faq: {
    overline: 'Questions fréquentes',
    heading: 'Tout ce que vous voulez savoir',
    items: [
      {
        question: 'Quand puis-je avoir mon rendez-vous?',
        answer:
          'Sous 48 heures ouvrables dans la plupart des cas. Contactez-nous pour les demandes urgentes.',
      },
      {
        question: 'Ai-je besoin d\'une demande médicale?',
        answer:
          'Certaines analyses nécessitent une demande médicale. Si vous n\'en avez pas, notre équipe peut vous guider lors de votre prise de contact.',
      },
      {
        question: 'Dois-je être à jeun?',
        answer:
          'Cela dépend des analyses. Notre équipe vous indique les préparations nécessaires lors de la confirmation.',
      },
      {
        question: 'Comment recevrai-je mes résultats?',
        answer:
          'De façon sécurisée et confidentielle. La plupart des résultats sont disponibles en quelques jours.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          '1100 avenue Beaumont, bureau 302, Mont-Royal. Stationnement gratuit sur place.',
      },
    ],
  },

  finalCta: {
    heading: 'Vos résultats sont à 48 heures.',
    subtitle:
      'Places limitées cette semaine. Soumettez votre demande maintenant et notre équipe vous contacte aujourd\'hui.',
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

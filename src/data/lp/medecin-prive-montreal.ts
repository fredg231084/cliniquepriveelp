import { LPConfig } from './types';

export const medecinPriveMontreal: LPConfig = {
  slug: 'medecin-prive-montreal',
  lang: 'fr',
  alternateSlug: 'private-doctor-montreal',
  title: 'Médecin privé à Montréal — Rendez-vous en 24–48h | Clinique Privée',
  description:
    'Consultez un médecin privé à Montréal dès cette semaine. Sans liste d\'attente, sans référence. Clinique moderne, tarifs clairs.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Médecin privé à Montréal\n— Rendez-vous en 24–48h',
    subtitle:
      'Consultez un médecin expérimenté dès cette semaine. Sans liste d\'attente, sans référence.',
    trustBullets: [
      'Rendez-vous confirmé sous 24–48h',
      'Consultation complète de 30 minutes',
      'Spécialistes ORL disponibles sur place',
      'Prescription et suivi le jour même',
    ],
    pricingCue: 'Consultation à partir de 200 $ — Reçu pour assurances',
  },

  form: {
    heading: 'Réserver votre consultation',
    subheading: 'Notre équipe vous rappelle aujourd\'hui',
    namePlaceholder: 'Nom complet',
    phonePlaceholder: 'Numéro de téléphone',
    emailPlaceholder: 'Adresse courriel',
    appointmentLabel: 'Type de consultation (optionnel)',
    appointmentOptions: [
      'Consultation générale',
      'Bilan de santé annuel',
      'Suivi médical',
      'Problème urgent',
    ],
    ctaText: 'Demander mon rendez-vous',
    privacyNote: 'Vos informations sont confidentielles et protégées.',
  },

  whyChooseUs: {
    overline: 'Pourquoi nous choisir',
    heading: 'La médecine privée, comme elle devrait être',
    cards: [
      {
        icon: 'clock',
        title: '24–48h, pas 6 mois',
        description:
          'Pendant que le système public vous fait attendre, nous vous recevons cette semaine. Souvent sous 48 heures.',
      },
      {
        icon: 'shield',
        title: '200 $, tout inclus',
        description:
          'Consultation complète, prescription si nécessaire, reçu pour vos assurances. Aucun frais caché.',
      },
      {
        icon: 'building',
        title: 'ORL sur place',
        description:
          'Accès direct à nos spécialistes ORL sans attente supplémentaire. Tout se règle en une seule visite.',
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
        title: 'On vous rappelle rapidement',
        description:
          'Notre équipe confirme votre rendez-vous le jour même.',
      },
      {
        number: 3,
        title: 'Consultez votre médecin',
        description:
          '30 minutes. Un médecin attentif, une vraie consultation.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'Ce qui est inclus',
    heading: 'Votre consultation privée comprend',
    items: [
      'Consultation médicale complète de 30 minutes',
      'Bilan de santé et évaluation de vos symptômes',
      'Prescription médicale si nécessaire',
      'Référence directe à un spécialiste si requis',
      'Accès aux spécialistes ORL présents sur place',
    ],
  },

  pricingCta: {
    overline: 'Tarification',
    heading: 'Un prix fixe. Zéro surprise.',
    price: '200 $',
    priceLabel: 'par consultation',
    description:
      'Consultation de 30 minutes avec un médecin de famille. Prix fixe, sans surprise. Reçu fourni pour vos assurances privées. Forfait annuel familial disponible.',
    ctaText: 'Réserver maintenant',
    features: [
      'Consultation 30 min',
      'Sans liste d\'attente',
      'Reçu pour assurances',
    ],
  },

  faq: {
    overline: 'Questions fréquentes',
    heading: 'Tout ce que vous voulez savoir',
    items: [
      {
        question: 'En combien de temps puis-je obtenir un rendez-vous?',
        answer:
          'En 24 à 48 heures dans la plupart des cas. Pour les urgences, nous offrons des plages disponibles le jour même.',
      },
      {
        question: 'Ai-je besoin d\'une référence médicale?',
        answer:
          'Non. Aucune référence requise. Vous prenez rendez-vous directement avec notre clinique.',
      },
      {
        question: 'Comment fonctionne le paiement?',
        answer:
          'Sur place, carte crédit ou débit. Reçu fourni pour vos assurances privées.',
      },
      {
        question: 'Qu\'est-ce qui est inclus dans la consultation?',
        answer:
          'Évaluation complète, prescription si nécessaire, référence spécialiste si requis. 30 minutes consacrées entièrement à vous.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          '1100 avenue Beaumont, bureau 302, Mont-Royal. Stationnement gratuit sur place. Accessible en fauteuil roulant.',
      },
    ],
  },

  finalCta: {
    heading: 'Votre rendez-vous est à 48 heures.',
    subtitle:
      'Des médecins disponibles cette semaine. Soumettez votre demande maintenant — il reste des disponibilités.',
    ctaText: 'Demander mon rendez-vous',
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

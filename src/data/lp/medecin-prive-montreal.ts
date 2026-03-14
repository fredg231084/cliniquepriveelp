import { LPConfig } from './types';

export const medecinPriveMontreal: LPConfig = {
  slug: 'medecin-prive-montreal',
  lang: 'fr',
  alternateSlug: 'private-doctor-montreal',
  title: 'Médecin privé à Montréal — Sans attente | Clinique Privée',
  description:
    'Médecin privé à Montréal. Rendez-vous en quelques jours, sans liste d\'attente. Clinique moderne, tarifs transparents.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Médecin Privé à Montréal\n— Sans Attente',
    subtitle:
      'Rendez-vous rapide avec un médecin expérimenté. Réservez en quelques minutes.',
    trustBullets: [
      'Rendez-vous disponibles cette semaine',
      'Consultation complète de 30 minutes',
      'Accès direct aux spécialistes ORL sur place',
      'Résultats et suivis rapides',
    ],
    pricingCue: 'Consultation à partir de 200 $',
  },

  form: {
    heading: 'Demander un rendez-vous',
    subheading: 'Réponse rapide de notre équipe',
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
    ctaText: 'Envoyer ma demande',
    privacyNote: 'Vos informations sont confidentielles et protégées.',
  },

  whyChooseUs: {
    overline: 'Pourquoi nous choisir',
    heading: 'Des soins médicaux privés pensés pour vous',
    cards: [
      {
        icon: 'clock',
        title: 'Sans attente',
        description:
          'Rendez-vous en quelques jours, pas en quelques mois. Fini les listes d\'attente interminables.',
      },
      {
        icon: 'shield',
        title: 'Prix transparents',
        description:
          'Aucune surprise. Tarifs clairs avant votre visite, reçus pour vos assurances privées.',
      },
      {
        icon: 'building',
        title: 'Accès rapide aux spécialistes',
        description:
          'Spécialistes ORL sur place, clinique moderne à Montréal. Tout sous un même toit.',
      },
    ],
  },

  howItWorks: {
    overline: 'Comment ça fonctionne',
    heading: 'Trois étapes simples',
    steps: [
      {
        number: 1,
        title: 'Envoyez votre demande',
        description:
          'Remplissez le formulaire en 30 secondes. Sans engagement.',
      },
      {
        number: 2,
        title: 'Notre équipe vous contacte',
        description:
          'Un membre de notre équipe vous rappelle rapidement pour confirmer.',
      },
      {
        number: 3,
        title: 'Consultez votre médecin',
        description:
          'Présentez-vous à votre rendez-vous. Consultation attentive et complète.',
      },
    ],
  },

  whatsIncluded: {
    overline: 'Ce qui est inclus',
    heading: 'Votre consultation privée comprend',
    items: [
      'Consultation médicale complète avec un médecin',
      'Évaluation approfondie de votre état de santé',
      'Prescription si nécessaire',
      'Référence vers un spécialiste si nécessaire',
      'Accès direct aux spécialistes ORL sur place',
    ],
  },

  pricingCta: {
    overline: 'Tarification',
    heading: 'Soins médicaux accessibles et transparents',
    price: '200 $',
    priceLabel: 'par consultation',
    description:
      'Consultation médicale complète avec un médecin de famille. Forfait annuel familial également disponible.',
    ctaText: 'Prendre rendez-vous',
    features: [
      'Consultation 30 min',
      'Sans liste d\'attente',
      'Suivi rapide',
    ],
  },

  faq: {
    overline: 'Questions fréquentes',
    heading: 'Vos questions, nos réponses',
    items: [
      {
        question: 'En combien de temps puis-je obtenir un rendez-vous?',
        answer:
          'La plupart de nos patients obtiennent un rendez-vous en quelques jours ouvrables. Des plages sans rendez-vous sont aussi disponibles pour les cas urgents.',
      },
      {
        question: 'Ai-je besoin d\'une référence médicale?',
        answer:
          'Non. Vous pouvez prendre rendez-vous directement, sans référence.',
      },
      {
        question: 'Comment fonctionne le paiement?',
        answer:
          'Paiement sur place par carte crédit ou débit. Reçus fournis pour vos assurances privées.',
      },
      {
        question: 'Qu\'est-ce qui est inclus dans la consultation?',
        answer:
          'Évaluation médicale complète, prescriptions si nécessaire, orientation vers un spécialiste au besoin.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          '1100 avenue Beaumont, bureau 302, Mont-Royal. Stationnement sur place, accessible en fauteuil roulant.',
      },
    ],
  },

  finalCta: {
    heading: 'Réservez maintenant — disponibilités limitées',
    subtitle:
      'Ne reportez pas votre santé. Soumettez votre demande ou appelez-nous directement.',
    ctaText: 'Demander un rendez-vous',
    phoneCtaText: '(514) 900-1234',
  },

  stickyCta: {
    text: 'Prendre rendez-vous',
    phoneText: 'Appeler',
  },

  labels: {
    langSwitchText: 'English',
    langSwitchLabel: 'Switch to English',
  },
};

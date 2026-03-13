import { LPConfig } from './types';

export const medecinPriveMontreal: LPConfig = {
  slug: 'medecin-prive-montreal',
  lang: 'fr',
  alternateSlug: 'private-doctor-montreal',
  title: 'Médecin privé à Montréal — Consultation rapide | Clinique Privée',
  description:
    'Consultez un médecin privé à Montréal rapidement. Rendez-vous en quelques jours, sans liste d\'attente. Clinique moderne au cœur de Montréal.',
  phone: '+15149001234',
  phoneDisplay: '(514) 900-1234',

  hero: {
    overline: 'Clinique Privée Montréal',
    h1: 'Consultez un médecin\nprivé rapidement\nà Montréal',
    subtitle:
      'Obtenez un rendez-vous médical en quelques jours dans une clinique privée moderne. Soins attentifs, sans attente prolongée.',
    trustBullets: [
      'Rendez-vous disponibles cette semaine',
      'Consultation complète de 30 minutes',
      'Accès direct à des spécialistes ORL sur place',
      'Résultats et suivis rapides',
    ],
    pricingCue: 'À partir de 200 $ par consultation',
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
        title: 'Accès rapide',
        description:
          'Obtenez un rendez-vous en quelques jours, pas en quelques mois. Votre temps est précieux.',
      },
      {
        icon: 'shield',
        title: 'Tarification claire',
        description:
          'Aucune surprise. Nos tarifs sont affichés clairement et expliqués avant votre visite.',
      },
      {
        icon: 'building',
        title: 'Clinique moderne',
        description:
          'Un environnement médical privé, professionnel et accueillant au cœur de Mont-Royal.',
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
          'Remplissez le formulaire ci-dessus. C\'est rapide et sans engagement.',
      },
      {
        number: 2,
        title: 'Notre équipe vous contacte',
        description:
          'Un membre de notre équipe vous rappelle rapidement pour confirmer les détails.',
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
          'La plupart de nos patients obtiennent un rendez-vous en quelques jours ouvrables. Pour les cas urgents, nous offrons aussi des plages sans rendez-vous.',
      },
      {
        question: 'Ai-je besoin d\'une référence médicale?',
        answer:
          'Non, aucune référence n\'est nécessaire. Vous pouvez prendre rendez-vous directement avec notre clinique.',
      },
      {
        question: 'Comment fonctionne le paiement?',
        answer:
          'Le paiement se fait sur place lors de votre visite. Nous acceptons les cartes de crédit et de débit. Des reçus pour vos assurances privées sont fournis.',
      },
      {
        question: 'Qu\'est-ce qui est inclus dans la consultation?',
        answer:
          'Chaque consultation comprend une évaluation médicale complète, une discussion de vos préoccupations de santé, des prescriptions si nécessaire et une orientation vers des spécialistes au besoin.',
      },
      {
        question: 'Où êtes-vous situés?',
        answer:
          'Notre clinique est située au 1100 avenue Beaumont, bureau 302, à Mont-Royal. Stationnement disponible sur place. Accessible en fauteuil roulant.',
      },
    ],
  },

  finalCta: {
    heading: 'Prêt à consulter un médecin rapidement?',
    subtitle:
      'Soumettez votre demande maintenant ou appelez-nous directement.',
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

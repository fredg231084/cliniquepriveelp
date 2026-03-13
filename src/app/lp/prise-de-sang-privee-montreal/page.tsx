import type { Metadata } from 'next';
import { LandingPage } from '@/components/lp/LandingPage';
import { priseDeSangPriveeMontreal } from '@/data/lp/prise-de-sang-privee-montreal';

const config = priseDeSangPriveeMontreal;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  robots: { index: false, follow: true },
  alternates: {
    languages: {
      en: `/lp/${config.alternateSlug}`,
    },
  },
};

export default function Page() {
  return <LandingPage config={config} />;
}

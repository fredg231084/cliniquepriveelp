import type { Metadata } from 'next';
import { LandingPage } from '@/components/lp/LandingPage';
import { privateBloodTestMontreal } from '@/data/lp/private-blood-test-montreal';

const config = privateBloodTestMontreal;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  robots: { index: false, follow: true },
  alternates: {
    languages: {
      fr: `/lp/${config.alternateSlug}`,
    },
  },
};

export default function Page() {
  return <LandingPage config={config} />;
}

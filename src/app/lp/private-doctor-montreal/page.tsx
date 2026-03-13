import type { Metadata } from 'next';
import { LandingPage } from '@/components/lp/LandingPage';
import { privateDoctorMontreal } from '@/data/lp/private-doctor-montreal';

const config = privateDoctorMontreal;

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

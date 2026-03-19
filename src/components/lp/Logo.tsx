import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Image
      src="/logos/clinique-privee-logo-white2.png"
      alt="Clinique Privée"
      width={320}
      height={86}
      className={`h-16 w-auto md:h-20 ${className}`}
      priority
    />
  );
}

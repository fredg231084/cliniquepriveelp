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
      width={240}
      height={64}
      className={`h-12 w-auto md:h-14 ${className}`}
      priority
    />
  );
}

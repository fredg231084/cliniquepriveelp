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
      width={280}
      height={75}
      className={`h-14 w-auto md:h-16 ${className}`}
      priority
    />
  );
}

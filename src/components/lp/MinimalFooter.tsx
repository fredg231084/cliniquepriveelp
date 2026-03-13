import { LPConfig } from '@/data/lp/types';

interface MinimalFooterProps {
  config: LPConfig;
}

export function MinimalFooter({ config }: MinimalFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-200 bg-cream-50 px-5 py-6 md:px-8">
      <div className="lp-container">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-navy-400/60">
            © {year} Clinique Privée Montréal.{' '}
            {config.lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <p className="text-xs text-navy-400/50">
            1100 Beaumont Ave #302, Mont-Royal, QC
          </p>
        </div>
      </div>
    </footer>
  );
}

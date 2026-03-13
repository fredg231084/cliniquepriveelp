import { LPConfig } from '@/data/lp/types';

interface WhatsIncludedProps {
  config: LPConfig;
}

export function WhatsIncluded({ config }: WhatsIncludedProps) {
  const { whatsIncluded } = config;

  return (
    <section className="lp-section bg-white" id="whats-included">
      <div className="lp-container">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="mb-8 text-center md:mb-10">
            <p className="lp-overline mb-3">{whatsIncluded.overline}</p>
            <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
              {whatsIncluded.heading}
            </h2>
          </div>

          {/* Checklist */}
          <div className="mx-auto max-w-lg">
            <div className="rounded-2xl border border-cream-200 bg-cream-50/50 p-6 md:p-8">
              <ul className="space-y-4">
                {whatsIncluded.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-800">
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[15px] leading-snug text-navy-800/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

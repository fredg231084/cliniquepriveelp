import { LPConfig } from '@/data/lp/types';

interface FaqProps {
  config: LPConfig;
}

export function Faq({ config }: FaqProps) {
  const { faq } = config;

  return (
    <section className="lp-section bg-white" id="faq">
      <div className="lp-container">
        <div className="mx-auto max-w-2xl">
          {/* Section header */}
          <div className="mb-8 text-center md:mb-10">
            <p className="lp-overline mb-3">{faq.overline}</p>
            <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
              {faq.heading}
            </h2>
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faq.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-cream-200 bg-cream-50/30 transition-colors open:border-cream-300 open:bg-cream-50"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 md:px-6">
                  <span className="pr-4 text-[15px] font-semibold text-navy-800">
                    {item.question}
                  </span>
                  <svg
                    className="faq-chevron h-5 w-5 shrink-0 text-navy-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 md:px-6">
                  <p className="text-sm leading-relaxed text-navy-600/70">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

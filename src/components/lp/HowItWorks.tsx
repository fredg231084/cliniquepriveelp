import { LPConfig } from '@/data/lp/types';

interface HowItWorksProps {
  config: LPConfig;
}

export function HowItWorks({ config }: HowItWorksProps) {
  const { howItWorks } = config;

  return (
    <section className="lp-section bg-cream-100" id="how-it-works">
      <div className="lp-container">
        {/* Section header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="lp-overline mb-3">{howItWorks.overline}</p>
          <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
            {howItWorks.heading}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mx-auto max-w-4xl">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-navy-200/40 to-transparent md:block" />

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {howItWorks.steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 mx-auto mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800">
                    <span className="text-sm font-bold text-white">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 text-base font-semibold text-navy-800">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-navy-600/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

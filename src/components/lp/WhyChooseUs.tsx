import { LPConfig } from '@/data/lp/types';

interface WhyChooseUsProps {
  config: LPConfig;
}

const iconMap = {
  clock: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  star: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  heart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  check: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function WhyChooseUs({ config }: WhyChooseUsProps) {
  const { whyChooseUs } = config;

  return (
    <section className="lp-section bg-white" id="why-choose-us">
      <div className="lp-container">
        {/* Section header */}
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="lp-overline mb-3">{whyChooseUs.overline}</p>
          <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl">
            {whyChooseUs.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {whyChooseUs.cards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all duration-200 hover:border-cream-300 hover:bg-cream-100/50 hover:shadow-card md:p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800/5 text-navy-800 transition-colors group-hover:bg-navy-800/8">
                {iconMap[card.icon]}
              </div>
              <h3 className="mb-2 text-base font-semibold text-navy-800">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-600/65">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { LPConfig } from '@/data/lp/types';
import { trackClickToCall, trackCtaClick } from '@/lib/tracking';

interface BookingOptionsProps {
  config: LPConfig;
}

function bookingUrl(lang: string, utmContent: string) {
  return `https://rendezvous.cliniqueprivee.com?lang=${lang}&utm_source=google&utm_medium=cpc&utm_campaign=lp-clinique&utm_content=${utmContent}`;
}

export function BookingOptions({ config }: BookingOptionsProps) {
  const isFr = config.lang === 'fr';

  const labels = {
    overline: isFr ? 'Réservation' : 'Booking',
    heading: isFr ? 'Comment voulez-vous réserver ?' : 'How would you like to book?',
    subheadline: isFr
      ? 'Choisissez la façon la plus simple pour vous. On s\'occupe du reste.'
      : 'Choose the easiest way for you. We take care of the rest.',
    urgencyBadge: isFr ? 'Disponibilités limitées cette semaine' : 'Limited availability this week',
    microcopy: isFr
      ? 'Vous pouvez réserver en moins de 30 secondes.'
      : 'You can book in under 30 seconds.',
    legalText: isFr
      ? 'En nous contactant, vous acceptez notre'
      : 'By contacting us, you agree to our',
    legalLink: isFr ? 'politique de confidentialité' : 'privacy policy',
    trustItems: isFr
      ? ['Réponse rapide garantie', 'Données confidentielles', 'Sans engagement']
      : ['Fast response guaranteed', 'Confidential data', 'No commitment'],
    cards: (isFr
      ? [
          {
            id: 'form',
            icon: 'form' as const,
            headline: 'Remplissez le formulaire',
            text: 'On vous rappelle rapidement (souvent en moins d\'1h) pour fixer le meilleur créneau.',
            cta: 'Demander un rendez-vous',
            type: 'scroll' as const,
          },
          {
            id: 'phone',
            icon: 'phone' as const,
            headline: 'Appelez-nous',
            text: 'Parlez directement à notre équipe et trouvez un rendez-vous immédiatement.',
            cta: config.phoneDisplay,
            type: 'phone' as const,
          },
          {
            id: 'chat',
            icon: 'chat' as const,
            headline: 'Écrivez-nous',
            text: 'Posez vos questions ou réservez via le chat en quelques secondes.',
            cta: 'Ouvrir le chat',
            type: 'chat' as const,
          },
          {
            id: 'online',
            icon: 'calendar' as const,
            headline: 'Réservez en ligne',
            text: 'Choisissez vous-même votre plage horaire en toute simplicité.',
            cta: 'Voir les disponibilités',
            type: 'scroll' as const,
          },
        ]
      : [
          {
            id: 'form',
            icon: 'form' as const,
            headline: 'Fill out the form',
            text: 'We call you back quickly (often within 1 hour) to confirm the best time for you.',
            cta: 'Request an appointment',
            type: 'scroll' as const,
          },
          {
            id: 'phone',
            icon: 'phone' as const,
            headline: 'Call us',
            text: 'Speak directly with our team and find an appointment immediately.',
            cta: config.phoneDisplay,
            type: 'phone' as const,
          },
          {
            id: 'chat',
            icon: 'chat' as const,
            headline: 'Message us',
            text: 'Ask your questions or book through chat in seconds.',
            cta: 'Open chat',
            type: 'chat' as const,
          },
          {
            id: 'online',
            icon: 'calendar' as const,
            headline: 'Book online',
            text: 'Choose your own time slot at your convenience.',
            cta: 'See availability',
            type: 'scroll' as const,
          },
        ]) as CardData[],
  };

  return (
    <section className="lp-section bg-white" id="booking-options">
      <div className="lp-container">

        {/* Urgency badge */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            {labels.urgencyBadge}
          </span>
        </div>

        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="lp-overline mb-3">{labels.overline}</p>
          <h2 className="text-2xl font-bold tracking-tight text-navy-800 md:text-3xl lg:text-[2rem]">
            {labels.heading}
          </h2>
          <p className="mt-3 text-base text-navy-600/65">
            {labels.subheadline}
          </p>
        </div>

        {/* Cards grid — 2×2 desktop, stacked mobile */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {labels.cards.map((card) => (
            <BookingCard
              key={card.id}
              card={card}
              config={config}
            />
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {labels.trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs text-navy-400/70">
              <svg className="h-3.5 w-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Microcopy */}
        <p className="mt-4 text-center text-xs text-navy-400/50">
          {labels.microcopy}
        </p>

        {/* Legal */}
        <p className="mt-3 text-center text-[11px] text-navy-400/40">
          {labels.legalText}{' '}
          <a href="/confidentialite" className="underline underline-offset-2 hover:text-navy-400/70 transition-colors">
            {labels.legalLink}
          </a>.
        </p>

      </div>
    </section>
  );
}

/* ─── Individual booking card ─── */
interface CardData {
  id: string;
  icon: 'form' | 'phone' | 'chat' | 'calendar';
  headline: string;
  text: string;
  cta: string;
  type: 'scroll' | 'phone' | 'chat';
}

function BookingCard({ card, config }: { card: CardData; config: LPConfig }) {
  const isPhone = card.type === 'phone';
  const isChat = card.type === 'chat';

  // UTM content per card id
  const utmContentMap: Record<string, string> = {
    form: 'booking-form',
    online: 'booking-online',
  };

  const buttonContent = (
    <>
      {card.cta}
      {!isPhone && (
        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </>
  );

  return (
    <div className="booking-card group flex flex-col rounded-2xl border border-cream-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-200/60 hover:shadow-card-hover">

      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800/6 transition-colors duration-300 group-hover:bg-navy-800/10">
        <BookingIcon type={card.icon} />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-navy-800">{card.headline}</h3>
      <p className="mb-6 flex-1 text-[15px] leading-relaxed text-navy-600/65">{card.text}</p>

      {/* CTA */}
      {isPhone ? (
        <a
          href={`tel:${config.phone}`}
          onClick={() => trackClickToCall(config.slug, config.lang)}
          data-tracking={`booking-phone-${config.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-navy-800 bg-navy-800 px-5 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-navy-900 hover:border-navy-900 hover:shadow-lg active:scale-[0.98]"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {buttonContent}
        </a>
      ) : isChat ? (
        <button
          type="button"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).Intercom) {
              ((window as unknown as Record<string, unknown>).Intercom as (cmd: string) => void)('show');
            }
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-navy-800/20 bg-cream-50 px-5 py-3.5 text-[15px] font-semibold text-navy-800 transition-all duration-200 hover:border-navy-800/40 hover:bg-cream-100 active:scale-[0.98]"
        >
          {buttonContent}
        </button>
      ) : (
        <a
          href={bookingUrl(config.lang, utmContentMap[card.id] ?? `booking-${card.id}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="lp-btn-primary w-full"
          data-tracking={`booking-${card.id}-btn`}
          onClick={() => trackCtaClick(config.slug, config.lang, `booking-${card.id}`)}
        >
          {buttonContent}
        </a>
      )}
    </div>
  );
}

/* ─── Icons ─── */
function BookingIcon({ type }: { type: CardData['icon'] }) {
  const cls = 'h-7 w-7 text-navy-800';

  if (type === 'form') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  if (type === 'phone') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  if (type === 'chat') return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  // calendar
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

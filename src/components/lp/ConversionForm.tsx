'use client';

import { useState, FormEvent } from 'react';
import { LPConfig } from '@/data/lp/types';
import { trackFormSubmission } from '@/lib/tracking';

interface ConversionFormProps {
  config: LPConfig;
  variant?: 'hero' | 'standalone';
}

export function ConversionForm({ config, variant = 'hero' }: ConversionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Gather form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      appointmentType: formData.get('appointmentType') as string,
      slug: config.slug,
      lang: config.lang,
    };

    // Track the conversion event
    trackFormSubmission(config.slug, config.lang);

    // Send to API route → secretary email via Resend
    const response = await fetch('/api/lp-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Form submission failed:', await response.text());
      setIsSubmitting(false);
      // Still show success to user — you don't want to lose them
      // The error is logged for debugging
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isHero = variant === 'hero';

  if (isSubmitted) {
    return (
      <div
        className={`rounded-2xl bg-white p-6 md:p-8 ${
          isHero ? 'shadow-form' : 'shadow-card'
        }`}
        id="lp-form-success"
        data-tracking="form-success"
      >
        <div className="flex flex-col items-center py-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
            <svg className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-navy-800">
            {config.lang === 'fr' ? 'Demande envoyée' : 'Request sent'}
          </h3>
          <p className="text-[15px] leading-relaxed text-navy-600/70">
            {config.lang === 'fr'
              ? 'Notre équipe vous contactera sous peu pour confirmer votre rendez-vous.'
              : 'Our team will contact you shortly to confirm your appointment.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-white ${
        isHero ? 'p-6 shadow-form md:p-8' : 'p-6 shadow-card md:p-8'
      }`}
      id="lp-form-card"
      data-tracking="form-card"
    >
      {/* Form header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-navy-800">
          {config.form.heading}
        </h2>
        {config.form.subheading && (
          <p className="mt-1 text-sm text-navy-600/60">
            {config.form.subheading}
          </p>
        )}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        id="lp-conversion-form"
        data-tracking="conversion-form"
        className="space-y-3.5"
      >
        {/* Hidden fields for tracking */}
        <input type="hidden" name="lp_slug" value={config.slug} />
        <input type="hidden" name="lp_lang" value={config.lang} />

        {/* Name */}
        <input
          type="text"
          name="name"
          required
          placeholder={config.form.namePlaceholder}
          className="lp-input"
          autoComplete="name"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          placeholder={config.form.phonePlaceholder}
          className="lp-input"
          autoComplete="tel"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder={config.form.emailPlaceholder}
          className="lp-input"
          autoComplete="email"
        />

        {/* Appointment type (optional select) */}
        {config.form.appointmentOptions && config.form.appointmentOptions.length > 0 && (
          <select
            name="appointmentType"
            className="lp-input appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%231a2744%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22m4.427%206.427%203.396%203.396a.25.25%200%200%200%20.354%200l3.396-3.396A.25.25%200%200%200%2011.396%206H4.604a.25.25%200%200%200-.177.427z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_14px_center] bg-no-repeat pr-10"
          >
            <option value="">{config.form.appointmentLabel}</option>
            {config.form.appointmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="lp-btn-primary w-full"
          id="lp-form-submit-btn"
          data-tracking="form-submit-btn"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {config.lang === 'fr' ? 'Envoi...' : 'Sending...'}
            </span>
          ) : (
            <>
              {config.form.ctaText}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>

        {/* Privacy note */}
        <p className="pt-1 text-center text-xs leading-relaxed text-navy-400/60">
          {config.form.privacyNote}
        </p>
      </form>
    </div>
  );
}

# Clinique Privée — Google Ads Landing Page System

Production-ready landing page template system for Clinique Privée Montréal's Google Ads campaigns.

## Architecture

```
src/
├── app/
│   ├── layout.tsx                          # Root layout (font, CSS)
│   ├── globals.css                         # Tailwind + custom styles
│   └── lp/
│       ├── layout.tsx                      # LP wrapper layout
│       ├── medecin-prive-montreal/         # French doctor LP
│       │   └── page.tsx
│       ├── private-doctor-montreal/        # English doctor LP
│       │   └── page.tsx
│       ├── prise-de-sang-privee-montreal/  # French blood test LP
│       │   └── page.tsx
│       └── private-blood-test-montreal/    # English blood test LP
│           └── page.tsx
├── components/lp/
│   ├── LandingPage.tsx      # Main template — assembles all sections
│   ├── Hero.tsx             # Split hero + form
│   ├── ConversionForm.tsx   # Conversion form widget
│   ├── WhyChooseUs.tsx      # 3 feature cards
│   ├── HowItWorks.tsx       # 3-step process
│   ├── WhatsIncluded.tsx    # Service checklist
│   ├── PricingCta.tsx       # Pricing + CTA block
│   ├── Faq.tsx              # Accordion FAQ
│   ├── FinalCta.tsx         # Closing conversion section
│   ├── StickyMobileCta.tsx  # Fixed mobile CTA bar
│   ├── MinimalFooter.tsx    # Minimal footer
│   └── Logo.tsx             # Logo component
├── data/lp/
│   ├── types.ts             # TypeScript interface for all LP config
│   ├── index.ts             # Barrel exports
│   ├── medecin-prive-montreal.ts
│   ├── private-doctor-montreal.ts
│   ├── prise-de-sang-privee-montreal.ts
│   └── private-blood-test-montreal.ts
└── lib/
    └── tracking.ts          # GA4/GTM event helpers
```

## How it works

Each landing page is composed of:
1. **A data file** (`src/data/lp/your-slug.ts`) — contains ALL copy, config, and content
2. **A page file** (`src/app/lp/your-slug/page.tsx`) — imports data, sets metadata, renders template

The `LandingPage` component is the reusable template that renders all 7 sections based on the config object.

## Quick Start

```bash
npm install
npm run dev
```

Visit:
- http://localhost:3000/lp/medecin-prive-montreal
- http://localhost:3000/lp/private-doctor-montreal
- http://localhost:3000/lp/prise-de-sang-privee-montreal
- http://localhost:3000/lp/private-blood-test-montreal

## Adding a New Landing Page

### Step 1: Create the data file

Duplicate an existing data file and customize the content:

```bash
cp src/data/lp/medecin-prive-montreal.ts src/data/lp/bilan-annuel-montreal.ts
```

Edit the new file — change the slug, copy, FAQ, pricing, etc.

### Step 2: Create the page file

```bash
mkdir -p src/app/lp/bilan-annuel-montreal
```

Create `src/app/lp/bilan-annuel-montreal/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { LandingPage } from '@/components/lp/LandingPage';
import { bilanAnnuelMontreal } from '@/data/lp/bilan-annuel-montreal';

const config = bilanAnnuelMontreal;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  robots: { index: false, follow: true },
  alternates: {
    languages: {
      en: `/lp/${config.alternateSlug}`,
    },
  },
};

export default function Page() {
  return <LandingPage config={config} />;
}
```

That's it — 2 files for a new LP.

### Step 3 (optional): Export from index

Add the export to `src/data/lp/index.ts` for clean imports.

## Where to Edit

| What                  | Where                                          |
|-----------------------|------------------------------------------------|
| Page copy/content     | `src/data/lp/{slug}.ts`                        |
| Page metadata         | `src/app/lp/{slug}/page.tsx`                   |
| Section layouts       | `src/components/lp/{SectionName}.tsx`           |
| Brand colors          | `tailwind.config.ts` → `colors`                |
| Typography            | `tailwind.config.ts` → `fontFamily`            |
| Global styles         | `src/app/globals.css`                           |
| Phone number          | In each data file → `phone` + `phoneDisplay`   |
| Tracking events       | `src/lib/tracking.ts`                           |

## Form / Conversion Tracking

### Form Submission

The form in `ConversionForm.tsx` currently logs to console. To connect it:

1. **API Route**: Create `src/app/api/lp-submit/route.ts` to handle submissions
2. **Email**: Forward to your secretary via Resend, SendGrid, etc.
3. **CRM**: Push to your booking system

### GA4 / GTM Integration

All interactive elements have `data-tracking` attributes and IDs:

| Element               | ID / Selector                    | Event Name          |
|-----------------------|----------------------------------|---------------------|
| Form card             | `#lp-form-card`                  | —                   |
| Form submit           | `#lp-form-submit-btn`            | `lp_form_submit`    |
| Form success          | `#lp-form-success`               | —                   |
| Hero phone button     | `#lp-hero-phone-btn`             | `lp_click_to_call`  |
| Final phone button    | `#lp-final-phone-btn`            | `lp_click_to_call`  |
| Sticky CTA            | `#lp-sticky-cta`                 | `lp_cta_click`      |
| Conversion form       | `#lp-conversion-form`            | `lp_form_submit`    |

Events are pushed to `window.dataLayer` — configure matching triggers in GTM.

### Data attributes on page wrapper

```html
<div data-lp-slug="medecin-prive-montreal" data-lp-lang="fr" data-lp-service="medecin-prive-montreal">
```

Use these in GTM variables for segmenting conversions by service and language.

## Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the repo to Vercel for automatic deploys.

### Cloudflare Proxy Setup

If these pages live under `cliniqueprivee.com/lp/*` alongside the WordPress site:

1. Deploy this Next.js app to Vercel (e.g., `lp.cliniqueprivee.com`)
2. In Cloudflare Workers, route `/lp/*` requests to the Vercel deployment
3. All other routes continue to WordPress

## Design System

| Token       | Value                     |
|-------------|---------------------------|
| Navy 800    | `#1a2744` (primary navy)  |
| Gold 400    | `#c9a96b` (primary gold)  |
| Cream 100   | `#f5f7fa` (soft bg)       |
| Font        | Outfit (Google Fonts)     |
| Radius      | `1rem` (cards), `0.75rem` (inputs) |
| Max width   | `1152px` (6xl)            |

## Key Principles

- **NOINDEX**: All LPs have `robots: { index: false, follow: true }`
- **No navigation**: No top nav, no footer nav — minimal exits
- **Conversion-first**: Hero form is the primary conversion zone
- **Mobile-first**: Sticky CTA, stacked layout, touch-friendly
- **Bilingual**: Separate pages per language, discreet switcher
- **Reusable**: Data-driven template system for easy duplication

import { NextRequest, NextResponse } from 'next/server';

// =============================================
// Clinique Privée — LP Form Submission Handler
// =============================================
// Sends form data to secretary via Resend email.
//
// Required env vars (set in Vercel dashboard):
//   RESEND_API_KEY=re_xxxxxxxxxxxxx
//   FORM_RECIPIENT_EMAIL=secretary@cliniqueprivee.com
//   FORM_FROM_EMAIL=forms@cliniqueprivee.com (must be verified in Resend)
// =============================================

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT = process.env.FORM_RECIPIENT_EMAIL || 'secretary@cliniqueprivee.com';
const FROM_EMAIL = process.env.FORM_FROM_EMAIL || 'Clinique Privée <forms@cliniqueprivee.com>';

// Friendly labels for slugs
const SERVICE_LABELS: Record<string, string> = {
  'medecin-prive-montreal': 'Médecin privé (FR)',
  'private-doctor-montreal': 'Private Doctor (EN)',
  'prise-de-sang-privee-montreal': 'Prise de sang (FR)',
  'private-blood-test-montreal': 'Blood Test (EN)',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, phone, email, appointmentType, slug, lang } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const serviceLabel = SERVICE_LABELS[slug] || slug;
    const now = new Date().toLocaleString('fr-CA', {
      timeZone: 'America/Montreal',
      dateStyle: 'long',
      timeStyle: 'short',
    });

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [RECIPIENT],
        subject: `Nouvelle demande — ${serviceLabel} — ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;">
            <div style="background: #1a2744; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; font-size: 18px; margin: 0;">Nouvelle demande de rendez-vous</h1>
              <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 8px 0 0;">
                ${serviceLabel} · ${now}
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e4e8ef; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #8da5cc; font-size: 13px; width: 140px; vertical-align: top;">Nom</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #1a2744; font-size: 15px; font-weight: 600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #8da5cc; font-size: 13px; vertical-align: top;">Téléphone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #1a2744; font-size: 15px;">
                    <a href="tel:${escapeHtml(phone)}" style="color: #1a2744; text-decoration: none;">${escapeHtml(phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #8da5cc; font-size: 13px; vertical-align: top;">Courriel</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #1a2744; font-size: 15px;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #1a2744; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                ${appointmentType ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #8da5cc; font-size: 13px; vertical-align: top;">Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f3f9; color: #1a2744; font-size: 15px;">${escapeHtml(appointmentType)}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; color: #8da5cc; font-size: 13px; vertical-align: top;">Source</td>
                  <td style="padding: 12px 0; color: #1a2744; font-size: 15px;">Landing page · ${lang?.toUpperCase() || 'N/A'}</td>
                </tr>
              </table>

              <div style="margin-top: 24px; padding: 16px; background: #f5f7fa; border-radius: 8px; text-align: center;">
                <a href="tel:${escapeHtml(phone)}" style="display: inline-block; background: #1a2744; color: #ffffff; padding: 10px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                  Appeler ${escapeHtml(name)}
                </a>
              </div>
            </div>

            <p style="color: #8da5cc; font-size: 12px; text-align: center; margin-top: 16px;">
              Clinique Privée Montréal · Demande automatique via Google Ads LP
            </p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Resend error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/** Escape HTML to prevent injection in email template */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

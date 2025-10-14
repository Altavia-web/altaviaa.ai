import { NextRequest, NextResponse } from 'next/server';

// Interface for the request body
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  hearAboutUs?: string;
  message?: string;
}

// Validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Server-side validation
function validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name ist erforderlich (mind. 2 Zeichen)');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Gültige E-Mail-Adresse ist erforderlich');
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.push('Unternehmen ist erforderlich');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validierungsfehler', details: validation.errors },
        { status: 400 }
      );
    }

    // Check if NetSuite environment variables are configured
    const netsuiteRestletUrl = process.env.NETSUITE_RESTLET_URL;
    const netsuiteAuthToken = process.env.NETSUITE_AUTH_TOKEN;

    if (!netsuiteRestletUrl || !netsuiteAuthToken) {
      console.error('NetSuite RESTLet configuration missing');

      // In development, log the form data instead of sending to NetSuite
      if (process.env.NODE_ENV === 'development') {
        console.log('=== FORM SUBMISSION (Development Mode) ===');
        console.log('Name:', body.name);
        console.log('Email:', body.email);
        console.log('Company:', body.company);
        console.log('Hear About Us:', body.hearAboutUs || 'Not provided');
        console.log('Message:', body.message || 'No message');
        console.log('==========================================');

        return NextResponse.json({
          success: true,
          message: 'Nachricht erfolgreich empfangen (Development Mode)',
          netsuiteId: 'dev-mock-id',
        });
      }

      return NextResponse.json(
        { error: 'Server-Konfigurationsfehler. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      );
    }

    // Prepare NetSuite RESTLet payload according to specifications
    const netsuitePayload = {
      name: body.name,
      email: body.email,
      companyname: body.company,
      hearAboutUs: body.hearAboutUs || '',
      comments: body.message || '',
      leadsource: 'altaviaa.ai - Contact Form',
      sourceForm: 'altaviaa.ai',
      entitystatus: 6, // Lead Unqualified
    };

    // Send to NetSuite RESTLet
    console.log('Sending to NetSuite RESTLet...');
    console.log('URL:', netsuiteRestletUrl);
    console.log('Payload:', JSON.stringify(netsuitePayload));

    const netsuiteResponse = await fetch(netsuiteRestletUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': netsuiteAuthToken,
        'User-Agent': 'Mozilla/5.0',
      },
      body: JSON.stringify(netsuitePayload),
    });

    console.log('NetSuite Response Status:', netsuiteResponse.status);

    if (!netsuiteResponse.ok) {
      const errorText = await netsuiteResponse.text();
      console.error('NetSuite RESTLet Error Response:', errorText);
      console.error('NetSuite Response Status:', netsuiteResponse.status);
      console.error('NetSuite Response Headers:', JSON.stringify(Object.fromEntries(netsuiteResponse.headers.entries())));

      return NextResponse.json(
        { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      );
    }

    const netsuiteData = await netsuiteResponse.json();
    console.log('NetSuite Success Response:', netsuiteData);

    return NextResponse.json({
      success: true,
      message: 'Nachricht erfolgreich gesendet',
      netsuiteId: netsuiteData.id || netsuiteData.internalId || netsuiteData.leadId,
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Added 'service', honeypot and recaptchaToken to the destructuring
    const { 
      name, 
      email, 
      phone, 
      service, 
      message, 
      subscribeToUpdates, 
      notificationEnabled, 
      userLocation,
      hp,
      recaptchaToken,
    } = body;

    // Validation - added service to required fields if you want it mandatory
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Honeypot check - ignore obvious bot submissions
    if (hp && typeof hp === 'string' && hp.trim() !== '') {
      console.warn('Honeypot triggered. Ignoring submission.');
      return NextResponse.json(
        { success: true, honeypot: true },
        { status: 200 }
      );
    }

    // If RECAPTCHA secret is set, verify the token (v3)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: 'Captcha token missing' }, { status: 400 });
      }
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`
        });
        const verifyJson = await verifyRes.json();
        if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5) || (verifyJson.action && verifyJson.action !== 'contact_form')) {
          console.warn('Captcha verification failed', verifyJson);
          return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
        }
      } catch (err) {
        console.error('Captcha verification error:', err);
        return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
      }
    }

    // Get client IP
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'Unknown';

    const timestamp = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Kolkata',
    }).format(new Date());

    // Clean up location string to prevent object-to-string conversion errors
    let locationString = `IP: ${clientIp}`;
    if (userLocation && typeof userLocation === 'object') {
      const parts = [
        userLocation.city,
        userLocation.region,
        userLocation.country
      ].filter(Boolean); // Removes null/undefined
      
      if (parts.length > 0) {
        locationString = `${parts.join(', ')} (${userLocation.lat}, ${userLocation.lng})`;
      }
    }

    let dbSaved = false;
    let lastDbError: any = null;

    if (isSupabaseConfigured && supabase) {
      const { data: dbData, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name,
            email,
            phone,
            service: service || 'Not Specified', // Added this field
            message,
            subscribe_to_updates: subscribeToUpdates || false,
            notification_enabled: notificationEnabled || false,
            client_ip: clientIp,
            location: locationString,
          },
        ])
        .select();

      if (dbError) {
        console.error('Database error details:', dbError);
        lastDbError = dbError;
      } else {
        console.log('Contact saved to database:', dbData);
        dbSaved = true;
      }
    }

    // Send email notification
    try {
      await sendEmail({
        name,
        email,
        phone,
        message,
        service: service || 'General Inquiry', // Include service in email
        location: locationString,
        timestamp,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    // If RLS failed, we return the specific dbError so you can see it in the UI response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.',
        saved: dbSaved,
        dbError: dbSaved ? undefined : lastDbError
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission.' },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch all submissions (admin use)
export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured || !supabase) {
      return NextResponse.json(
        { error: 'Database not configured', submissions: [] },
        { status: 200 }
      );
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');

    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    return NextResponse.json({ submissions: data }, { status: 200 });
  } catch (error) {
    console.error('Fetch submissions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

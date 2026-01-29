import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
export const isEmailConfigured = !!resend;

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  location?: string;
  timestamp: string;
} 

export async function sendEmail(params: EmailParams) {
  const { name, email, phone, message, service, location, timestamp } = params;

  if (!resend) {
    console.warn('Resend not configured - skipping email send');
    console.log('Would have sent email with:', { name, email, phone, message, service, location, timestamp });
    return { success: true, mock: true };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f5f5f7;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); color: white; padding: 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Venkatesh Ravi - Chartered Accountant</p>
        </div>

        <!-- Content -->
        <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Timestamp Badge -->
          <div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
            <span style="color: #0369a1; font-size: 14px; font-weight: 500;">📅 Received: ${timestamp}</span>
          </div>

          <!-- Contact Details -->
          <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            Contact Information
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">👤 Name</span>
                <p style="margin: 4px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">📧 Email</span>
                <p style="margin: 4px 0 0 0;">
                  <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">📱 Phone</span>
                <p style="margin: 4px 0 0 0;">
                  <a href="tel:${phone}" style="color: #0ea5e9; text-decoration: none; font-size: 16px; font-weight: 500;">${phone}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">🧾 Service</span>
                <p style="margin: 4px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${service || 'General Inquiry'}</p>
              </td>
            </tr>
            ${location ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">📍 Location/IP</span>
                <p style="margin: 4px 0 0 0; color: #1e293b; font-size: 16px;">${location}</p>
              </td>
            </tr>
            ` : ''}
          </table>

          <!-- Message Box -->
          <h2 style="margin: 24px 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            💬 Message
          </h2>
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 0 8px 8px 0;">
            <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <!-- Quick Actions -->
          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your inquiry to Venkatesh Ravi CA" 
               style="display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 8px;">
              Reply to ${name}
            </a>
            <a href="tel:${phone}" 
               style="display: inline-block; background: #1e293b; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 8px;">
              Call Now
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 24px; color: #64748b; font-size: 13px;">
          <p style="margin: 0;">This email was sent from the contact form on</p>
          <p style="margin: 4px 0 0 0; font-weight: 600; color: #1e293b;">venkateshravica.com</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Use a verified or configured notification email; defaults to the owner email for testing
    const toEmail = process.env.NOTIFICATION_EMAIL || 'vigneshravi2802@gmail.com';
    
    const { data, error } = await resend.emails.send({
      from: 'Venkatesh Ravi CA <onboarding@resend.dev>', // Use your verified domain later
      to: [toEmail],
      replyTo: email,
      subject: `New Contact: ${name} - Venkatesh Ravi CA`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

/* 
  Venkatesh Ravi - CA Firm Website
  Configuration and customization file
*/

export const SITE_CONFIG = {
  // Firm Information
  firm: {
    name: 'Venkatesh Ravi',
    tagline: 'Chartered Accountant | Auditor | Financial Consultant',
    description:
      'Premium financial consulting and auditing services for Indian businesses. Trust, compliance, and financial integrity.',
    year_established: 2012,
  },

  // Contact Information
  contact: {
    email: 'contact@venkateshfirm.com',
    phone: '+91-80-XXXX-XXXX',
    address: 'Your office address here',
    website: 'https://yourdomain.com',
  },

  // Theme Colors
  theme: {
    primary: '#2563eb', // Blue
    secondary: '#14b8a6', // Teal
    light: '#ffffff',
    dark: '#0f172a',
  },

  // Navigation
  navigation: {
    items: [
      { label: 'Overview', id: 'overview' },
      { label: 'Education', id: 'education' },
      { label: 'Experience', id: 'experience' },
      { label: 'Team', id: 'team' },
      { label: 'Contact', id: 'contact' },
    ],
  },

  // Social Media
  social: {
    linkedin: 'https://linkedin.com/in/your-profile',
    facebook: 'https://facebook.com/your-page',
    instagram: 'https://instagram.com/your-handle',
    twitter: 'https://twitter.com/your-handle',
  },

  // Features
  features: {
    darkMode: true,
    animations: true,
    contactForm: true,
    visitorCounter: true,
    notifications: true,
    geolocation: true,
  },

  // SEO
  seo: {
    title: 'Venkatesh Ravi - Chartered Accountant & Auditor | India',
    description:
      'Premium financial consulting and auditing services. Trust, compliance, and financial integrity for Indian businesses.',
    keywords: [
      'Chartered Accountant',
      'CA India',
      'Auditor',
      'Financial Consultant',
      'Tax Compliance',
      'Audit Services',
      'India',
    ],
    og: {
      image: '/og-image.png',
      type: 'website',
    },
  },

  // Office Hours
  officeHours: {
    weekday: { start: '09:00', end: '18:00' },
    weekend: 'Closed',
    timezone: 'IST',
  },

  // Qualifications
  qualifications: ['B.Com', 'M.A', 'Articleship', 'Chartered Accountant (CA - India)'],

  // Experience Highlights
  experienceHighlights: {
    yearsOfPractice: '12+',
    industriesServed: '15+',
    audiitEngagements: '200+',
    clientRetention: '95%',
  },
};

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  enabled: false, // Set to true to enable
  googleAnalyticsId: 'G-XXXXXXXXXX',
  sentryEnabled: false,
  sentryDsn: '',
};

// Email Configuration (Backend)
export const EMAIL_CONFIG = {
  from: process.env.SMTP_FROM_EMAIL || 'noreply@venkateshfirm.com',
  to: process.env.SMTP_TO_EMAIL || 'contact@venkateshfirm.com',
  replyTo: process.env.CONTACT_EMAIL || 'contact@venkateshfirm.com',
  templates: {
    contactFormSubject: 'New Contact Form Submission',
    notificationEmail: true,
  },
};

// Feature Flags
export const FEATURE_FLAGS = {
  enableBlog: false,
  enableShop: false,
  enableBooking: false,
  enableChat: false,
  enablePortfolio: true,
  maintenanceMode: false,
};

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: 10000, // 10 seconds
  retries: 3,
};

// Security Configuration
export const SECURITY_CONFIG = {
  corsEnabled: true,
  corsOrigins: ['http://localhost:3000', 'https://yourdomain.com'],
  rateLimitEnabled: true,
  rateLimitRequests: 100, // requests per minute
  csrfProtection: true,
};

// Accessibility Configuration
export const ACCESSIBILITY_CONFIG = {
  respectReducedMotion: true,
  keyboardNavigationEnabled: true,
  focusIndicatorEnabled: true,
  ariaLabelsRequired: true,
  colorContrastRatio: 4.5, // WCAG AA
};

// Content Configuration
export const CONTENT_CONFIG = {
  privacyPolicyUrl: '/privacy',
  termsUrl: '/terms',
  cookiePolicyUrl: '/privacy#cookies',
  impressumUrl: '/impressum',
};

export default SITE_CONFIG;

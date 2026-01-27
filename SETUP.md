# Development & Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create or update `.env.local`:
```bash
# Database (Optional - for production)
DATABASE_URL="postgresql://user:password@localhost:5432/venkatesh_ca"

# Email Configuration (Required for contact form emails)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-gmail@gmail.com"
SMTP_PASS="your-16-char-app-password"
SMTP_FROM_EMAIL="noreply@venkateshfirm.com"
SMTP_TO_EMAIL="vigneshravichandran2899@gmail.com"

# Contact Information
CONTACT_EMAIL="contact@venkateshfirm.com"
CONTACT_PHONE="+91-80-XXXX-XXXX"
CONTACT_ADDRESS="Your office address"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXT_PUBLIC_CONTACT_EMAIL="contact@venkateshfirm.com"
```

### 3. Setup Email (Gmail Example)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate App Password:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   - Paste in `SMTP_PASS` in `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
venkatesh-ca-firm/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts        # Contact form API
│   │   │   └── visitors/route.ts       # Visitor counter API
│   │   ├── page.tsx                    # Home page
│   │   ├── privacy/page.tsx            # Privacy policy
│   │   ├── terms/page.tsx              # Terms & conditions
│   │   ├── layout.tsx                  # Root layout
│   │   └── globals.css                 # Global styles
│   ├── components/
│   │   ├── Header.tsx                  # Sticky navigation header
│   │   ├── HeroSection.tsx             # Hero with rotating quotes
│   │   ├── EducationSection.tsx        # Education timeline
│   │   ├── ExperienceSection.tsx       # Experience cards grid
│   │   ├── TeamSection.tsx             # Team members grid
│   │   ├── ContactForm.tsx             # Contact form & info
│   │   └── Footer.tsx                  # Footer with visitor count
│   ├── context/
│   │   └── ThemeContext.tsx            # Dark/Light theme logic
│   ├── lib/
│   │   └── email.ts                    # Email sending service
│   ├── types/
│   │   └── index.ts                    # TypeScript interfaces
│   └── utils/
│       └── data.ts                     # Static data & arrays
├── prisma/
│   └── schema.prisma                   # Database schema
├── public/                             # Static assets
├── .env.local                          # Environment variables
├── tailwind.config.ts                  # Tailwind CSS config
├── tsconfig.json                       # TypeScript config
├── next.config.ts                      # Next.js config
└── package.json                        # Dependencies
```

## Key Features Explained

### 1. **Dark/Light Theme**
- Located in: `src/context/ThemeContext.tsx`
- Automatically detects system preference on first visit
- Toggle button in header
- Persisted in localStorage
- Smooth transitions with Tailwind's `dark:` prefix

### 2. **Responsive Design**
- Mobile-first approach
- Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Sticky header adjusts on scroll
- Mobile menu toggle for small screens

### 3. **Scroll-based Section Navigation**
- Header highlights active section on scroll
- Clicking menu items smoothly scrolls to sections
- Section IDs: `overview`, `education`, `experience`, `team`, `contact`

### 4. **Education Timeline**
- Vertical timeline with scroll progress
- Cards appear progressively as you scroll
- Alternating left/right layout (desktop)
- Mobile-friendly single column

### 5. **Experience Cards**
- 4 cards in a responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop)
- Hover animations (lift + shadow)
- Icons and stats badges
- Gradient underline on hover

### 6. **Contact Form**
- Form validation before submit
- Geolocation request (optional)
- Browser notification request (optional)
- Loading spinner during submission
- Success/Error message display
- Email sent to: `vigneshravichandran2899@gmail.com`
- Form data logged to console

### 7. **Visitor Counter**
- Increments on page load
- Stored in-memory (can add database)
- Displayed in footer
- Gets visitor count on page load

### 8. **Email Notifications**
- HTML formatted emails
- Includes: name, email, phone, message, location, timestamp
- Uses Nodemailer with SMTP relay
- Configure in `.env.local`

## Customization Guide

### Change Firm Details
Edit `src/utils/data.ts`:
```typescript
// Experience items
const experienceData = [
  {
    id: 1,
    title: 'Your custom title',
    description: 'Your description',
    icon: '📊',
    stats: '10+ Years',
  },
  // ... more items
];

// Team members
const teamMembers = [
  {
    id: 1,
    name: 'Your Name',
    designation: 'Your Title',
    bio: 'Your bio',
  },
];
```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',      // Change primary blue
      secondary: '#14b8a6',    // Change secondary teal
    },
  },
}
```

Or directly update gradient classes in components.

### Modify Testimonials/Quotes
Edit the `quotes` array in `src/components/HeroSection.tsx`:
```typescript
const quotes = [
  "Your first quote here",
  "Your second quote here",
  "Your third quote here",
];
```

### Update Social Links
Edit footer in `src/components/Footer.tsx`:
```typescript
<a href="https://your-linkedin-url">LinkedIn</a>
<a href="https://your-facebook-url">Facebook</a>
<a href="https://your-instagram-url">Instagram</a>
```

## Email Configuration

### Gmail (Recommended for Development)
1. Enable 2FA on Gmail
2. Generate App Password
3. Update `.env.local` with credentials

### SendGrid
```bash
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="your-sendgrid-api-key"
```

### AWS SES
```bash
SMTP_HOST="email-smtp.region.amazonaws.com"
SMTP_PORT="587"
SMTP_USER="your-ses-user"
SMTP_PASS="your-ses-password"
```

## Database Setup (Optional)

### PostgreSQL
```bash
# Install Prisma
npm install -D prisma

# Initialize
npx prisma init

# Update DATABASE_URL in .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"

# Run migrations
npx prisma migrate dev --name init

# Open Prisma Studio
npx prisma studio
```

## Testing the Website

### Test Contact Form
1. Fill out form with test data
2. Check browser console for logs
3. Check email for message (if configured)
4. Verify location/notification requests

### Test Theme Toggle
1. Click sun/moon icon in header
2. Verify colors change
3. Refresh page - theme should persist

### Test Responsiveness
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test on: 375px, 768px, 1024px, 1440px

### Test Accessibility
```bash
# Using accessibility inspector
# Press F12 → Accessibility panel
# Or use: https://www.axe.com/axe-devtools/
```

## Build for Production

```bash
# Build optimized bundle
npm run build

# Test production build locally
npm start

# Deploy to your hosting platform
```

## Deployment Checklist

- [ ] Update all `.env` variables for production
- [ ] Set up production database (if using)
- [ ] Configure email service credentials
- [ ] Test contact form submission
- [ ] Test theme toggle
- [ ] Test on mobile devices
- [ ] Update social media links
- [ ] Update contact information
- [ ] Configure domain and SSL
- [ ] Set up monitoring/analytics
- [ ] Test all links (Privacy, Terms, etc)

## Common Issues & Solutions

### Email Not Sending
- Check SMTP credentials in `.env.local`
- Verify Gmail 2FA and App Password
- Check firewall/network access to SMTP
- Review email service logs

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Theme Not Persisting
- Check browser localStorage (DevTools → Application)
- Clear cache and cookies
- Ensure JavaScript is enabled
- Check console for errors

### Slow Performance
- Check browser DevTools Performance tab
- Optimize images in public folder
- Reduce animation complexity
- Use browser caching headers

## Production Best Practices

1. **Security**
   - Use HTTPS only
   - Validate all form inputs
   - Use environment variables for secrets
   - Enable CORS properly
   - Rate limit API endpoints

2. **Performance**
   - Enable static generation where possible
   - Use image optimization
   - Minify CSS/JavaScript
   - Enable compression
   - Use CDN for assets

3. **Monitoring**
   - Set up error logging (Sentry, etc)
   - Monitor API response times
   - Track user interactions
   - Monitor email delivery

4. **SEO**
   - Add sitemap.xml
   - Add robots.txt
   - Use proper metadata
   - Enable Open Graph tags
   - Submit to search engines

## Support & Maintenance

- Keep dependencies updated: `npm outdated`
- Run security audit: `npm audit`
- Monitor analytics
- Backup database regularly
- Update content periodically

## Next Steps

1. ✅ Configure email service
2. ✅ Test contact form
3. ✅ Customize content
4. ✅ Test on all devices
5. ✅ Deploy to production
6. ✅ Monitor and maintain

---

For more help, visit [Next.js Docs](https://nextjs.org/docs) or [Tailwind CSS Docs](https://tailwindcss.com/docs)

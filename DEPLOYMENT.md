# Deployment Guide

This guide covers deploying the Venkatesh Ravi CA Firm website to production.

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript types are correct (no `any` types)
- [ ] No console errors in development
- [ ] All links work correctly
- [ ] Form submissions work correctly
- [ ] Email notifications are being sent
- [ ] Theme toggle works and persists

### Configuration
- [ ] Update firm name, address, phone in components
- [ ] Update social media links
- [ ] Configure email credentials
- [ ] Update privacy policy with actual details
- [ ] Update terms & conditions with actual details
- [ ] Set up analytics (optional)

### Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iPhone, iPad, Android devices
- [ ] Test contact form submission
- [ ] Test file uploads (if applicable)
- [ ] Test all external links
- [ ] Run Lighthouse audit

## Deployment Platforms

### 1. Vercel (Recommended)

**Advantages:**
- Built for Next.js
- Automatic deployments from Git
- Free tier available
- Excellent performance

**Steps:**

1. Push code to GitHub:
```bash
git remote add origin https://github.com/your-username/repo-name.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM_EMAIL`
   - `SMTP_TO_EMAIL`
   - `DATABASE_URL` (if using database)
   - Others from `.env.local`

6. Click "Deploy"
7. Your site is live! (domain provided by Vercel)

**Custom Domain:**
1. Go to project Settings → Domains
2. Add your domain
3. Update DNS records at your domain provider
4. Verify domain ownership

### 2. Railway

**Steps:**

1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project"
4. Select "GitHub Repo"
5. Choose your repository
6. Add environment variables in project settings
7. Deploy automatically on push

**Custom Domain:**
- Go to Networking tab
- Add custom domain

### 3. AWS Amplify

**Steps:**

1. Connect GitHub repository
2. Add environment variables
3. Set build settings:
   ```
   npm install
   npm run build
   ```
4. Deploy

### 4. DigitalOcean App Platform

**Steps:**

1. Connect GitHub
2. Configure build: `npm install && npm run build`
3. Configure start: `npm start`
4. Set environment variables
5. Deploy

### 5. Self-Hosted (VPS)

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- PostgreSQL (for database)
- Nginx or Apache (reverse proxy)
- SSL certificate (Let's Encrypt)

**Setup:**

```bash
# SSH into server
ssh ubuntu@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Clone repository
cd /var/www
git clone https://github.com/your-username/repo-name.git
cd repo-name

# Install dependencies
npm install

# Create .env for production
cp .env.local .env.production

# Build
npm run build

# Install PM2 (process manager)
sudo npm install -g pm2

# Start application
pm2 start npm --name "venkatesh-ca" -- start
pm2 save
sudo pm2 startup

# Configure Nginx
sudo apt-get install -y nginx
# Create /etc/nginx/sites-available/default with reverse proxy config
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    # SSL certificates from Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables for Production

Create `.env.production` with:

```bash
# Next.js
NODE_ENV="production"

# Database
DATABASE_URL="postgresql://prod_user:prod_password@prod-host:5432/prod_db"

# Email (use production service)
SMTP_HOST="smtp.gmail.com" # or your email service
SMTP_PORT="587"
SMTP_USER="production-email@yourdomain.com"
SMTP_PASS="production-app-password"
SMTP_FROM_EMAIL="noreply@yourdomain.com"
SMTP_TO_EMAIL="your-email@yourdomain.com"

# API
NEXT_PUBLIC_API_URL="https://yourdomain.com"
NEXT_PUBLIC_CONTACT_EMAIL="contact@yourdomain.com"

# Analytics (optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## Database Migration

If using PostgreSQL in production:

```bash
# Run migrations
npx prisma migrate deploy

# Seed database (if seed file exists)
npx prisma db seed
```

## SSL Certificate

### Using Let's Encrypt (Free)

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

### Verification
```bash
curl https://yourdomain.com
# Should show no SSL errors
```

## Performance Optimization

### Enable Compression
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1000;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

### Browser Caching
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### CDN (Cloudflare)

1. Sign up at cloudflare.com
2. Add your domain
3. Update nameservers at domain provider
4. Enable caching and optimization features

## Monitoring & Analytics

### Email Monitoring
- Set up SendGrid webhook to track email delivery
- Monitor bounce rate
- Track open rates if using email tracking

### Application Monitoring

**Sentry (Error Tracking)**
```bash
npm install @sentry/nextjs
```

Update `next.config.ts`:
```typescript
import { withSentryConfig } from "@sentry/nextjs";

export default withSentryConfig({
  // Next.js config
}, {
  org: "your-org",
  project: "your-project",
  authToken: process.env.SENTRY_AUTH_TOKEN,
});
```

**Google Analytics**
```typescript
// In layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Uptime Monitoring
- Use UptimeRobot.com
- Set up alerts for downtime
- Monitor API response times

## Backup Strategy

### Database Backups
```bash
# Daily automatic backups
0 2 * * * pg_dump -h localhost -U postgres venkatesh_ca > /backups/db_$(date +\%Y\%m\%d).sql
```

### Code Backups
- Use GitHub for version control
- Enable GitHub backup to cloud storage

## Domain Configuration

### DNS Records

Update at your domain registrar:

```
Type    | Name           | Value
--------|----------------|----------------------------------
A       | @              | Your server IP
CNAME   | www            | yourdomain.com
MX      | @              | mail.yourdomain.com (for email)
TXT     | @              | Your verification code
```

### Email Configuration

For custom email domain (@yourdomain.com):
1. Set up MX records
2. Configure SPF, DKIM, DMARC
3. Test with mail-tester.com

## Post-Deployment

### Verification Checklist
- [ ] Website loads on domain
- [ ] HTTPS works correctly
- [ ] Contact form sends emails
- [ ] Theme toggle works
- [ ] Mobile layout is responsive
- [ ] All links work
- [ ] Images load correctly
- [ ] Visitor counter increments
- [ ] Form submissions are saved
- [ ] Email notifications arrive

### Monitor First Week
- Check error logs daily
- Monitor email delivery
- Test contact form responses
- Check analytics

### Maintenance Schedule
- Weekly: Check error logs
- Monthly: Update dependencies (`npm update`)
- Monthly: Run security audit (`npm audit`)
- Quarterly: Database maintenance
- Yearly: SSL certificate renewal (auto with Let's Encrypt)

## Rollback Procedure

If deployment fails:

### Vercel
1. Go to Deployments
2. Find last successful deployment
3. Click "Redeploy"

### Self-Hosted
```bash
# Stop current version
pm2 stop venkatesh-ca

# Checkout previous version
git revert HEAD
npm install
npm run build

# Start again
pm2 start venkatesh-ca
```

## Emergency Contacts

- Domain Registrar: [your registrar]
- Hosting Provider: [your host]
- Email Service: [your email provider]
- Database: [your db provider]

## Support

For deployment issues:
- Check Next.js docs: https://nextjs.org/docs/deployment
- Contact hosting provider support
- Check application logs: `pm2 logs`

---

**Deployment completed successfully!** 🎉

Your website is now live and ready for visitors.

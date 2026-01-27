# Database & Email Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Supabase Account (FREE Database)

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" and sign up with GitHub
3. Create a new project:
   - Name: `venkatesh-ca-firm`
   - Database Password: (save this somewhere safe)
   - Region: `South Asia (Mumbai)` - closest to India
4. Wait 2-3 minutes for project to initialize

### Step 2: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query" and paste this SQL:

```sql
-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  subscribe_to_updates BOOLEAN DEFAULT false,
  notification_enabled BOOLEAN DEFAULT false,
  client_ip TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Visitor Count Table
CREATE TABLE visitor_count (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initialize visitor count
INSERT INTO visitor_count (id, count) VALUES (1, 1000);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_count ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous access
CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous select" ON visitor_count
  FOR SELECT TO anon USING (true);

CREATE POLICY "Allow anonymous update" ON visitor_count
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Allow anonymous insert visitor" ON visitor_count
  FOR INSERT TO anon WITH CHECK (true);
```

3. Click "Run" to execute

### Step 3: Get Supabase API Keys

1. Go to **Project Settings** → **API**
2. Copy:
   - **Project URL**: Your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key**: Your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 4: Create Resend Account (FREE Email - 100/day)

1. Go to [https://resend.com](https://resend.com)
2. Sign up with GitHub or Google
3. Go to **API Keys** → Click "Create API Key"
4. Name: `venkatesh-ca-firm`
5. Permission: `Sending access`
6. Copy the API key - this is your `RESEND_API_KEY`

### Step 5: Update Environment Variables

Update your `.env.local` file with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
```

### Step 6: Test the Setup

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out the contact form and submit
4. Check:
   - Supabase dashboard → Table Editor → contact_submissions (should see your entry)
   - Your email (vigneshravichandran2899@gmail.com) for the notification

---

## Upgrade Options (Optional)

### Custom Email Domain (Recommended for Production)

1. In Resend, go to **Domains** → "Add Domain"
2. Add your domain (e.g., `venkateshravica.com`)
3. Add the DNS records Resend provides
4. Once verified, update `src/lib/email.ts`:

```typescript
from: 'Venkatesh Ravi CA <contact@venkateshravica.com>'
```

### View Contact Submissions

You can view all submissions in Supabase dashboard:
- Go to **Table Editor** → **contact_submissions**
- Export as CSV if needed

---

## Troubleshooting

### "Invalid API key" Error
- Make sure you copied the **anon public** key, not the **service_role** key
- Check for extra spaces in your `.env.local`

### Email Not Sending
- Resend free tier only allows sending TO your verified email initially
- Add more emails in Resend dashboard → **Email Addresses**

### Database Connection Failed
- Check your Supabase project is active (not paused)
- Free tier pauses after 1 week of inactivity - just click "Restore" in dashboard

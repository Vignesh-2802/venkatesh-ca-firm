import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['gst-compliance'].title,
  description: serviceSeo['gst-compliance'].description,
  keywords: serviceSeo['gst-compliance'].keywords,
  alternates: {
    canonical: '/services/gst-compliance',
  },
  openGraph: {
    title: `${serviceSeo['gst-compliance'].title} | ${siteName}`,
    description: serviceSeo['gst-compliance'].description,
    url: `${getBaseUrl()}/services/gst-compliance`,
    type: 'article',
  },
};

export default function GSTComplianceLayout({ children }: { children: React.ReactNode }) {
  return children;
}

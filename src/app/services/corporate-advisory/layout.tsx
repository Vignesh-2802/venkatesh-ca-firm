import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['corporate-advisory'].title,
  description: serviceSeo['corporate-advisory'].description,
  keywords: serviceSeo['corporate-advisory'].keywords,
  alternates: {
    canonical: '/services/corporate-advisory',
  },
  openGraph: {
    title: `${serviceSeo['corporate-advisory'].title} | ${siteName}`,
    description: serviceSeo['corporate-advisory'].description,
    url: `${getBaseUrl()}/services/corporate-advisory`,
    type: 'article',
  },
};

export default function CorporateAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}

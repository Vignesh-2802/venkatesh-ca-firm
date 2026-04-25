import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['statutory-audit'].title,
  description: serviceSeo['statutory-audit'].description,
  keywords: serviceSeo['statutory-audit'].keywords,
  alternates: {
    canonical: '/services/statutory-audit',
  },
  openGraph: {
    title: `${serviceSeo['statutory-audit'].title} | ${siteName}`,
    description: serviceSeo['statutory-audit'].description,
    url: `${getBaseUrl()}/services/statutory-audit`,
    type: 'article',
  },
};

export default function StatutoryAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}

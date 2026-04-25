import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['internal-audit'].title,
  description: serviceSeo['internal-audit'].description,
  keywords: serviceSeo['internal-audit'].keywords,
  alternates: {
    canonical: '/services/internal-audit',
  },
  openGraph: {
    title: `${serviceSeo['internal-audit'].title} | ${siteName}`,
    description: serviceSeo['internal-audit'].description,
    url: `${getBaseUrl()}/services/internal-audit`,
    type: 'article',
  },
};

export default function InternalAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}

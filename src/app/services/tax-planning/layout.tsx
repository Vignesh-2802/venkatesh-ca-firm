import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['tax-planning'].title,
  description: serviceSeo['tax-planning'].description,
  keywords: serviceSeo['tax-planning'].keywords,
  alternates: {
    canonical: '/services/tax-planning',
  },
  openGraph: {
    title: `${serviceSeo['tax-planning'].title} | ${siteName}`,
    description: serviceSeo['tax-planning'].description,
    url: `${getBaseUrl()}/services/tax-planning`,
    type: 'article',
  },
};

export default function TaxPlanningLayout({ children }: { children: React.ReactNode }) {
  return children;
}

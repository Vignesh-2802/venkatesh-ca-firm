import type { Metadata } from 'next';

import { getBaseUrl, serviceSeo, siteName } from '@/lib/seo';

export const metadata: Metadata = {
  title: serviceSeo['financial-planning'].title,
  description: serviceSeo['financial-planning'].description,
  keywords: serviceSeo['financial-planning'].keywords,
  alternates: {
    canonical: '/services/financial-planning',
  },
  openGraph: {
    title: `${serviceSeo['financial-planning'].title} | ${siteName}`,
    description: serviceSeo['financial-planning'].description,
    url: `${getBaseUrl()}/services/financial-planning`,
    type: 'article',
  },
};

export default function FinancialPlanningLayout({ children }: { children: React.ReactNode }) {
  return children;
}

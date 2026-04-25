import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Venkatesh Ravi Chartered Accountant website and services.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

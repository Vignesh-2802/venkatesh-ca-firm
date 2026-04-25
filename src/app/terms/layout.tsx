import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Venkatesh Ravi Chartered Accountant website and services.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

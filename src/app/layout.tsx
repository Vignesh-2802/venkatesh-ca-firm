import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultKeywords, getBaseUrl, siteDescription, siteName } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: `${siteName} | CA Services in India`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: defaultKeywords,
  authors: [{ name: "Venkatesh Ravi" }],
  creator: "Venkatesh Ravi",
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  category: "Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${siteName} | CA Services in India`,
    description: siteDescription,
    siteName,
    locale: "en_IN",
    type: "website",
    url: getBaseUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | CA Services in India`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = getBaseUrl();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteName,
    url: baseUrl,
    description: siteDescription,
    areaServed: "India",
    email: "contact@venkateshfirm.com",
    founder: {
      "@type": "Person",
      name: "Venkatesh Ravi",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white transition-all duration-500 ease-out">
            <Header />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

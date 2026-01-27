import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Venkatesh Ravi | Chartered Accountant",
  description: "Professional Chartered Accountant services - Audit, Taxation, and Financial Consulting for businesses across India.",
  keywords: ["Chartered Accountant", "CA", "Audit", "Tax", "Financial Consulting", "India"],
  authors: [{ name: "Venkatesh Ravi" }],
  openGraph: {
    title: "Venkatesh Ravi | Chartered Accountant",
    description: "Professional CA services for audit, taxation, and financial consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

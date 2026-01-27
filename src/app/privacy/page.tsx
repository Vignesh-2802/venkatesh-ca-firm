'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="heading-lg gradient-text mb-4">Privacy Policy</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card-lg p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Venkatesh Ravi&apos;s firm (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates this website. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>
                  <strong>Information You Provide:</strong> Name, email address, phone number, and message 
                  content through our contact form.
                </li>
                <li>
                  <strong>Automatically Collected:</strong> IP address, browser type, operating system, and 
                  browsing behavior through cookies.
                </li>
                <li>
                  <strong>Location Data:</strong> With your permission, we may collect geolocation information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Use of Information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Responding to your inquiries and providing consulting services</li>
                <li>Sending you updates and notifications (only if you opt-in)</li>
                <li>Improving our website and user experience</li>
                <li>Analyzing website traffic and performance</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We use cookies to track visitor counts and remember your theme preference. You can control 
                cookie settings through your browser. Our theme preference is stored in localStorage and is 
                purely for user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Browser Notifications</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When you opt-in, we may send browser notifications about important updates. You can disable 
                notifications at any time through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. However, 
                no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security 
                of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We retain your contact form information for professional records and legal compliance purposes. 
                You can request deletion of your personal data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">8. Third-Party Services</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We use third-party services (email provider, hosting) that may access your information. These 
                services are bound by confidentiality agreements and strict data protection policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">9. Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Under applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@venkateshfirm.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  contact@venkateshfirm.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

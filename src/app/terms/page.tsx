'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
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
            <h1 className="heading-lg gradient-text mb-4">Terms & Conditions</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card-lg p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Terms of Service</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Use License</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on Venkatesh Ravi&apos;s website for personal, non-commercial transitory viewing only. This is the 
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The materials on Venkatesh Ravi&apos;s website are provided on an &ldquo;as is&rdquo; basis. 
                Venkatesh Ravi makes no warranties, expressed or implied, and hereby disclaims and negates 
                all other warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Limitations</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                In no event shall Venkatesh Ravi or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Accuracy of Materials</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The materials appearing on this website could include technical, typographical, or 
                photographic errors. Venkatesh Ravi does not warrant that any of the materials on its 
                website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Links</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Venkatesh Ravi has not reviewed all of the sites linked to this website and is not 
                responsible for the contents of any such linked site. The inclusion of any link does 
                not imply endorsement by Venkatesh Ravi of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Modifications</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Venkatesh Ravi may revise these terms of service for its website at any time without 
                notice. By using this website, you are agreeing to be bound by the then-current version 
                of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">8. Governing Law</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of 
                India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">9. Professional Services</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Any professional services provided by Venkatesh Ravi are subject to separate engagement 
                letters and terms. The information on this website does not constitute professional advice 
                and should not be relied upon as such.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">10. Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at{' '}
                <a href="mailto:contact@venkateshfirm.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  contact@venkateshfirm.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

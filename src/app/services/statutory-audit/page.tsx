'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StatutoryAuditPage() {
  const auditTypes = [
    {
      title: 'Company Audit',
      description: 'Mandatory audit under Section 139 of Companies Act, 2013 for all registered companies.',
      icon: '🏢',
    },
    {
      title: 'Tax Audit',
      description: 'Audit under Section 44AB of Income Tax Act for businesses exceeding prescribed turnover limits.',
      icon: '📊',
    },
    {
      title: 'Bank Audit',
      description: 'Statutory and concurrent audit of banking institutions as per RBI guidelines.',
      icon: '🏦',
    },
    {
      title: 'Cooperative Society Audit',
      description: 'Audit under respective State Cooperative Societies Act.',
      icon: '🤝',
    },
  ];

  const benefits = [
    'Compliance with Companies Act, 2013 and ICAI Standards',
    'Independent verification of financial statements',
    'Detection of fraud, errors, and irregularities',
    'Enhanced credibility with stakeholders and investors',
    'Identification of internal control weaknesses',
    'Valuable insights for business improvement',
  ];

  const process = [
    { step: '01', title: 'Engagement Planning', desc: 'Understanding your business and risk assessment' },
    { step: '02', title: 'Control Testing', desc: 'Evaluation of internal controls and systems' },
    { step: '03', title: 'Substantive Testing', desc: 'Detailed verification of transactions and balances' },
    { step: '04', title: 'Report Issuance', desc: 'Independent audit opinion and management letter' },
  ];

  return (
    <div className="min-h-screen service-page-bg pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-5xl">📋</span>
              <h1 className="heading-lg gradient-text">Statutory Audit</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Independent examination of financial statements as mandated by law under the Companies Act, 2013 
              and other applicable statutes, ensuring compliance with Indian Accounting Standards (Ind AS) and 
              Standards on Auditing issued by ICAI.
            </p>
          </div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              What is Statutory Audit?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Statutory Audit is a legally mandated examination of an organization&apos;s financial records and 
              statements. In India, it is governed by the <strong>Companies Act, 2013</strong>, where Section 139 
              mandates appointment of auditors, Section 143 defines auditor&apos;s duties, and Section 144 prohibits 
              certain services by auditors.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              As per <strong>ICAI guidelines</strong>, auditors must follow Standards on Auditing (SAs) issued by 
              the Auditing and Assurance Standards Board. The audit provides an independent opinion on whether the 
              financial statements give a true and fair view of the company&apos;s financial position.
            </p>
          </motion.div>

          {/* Audit Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Types of Statutory Audits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {auditTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <span className="text-3xl mb-4 block">{type.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{type.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Audit Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Benefits of Statutory Audit</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Need Statutory Audit Services?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get expert audit services compliant with Companies Act, 2013 and ICAI Standards.
            </p>
            <Link href="/#contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

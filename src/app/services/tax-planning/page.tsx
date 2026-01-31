'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TaxPlanningPage() {
  const services = [
    {
      title: 'Income Tax Planning',
      description: 'Strategic planning under Income Tax Act, 1961 including deductions under Chapter VI-A, exemptions, and capital gains optimization.',
      icon: '📈',
    },
    {
      title: 'Corporate Tax Strategy',
      description: 'Tax-efficient structuring for companies including MAT planning, transfer pricing, and international taxation.',
      icon: '🏛️',
    },
    {
      title: 'TDS Compliance',
      description: 'Complete TDS management including deduction, deposit, returns filing, and lower deduction certificates.',
      icon: '📝',
    },
    {
      title: 'Advance Tax Planning',
      description: 'Quarterly advance tax computation and timely payment to avoid interest under Section 234B and 234C.',
      icon: '📅',
    },
  ];

  const deductions = [
    { section: '80C', limit: '₹1,50,000', description: 'PPF, ELSS, Life Insurance, etc.' },
    { section: '80D', limit: '₹25,000-₹1,00,000', description: 'Health Insurance Premium' },
    { section: '80E', limit: 'No Limit', description: 'Education Loan Interest' },
    { section: '80G', limit: '50%-100%', description: 'Donations to Charitable Institutions' },
    { section: '80TTA', limit: '₹10,000', description: 'Savings Account Interest' },
    { section: '80TTB', limit: '₹50,000', description: 'Interest Income for Senior Citizens' },
  ];

  const taxRegimes = [
    {
      title: 'Old Tax Regime',
      features: [
        'Deductions under Chapter VI-A available',
        'HRA and LTA exemptions applicable',
        'Standard deduction of ₹50,000',
        'Suitable for high deduction claimers',
      ],
    },
    {
      title: 'New Tax Regime (Section 115BAC)',
      features: [
        'Lower tax rates across slabs',
        'Limited deductions available',
        'Standard deduction of ₹75,000 (FY 2024-25)',
        'Simplified tax computation',
      ],
    },
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
              <span className="text-5xl">💰</span>
              <h1 className="heading-lg gradient-text">Tax Planning</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Strategic tax planning services under Income Tax Act, 1961 to minimize tax liability legally 
              while ensuring full compliance with Indian tax laws and regulations.
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
              What is Tax Planning?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Tax Planning is the legal process of analyzing your financial situation to minimize tax liability 
              through legitimate means provided under the <strong>Income Tax Act, 1961</strong>. Unlike tax evasion 
              (which is illegal), tax planning involves using available deductions, exemptions, and rebates.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              With the introduction of the <strong>New Tax Regime under Section 115BAC</strong>, taxpayers now 
              have the choice between two tax structures. Our experts help you choose the optimal regime based 
              on your specific financial situation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Tax Planning Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tax Regimes Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Tax Regime Comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {taxRegimes.map((regime, index) => (
                <motion.div
                  key={regime.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{regime.title}</h3>
                  <ul className="space-y-3">
                    {regime.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Deductions Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Deductions under Chapter VI-A
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Section</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Limit</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {deductions.map((item, index) => (
                    <tr key={item.section} className={index !== deductions.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}>
                      <td className="py-3 px-4 font-medium text-blue-600 dark:text-blue-400">{item.section}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.limit}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Optimize Your Tax Strategy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get expert guidance to legally minimize your tax liability under Indian tax laws.
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

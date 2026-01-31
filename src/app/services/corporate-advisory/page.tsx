'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CorporateAdvisoryPage() {
  const services = [
    {
      title: 'Company Incorporation',
      description: 'End-to-end assistance for incorporating Private Limited, Public Limited, OPC, LLP under Companies Act, 2013 and LLP Act, 2008.',
      icon: '🏢',
    },
    {
      title: 'Corporate Restructuring',
      description: 'Mergers, acquisitions, demergers, and amalgamations under Sections 230-240 of Companies Act, 2013.',
      icon: '🔄',
    },
    {
      title: 'Secretarial Compliance',
      description: 'Board meetings, AGM, annual filings (AOC-4, MGT-7), maintenance of statutory registers under Companies Act.',
      icon: '📁',
    },
    {
      title: 'FEMA Compliance',
      description: 'Foreign investment advisory, ODI/FDI compliance, ECB guidelines, and FEMA reporting requirements.',
      icon: '🌐',
    },
  ];

  const companyTypes = [
    {
      type: 'Private Limited Company',
      minDirectors: '2',
      minCapital: 'No minimum',
      liability: 'Limited',
      features: ['Separate legal entity', 'Easy fundraising', 'Perpetual succession'],
    },
    {
      type: 'One Person Company (OPC)',
      minDirectors: '1',
      minCapital: 'No minimum',
      liability: 'Limited',
      features: ['Single owner structure', 'Limited compliance', 'Conversion required at ₹2 Cr T/O'],
    },
    {
      type: 'Limited Liability Partnership',
      minDirectors: '2 (Partners)',
      minCapital: 'No minimum',
      liability: 'Limited',
      features: ['Partnership flexibility', 'Corporate structure', 'No audit up to ₹40L contribution'],
    },
    {
      type: 'Public Limited Company',
      minDirectors: '3',
      minCapital: 'No minimum',
      liability: 'Limited',
      features: ['Public shareholding', 'Stock exchange listing', 'Higher compliance'],
    },
  ];

  const complianceCalendar = [
    { event: 'Board Meeting', frequency: 'Quarterly (gap not > 120 days)', section: 'Section 173' },
    { event: 'Annual General Meeting', frequency: 'Once a year (within 6 months of FY end)', section: 'Section 96' },
    { event: 'AOC-4 (Financial Statements)', frequency: 'Annual', section: 'Section 137' },
    { event: 'MGT-7/MGT-7A (Annual Return)', frequency: 'Annual', section: 'Section 92' },
    { event: 'DIR-3 KYC', frequency: 'Annual (by 30th September)', section: 'Rule 12A' },
    { event: 'ADT-1 (Auditor Appointment)', frequency: 'Within 15 days of AGM', section: 'Section 139' },
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
              <span className="text-5xl">🏛️</span>
              <h1 className="heading-lg gradient-text">Corporate Advisory</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Expert corporate law advisory services covering company formation, restructuring, 
              and ongoing compliance under Companies Act, 2013, LLP Act, 2008, and FEMA regulations.
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
              Corporate Law Framework in India
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The <strong>Companies Act, 2013</strong> is the primary legislation governing companies in India, 
              replacing the Companies Act, 1956. It introduced concepts like One Person Company, Corporate Social 
              Responsibility (CSR), and stricter corporate governance norms.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The <strong>Ministry of Corporate Affairs (MCA)</strong> is the regulatory body, and companies 
              must comply with various rules including Companies (Incorporation) Rules, Companies (Accounts) Rules, 
              and Companies (Management and Administration) Rules.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Advisory Services</h2>
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

          {/* Company Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Types of Business Entities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {companyTypes.map((company, index) => (
                <motion.div
                  key={company.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{company.type}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><span className="text-slate-500 dark:text-slate-400">Min Directors:</span> <span className="text-slate-700 dark:text-slate-300">{company.minDirectors}</span></p>
                    <p className="text-sm"><span className="text-slate-500 dark:text-slate-400">Min Capital:</span> <span className="text-slate-700 dark:text-slate-300">{company.minCapital}</span></p>
                    <p className="text-sm"><span className="text-slate-500 dark:text-slate-400">Liability:</span> <span className="text-slate-700 dark:text-slate-300">{company.liability}</span></p>
                  </div>
                  <ul className="space-y-2">
                    {company.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Annual Compliance Calendar</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Compliance</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Frequency</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Section/Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceCalendar.map((item, index) => (
                    <tr key={item.event} className={index !== complianceCalendar.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}>
                      <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{item.event}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.frequency}</td>
                      <td className="py-3 px-4 text-blue-600 dark:text-blue-400">{item.section}</td>
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
              Need Corporate Advisory?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get expert guidance on company formation, restructuring, and compliance matters.
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

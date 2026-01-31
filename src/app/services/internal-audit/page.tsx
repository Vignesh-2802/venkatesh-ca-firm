'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InternalAuditPage() {
  const services = [
    {
      title: 'Risk-Based Internal Audit',
      description: 'Comprehensive audit approach focusing on high-risk areas as per IIA Standards and Companies Act requirements under Section 138.',
      icon: '🎯',
    },
    {
      title: 'Process & Control Review',
      description: 'Evaluation of business processes, internal controls, and standard operating procedures for efficiency and compliance.',
      icon: '⚙️',
    },
    {
      title: 'Fraud Investigation',
      description: 'Forensic examination and investigation of suspected fraud, irregularities, and misconduct with detailed reporting.',
      icon: '🔍',
    },
    {
      title: 'Compliance Audit',
      description: 'Review of adherence to laws, regulations, company policies, and contractual obligations applicable to your business.',
      icon: '✅',
    },
  ];

  const auditAreas = [
    { area: 'Procurement & Vendor Management', focus: 'Purchase procedures, vendor selection, price negotiation, GRN process' },
    { area: 'Revenue & Receivables', focus: 'Sales process, credit management, billing accuracy, collection efficiency' },
    { area: 'Inventory Management', focus: 'Stock control, valuation, obsolescence, physical verification' },
    { area: 'Fixed Assets', focus: 'Capitalization policy, depreciation, physical existence, impairment' },
    { area: 'Payroll & HR', focus: 'Employee records, attendance, salary computation, statutory compliance' },
    { area: 'Treasury & Cash Management', focus: 'Bank reconciliation, cash handling, investment management' },
  ];

  const mandatoryRequirements = [
    {
      category: 'Companies Act, 2013',
      requirements: [
        'Section 138: Mandatory internal audit for prescribed class of companies',
        'Applicable to listed companies and unlisted companies meeting thresholds',
        'Companies with turnover ≥ ₹200 Crore',
        'Companies with outstanding loans/borrowings ≥ ₹100 Crore',
        'Companies with outstanding deposits ≥ ₹25 Crore',
      ],
    },
    {
      category: 'IIA Standards',
      requirements: [
        'Independence and objectivity of internal auditors',
        'Proficiency and due professional care',
        'Quality assurance and improvement program',
        'Proper documentation and evidence',
        'Communication of results to management',
      ],
    },
  ];

  const auditProcess = [
    { phase: '01', title: 'Planning', activities: ['Risk assessment', 'Audit universe', 'Annual audit plan', 'Resource allocation'] },
    { phase: '02', title: 'Fieldwork', activities: ['Control testing', 'Substantive procedures', 'Data analytics', 'Interview key personnel'] },
    { phase: '03', title: 'Reporting', activities: ['Draft observations', 'Management response', 'Final report', 'Audit committee presentation'] },
    { phase: '04', title: 'Follow-up', activities: ['Action tracking', 'Implementation review', 'Closure verification', 'Continuous monitoring'] },
  ];

  const benefits = [
    'Early detection of fraud, errors, and control weaknesses',
    'Improved operational efficiency and cost savings',
    'Enhanced corporate governance and accountability',
    'Better regulatory compliance and risk management',
    'Independent assurance to Board and Audit Committee',
    'Recommendations for process improvement',
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
              <span className="text-5xl">🔎</span>
              <h1 className="heading-lg gradient-text">Internal Audit</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Independent and objective assurance services to evaluate and improve the effectiveness of 
              risk management, control, and governance processes as per IIA Standards and Companies Act, 2013.
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
              What is Internal Audit?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Internal Audit is an independent, objective assurance and consulting activity designed to 
              add value and improve an organization&apos;s operations. Under <strong>Section 138 of the 
              Companies Act, 2013</strong>, certain classes of companies are required to appoint an internal 
              auditor who may be a Chartered Accountant or Cost Accountant.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The internal audit function helps organizations accomplish their objectives by bringing a 
              systematic, disciplined approach to evaluate and improve the effectiveness of <strong>risk 
              management, control, and governance processes</strong>.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Internal Audit Services</h2>
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

          {/* Audit Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Audit Methodology</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {auditProcess.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    {item.phase}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <ul className="space-y-1">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Audit Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Audit Areas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {auditAreas.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.area}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mandatory Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Regulatory Framework</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mandatoryRequirements.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="service-card p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600 dark:text-slate-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Benefits of Internal Audit</h2>
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
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Strengthen Your Internal Controls
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get independent assurance on your organization&apos;s risk management and governance processes.
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

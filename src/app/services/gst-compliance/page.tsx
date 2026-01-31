'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GSTCompliancePage() {
  const services = [
    {
      title: 'GST Registration',
      description: 'Complete assistance with GST registration under Section 22-25, including regular, composition scheme, and voluntary registration.',
      icon: '📋',
    },
    {
      title: 'GST Return Filing',
      description: 'Timely filing of GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, and other applicable returns as per GST Act provisions.',
      icon: '📊',
    },
    {
      title: 'Input Tax Credit',
      description: 'ITC reconciliation, GSTR-2A/2B matching, and maximizing eligible credit under Section 16-21 of CGST Act.',
      icon: '💳',
    },
    {
      title: 'GST Audit & Assessment',
      description: 'GST audit under Section 35(5) and representation before GST authorities in assessment proceedings.',
      icon: '🔍',
    },
  ];

  const returnTypes = [
    { form: 'GSTR-1', frequency: 'Monthly/Quarterly', description: 'Outward supplies details', deadline: '11th/13th of next month' },
    { form: 'GSTR-3B', frequency: 'Monthly', description: 'Summary return with tax payment', deadline: '20th of next month' },
    { form: 'GSTR-9', frequency: 'Annual', description: 'Annual return for regular taxpayers', deadline: '31st December' },
    { form: 'GSTR-9C', frequency: 'Annual', description: 'Reconciliation statement (if T/O > ₹5 Cr)', deadline: '31st December' },
    { form: 'GSTR-4', frequency: 'Annual', description: 'Return for composition dealers', deadline: '30th April' },
  ];

  const penalties = [
    { violation: 'Late filing of returns', penalty: '₹50/day (₹20 for Nil return), max ₹10,000' },
    { violation: 'Non-filing of returns', penalty: 'Registration cancellation + penalty' },
    { violation: 'Wrong ITC claim', penalty: '100% of wrong credit + interest @24%' },
    { violation: 'Invoice without GST number', penalty: '₹25,000 per invoice' },
  ];

  const gstRates = [
    { rate: '0%', items: 'Essential goods - Fresh fruits, vegetables, milk, eggs' },
    { rate: '5%', items: 'Mass consumption - Packaged food, transport, economy hotels' },
    { rate: '12%', items: 'Standard goods - Processed food, business class air travel' },
    { rate: '18%', items: 'Standard services - IT services, financial services, restaurants' },
    { rate: '28%', items: 'Luxury & sin goods - Cars, tobacco, aerated drinks' },
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
              <span className="text-5xl">🧾</span>
              <h1 className="heading-lg gradient-text">GST Compliance</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Comprehensive GST services ensuring full compliance with the Goods and Services Tax Act, 2017 
              (CGST, SGST, IGST) and related regulations issued by GST Council.
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
              Understanding GST in India
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              <strong>Goods and Services Tax (GST)</strong> was implemented on July 1, 2017, replacing multiple 
              indirect taxes like VAT, Service Tax, Excise Duty, etc. It is governed by the <strong>CGST Act, 
              SGST Acts, IGST Act, and UTGST Act</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              GST registration is mandatory for businesses with aggregate turnover exceeding <strong>₹40 lakhs 
              (₹20 lakhs for special category states)</strong> for goods, and <strong>₹20 lakhs (₹10 lakhs for 
              special category states)</strong> for services under Section 22 of CGST Act.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our GST Services</h2>
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

          {/* GST Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">GST Rate Structure</h2>
            <div className="space-y-4">
              {gstRates.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
                  <span className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.rate}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">{item.items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Return Filing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">GST Return Filing Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Form</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Frequency</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {returnTypes.map((item, index) => (
                    <tr key={item.form} className={index !== returnTypes.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}>
                      <td className="py-3 px-4 font-medium text-blue-600 dark:text-blue-400">{item.form}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.frequency}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.description}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Penalties Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Penalties for Non-Compliance
            </h2>
            <div className="space-y-3">
              {penalties.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-red-700 dark:text-red-300">{item.violation}:</span>
                  <span className="text-red-600 dark:text-red-400">{item.penalty}</span>
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
              Stay GST Compliant
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Avoid penalties and interest with our comprehensive GST compliance services.
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

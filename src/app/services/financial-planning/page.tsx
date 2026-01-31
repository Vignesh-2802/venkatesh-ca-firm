'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinancialPlanningPage() {
  const services = [
    {
      title: 'Investment Advisory',
      description: 'SEBI-compliant investment guidance covering mutual funds, stocks, bonds, and alternative investments aligned with your risk profile.',
      icon: '📈',
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement corpus planning including NPS (National Pension System), EPF, and other pension schemes under PFRDA.',
      icon: '🎯',
    },
    {
      title: 'Estate Planning',
      description: 'Will drafting, succession planning, and wealth transfer strategies compliant with Indian Succession Act and Hindu Succession Act.',
      icon: '🏠',
    },
    {
      title: 'Business Valuation',
      description: 'DCF, NAV, and comparable valuation methods as per ICAI Valuation Standards for M&A, funding, and regulatory purposes.',
      icon: '💎',
    },
  ];

  const investmentOptions = [
    {
      category: 'Equity',
      options: [
        { name: 'Direct Stocks', risk: 'High', returns: '12-15%*', taxBenefit: 'LTCG @12.5% above ₹1.25L' },
        { name: 'Equity Mutual Funds', risk: 'High', returns: '10-14%*', taxBenefit: 'ELSS - 80C deduction' },
      ],
    },
    {
      category: 'Debt',
      options: [
        { name: 'Fixed Deposits', risk: 'Low', returns: '6-7%', taxBenefit: '5-year FD - 80C' },
        { name: 'Debt Mutual Funds', risk: 'Low-Medium', returns: '6-8%*', taxBenefit: 'Taxed as per slab' },
        { name: 'PPF', risk: 'Nil', returns: '7.1%', taxBenefit: 'EEE status under 80C' },
      ],
    },
    {
      category: 'Retirement',
      options: [
        { name: 'NPS (Tier I)', risk: 'Medium', returns: '8-10%*', taxBenefit: '80CCD(1B) - Extra ₹50K' },
        { name: 'EPF', risk: 'Nil', returns: '8.25%', taxBenefit: '80C deduction' },
      ],
    },
  ];

  const financialGoals = [
    { goal: 'Emergency Fund', timeline: 'Immediate', recommendation: '6 months expenses in liquid funds/savings' },
    { goal: 'Child Education', timeline: '10-15 years', recommendation: 'Equity MFs + Sukanya Samriddhi (for girl child)' },
    { goal: 'Home Purchase', timeline: '5-10 years', recommendation: 'Balanced funds + FDs + Home loan planning' },
    { goal: 'Retirement', timeline: '20-30 years', recommendation: 'NPS + EPF + Equity MFs + PPF' },
    { goal: 'Wealth Creation', timeline: 'Long-term', recommendation: 'Diversified equity portfolio + Real estate' },
  ];

  const taxSavingOptions = [
    { section: '80C', limit: '₹1.5 Lakh', options: 'ELSS, PPF, EPF, NSC, SCSS, Life Insurance, Home Loan Principal' },
    { section: '80CCD(1B)', limit: '₹50,000', options: 'NPS (National Pension System) - Additional deduction' },
    { section: '80D', limit: '₹25K-₹1L', options: 'Health Insurance Premium (self, family, parents)' },
    { section: '80E', limit: 'No limit', options: 'Education Loan Interest (8 years from start of repayment)' },
    { section: '24(b)', limit: '₹2 Lakh', options: 'Home Loan Interest (self-occupied property)' },
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
              <span className="text-5xl">📊</span>
              <h1 className="heading-lg gradient-text">Financial Planning</h1>
            </motion.div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Comprehensive financial planning services to help you achieve your life goals through 
              strategic investment, tax optimization, and wealth management aligned with Indian regulations.
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
              Why Financial Planning Matters
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Financial planning is a systematic approach to managing your finances to achieve life goals. 
              In India, with rising inflation, increasing life expectancy, and changing family structures, 
              professional financial planning has become essential.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our approach follows the <strong>SEBI guidelines</strong> for investment advisory and 
              <strong>ICAI standards</strong> for financial assessment. We help you create a personalized 
              financial roadmap considering your income, expenses, risk appetite, and future goals.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Planning Services</h2>
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

          {/* Financial Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Goal-Based Planning</h2>
            <div className="space-y-4">
              {financialGoals.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.goal}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.timeline}</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{item.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Investment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Investment Options in India</h2>
            {investmentOptions.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + catIndex * 0.1 }}
                className="mb-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></span>
                  {category.category} Instruments
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full service-card">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Option</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Risk</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Expected Returns</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Tax Benefit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.options.map((option, index) => (
                        <tr key={option.name} className={index !== category.options.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}>
                          <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{option.name}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              option.risk === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                              option.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              option.risk === 'Low-Medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                              {option.risk}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{option.returns}</td>
                          <td className="py-3 px-4 text-blue-600 dark:text-blue-400 text-sm">{option.taxBenefit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
              *Returns are indicative and based on historical performance. Actual returns may vary. Mutual fund investments are subject to market risks.
            </p>
          </motion.div>

          {/* Tax Saving */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="service-hero-card p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tax Saving Avenues</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Section</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Limit</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Eligible Investments/Expenses</th>
                  </tr>
                </thead>
                <tbody>
                  {taxSavingOptions.map((item, index) => (
                    <tr key={item.section} className={index !== taxSavingOptions.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}>
                      <td className="py-3 px-4 font-medium text-blue-600 dark:text-blue-400">{item.section}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.limit}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300 text-sm">{item.options}</td>
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
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Start Your Financial Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get a personalized financial plan tailored to your goals and risk profile.
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

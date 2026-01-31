'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/utils/data';

const ExperienceSection = () => {
  const services = [
    {
      icon: '📊',
      title: 'Statutory Audit',
      description: 'Comprehensive audit services ensuring compliance with Indian accounting standards and regulatory requirements.',
    },
    {
      icon: '💰',
      title: 'Tax Planning',
      description: 'Strategic tax planning and compliance services for individuals and businesses to optimize tax efficiency.',
    },
    {
      icon: '📋',
      title: 'GST Compliance',
      description: 'End-to-end GST services including registration, filing, audits, and advisory for seamless compliance.',
    },
    {
      icon: '🏢',
      title: 'Corporate Advisory',
      description: 'Expert guidance on company formation, restructuring, mergers, and regulatory compliance matters.',
    },
    {
      icon: '📈',
      title: 'Financial Planning',
      description: 'Tailored financial strategies to help businesses achieve sustainable growth and profitability.',
    },
    {
      icon: '🔍',
      title: 'Internal Audit',
      description: 'Risk-based internal audit services to strengthen internal controls and improve operational efficiency.',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-[#1e293b] dark:via-[#0f172a] dark:to-[#1e293b] transition-all duration-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-violet-100/30 dark:from-blue-900/20 dark:to-violet-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/60 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-500/20 mb-6 backdrop-blur-xl shadow-lg shadow-violet-500/5">
            Professional Expertise
          </span>
          <h2 className="heading-lg gradient-text mb-4">
            Services & Experience
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive financial services tailored to your business needs
          </p>
        </motion.div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 md:p-8 text-center card-hover group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {item.stats}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="heading-md text-center mb-12">
            What I <span className="gradient-text">Offer</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 card-hover group relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 dark:from-blue-500/10 dark:to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform relative z-10">
                {service.icon}
              </span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                {service.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 relative z-10">
                {service.description}
              </p>
              
              {/* Learn more link */}
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

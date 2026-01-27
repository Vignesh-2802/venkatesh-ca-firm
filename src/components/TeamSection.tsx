'use client';

import { motion } from 'framer-motion';

const TeamSection = () => {
  const qualifications = [
    'Bachelor of Commerce (B.Com)',
    'Master of Arts (M.A)',
    'Chartered Accountant (CA)',
    'Member - ICAI',
  ];

  const expertise = [
    'Statutory & Internal Audit',
    'Tax Planning & Compliance',
    'GST Advisory',
    'Corporate Finance',
    'Financial Due Diligence',
    'Regulatory Compliance',
  ];

  return (
    <section
      id="team"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white dark:from-slate-900 dark:via-slate-800/30 dark:to-slate-900" />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-200/40 to-emerald-200/40 dark:from-teal-800/20 dark:to-emerald-800/20 rounded-full blur-3xl"
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-100/80 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-500/20 mb-6">
            About Me
          </span>
          <h2 className="heading-lg gradient-text mb-4">
            Meet the Professional
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Dedicated to delivering excellence in financial services
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card-lg p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />
            
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 relative z-10">
              {/* Profile Image Placeholder */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-teal-500 p-1">
                    <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="text-6xl md:text-8xl font-bold gradient-text">VR</span>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium shadow-lg">
                    Available
                  </div>
                </motion.div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-3">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Venkatesh Ravi
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
                  Founder & Chartered Accountant
                </p>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  With over a decade of experience in audit, taxation, and financial consulting, 
                  I am committed to helping businesses navigate complex financial landscapes with 
                  clarity and confidence. My approach combines technical expertise with a deep 
                  understanding of business dynamics to deliver practical, value-driven solutions.
                </p>

                {/* Qualifications */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Qualifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {qualifications.map((qual) => (
                      <span
                        key={qual}
                        className="px-3 py-1.5 rounded-full text-sm bg-blue-100/80 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-500/20"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Areas of Expertise */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-sm bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Let&apos;s Work Together
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

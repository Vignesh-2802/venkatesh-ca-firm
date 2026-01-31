'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  const quickLinks = [
    { label: 'Home', id: 'overview' },
    { label: 'Education', id: 'education' },
    { label: 'Services', id: 'experience' },
    { label: 'About', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    { name: 'Statutory Audit', href: '/services/statutory-audit' },
    { name: 'Tax Planning', href: '/services/tax-planning' },
    { name: 'GST Compliance', href: '/services/gst-compliance' },
    { name: 'Corporate Advisory', href: '/services/corporate-advisory' },
    { name: 'Financial Planning', href: '/services/financial-planning' },
    { name: 'Internal Audit', href: '/services/internal-audit' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:contact@venkateshfirm.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-slate-50 dark:fill-[#0f172a]"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pt-20 pb-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-teal-500/3 rounded-full blur-3xl" />
        </div>

        <div className="relative section-container">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Brand section - spans 4 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <Logo size="md" animated={false} />
                <div>
                  <h3 className="text-xl font-bold text-white">Venkatesh Ravi</h3>
                  <p className="text-sm text-slate-400">Chartered Accountant</p>
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                Trusted Chartered Accountant providing comprehensive audit, taxation, 
                and financial consulting services for businesses across India.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-transparent"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollToSection(e, link.id)}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services - spans 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-teal-500 to-transparent" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-teal-500 transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - spans 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-violet-500 to-transparent" />
                Contact
              </h4>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:contact@venkateshfirm.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm">contact@venkateshfirm.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918000000000"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm">+91 80-XXXX-XXXX</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Location</p>
                    <p className="text-sm">Bangalore, India</p>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-4">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs text-slate-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm"
            >
              © {currentYear} Venkatesh Ravi. All rights reserved.
            </motion.p>

            {/* Visitor Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-slate-400">
                  {visitorCount !== null
                    ? `${visitorCount.toLocaleString()} visitors`
                    : 'Loading...'}
                </span>
              </div>
              
              <div className="text-xs text-slate-600">
                Made with{' '}
                <span className="text-red-500">♥</span>
                {' '}in India
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

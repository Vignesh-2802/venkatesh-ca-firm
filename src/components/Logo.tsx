'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', animated = true, className = '' }: LogoProps) => {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: 'text-sm' },
    md: { width: 40, height: 40, fontSize: 'text-base' },
    lg: { width: 56, height: 56, fontSize: 'text-xl' },
  };

  const { width, height } = sizes[size];

  const LogoSVG = () => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle with glass effect */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="url(#logoGradient)"
        className="dark:fill-[url(#logoGradientDark)]"
        opacity="0.1"
      />
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        className="dark:stroke-[url(#logoGradientDark)]"
      />
      
      {/* Inner decorative ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="url(#logoGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeDasharray="4 4"
      />
      
      {/* V letter */}
      <path
        d="M25 28L38 72L50 45"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
      
      {/* R letter */}
      <path
        d="M50 45L50 72M50 45L65 28M50 45C50 45 75 40 75 50C75 60 55 55 50 55L70 72"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={`cursor-pointer ${className}`}
      >
        <LogoSVG />
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <LogoSVG />
    </div>
  );
};

export default Logo;

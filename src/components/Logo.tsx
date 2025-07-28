
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  linkTo?: string;
}

const Logo = ({ size = 'md', className = '', linkTo = '/' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl md:text-4xl'
  };

  const logoContent = (
    <div className={`${sizeClasses[size]} font-orbitron font-bold ${className} hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-wide relative">
        ANO
        <span className="text-orange-500 drop-shadow-lg animate-pulse">X</span>
        ES
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-80 transition-opacity group">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
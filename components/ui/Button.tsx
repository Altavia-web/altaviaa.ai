import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
  variant: 'filled' | 'outlined';
  color: 'midBlue' | 'orange' | 'datev' | 'lokalisierung' | 'mahnwesen';
  size: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'midBlue',
  size = 'md',
  showArrow = false,
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm font-semibold',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  // Arrow icon sizes
  const arrowSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  // Base classes
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Color and variant specific classes
  const getColorClasses = () => {
    const colorMap = {
      midBlue: {
        filled: {
          bg: 'bg-mid-blue',
          text: 'text-white',
          hover: 'hover:bg-dark-blue',
          focus: 'focus:ring-mid-blue',
        },
        outlined: {
          bg: 'bg-transparent',
          text: 'text-mid-blue',
          border: 'border-2 border-mid-blue',
          hover: 'hover:bg-mid-blue hover:text-white',
          focus: 'focus:ring-mid-blue',
        },
      },
      orange: {
        filled: {
          bg: 'bg-orange',
          text: 'text-white',
          hover: 'hover:opacity-90',
          focus: 'focus:ring-orange',
        },
        outlined: {
          bg: 'bg-transparent',
          text: 'text-orange',
          border: 'border-2 border-orange',
          hover: 'hover:bg-orange hover:text-white',
          focus: 'focus:ring-orange',
        },
      },
      datev: {
        filled: {
          bg: 'bg-datev-primary',
          text: 'text-white',
          hover: 'hover:opacity-90',
          focus: 'focus:ring-datev-primary',
        },
        outlined: {
          bg: 'bg-transparent',
          text: 'text-datev-primary',
          border: 'border-2 border-datev-primary',
          hover: 'hover:bg-datev-primary hover:text-white',
          focus: 'focus:ring-datev-primary',
        },
      },
      lokalisierung: {
        filled: {
          bg: 'bg-lokalisierung-primary',
          text: 'text-white',
          hover: 'hover:opacity-90',
          focus: 'focus:ring-lokalisierung-primary',
        },
        outlined: {
          bg: 'bg-transparent',
          text: 'text-lokalisierung-primary',
          border: 'border-2 border-lokalisierung-primary',
          hover: 'hover:bg-lokalisierung-primary hover:text-white',
          focus: 'focus:ring-lokalisierung-primary',
        },
      },
      mahnwesen: {
        filled: {
          bg: 'bg-mahnwesen-primary',
          text: 'text-white',
          hover: 'hover:opacity-90',
          focus: 'focus:ring-mahnwesen-primary',
        },
        outlined: {
          bg: 'bg-transparent',
          text: 'text-mahnwesen-primary',
          border: 'border-2 border-mahnwesen-primary',
          hover: 'hover:bg-mahnwesen-primary hover:text-white',
          focus: 'focus:ring-mahnwesen-primary',
        },
      },
    };

    const colorConfig = colorMap[color][variant];
    const classes = [
      colorConfig.bg,
      colorConfig.text,
      colorConfig.hover,
      colorConfig.focus,
    ];

    if (variant === 'outlined' && 'border' in colorConfig) {
      classes.push(colorConfig.border);
    }

    return classes.join(' ');
  };

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[size],
    getColorClasses(),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={arrowSizes[size]}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
};

export default Button;
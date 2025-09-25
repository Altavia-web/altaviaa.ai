import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Button.module.css';

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
  const arrowSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const getButtonClasses = () => {
    const colorVariant = `${color}${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    const classes = [
      styles.button,
      styles[size],
      styles[colorVariant as keyof typeof styles],
      className,
    ];

    return classes.filter(Boolean).join(' ');
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonClasses()}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={arrowSizes[size]}
          className={styles.arrow}
        />
      )}
    </button>
  );
};

export default Button;
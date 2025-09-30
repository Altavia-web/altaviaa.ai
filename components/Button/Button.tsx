import React, { useMemo } from 'react';
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

// Pre-computed arrow sizes to avoid recreation
const ARROW_SIZES = {
  sm: 16,
  md: 18,
  lg: 20,
} as const;

const Button: React.FC<ButtonProps> = React.memo(({
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
  // Memoize class name computation to prevent recalculation
  const buttonClassName = useMemo(() => {
    const colorVariant = `${color}${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    const classes = [
      styles.button,
      styles[size],
      styles[colorVariant as keyof typeof styles],
      className,
    ];

    return classes.filter(Boolean).join(' ');
  }, [variant, color, size, className]);

  // Memoize arrow size to prevent lookups
  const arrowSize = useMemo(() => ARROW_SIZES[size], [size]);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={arrowSize}
          className={styles.arrow}
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import './Button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl';
  state?: 'normal' | 'hover' | 'disabled';
  icon?: 'download' | 'arrow' | 'none';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  state = 'normal',
  icon = 'none',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'download':
        return <FaDownload className="button-icon" />;
      case 'arrow':
        return <FaArrowRight className="button-icon" />;
      default:
        return null;
    }
  };

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    `button--${state}`,
    icon !== 'none' ? 'button--with-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || state === 'disabled'}
    >
      {getIcon()}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;

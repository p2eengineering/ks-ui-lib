import React, { useEffect, useState } from 'react';
import { FaCheck, FaExclamationTriangle, FaSpinner, FaTimes } from 'react-icons/fa';

export interface ToastProps {
  type?: 'success' | 'error' | 'processing';
  title?: string;
  message?: string;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({
  type = 'success',
  title,
  message,
  onClose,
  autoClose = false,
  autoCloseDelay = 5000,
  className = '',
  style,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, onClose]);

  const handleClose = () => {
    if (onClose) {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheck />;
      case 'error':
        return <FaExclamationTriangle />;
      case 'processing':
        return <FaSpinner className="toast__icon--spinning" />;
      default:
        return <FaCheck />;
    }
  };

  const getTitle = () => {
    if (title) return title;
    
    switch (type) {
      case 'success':
        return 'Success';
      case 'error':
        return 'Failed!';
      case 'processing':
        return 'Processing';
      default:
        return '';
    }
  };

  const getMessage = () => {
    if (message) return message;
    
    switch (type) {
      case 'success':
        return 'Endpoint is successfully generated.';
      case 'error':
        return 'Please check your credentials and reattempt.';
      case 'processing':
        return 'Lorem lipsum set amet';
      default:
        return '';
    }
  };

  const componentClasses = [
    'toast',
    `toast--${type}`,
    isVisible ? 'toast--visible' : 'toast--hidden',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses} style={style}>
      <div className="toast__icon">
        {getIcon()}
      </div>
      <div className="toast__content">
        {getTitle() && (
          <div className="toast__title">
            {getTitle()}
          </div>
        )}
        {getMessage() && (
          <div className="toast__message">
            {getMessage()}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          className="toast__close-button"
          onClick={handleClose}
          aria-label="Close toast"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Toast;

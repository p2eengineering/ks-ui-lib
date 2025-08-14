import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { FaCheck, FaExclamationTriangle, FaSpinner, FaTimes } from 'react-icons/fa';
import './Toast.scss';

// Toast Types
export interface ToastData {
  id: string;
  type?: 'success' | 'error' | 'processing';
  title?: string;
  message?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Toast Context
interface ToastContextType {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Toast Provider
export interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastData = { id, ...toast };
    
    setToasts(prev => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });
    
    return id;
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  );
};

// Toast Viewport
const ToastViewport: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="toast-viewport">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};

// Toast Item Component
interface ToastItemProps {
  toast: ToastData;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const { id, type = 'success', title, message, duration = 5000, className = '', style } = toast;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onRemove(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onRemove]);

  const handleClose = () => {
    onRemove(id);
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
      <button
        type="button"
        className="toast__close-button"
        onClick={handleClose}
        aria-label="Close toast"
      >
        <FaTimes />
      </button>
    </div>
  );
};

// Legacy Toast Component (for backward compatibility)
export interface ToastProps {
  type?: 'success' | 'error' | 'processing';
  title?: string;
  message?: string;
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({
  type = 'success',
  title,
  message,
  onClose,
  open = true,
  onOpenChange,
  duration = 5000,
  className = '',
  style,
}) => {
  const handleClose = () => {
    onClose?.();
    onOpenChange?.(false);
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
    className
  ].filter(Boolean).join(' ');

  if (!open) return null;

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
      <button
        type="button"
        className="toast__close-button"
        onClick={handleClose}
        aria-label="Close toast"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Toast;

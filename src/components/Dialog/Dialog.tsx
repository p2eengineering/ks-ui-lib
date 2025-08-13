import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

// =============================================================================
// DIALOG CONTEXT
// =============================================================================

interface DialogContextType {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog');
  }
  return context;
};

// =============================================================================
// DIALOG ROOT
// =============================================================================

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  
  const handleOpenChange = (open: boolean) => {
    if (!isControlled) {
      setInternalOpen(open);
    }
    onOpenChange?.(open);
  };

  return (
    <DialogContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

// =============================================================================
// DIALOG TRIGGER
// =============================================================================

interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, asChild = false }) => {
  const { onOpenChange } = useDialogContext();
  
  const handleClick = () => {
    onOpenChange(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
    } as any);
  }

  return (
    <button type="button" onClick={handleClick} className="dialog-trigger">
      {children}
    </button>
  );
};

// =============================================================================
// DIALOG CONTENT
// =============================================================================

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className = '',
  style,
  size = 'md',
}) => {
  const { isOpen, onOpenChange } = useDialogContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onOpenChange]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onOpenChange(false);
    }
  };

  if (!isOpen) return null;

  const content = (
    <div className="dialog-overlay" onClick={handleBackdropClick}>
      <div
        ref={contentRef}
        className={`dialog-content dialog-content--${size} ${className}`}
        style={style}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

// =============================================================================
// DIALOG HEADER
// =============================================================================

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className = '', style }) => {
  return (
    <div className={`dialog-header ${className}`} style={style}>
      {children}
    </div>
  );
};

// =============================================================================
// DIALOG TITLE
// =============================================================================

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

const DialogTitle: React.FC<DialogTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`dialog-title ${className}`}>
      {children}
    </h2>
  );
};

// =============================================================================
// DIALOG DESCRIPTION
// =============================================================================

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({ children, className = '' }) => {
  return (
    <p className={`dialog-description ${className}`}>
      {children}
    </p>
  );
};

// =============================================================================
// DIALOG FOOTER
// =============================================================================

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

const DialogFooter: React.FC<DialogFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`dialog-footer ${className}`}>
      {children}
    </div>
  );
};

// =============================================================================
// DIALOG CLOSE
// =============================================================================

interface DialogCloseProps {
  children?: React.ReactNode;
  className?: string;
}

const DialogClose: React.FC<DialogCloseProps> = ({ children, className = '' }) => {
  const { onOpenChange } = useDialogContext();
  
  const handleClick = () => {
    onOpenChange(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`dialog-close ${className}`}
      aria-label="Close dialog"
    >
      {children || <FaTimes />}
    </button>
  );
};

// =============================================================================
// EXPORTS
// =============================================================================

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};

export type {
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogCloseProps,
};

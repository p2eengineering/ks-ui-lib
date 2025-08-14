import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Dialog.scss";

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}) => {
  // The Dialog component passes through the open state and onOpenChange callback
  // to its children, allowing the parent to control the dialog state
  const isOpen = open !== undefined ? open : defaultOpen;

  return (
    <div className="dialog-root" data-open={isOpen}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            open: isOpen,
            onOpenChange: onOpenChange,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  asChild = false,
  className = "",
  onClick,
  open,
  onOpenChange,
}) => {
  const handleClick = (e: any) => {
    if (React.isValidElement(children)) {
      children.props.onClick?.(e);
    }
    onClick?.();
    onOpenChange?.(!open);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${className}`.trim(),
      onClick: handleClick,
    } as any);
  }

  return (
    <button
      type="button"
      className={`dialog-trigger ${className}`}
      onClick={() => onOpenChange?.(!open)}
    >
      {children}
    </button>
  );
};

export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className = "",
  style,
  size = "md",
  open = false,
  onOpenChange,
}) => {
  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onOpenChange?.(false);
    }
  };

  return (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div
        className={`dialog-content dialog-content--${size} ${className}`}
        style={style}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className = "",
  style,
  open,
  onOpenChange,
}) => {
  return (
    <div className={`dialog-header ${className}`} style={style}>
      {children}
      <DialogClose open={open} onOpenChange={onOpenChange} />
    </div>
  );
};

export interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className = "",
}) => {
  return <h2 className={`dialog-title ${className}`}>{children}</h2>;
};

export interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  className = "",
}) => {
  return <p className={`dialog-description ${className}`}>{children}</p>;
};

export interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`dialog-footer ${className}`}>{children}</div>;
};

export interface DialogCloseProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DialogClose: React.FC<DialogCloseProps> = ({
  children,
  className = "",
  onClick,
  open,
  onOpenChange,
}) => {
  const handleClick = () => {
    onClick?.();
    onOpenChange?.(false);
  };

  return (
    <button
      type="button"
      className={`dialog-close ${className}`}
      aria-label="Close dialog"
      onClick={handleClick}
    >
      {children || <FaTimes />}
    </button>
  );
};

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

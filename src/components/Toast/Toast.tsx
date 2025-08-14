import React from "react";
import {
  FaCheck,
  FaExclamationTriangle,
  FaSpinner,
  FaTimes,
} from "react-icons/fa";
import "./Toast.scss";

// Toast Types
export interface ToastData {
  id: string;
  type?: "success" | "error" | "processing";
  title?: string;
  message?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Position types
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";

// Global Toast Manager (Singleton Pattern)
class ToastManager {
  private static instance: ToastManager;
  private listeners: Array<(toasts: ToastData[]) => void> = [];
  private toasts: ToastData[] = [];
  private maxToasts: number = 5;
  private position: ToastPosition = "top-right";

  private constructor() {}

  static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  subscribe(listener: (toasts: ToastData[]) => void): () => void {
    this.listeners.push(listener);
    listener(this.toasts); // Initial call

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.toasts));
  }

  addToast(toast: Omit<ToastData, "id">): string {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastData = { id, ...toast };

    this.toasts = [newToast, ...this.toasts].slice(0, this.maxToasts);
    this.notify();

    // Auto-remove after duration
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.removeToast(id);
      }, toast.duration);
    }

    return id;
  }

  removeToast(id: string): void {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  }

  clearToasts(): void {
    this.toasts = [];
    this.notify();
  }

  setMaxToasts(max: number): void {
    this.maxToasts = max;
    this.toasts = this.toasts.slice(0, max);
    this.notify();
  }

  setPosition(position: ToastPosition): void {
    this.position = position;
    this.notify();
  }

  getPosition(): ToastPosition {
    return this.position;
  }
}

// Global toast instance
export const toastManager = ToastManager.getInstance();

// Toast Provider (Hook-free)
export interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
  position?: ToastPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
  position = "top-right",
}) => {
  React.useEffect(() => {
    toastManager.setMaxToasts(maxToasts);
    toastManager.setPosition(position);
  }, [maxToasts, position]);

  return (
    <>
      {children}
      <ToastViewport />
    </>
  );
};

// Toast Viewport (Hook-free)
const ToastViewport: React.FC = () => {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);
  const [position, setPosition] = React.useState<ToastPosition>("top-right");

  React.useEffect(() => {
    const unsubscribe = toastManager.subscribe(setToasts);
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    setPosition(toastManager.getPosition());
  }, []);

  const viewportClasses = [
    "toast-viewport",
    `toast-viewport--${position}`,
  ].join(" ");

  return (
    <div className={viewportClasses}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={(id) => toastManager.removeToast(id)}
        />
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
  const { id, type = "success", title, message, className = "", style } = toast;

  const handleClose = () => {
    onRemove(id);
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheck />;
      case "error":
        return <FaExclamationTriangle />;
      case "processing":
        return <FaSpinner className="toast__icon--spinning" />;
      default:
        return <FaCheck />;
    }
  };

  const getTitle = () => {
    if (title) return title;

    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Failed!";
      case "processing":
        return "Processing";
      default:
        return "";
    }
  };

  const getMessage = () => {
    if (message) return message;

    switch (type) {
      case "success":
        return "Endpoint is successfully generated.";
      case "error":
        return "Please check your credentials and reattempt.";
      case "processing":
        return "Lorem lipsum set amet";
      default:
        return "";
    }
  };

  const componentClasses = ["toast", `toast--${type}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={componentClasses} style={style}>
      <div className="toast__icon">{getIcon()}</div>
      <div className="toast__content">
        {getTitle() && <div className="toast__title">{getTitle()}</div>}
        {getMessage() && <div className="toast__message">{getMessage()}</div>}
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

// Global toast functions (Hook-free)
export const toast = {
  success: (options: Omit<ToastData, "id" | "type">) =>
    toastManager.addToast({ ...options, type: "success" }),
  error: (options: Omit<ToastData, "id" | "type">) =>
    toastManager.addToast({ ...options, type: "error" }),
  processing: (options: Omit<ToastData, "id" | "type">) =>
    toastManager.addToast({ ...options, type: "processing" }),
  dismiss: (id: string) => toastManager.removeToast(id),
  clear: () => toastManager.clearToasts(),
};

// Legacy Toast Component (for backward compatibility)
export interface ToastProps {
  type?: "success" | "error" | "processing";
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
  type = "success",
  title,
  message,
  onClose,
  open = true,
  onOpenChange,
  duration = 5000,
  className = "",
  style,
}) => {
  const handleClose = () => {
    onClose?.();
    onOpenChange?.(false);
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheck />;
      case "error":
        return <FaExclamationTriangle />;
      case "processing":
        return <FaSpinner className="toast__icon--spinning" />;
      default:
        return <FaCheck />;
    }
  };

  const getTitle = () => {
    if (title) return title;

    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Failed!";
      case "processing":
        return "Processing";
      default:
        return "";
    }
  };

  const getMessage = () => {
    if (message) return message;

    switch (type) {
      case "success":
        return "Endpoint is successfully generated.";
      case "error":
        return "Please check your credentials and reattempt.";
      case "processing":
        return "Lorem lipsum set amet";
      default:
        return "";
    }
  };

  const componentClasses = ["toast", `toast--${type}`, className]
    .filter(Boolean)
    .join(" ");

  if (!open) return null;

  return (
    <div className={componentClasses} style={style}>
      <div className="toast__icon">{getIcon()}</div>
      <div className="toast__content">
        {getTitle() && <div className="toast__title">{getTitle()}</div>}
        {getMessage() && <div className="toast__message">{getMessage()}</div>}
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

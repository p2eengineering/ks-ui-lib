import React from "react";
import { ToastProvider, toast } from "./Toast";

// Example of how to use the global toast system in your app
const ToastExample: React.FC = () => {
  const handleSuccess = () => {
    toast.success({
      title: "Success!",
      message: "Your action was completed successfully.",
      duration: 4000,
    });
  };

  const handleError = () => {
    toast.error({
      title: "Error!",
      message: "Something went wrong. Please try again.",
      duration: 6000,
    });
  };

  const handleProcessing = () => {
    toast.processing({
      title: "Processing...",
      message: "Please wait while we process your request.",
      duration: 3000,
    });
  };

  const handleClearAll = () => {
    toast.clear();
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2>Global Toast System Example</h2>
      <p>This demonstrates how to use the global toast system without hooks.</p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={handleSuccess}
          style={{
            padding: "8px 16px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Success Toast
        </button>

        <button
          onClick={handleError}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Error Toast
        </button>

        <button
          onClick={handleProcessing}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Processing Toast
        </button>

        <button
          onClick={handleClearAll}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear All Toasts
        </button>
      </div>
    </div>
  );
};

// App wrapper that includes the ToastProvider
const AppWithToasts: React.FC = () => {
  return (
    <ToastProvider maxToasts={5}>
      <ToastExample />
    </ToastProvider>
  );
};

export default AppWithToasts;

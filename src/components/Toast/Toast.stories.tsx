import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import Toast, { ToastProvider, toast, ToastPosition } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "processing"],
      description: "Type of toast",
    },
    title: {
      control: { type: "text" },
      description: "Custom title for the toast",
    },
    message: {
      control: { type: "text" },
      description: "Custom message for the toast",
    },
    duration: {
      control: { type: "number" },
      description: "Duration in milliseconds before auto-closing",
    },
    onClose: {
      action: "closed",
      description: "Callback when toast is closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Global Toast Wrapper
const GlobalToastWrapper: React.FC<{
  children: React.ReactNode;
  position?: ToastPosition;
}> = ({ children, position = "top-right" }) => (
  <ToastProvider maxToasts={5} position={position}>
    {children}
  </ToastProvider>
);

// Basic toast examples
export const SuccessToast: Story = {
  render: (args) => (
    <GlobalToastWrapper>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={() =>
            toast.success({
              title: "Success!",
              message: "Operation completed successfully.",
            })
          }
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
          onClick={() =>
            toast.error({ title: "Error!", message: "Something went wrong." })
          }
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
          onClick={() =>
            toast.processing({
              title: "Processing...",
              message: "Please wait while we process your request.",
            })
          }
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
          onClick={() => toast.clear()}
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
    </GlobalToastWrapper>
  ),
  args: {
    type: "success",
    duration: 5000,
  },
};

// Local toast example
export const LocalToast: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Local Toast
        </button>
        <Toast
          {...args}
          open={open}
          onOpenChange={setOpen}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
  args: {
    type: "success",
    title: "Success!",
    message: "This is a local toast example.",
    duration: 5000,
  },
};

// Toast types showcase
export const ToastTypes: Story = {
  render: () => (
    <GlobalToastWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={() =>
              toast.success({
                title: "Success!",
                message: "Your action was completed successfully.",
                duration: 4000,
              })
            }
            style={{
              padding: "8px 16px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Success Toast
          </button>
          <button
            onClick={() =>
              toast.error({
                title: "Error!",
                message: "Something went wrong. Please try again.",
                duration: 6000,
              })
            }
            style={{
              padding: "8px 16px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Error Toast
          </button>
          <button
            onClick={() =>
              toast.processing({
                title: "Processing...",
                message: "Please wait while we process your request.",
                duration: 3000,
              })
            }
            style={{
              padding: "8px 16px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Processing Toast
          </button>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => toast.clear()}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6b7280",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </GlobalToastWrapper>
  ),
};

// Multiple toasts example
export const MultipleToasts: Story = {
  render: () => (
    <GlobalToastWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          onClick={() => {
            toast.success({ title: "Toast 1", message: "First toast message" });
            setTimeout(
              () =>
                toast.error({
                  title: "Toast 2",
                  message: "Second toast message",
                }),
              500
            );
            setTimeout(
              () =>
                toast.processing({
                  title: "Toast 3",
                  message: "Third toast message",
                }),
              1000
            );
            setTimeout(
              () =>
                toast.success({
                  title: "Toast 4",
                  message: "Fourth toast message",
                }),
              1500
            );
            setTimeout(
              () =>
                toast.error({
                  title: "Toast 5",
                  message: "Fifth toast message",
                }),
              2000
            );
          }}
          style={{
            padding: "8px 16px",
            backgroundColor: "#8b5cf6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Multiple Toasts
        </button>
        <button
          onClick={() => toast.clear()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear All
        </button>
      </div>
    </GlobalToastWrapper>
  ),
};

// Custom duration example
export const CustomDuration: Story = {
  render: () => (
    <GlobalToastWrapper>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={() =>
            toast.success({
              title: "Quick Toast",
              message: "This will disappear quickly.",
              duration: 1000,
            })
          }
          style={{
            padding: "8px 16px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Quick Toast (1s)
        </button>
        <button
          onClick={() =>
            toast.error({
              title: "Long Toast",
              message: "This will stay for a while.",
              duration: 10000,
            })
          }
          style={{
            padding: "8px 16px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Long Toast (10s)
        </button>
        <button
          onClick={() =>
            toast.processing({
              title: "Persistent Toast",
              message: "This will stay until manually closed.",
              duration: 0,
            })
          }
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Persistent Toast
        </button>
        <button
          onClick={() => toast.clear()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear All
        </button>
      </div>
    </GlobalToastWrapper>
  ),
};

// Position examples
export const ToastPositions: Story = {
  render: () => {
    const [currentPosition, setCurrentPosition] =
      useState<ToastPosition>("top-right");

    const positions: ToastPosition[] = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
      "center",
    ];

    const showToast = () => {
      toast.success({
        title: `${currentPosition.replace("-", " ").toUpperCase()}`,
        message: `This toast appears in the ${currentPosition} position.`,
        duration: 3000,
      });
    };

    return (
      <GlobalToastWrapper position={currentPosition}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Current Position:{" "}
              {currentPosition.replace("-", " ").toUpperCase()}
            </h3>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {positions.map((position) => (
                <button
                  key={position}
                  onClick={() => setCurrentPosition(position)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor:
                      currentPosition === position ? "#3b82f6" : "#e5e7eb",
                    color: currentPosition === position ? "white" : "#374151",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: currentPosition === position ? "600" : "400",
                  }}
                >
                  {position.replace("-", " ").toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={showToast}
              style={{
                padding: "8px 16px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
            <button
              onClick={() => toast.clear()}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </GlobalToastWrapper>
    );
  },
};

// All positions at once
export const AllPositions: Story = {
  render: () => {
    const positions: ToastPosition[] = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
      "center",
    ];

    const showAllToasts = () => {
      positions.forEach((position, index) => {
        setTimeout(() => {
          // Create a temporary provider for each position
          const tempProvider = document.createElement("div");
          tempProvider.style.position = "fixed";
          tempProvider.style.zIndex = "9999";
          tempProvider.style.pointerEvents = "none";

          // Position the temporary provider
          switch (position) {
            case "top-left":
              tempProvider.style.top = "16px";
              tempProvider.style.left = "16px";
              break;
            case "top-center":
              tempProvider.style.top = "16px";
              tempProvider.style.left = "50%";
              tempProvider.style.transform = "translateX(-50%)";
              break;
            case "top-right":
              tempProvider.style.top = "16px";
              tempProvider.style.right = "16px";
              break;
            case "bottom-left":
              tempProvider.style.bottom = "16px";
              tempProvider.style.left = "16px";
              break;
            case "bottom-center":
              tempProvider.style.bottom = "16px";
              tempProvider.style.left = "50%";
              tempProvider.style.transform = "translateX(-50%)";
              break;
            case "bottom-right":
              tempProvider.style.bottom = "16px";
              tempProvider.style.right = "16px";
              break;
            case "center":
              tempProvider.style.top = "50%";
              tempProvider.style.left = "50%";
              tempProvider.style.transform = "translate(-50%, -50%)";
              break;
          }

          document.body.appendChild(tempProvider);

          // Create toast element
          const toastEl = document.createElement("div");
          toastEl.className = "toast toast--success";
          toastEl.style.pointerEvents = "auto";
          toastEl.innerHTML = `
            <div class="toast__icon">✓</div>
            <div class="toast__content">
              <div class="toast__title">${position
                .replace("-", " ")
                .toUpperCase()}</div>
              <div class="toast__message">Toast in ${position} position</div>
            </div>
            <button class="toast__close-button" onclick="this.parentElement.remove()">×</button>
          `;

          tempProvider.appendChild(toastEl);

          // Auto remove after 3 seconds
          setTimeout(() => {
            if (tempProvider.parentNode) {
              tempProvider.parentNode.removeChild(tempProvider);
            }
          }, 3000);
        }, index * 200);
      });
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3
            style={{
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Show Toasts in All Positions
          </h3>
          <p
            style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}
          >
            This will create toasts in all available positions simultaneously.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={showAllToasts}
            style={{
              padding: "8px 16px",
              backgroundColor: "#8b5cf6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Show All Position Toasts
          </button>
        </div>
      </div>
    );
  },
};

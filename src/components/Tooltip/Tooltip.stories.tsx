import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Tooltip from "./Tooltip";
import {
  FaInfoCircle,
  FaQuestionCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["type1", "type2", "type3"],
      description: "Type of tooltip",
    },
    side: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Side of the tooltip",
    },
    showArrow: {
      control: { type: "boolean" },
      description: "Whether to show an arrow pointing to the trigger",
    },
    open: {
      control: { type: "boolean" },
      description: "Whether the tooltip is open",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const longContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.";

// Wrapper component to handle state
const TooltipWrapper: React.FC<{
  type?: "type1" | "type2" | "type3";
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  showArrow?: boolean;
  children: React.ReactNode;
}> = ({
  type = "type1",
  content,
  side = "bottom",
  showArrow = false,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      type={type}
      content={content}
      side={side}
      showArrow={showArrow}
      open={open}
      onOpenChange={setOpen}
    >
      {children}
    </Tooltip>
  );
};

// Type 1 - Light grey background, no arrow
export const Type1Tooltip: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <FaInfoCircle style={{ fontSize: "20px", color: "#666" }} />
    </TooltipWrapper>
  ),
  args: {
    type: "type1",
    content: defaultContent,
    showArrow: false,
  },
};

// Type 2 - Light yellow background with arrow
export const Type2Tooltip: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <FaQuestionCircle style={{ fontSize: "20px", color: "#F59E0B" }} />
    </TooltipWrapper>
  ),
  args: {
    type: "type2",
    content: longContent,
    showArrow: true,
  },
};

// Type 3 - Dark grey background with arrow
export const Type3Tooltip: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <FaExclamationTriangle style={{ fontSize: "20px", color: "#1a1a1a" }} />
    </TooltipWrapper>
  ),
  args: {
    type: "type3",
    content: longContent,
    showArrow: true,
  },
};

// Position variants
export const TopPosition: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <span
        style={{
          padding: "8px 16px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
        }}
      >
        Hover me (Top)
      </span>
    </TooltipWrapper>
  ),
  args: {
    type: "type1",
    content: defaultContent,
    side: "top",
    showArrow: false,
  },
};

export const BottomPosition: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <span
        style={{
          padding: "8px 16px",
          backgroundColor: "#FFF9C4",
          borderRadius: "4px",
        }}
      >
        Hover me (Bottom)
      </span>
    </TooltipWrapper>
  ),
  args: {
    type: "type2",
    content: defaultContent,
    side: "bottom",
    showArrow: true,
  },
};

export const LeftPosition: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <span
        style={{
          padding: "8px 16px",
          backgroundColor: "#1a1a1a",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Hover me (Left)
      </span>
    </TooltipWrapper>
  ),
  args: {
    type: "type3",
    content: defaultContent,
    side: "left",
    showArrow: true,
  },
};

export const RightPosition: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <span
        style={{
          padding: "8px 16px",
          backgroundColor: "#E3F2FD",
          borderRadius: "4px",
        }}
      >
        Hover me (Right)
      </span>
    </TooltipWrapper>
  ),
  args: {
    type: "type1",
    content: defaultContent,
    side: "right",
    showArrow: false,
  },
};

// Interactive examples
export const InteractiveExample: Story = {
  render: () => {
    const [tooltipStates, setTooltipStates] = useState({
      first: false,
      second: false,
    });

    return (
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Tooltip
          type="type1"
          content="This is a simple tooltip"
          side="top"
          showArrow={false}
          open={tooltipStates.first}
          onOpenChange={(open) =>
            setTooltipStates((prev) => ({ ...prev, first: open }))
          }
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Hover or Click Me
          </button>
        </Tooltip>

        <Tooltip
          type="type2"
          content="This tooltip has an arrow and different styling"
          side="bottom"
          showArrow={true}
          open={tooltipStates.second}
          onOpenChange={(open) =>
            setTooltipStates((prev) => ({ ...prev, second: open }))
          }
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Another Button
          </button>
        </Tooltip>
      </div>
    );
  },
};

// Long content example
export const LongContent: Story = {
  render: (args) => (
    <TooltipWrapper {...args}>
      <span
        style={{
          padding: "8px 16px",
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "4px",
        }}
      >
        Hover for long content
      </span>
    </TooltipWrapper>
  ),
  args: {
    type: "type2",
    content:
      "This is a very long tooltip content that demonstrates how the tooltip handles longer text. It should wrap properly and maintain good readability. The tooltip should adjust its width based on the content while staying within reasonable bounds.",
    side: "bottom",
    showArrow: true,
  },
};

// Different sizes and styles
export const DifferentSizes: Story = {
  render: () => {
    const [tooltipStates, setTooltipStates] = useState({
      small: false,
      medium: false,
      large: false,
    });

    const handleTooltipChange = (
      size: "small" | "medium" | "large",
      open: boolean
    ) => {
      setTooltipStates((prev) => ({ ...prev, [size]: open }));
    };

    return (
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Tooltip
          type="type1"
          content="Small icon tooltip"
          side="top"
          showArrow={false}
          open={tooltipStates.small}
          onOpenChange={(open) => handleTooltipChange("small", open)}
        >
          <FaInfoCircle style={{ fontSize: "16px", color: "#666" }} />
        </Tooltip>

        <Tooltip
          type="type2"
          content="Medium icon tooltip"
          side="top"
          showArrow={true}
          open={tooltipStates.medium}
          onOpenChange={(open) => handleTooltipChange("medium", open)}
        >
          <FaQuestionCircle style={{ fontSize: "24px", color: "#F59E0B" }} />
        </Tooltip>

        <Tooltip
          type="type3"
          content="Large icon tooltip"
          side="top"
          showArrow={true}
          open={tooltipStates.large}
          onOpenChange={(open) => handleTooltipChange("large", open)}
        >
          <FaExclamationTriangle
            style={{ fontSize: "32px", color: "#1a1a1a" }}
          />
        </Tooltip>
      </div>
    );
  },
};

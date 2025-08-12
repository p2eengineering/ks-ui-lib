import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Tooltip from './Tooltip';
import { FaInfoCircle, FaQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['type1', 'type2', 'type3'],
      description: 'Type of tooltip',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip',
    },
    showArrow: {
      control: { type: 'boolean' },
      description: 'Whether to show an arrow pointing to the trigger',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const longContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.";

// Type 1 - Light grey background, no arrow
export const Type1Tooltip: Story = {
  args: {
    type: 'type1',
    content: defaultContent,
    showArrow: false,
    children: <FaInfoCircle style={{ fontSize: '20px', color: '#666' }} />,
  },
};

// Type 2 - Light yellow background with arrow
export const Type2Tooltip: Story = {
  args: {
    type: 'type2',
    content: longContent,
    showArrow: true,
    children: <FaQuestionCircle style={{ fontSize: '20px', color: '#F59E0B' }} />,
  },
};

// Type 3 - Dark grey background with arrow
export const Type3Tooltip: Story = {
  args: {
    type: 'type3',
    content: longContent,
    showArrow: true,
    children: <FaExclamationTriangle style={{ fontSize: '20px', color: '#1a1a1a' }} />,
  },
};

// Position variants
export const TopPosition: Story = {
  args: {
    type: 'type1',
    content: defaultContent,
    position: 'top',
    showArrow: false,
    children: <span style={{ padding: '8px 16px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Hover me (Top)</span>,
  },
};

export const BottomPosition: Story = {
  args: {
    type: 'type2',
    content: defaultContent,
    position: 'bottom',
    showArrow: true,
    children: <span style={{ padding: '8px 16px', backgroundColor: '#FFF9C4', borderRadius: '4px' }}>Hover me (Bottom)</span>,
  },
};

export const LeftPosition: Story = {
  args: {
    type: 'type3',
    content: defaultContent,
    position: 'left',
    showArrow: true,
    children: <span style={{ padding: '8px 16px', backgroundColor: '#1a1a1a', color: 'white', borderRadius: '4px' }}>Hover me (Left)</span>,
  },
};

export const RightPosition: Story = {
  args: {
    type: 'type1',
    content: defaultContent,
    position: 'right',
    showArrow: false,
    children: <span style={{ padding: '8px 16px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Hover me (Right)</span>,
  },
};

// Interactive examples
export const InteractiveTooltip: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Tooltip
          type="type1"
          content="This is a simple tooltip with light grey background and no arrow."
          showArrow={false}
        >
          <button style={{ padding: '8px 16px', backgroundColor: '#f0f0f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Type 1 Tooltip
          </button>
        </Tooltip>

        <Tooltip
          type="type2"
          content="This tooltip has a light yellow background and includes an arrow pointing to the trigger element."
          showArrow={true}
        >
          <button style={{ padding: '8px 16px', backgroundColor: '#FFF9C4', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Type 2 Tooltip
          </button>
        </Tooltip>

        <Tooltip
          type="type3"
          content="This tooltip has a dark background with white text and includes an arrow for better visual connection."
          showArrow={true}
        >
          <button style={{ padding: '8px 16px', backgroundColor: '#1a1a1a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Type 3 Tooltip
          </button>
        </Tooltip>
      </div>
    );
  },
};

// Tooltip Showcase
export const TooltipShowcase: Story = {
  render: () => {
    return (
      <div style={{ 
        padding: '24px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        maxWidth: '800px'
      }}>
        <h2 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Source Sans 3', 
          fontSize: '24px', 
          fontWeight: '600',
          color: '#1a1a1a'
        }}>
          Tooltip Component Showcase
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Type 1 */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Type 1
            </h3>
            <Tooltip
              type="type1"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              showArrow={false}
            >
              <div style={{ 
                padding: '16px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '8px',
                cursor: 'pointer',
                border: '1px solid #e0e0e0'
              }}>
                Hover for Type 1
              </div>
            </Tooltip>
          </div>

          {/* Type 2 */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Type 2
            </h3>
            <Tooltip
              type="type2"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text."
              showArrow={true}
            >
              <div style={{ 
                padding: '16px', 
                backgroundColor: '#FFF9C4', 
                borderRadius: '8px',
                cursor: 'pointer',
                border: '1px solid #FFE082'
              }}>
                Hover for Type 2
              </div>
            </Tooltip>
          </div>

          {/* Type 3 */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Type 3
            </h3>
            <Tooltip
              type="type3"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text."
              showArrow={true}
            >
              <div style={{ 
                padding: '16px', 
                backgroundColor: '#1a1a1a', 
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                border: '1px solid #333'
              }}>
                Hover for Type 3
              </div>
            </Tooltip>
          </div>
        </div>

        <div style={{ 
          marginTop: '32px', 
          padding: '16px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e6e6e6'
        }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Source Sans 3', fontSize: '14px', fontWeight: '600' }}>
            Tooltip Features:
          </h4>
          <ul style={{ fontSize: '12px', lineHeight: '1.6', margin: 0, paddingLeft: '20px' }}>
            <li><strong>Type 1:</strong> Light grey background, no arrow - for simple informational tooltips</li>
            <li><strong>Type 2:</strong> Light yellow background with arrow - for highlighted information</li>
            <li><strong>Type 3:</strong> Dark background with white text and arrow - for important information</li>
            <li><strong>Positions:</strong> Top, bottom, left, right positioning with automatic arrow placement</li>
            <li><strong>Interaction:</strong> Hover to show, click outside to hide, or click to toggle</li>
          </ul>
        </div>
      </div>
    );
  },
};

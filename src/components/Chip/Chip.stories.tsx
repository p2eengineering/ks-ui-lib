import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Chips help people enter information, make selections, filter content, or trigger actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      description: 'Visual style variant',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the chip is disabled',
    },
    draggable: {
      control: { type: 'boolean' },
      description: 'Whether the chip is in drag state',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when close button is clicked',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when chip is clicked',
    },
  },
  args: {
    variant: 'solid',
    children: 'Chains',
    disabled: false,
    draggable: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC CHIP STORIES
// =============================================================================

export const SolidChip: Story = {
  args: {
    variant: 'solid',
    children: 'Chains',
  },
  parameters: {
    docs: {
      description: {
        story: 'Solid chip with dark purple background and white text.',
      },
    },
  },
};

export const OutlineChip: Story = {
  args: {
    variant: 'outline',
    children: 'Chains',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline chip with white background and border.',
      },
    },
  },
};

export const ChipWithCloseButton: Story = {
  args: {
    variant: 'solid',
    children: 'Chains',
    onClose: () => console.log('Chip closed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip with close button for removal.',
      },
    },
  },
};

export const ChipWithLeadingIcon: Story = {
  args: {
    variant: 'solid',
    children: 'Chains',
    leadingIcon: <FaCalendar />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip with leading calendar icon.',
      },
    },
  },
};

export const ChipWithIconAndClose: Story = {
  args: {
    variant: 'solid',
    children: 'Chains',
    leadingIcon: <FaCalendar />,
    onClose: () => console.log('Chip closed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip with both leading icon and close button.',
      },
    },
  },
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveChip: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) {
      return (
        <button onClick={() => setIsVisible(true)}>
          Click to restore chip
        </button>
      );
    }
    
    return (
      <Chip
        variant="solid"
        onClose={() => setIsVisible(false)}
        onClick={() => console.log('Chip clicked')}
      >
        Interactive Chip
      </Chip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive chip that can be clicked and closed.',
      },
    },
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const ChipShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
          Chips
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666666' }}>
          Chips help people enter information, make selections, filter content, or trigger actions.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          {/* Column Headers */}
          <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Enabled</div>
          <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Drag</div>
          
          {/* Row 1: Solid, basic */}
          <Chip variant="solid">Chains</Chip>
          <Chip variant="solid" style={{ backgroundColor: '#8B5CF6' }}>Chains</Chip>
          <Chip variant="solid" draggable>Chains</Chip>
          
          {/* Row 2: Outline, basic */}
          <Chip variant="outline">Chains</Chip>
          <Chip variant="outline" style={{ backgroundColor: '#f5f5f5' }}>Chains</Chip>
          <Chip variant="outline" draggable>Chains</Chip>
          
          {/* Row 3: Solid, with close icon */}
          <Chip variant="solid" onClose={() => {}}>Chains</Chip>
          <Chip variant="solid" onClose={() => {}} style={{ backgroundColor: '#8B5CF6' }}>Chains</Chip>
          <Chip variant="solid" onClose={() => {}} draggable>Chains</Chip>
          
          {/* Row 4: Outline, with close icon */}
          <Chip variant="outline" onClose={() => {}}>Chains</Chip>
          <Chip variant="outline" onClose={() => {}} style={{ backgroundColor: '#f5f5f5' }}>Chains</Chip>
          <Chip variant="outline" onClose={() => {}} draggable>Chains</Chip>
          
          {/* Row 5: Solid, with leading icon */}
          <Chip variant="solid" leadingIcon={<FaCalendar />}>Chains</Chip>
          <Chip variant="solid" leadingIcon={<FaCalendar />} style={{ backgroundColor: '#8B5CF6' }}>Chains</Chip>
          <Chip variant="solid" leadingIcon={<FaCalendar />} draggable>Chains</Chip>
          
          {/* Row 6: Outline, with leading icon */}
          <Chip variant="outline" leadingIcon={<FaCalendar />}>Chains</Chip>
          <Chip variant="outline" leadingIcon={<FaCalendar />} style={{ backgroundColor: '#f5f5f5' }}>Chains</Chip>
          <Chip variant="outline" leadingIcon={<FaCalendar />} draggable>Chains</Chip>
          
          {/* Row 7: Solid, with leading icon and close icon */}
          <Chip variant="solid" leadingIcon={<FaCalendar />} onClose={() => {}}>Chains</Chip>
          <Chip variant="solid" leadingIcon={<FaCalendar />} onClose={() => {}} style={{ backgroundColor: '#8B5CF6' }}>Chains</Chip>
          <Chip variant="solid" leadingIcon={<FaCalendar />} onClose={() => {}} draggable>Chains</Chip>
          
          {/* Row 8: Outline, with leading icon and close icon */}
          <Chip variant="outline" leadingIcon={<FaCalendar />} onClose={() => {}}>Chains</Chip>
          <Chip variant="outline" leadingIcon={<FaCalendar />} onClose={() => {}} style={{ backgroundColor: '#f5f5f5' }}>Chains</Chip>
          <Chip variant="outline" leadingIcon={<FaCalendar />} onClose={() => {}} draggable>Chains</Chip>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
          Status Tags
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <div style={{
            padding: '4px 12px',
            backgroundColor: 'white',
            border: '1px solid #10B981',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#10B981',
            fontWeight: '500'
          }}>
            Success
          </div>
          <div style={{
            padding: '4px 12px',
            backgroundColor: 'white',
            border: '1px solid #F59E0B',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#F59E0B',
            fontWeight: '500'
          }}>
            Pending
          </div>
          <div style={{
            padding: '4px 12px',
            backgroundColor: 'white',
            border: '1px solid #EF4444',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#EF4444',
            fontWeight: '500'
          }}>
            Failed
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all chip variants and status tags.',
      },
    },
  },
};

// =============================================================================
// STATUS TAG STORIES
// =============================================================================

export const StatusTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{
        padding: '4px 12px',
        backgroundColor: 'white',
        border: '1px solid #10B981',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#10B981',
        fontWeight: '500'
      }}>
        Success
      </div>
      <div style={{
        padding: '4px 12px',
        backgroundColor: 'white',
        border: '1px solid #F59E0B',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#F59E0B',
        fontWeight: '500'
      }}>
        Pending
      </div>
      <div style={{
        padding: '4px 12px',
        backgroundColor: 'white',
        border: '1px solid #EF4444',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#EF4444',
        fontWeight: '500'
      }}>
        Failed
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status tags for different states.',
      },
    },
  },
};

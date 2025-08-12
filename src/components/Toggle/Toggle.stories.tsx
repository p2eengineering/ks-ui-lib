import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { FaSun, FaMoon, FaCheck, FaTimes, FaBars } from 'react-icons/fa';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile toggle component with three types: switch, segmented control, and theme selector. Helps to quickly switch between two states with consistent appearance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['switch', 'segmented', 'theme'],
      description: 'The type of toggle component',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Component size',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked (for switch type)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when toggle state changes',
    },
  },
  args: {
    type: 'switch',
    variant: 'primary',
    size: 'medium',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// TOGGLE SWITCH STORIES
// =============================================================================

export const SwitchDisableState: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
      <Toggle type="switch" checked={false} />
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch in disable state with external labels.',
      },
    },
  },
};

export const SwitchEnableState: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Disable</span>
      <Toggle type="switch" checked={true} />
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Enable</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch in enable state with external labels.',
      },
    },
  },
};

export const SwitchSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
        <Toggle type="switch" size="small" />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
        <Toggle type="switch" size="medium" />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
        <Toggle type="switch" size="large" />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch in different sizes with external labels.',
      },
    },
  },
};

export const SwitchStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
        <Toggle type="switch" checked={false} />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Disable</span>
        <Toggle type="switch" checked={true} />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Enable</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6', opacity: '0.5' }}>Disable</span>
        <Toggle type="switch" disabled />
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6', opacity: '0.5' }}>Enable</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch in different states with external labels.',
      },
    },
  },
};

// =============================================================================
// SEGMENTED CONTROL STORIES
// =============================================================================

export const SegmentedDefault: Story = {
  args: {
    type: 'segmented',
    children: 'Segmented Control',
  },
};

export const SegmentedLeftActive: Story = {
  args: {
    type: 'segmented',
    segments: [
      { id: 'bars', label: '☰' },
      { id: 'close', label: '✕' },
    ],
    activeSegment: 'bars',
    children: 'Left Segment Active (Menu)',
  },
};

export const SegmentedRightActive: Story = {
  args: {
    type: 'segmented',
    segments: [
      { id: 'bars', label: '☰' },
      { id: 'close', label: '✕' },
    ],
    activeSegment: 'close',
    children: 'Right Segment Active (Close)',
  },
};

export const SegmentedSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle type="segmented" size="small" segments={[
        { id: 'small', label: 'Small' },
        { id: 'medium', label: 'Medium' },
      ]}>Small Segmented</Toggle>
      
      <Toggle type="segmented" size="medium" segments={[
        { id: 'small', label: 'Small' },
        { id: 'medium', label: 'Medium' },
      ]}>Medium Segmented</Toggle>
      
      <Toggle type="segmented" size="large" segments={[
        { id: 'small', label: 'Small' },
        { id: 'medium', label: 'Medium' },
      ]}>Large Segmented</Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Segmented control in different sizes.',
      },
    },
  },
};

export const SegmentedStates: Story = {
  render: () => {
    const [activeSegment, setActiveSegment] = useState('disable');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <Toggle 
          type="segmented" 
          activeSegment={activeSegment}
          onSegmentChange={setActiveSegment}
          segments={[
            { id: 'disable', label: 'Disable' },
            { id: 'enable', label: 'Enable' },
          ]}
        >
          Interactive Segmented
        </Toggle>
        
        <Toggle 
          type="segmented" 
          disabled
          segments={[
            { id: 'disable', label: 'Disable' },
            { id: 'enable', label: 'Enable' },
          ]}
        >
          Disabled Segmented
        </Toggle>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Segmented control with interactive and disabled states.',
      },
    },
  },
};

// =============================================================================
// THEME SELECTOR STORIES
// =============================================================================

export const ThemeSelector: Story = {
  args: {
    type: 'theme',
    theme: 'light',
    children: 'Theme Selector',
  },
};

export const ThemeSelectorDark: Story = {
  args: {
    type: 'theme',
    theme: 'dark',
    children: 'Theme Selector (Dark)',
  },
};

export const ThemeSelectorSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle type="theme" size="small" theme="light">Small Theme</Toggle>
      <Toggle type="theme" size="medium" theme="light">Medium Theme</Toggle>
      <Toggle type="theme" size="large" theme="light">Large Theme</Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme selector in different sizes.',
      },
    },
  },
};

export const ThemeSelectorStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle type="theme" theme="light">Light Theme</Toggle>
      <Toggle type="theme" theme="dark">Dark Theme</Toggle>
      <Toggle type="theme" disabled>Disabled Theme</Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme selector in different states.',
      },
    },
  },
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveSwitch: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: isChecked ? '#D1D4D6' : '#404040' }}>Disable</span>
        <Toggle 
          type="switch" 
          checked={isChecked}
          onChange={setIsChecked}
        />
        <span style={{ fontSize: '14px', fontWeight: '500', color: isChecked ? '#404040' : '#D1D4D6' }}>Enable</span>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle switch with external labels and state management.',
      },
    },
  },
};

export const InteractiveSegmented: Story = {
  args: {
    checked: true
  },

  render: () => {
    const [activeSegment, setActiveSegment] = useState('bars');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', fontWeight: '500', color: activeSegment === 'bars' ? '#D1D4D6' : '#404040' }}>
            Menu
          </span>
          <Toggle 
            type="segmented" 
            activeSegment={activeSegment}
            onSegmentChange={setActiveSegment}
            segments={[
              { id: 'bars', label: '☰' },
              { id: 'close', label: '✕' },
            ]}
          />
          <span style={{ fontSize: '14px', fontWeight: '500', color: activeSegment === 'close' ? '#D1D4D6' : '#404040' }}>
            Close
          </span>
        </div>
        <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '8px', fontSize: '14px' }}>
          Active segment: <strong>{activeSegment === 'bars' ? 'Menu (☰)' : 'Close (✕)'}</strong>
        </div>
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story: 'Interactive segmented control with cross button (☰/✕) and external labels.',
      },
    },
  }
};

export const InteractiveTheme: Story = {
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <Toggle 
        type="theme" 
        theme={currentTheme}
        onThemeChange={setCurrentTheme}
        showDropdown={false}
      >
        Current Theme: {currentTheme}
      </Toggle>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive theme selector with state management.',
      },
    },
  },
};

// =============================================================================
// CROSS BUTTON TOGGLE STORIES
// =============================================================================

export const CrossButtonToggle: Story = {
  render: () => {
    const [activeSegment, setActiveSegment] = useState('bars');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Cross Button Toggle</h3>
          <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666666' }}>
            This demonstrates the segmented control with bars (☰) and cross (✕) buttons.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: activeSegment === 'bars' ? '#D1D4D6' : '#404040' }}>
              Menu
            </span>
            <Toggle 
              type="segmented"
              segments={[
                { id: 'bars', label: '☰' },
                { id: 'close', label: '✕' }
              ]}
              activeSegment={activeSegment}
              onSegmentChange={setActiveSegment}
            />
            <span style={{ fontSize: '14px', fontWeight: '500', color: activeSegment === 'close' ? '#D1D4D6' : '#404040' }}>
              Close
            </span>
          </div>
          
          <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
            <p style={{ fontSize: '14px', color: '#404040', margin: 0 }}>
              Active segment: <strong>{activeSegment === 'bars' ? 'Menu (☰)' : 'Close (✕)'}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the Toggle component with segmented control featuring bars (☰) and cross (✕) buttons.',
      },
    },
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const ComprehensiveToggleShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Toggle Switch (Type 1)</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
            <Toggle type="switch" checked={false} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Disable</span>
            <Toggle type="switch" checked={true} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Enable</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6', opacity: '0.5' }}>Disable</span>
            <Toggle type="switch" disabled />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6', opacity: '0.5' }}>Enable</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Segmented Control (Type 2)</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle 
            type="segmented" 
            segments={[
              { id: 'bars', label: '☰' },
              { id: 'close', label: '✕' },
            ]}
            activeSegment="bars"
          >
            Left Segment Active (Menu)
          </Toggle>
          
          <Toggle 
            type="segmented" 
            segments={[
              { id: 'bars', label: '☰' },
              { id: 'close', label: '✕' },
            ]}
            activeSegment="close"
          >
            Right Segment Active (Close)
          </Toggle>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Theme Selector (Type 3)</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle type="theme" theme="light">Light Theme</Toggle>
          <Toggle type="theme" theme="dark">Dark Theme</Toggle>
          <Toggle type="theme" disabled>Disabled Theme</Toggle>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all toggle types and their states.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Toggle Switch Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
            <Toggle type="switch" size="small" />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
            <Toggle type="switch" size="medium" />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#404040' }}>Disable</span>
            <Toggle type="switch" size="large" />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#D1D4D6' }}>Enable</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Segmented Control Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle type="segmented" size="small" segments={[
            { id: 'small', label: 'Small' },
            { id: 'large', label: 'Large' },
          ]}>Small</Toggle>
          
          <Toggle type="segmented" size="medium" segments={[
            { id: 'small', label: 'Small' },
            { id: 'large', label: 'Large' },
          ]}>Medium</Toggle>
          
          <Toggle type="segmented" size="large" segments={[
            { id: 'small', label: 'Small' },
            { id: 'large', label: 'Large' },
          ]}>Large</Toggle>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Theme Selector Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle type="theme" size="small">Small</Toggle>
          <Toggle type="theme" size="medium">Medium</Toggle>
          <Toggle type="theme" size="large">Large</Toggle>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison across all toggle types.',
      },
    },
  },
};

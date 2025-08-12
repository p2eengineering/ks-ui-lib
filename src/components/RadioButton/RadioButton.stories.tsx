import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio buttons allow users to select one option from a set. They\'re a selection control that often appears when users are asked to make decisions or select a choice from options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the radio button group',
    },
    value: {
      control: { type: 'text' },
      description: 'Value attribute for the radio button',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when radio button state changes',
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC RADIO BUTTON STORIES
// =============================================================================

export const EnabledUnselected: Story = {
  args: {
    checked: false,
    disabled: false,
    children: 'Enabled, Unselected',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button in enabled, unselected state.',
      },
    },
  },
};

export const DisabledUnselected: Story = {
  args: {
    checked: false,
    disabled: true,
    children: 'Disabled, Unselected',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button in disabled, unselected state.',
      },
    },
  },
};

export const EnabledSelected: Story = {
  args: {
    checked: true,
    disabled: false,
    children: 'Enabled, Selected',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button in enabled, selected state.',
      },
    },
  },
};

export const DisabledSelected: Story = {
  args: {
    checked: true,
    disabled: true,
    children: 'Disabled, Selected',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button in disabled, selected state.',
      },
    },
  },
};

// =============================================================================
// RADIO BUTTON GROUP STORIES
// =============================================================================

export const RadioButtonGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButton
          name="options"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={() => setSelectedValue('option1')}
        >
          Option 1
        </RadioButton>
        <RadioButton
          name="options"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={() => setSelectedValue('option2')}
        >
          Option 2
        </RadioButton>
        <RadioButton
          name="options"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={() => setSelectedValue('option3')}
        >
          Option 3
        </RadioButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive radio button group demonstrating single selection behavior.',
      },
    },
  },
};

export const RadioButtonGroupWithDisabled: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButton
          name="options"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={() => setSelectedValue('option1')}
        >
          Option 1
        </RadioButton>
        <RadioButton
          name="options"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={() => setSelectedValue('option2')}
          disabled
        >
          Option 2 (Disabled)
        </RadioButton>
        <RadioButton
          name="options"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={() => setSelectedValue('option3')}
        >
          Option 3
        </RadioButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button group with one disabled option.',
      },
    },
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const RadioButtonShowcase: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        maxWidth: '600px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Radio Button States
          </h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <RadioButton checked={false} disabled={false}>
              Enabled, Unselected
            </RadioButton>
            
            <RadioButton checked={false} disabled={true}>
              Disabled, Unselected
            </RadioButton>
            
            <RadioButton checked={true} disabled={false}>
              Enabled, Selected
            </RadioButton>
            
            <RadioButton checked={true} disabled={true}>
              Disabled, Selected
            </RadioButton>
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Interactive Example
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton
              name="showcase"
              value="option1"
              checked={selectedValue === 'option1'}
              onChange={() => setSelectedValue('option1')}
            >
              Option 1
            </RadioButton>
            <RadioButton
              name="showcase"
              value="option2"
              checked={selectedValue === 'option2'}
              onChange={() => setSelectedValue('option2')}
            >
              Option 2
            </RadioButton>
            <RadioButton
              name="showcase"
              value="option3"
              checked={selectedValue === 'option3'}
              onChange={() => setSelectedValue('option3')}
            >
              Option 3
            </RadioButton>
          </div>
          <div style={{ marginTop: '12px', padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
            Selected: <strong>{selectedValue}</strong>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all radio button states and interactive examples.',
      },
    },
  },
};

// =============================================================================
// HORIZONTAL LAYOUT
// =============================================================================

export const HorizontalLayout: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    
    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <RadioButton
          name="horizontal"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={() => setSelectedValue('option1')}
        >
          Option 1
        </RadioButton>
        <RadioButton
          name="horizontal"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={() => setSelectedValue('option2')}
        >
          Option 2
        </RadioButton>
        <RadioButton
          name="horizontal"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={() => setSelectedValue('option3')}
        >
          Option 3
        </RadioButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons arranged horizontally.',
      },
    },
  },
};

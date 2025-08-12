import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. They\'re a kind of selection control that helps users make a choice from a set of options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in indeterminate state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in error state',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when checkbox state changes',
    },
  },
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC CHECKBOX STORIES
// =============================================================================

export const EnabledUnselected: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Enabled, Unselected</Checkbox>,
};

export const EnabledSelected: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Enabled, Selected</Checkbox>,
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Indeterminate</Checkbox>,
};

export const ErrorSelected: Story = {
  args: {
    checked: true,
    error: true,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Error, Selected</Checkbox>,
};

export const ErrorIndeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    error: true,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Error, Indeterminate</Checkbox>,
};

export const ErrorUnselected: Story = {
  args: {
    checked: false,
    error: true,
    disabled: false,
  },
  render: (args) => <Checkbox {...args}>Error, Unselected</Checkbox>,
};

export const DisabledSelected: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => <Checkbox {...args}>Disabled, Selected</Checkbox>,
};

export const DisabledUnselected: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => <Checkbox {...args}>Disabled, Unselected</Checkbox>,
};

export const DisabledIndeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    disabled: true,
  },
  render: (args) => <Checkbox {...args}>Disabled, Indeterminate</Checkbox>,
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveCheckbox: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox checked={checked} onChange={setChecked}>
          Interactive Checkbox
        </Checkbox>
        <div style={{ padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          Checked: <strong>{checked ? 'Yes' : 'No'}</strong>
        </div>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    const items = ['Option 1', 'Option 2', 'Option 3'];
    
    const handleItemChange = (item: string, checked: boolean) => {
      if (checked) {
        setSelectedItems(prev => [...prev, item]);
      } else {
        setSelectedItems(prev => prev.filter(i => i !== item));
      }
    };
    
    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedItems(items);
      } else {
        setSelectedItems([]);
      }
    };
    
    const isAllSelected = selectedItems.length === items.length;
    const isIndeterminate = selectedItems.length > 0 && selectedItems.length < items.length;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox 
          checked={isAllSelected}
          indeterminate={isIndeterminate}
          onChange={handleSelectAll}
        >
          Select All
        </Checkbox>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '24px' }}>
          {items.map(item => (
            <Checkbox
              key={item}
              checked={selectedItems.includes(item)}
              onChange={(checked) => handleItemChange(item, checked)}
            >
              {item}
            </Checkbox>
          ))}
        </div>
        
        <div style={{ padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          Selected: <strong>{selectedItems.join(', ') || 'None'}</strong>
        </div>
      </div>
    );
  },
};

// =============================================================================
// COMPONENT-STYLE CHECKBOXES (WITH LABELS AND ICONS)
// =============================================================================

export const CheckboxWithLabel: Story = {
  render: () => {
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
        <Checkbox
          checked={selectedWallet === 'custodial'}
          onChange={(checked) => setSelectedWallet(checked ? 'custodial' : null)}
          leadingIcon={
            <div style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#E6E6E6',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#404040',
                borderRadius: '1px'
              }} />
            </div>
          }
        >
          Custodial Wallet
        </Checkbox>
        
        <Checkbox
          checked={selectedWallet === 'self-custody'}
          onChange={(checked) => setSelectedWallet(checked ? 'self-custody' : null)}
          leadingIcon={
            <div style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#E7FD96',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0E6748',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              P
            </div>
          }
        >
          Self Custody Wallet
        </Checkbox>
        
        <div style={{ padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          Selected: <strong>{selectedWallet || 'None'}</strong>
        </div>
      </div>
    );
  },
};

export const ErrorCheckboxWithLabel: Story = {
  render: () => (
    <Checkbox
      checked={true}
      error={true}
      leadingIcon={
        <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#FFE2B0',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C53225',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>
          P
        </div>
      }
    >
      Self Custody Wallet
    </Checkbox>
  ),
};

export const DisabledCheckboxWithLabel: Story = {
  render: () => (
    <Checkbox
      checked={true}
      disabled={true}
      leadingIcon={
        <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#E6E6E6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D1D4D6',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>
          P
        </div>
      }
    >
      Self Custody Wallet
    </Checkbox>
  ),
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const CheckboxShowcase: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');
    
    return (
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
            Checkboxes
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666666' }}>
            Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off. They're a kind of selection control that helps users make a choice from a set of options.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            border: '2px solid #CFD2F1'
          }}>
            {/* Column Headers */}
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Enabled</div>
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Hover</div>
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#404040' }}>Disabled</div>
            
            {/* Row 1: Selected */}
            <Checkbox checked={true}>Selected</Checkbox>
            <Checkbox checked={true} style={{ backgroundColor: '#E6E6E6' }}>Selected</Checkbox>
            <Checkbox checked={true} disabled>Selected</Checkbox>
            
            {/* Row 2: Indeterminate */}
            <Checkbox indeterminate={true}>Indeterminate</Checkbox>
            <Checkbox indeterminate={true} style={{ backgroundColor: '#E6E6E6' }}>Indeterminate</Checkbox>
            <Checkbox indeterminate={true} disabled>Indeterminate</Checkbox>
            
            {/* Row 3: Unselected */}
            <Checkbox checked={false}>Unselected</Checkbox>
            <Checkbox checked={false} style={{ backgroundColor: '#E6E6E6' }}>Unselected</Checkbox>
            <Checkbox checked={false} disabled>Unselected</Checkbox>
            
            {/* Row 4: Error Selected */}
            <Checkbox checked={true} error>Error</Checkbox>
            <Checkbox checked={true} error style={{ backgroundColor: '#E6E6E6' }}>Error</Checkbox>
            <Checkbox checked={true} error disabled>Error</Checkbox>
            
            {/* Row 5: Error Indeterminate */}
            <Checkbox indeterminate={true} error>Indeterminate</Checkbox>
            <Checkbox indeterminate={true} error style={{ backgroundColor: '#E6E6E6' }}>Indeterminate</Checkbox>
            <Checkbox indeterminate={true} error disabled>Indeterminate</Checkbox>
            
            {/* Row 6: Error Unselected */}
            <Checkbox checked={false} error>Unselected</Checkbox>
            <Checkbox checked={false} error style={{ backgroundColor: '#E6E6E6' }}>Unselected</Checkbox>
            <Checkbox checked={false} error disabled>Unselected</Checkbox>
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Checkboxes with Labels
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '12px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px'
          }}>
            <Checkbox
              checked={false}
              leadingIcon={
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#E6E6E6',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#404040',
                    borderRadius: '1px'
                  }} />
                </div>
              }
            >
              Custodial Wallet
            </Checkbox>
            
            <Checkbox
              checked={true}
              leadingIcon={
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#E7FD96',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0E6748',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  P
                </div>
              }
            >
              Self Custody Wallet
            </Checkbox>
            
            <Checkbox
              checked={true}
              error
              leadingIcon={
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#FFE2B0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C53225',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  P
                </div>
              }
            >
              Self Custody Wallet
            </Checkbox>
            
            <Checkbox
              checked={true}
              disabled
              leadingIcon={
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#E6E6E6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D1D4D6',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  P
                </div>
              }
            >
              Self Custody Wallet
            </Checkbox>
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Interactive Example
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              checked={selectedValue === 'option1'}
              onChange={() => setSelectedValue('option1')}
            >
              Option 1
            </Checkbox>
            <Checkbox
              checked={selectedValue === 'option2'}
              onChange={() => setSelectedValue('option2')}
            >
              Option 2
            </Checkbox>
            <Checkbox
              checked={selectedValue === 'option3'}
              onChange={() => setSelectedValue('option3')}
            >
              Option 3
            </Checkbox>
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
      story: 'Complete showcase of all checkbox states and interactive examples.',
    },
  },
};

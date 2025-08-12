import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Tabs from './Tabs';
import { FaBolt } from 'react-icons/fa';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the tabs',
    },
    variant: {
      control: { type: 'select' },
      options: ['rounded', 'segmented'],
      description: 'Visual style variant',
    },
    showIcons: {
      control: { type: 'boolean' },
      description: 'Whether to show icons in tabs',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { id: 'tab1', label: 'Tab' },
  { id: 'tab2', label: 'Tab' },
  { id: 'tab3', label: 'Tab' },
];

const itemsWithIcons = [
  { id: 'tab1', label: 'Tab', icon: <FaBolt /> },
  { id: 'tab2', label: 'Tab', icon: <FaBolt /> },
  { id: 'tab3', label: 'Tab', icon: <FaBolt /> },
];

// Small, Rounded, Text-Only Tabs
export const SmallRoundedTextOnly: Story = {
  args: {
    items: defaultItems,
    size: 'small',
    variant: 'rounded',
    showIcons: false,
  },
};

// Medium, Rounded, Text-Only Tabs
export const MediumRoundedTextOnly: Story = {
  args: {
    items: defaultItems,
    size: 'medium',
    variant: 'rounded',
    showIcons: false,
  },
};

// Small, Rounded, Icon + Text Tabs
export const SmallRoundedWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    size: 'small',
    variant: 'rounded',
    showIcons: true,
  },
};

// Medium, Rounded, Icon + Text Tabs
export const MediumRoundedWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    size: 'medium',
    variant: 'rounded',
    showIcons: true,
  },
};

// Small, Segmented, Text-Only Tabs
export const SmallSegmentedTextOnly: Story = {
  args: {
    items: defaultItems,
    size: 'small',
    variant: 'segmented',
    showIcons: false,
  },
};

// Segmented Control Style Tabs
export const SegmentedControl: Story = {
  args: {
    items: defaultItems,
    size: 'medium',
    variant: 'segmented',
    showIcons: false,
  },
};

// Small, Segmented, Icon + Text Tabs
export const SmallSegmentedWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    size: 'small',
    variant: 'segmented',
    showIcons: true,
  },
};

// Large, Rounded, Icon + Text Tabs
export const LargeRoundedWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    size: 'large',
    variant: 'rounded',
    showIcons: true,
  },
};

// Interactive Tabs
export const InteractiveTabs: Story = {
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
      { id: 'settings', label: 'Settings' },
    ],
    size: 'medium',
    variant: 'rounded',
    showIcons: false,
  },
};

// Interactive Tabs with Icons
export const InteractiveTabsWithIcons: Story = {
  args: {
    items: [
      { id: 'overview', label: 'Overview', icon: <FaBolt /> },
      { id: 'analytics', label: 'Analytics', icon: <FaBolt /> },
      { id: 'reports', label: 'Reports', icon: <FaBolt /> },
      { id: 'settings', label: 'Settings', icon: <FaBolt /> },
    ],
    size: 'medium',
    variant: 'rounded',
    showIcons: true,
  },
};

// Disabled Tabs
export const DisabledTabs: Story = {
  args: {
    items: [
      { id: 'tab1', label: 'Tab' },
      { id: 'tab2', label: 'Tab', disabled: true },
      { id: 'tab3', label: 'Tab' },
    ],
    size: 'medium',
    variant: 'rounded',
    showIcons: false,
  },
};

// Tabs Showcase
export const TabsShowcase: Story = {
  render: () => {
    const [activeTabs, setActiveTabs] = React.useState({
      small1: 'tab1',
      medium1: 'tab1',
      smallIcons1: 'tab1',
      mediumIcons1: 'tab1',
      small2: 'tab1',
      segmented: 'tab1',
      smallIcons2: 'tab1',
      largeIcons: 'tab1',
    });

    const handleTabChange = (key: string, tabId: string) => {
      setActiveTabs(prev => ({ ...prev, [key]: tabId }));
    };

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
          Tabs Component Showcase
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '32px' 
        }}>
          {/* Row 1 */}
          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Small, Rounded, Text-Only
            </h3>
            <Tabs
              items={defaultItems}
              activeTab={activeTabs.small1}
              onTabChange={(tabId) => handleTabChange('small1', tabId)}
              size="small"
              variant="rounded"
              showIcons={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Medium, Rounded, Text-Only
            </h3>
            <Tabs
              items={defaultItems}
              activeTab={activeTabs.medium1}
              onTabChange={(tabId) => handleTabChange('medium1', tabId)}
              size="medium"
              variant="rounded"
              showIcons={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Small, Rounded, Icon + Text
            </h3>
            <Tabs
              items={itemsWithIcons}
              activeTab={activeTabs.smallIcons1}
              onTabChange={(tabId) => handleTabChange('smallIcons1', tabId)}
              size="small"
              variant="rounded"
              showIcons={true}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Medium, Rounded, Icon + Text
            </h3>
            <Tabs
              items={itemsWithIcons}
              activeTab={activeTabs.mediumIcons1}
              onTabChange={(tabId) => handleTabChange('mediumIcons1', tabId)}
              size="medium"
              variant="rounded"
              showIcons={true}
            />
          </div>

          {/* Row 2 */}
          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Small, Segmented, Text-Only
            </h3>
            <Tabs
              items={defaultItems}
              activeTab={activeTabs.small2}
              onTabChange={(tabId) => handleTabChange('small2', tabId)}
              size="small"
              variant="segmented"
              showIcons={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Segmented Control Style
            </h3>
            <Tabs
              items={defaultItems}
              activeTab={activeTabs.segmented}
              onTabChange={(tabId) => handleTabChange('segmented', tabId)}
              size="medium"
              variant="segmented"
              showIcons={false}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Small, Segmented, Icon + Text
            </h3>
            <Tabs
              items={itemsWithIcons}
              activeTab={activeTabs.smallIcons2}
              onTabChange={(tabId) => handleTabChange('smallIcons2', tabId)}
              size="small"
              variant="segmented"
              showIcons={true}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '16px', fontWeight: '600' }}>
              Large, Rounded, Icon + Text
            </h3>
            <Tabs
              items={itemsWithIcons}
              activeTab={activeTabs.largeIcons}
              onTabChange={(tabId) => handleTabChange('largeIcons', tabId)}
              size="large"
              variant="rounded"
              showIcons={true}
            />
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
            Active Tab States:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '12px' }}>
            <div>Small Rounded: <strong>{activeTabs.small1}</strong></div>
            <div>Medium Rounded: <strong>{activeTabs.medium1}</strong></div>
            <div>Small Icons: <strong>{activeTabs.smallIcons1}</strong></div>
            <div>Medium Icons: <strong>{activeTabs.mediumIcons1}</strong></div>
            <div>Small Segmented: <strong>{activeTabs.small2}</strong></div>
            <div>Segmented Control: <strong>{activeTabs.segmented}</strong></div>
            <div>Small Segmented Icons: <strong>{activeTabs.smallIcons2}</strong></div>
            <div>Large Icons: <strong>{activeTabs.largeIcons}</strong></div>
          </div>
        </div>
      </div>
    );
  },
};

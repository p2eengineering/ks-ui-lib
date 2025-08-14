import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Sidebar from './Sidebar';
import Layout from '../Layout/Layout';
import { FaHome, FaUser, FaCog, FaChartBar, FaFileAlt, FaEnvelope, FaBell } from 'react-icons/fa';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A functional sidebar component with navigation items, active state management, and responsive design. Supports controlled state for integration with parent components.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar is open or closed',
    },
    activeId: {
      control: { type: 'text' },
      description: 'Currently active sidebar item ID',
    },
    onItemClick: {
      action: 'item clicked',
      description: 'Callback when a sidebar item is clicked',
    },
    onActiveIdChange: {
      action: 'active id changed',
      description: 'Callback when the active item changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Custom sidebar items for different examples
const customItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <FaHome />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <FaUser />,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <FaChartBar />,
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: <FaFileAlt />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <FaEnvelope />,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <FaBell />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <FaCog />,
  },
];

// Wrapper component to handle controlled state
const SidebarWrapper: React.FC<{
  items?: any[];
  isOpen?: boolean;
  onItemClick?: (item: any) => void;
}> = ({ items, isOpen = true, onItemClick }) => {
  const [activeId, setActiveId] = useState('dashboard');

  const handleActiveIdChange = (newActiveId: string) => {
    setActiveId(newActiveId);
    console.log('Active sidebar item changed to:', newActiveId);
  };

  const handleItemClick = (item: any) => {
    console.log('Sidebar item clicked:', item);
    onItemClick?.(item);
  };

  return (
    <Sidebar
      items={items}
      isOpen={isOpen}
      activeId={activeId}
      onActiveIdChange={handleActiveIdChange}
      onItemClick={handleItemClick}
    />
  );
};

export const Default: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    isOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar with built-in navigation items. Click on items to see the active state change.',
      },
    },
  },
};

export const CustomItems: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: customItems,
    isOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar with custom navigation items. Each item has an icon and label.',
      },
    },
  },
};

export const Closed: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    isOpen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar in closed state. The sidebar collapses to show only icons.',
      },
    },
  },
};

export const WithLayout: Story = {
  render: () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSidebarId, setActiveSidebarId] = useState('dashboard');

    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarItemClick = (item: any) => {
      console.log('Sidebar item clicked:', item);
    };

    const handleActiveSidebarIdChange = (activeId: string) => {
      setActiveSidebarId(activeId);
      console.log('Active sidebar item changed to:', activeId);
    };

    return (
      <Layout
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
        onSidebarItemClick={handleSidebarItemClick}
        activeSidebarId={activeSidebarId}
        onActiveSidebarIdChange={handleActiveSidebarIdChange}
        walletAddress="0x1234...5678"
        walletBalance="$1,234.56"
      >
        <div style={{ padding: '24px' }}>
          <h1>Dashboard</h1>
          <p>Current active sidebar item: <strong>{activeSidebarId}</strong></p>
          <p>Sidebar is {isSidebarOpen ? 'open' : 'closed'}</p>
          
          <div style={{ marginTop: '24px' }}>
            <h2>Content Area</h2>
            <p>This is the main content area. The sidebar can be toggled using the menu button in the header.</p>
            
            <div style={{ 
              background: '#f5f5f5', 
              padding: '16px', 
              borderRadius: '8px',
              marginTop: '16px'
            }}>
              <h3>Sidebar Features:</h3>
              <ul>
                <li>✅ Controlled open/close state</li>
                <li>✅ Active item highlighting</li>
                <li>✅ Click callbacks for navigation</li>
                <li>✅ Responsive design</li>
                <li>✅ Custom navigation items</li>
                <li>✅ Integration with Layout component</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete layout example showing the sidebar integrated with the header and main content area. The sidebar can be toggled and items can be clicked.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSidebarId, setActiveSidebarId] = useState('dashboard');
    const [clickedItems, setClickedItems] = useState<string[]>([]);

    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarItemClick = (item: any) => {
      setClickedItems(prev => [...prev, `${item.label} (${new Date().toLocaleTimeString()})`]);
    };

    const handleActiveSidebarIdChange = (activeId: string) => {
      setActiveSidebarId(activeId);
    };

    const clearHistory = () => {
      setClickedItems([]);
    };

    return (
      <Layout
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
        onSidebarItemClick={handleSidebarItemClick}
        activeSidebarId={activeSidebarId}
        onActiveSidebarIdChange={handleActiveSidebarIdChange}
        walletAddress="0x1234...5678"
        walletBalance="$1,234.56"
      >
        <div style={{ padding: '24px' }}>
          <h1>Interactive Sidebar Demo</h1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '24px',
            marginTop: '24px'
          }}>
            <div>
              <h2>Current State</h2>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '16px', 
                borderRadius: '8px',
                border: '1px solid #0ea5e9'
              }}>
                <p><strong>Active Item:</strong> {activeSidebarId}</p>
                <p><strong>Sidebar State:</strong> {isSidebarOpen ? 'Open' : 'Closed'}</p>
                <p><strong>Total Clicks:</strong> {clickedItems.length}</p>
              </div>
            </div>
            
            <div>
              <h2>Click History</h2>
              <div style={{ 
                background: '#fef3c7', 
                padding: '16px', 
                borderRadius: '8px',
                border: '1px solid #f59e0b',
                maxHeight: '200px',
                overflowY: 'auto'
              }}>
                {clickedItems.length === 0 ? (
                  <p style={{ color: '#92400e' }}>No items clicked yet. Try clicking sidebar items!</p>
                ) : (
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {clickedItems.map((item, index) => (
                      <li key={index} style={{ marginBottom: '4px', fontSize: '14px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {clickedItems.length > 0 && (
                  <button
                    onClick={clearHistory}
                    style={{
                      marginTop: '12px',
                      padding: '8px 16px',
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Clear History
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: '#f3f4f6', 
            padding: '16px', 
            borderRadius: '8px',
            marginTop: '24px'
          }}>
            <h3>Instructions:</h3>
            <ul>
              <li>Click sidebar items to see them become active</li>
              <li>Use the menu button in the header to toggle the sidebar</li>
              <li>Watch the click history update in real-time</li>
              <li>Notice how the active state is properly managed</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing real-time state management and click tracking. Demonstrates all sidebar functionality including state changes and callbacks.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Sidebar from './Sidebar';
import { FaTh, FaFileContract, FaCogs, FaExchangeAlt, FaGift, FaKey, FaCog } from 'react-icons/fa';
import { useState } from 'react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A navigation sidebar component with menu items and icons. Supports custom items, active states, and responsive behavior.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the sidebar is open or closed',
    },
    defaultActiveId: {
      control: 'select',
      options: ['dashboard', 'smart-contract', 'api-gateway', 'transaction-monitoring', 'subscription', 'api-key-generation', 'settings'],
      description: 'The default active menu item',
    },
    onItemClick: {
      action: 'item clicked',
      description: 'Callback function when a menu item is clicked',
    },
    onActiveChange: {
      action: 'active changed',
      description: 'Callback function when the active item changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the sidebar',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ 
          flex: 1, 
          backgroundColor: '#f5f5f5', 
          padding: '20px',
          marginLeft: '280px'
        }}>
          <h2>Main Content Area</h2>
          <p>This is the main content area that would be displayed alongside the sidebar.</p>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    isOpen: true,
    defaultActiveId: 'dashboard',
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const WithActiveItem: Story = {
  args: {
    isOpen: true,
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <FaTh />,
      },
      {
        id: 'smart-contract',
        label: 'Smart Contract',
        icon: <FaFileContract />,
      },
      {
        id: 'api-gateway',
        label: 'API Gateway',
        icon: <FaCogs />,
      },
      {
        id: 'transaction-monitoring',
        label: 'Transaction Monitoring',
        icon: <FaExchangeAlt />,
        isActive: true,
      },
      {
        id: 'subscription',
        label: 'Subscription',
        icon: <FaGift />,
      },
      {
        id: 'api-key-generation',
        label: 'API Key Generation',
        icon: <FaKey />,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <FaCog />,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows the sidebar with "Transaction Monitoring" as the active item, demonstrating the purple background with white text and icons.',
      },
    },
  },
};

export const CustomItems: Story = {
  args: {
    isOpen: true,
    items: [
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <FaTh />,
      },
      {
        id: 'users',
        label: 'User Management',
        icon: <FaCog />,
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: <FaFileContract />,
        isActive: true,
      },
    ],
  },
};

export const ActiveStateDemo: Story = {
  args: {
    isOpen: true,
    defaultActiveId: 'transaction-monitoring',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the active state styling with purple background and white text/icons, matching the design shown in the interface.',
      },
    },
  },
};

// Interactive story with state management
const InteractiveStory = () => {
  const [activeId, setActiveId] = useState('dashboard');
  const [clickCount, setClickCount] = useState(0);

  const handleItemClick = (item: any) => {
    setClickCount(prev => prev + 1);
    console.log('Clicked:', item.label);
  };

  const handleActiveChange = (newActiveId: string) => {
    setActiveId(newActiveId);
    console.log('Active changed to:', newActiveId);
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar
        defaultActiveId={activeId}
        onItemClick={handleItemClick}
        onActiveChange={handleActiveChange}
      />
      <div style={{ 
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        padding: '20px',
        marginLeft: '280px'
      }}>
        <h2>Interactive Demo</h2>
        <p><strong>Current Active Item:</strong> {activeId}</p>
        <p><strong>Total Clicks:</strong> {clickCount}</p>
        <p>Click on sidebar items to see the state change in real-time!</p>
        
        <div style={{ marginTop: '20px' }}>
          <h3>Content for: {activeId}</h3>
          <p>This content would change based on the selected menu item.</p>
        </div>
      </div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => <InteractiveStory />,
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the interactive functionality with real-time state management. Click on different menu items to see the active state change and track the interactions.',
      },
    },
  },
};

// Story with navigation simulation
const NavigationStory = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleItemClick = (item: any) => {
    setCurrentPage(item.id);
  };

  const getPageContent = (pageId: string) => {
    switch (pageId) {
      case 'dashboard':
        return {
          title: 'Dashboard',
          content: 'Welcome to your dashboard! Here you can see an overview of your activities.',
        };
      case 'smart-contract':
        return {
          title: 'Smart Contract',
          content: 'Manage your smart contracts and deploy new ones.',
        };
      case 'api-gateway':
        return {
          title: 'API Gateway',
          content: 'Configure and monitor your API endpoints.',
        };
      case 'transaction-monitoring':
        return {
          title: 'Transaction Monitoring',
          content: 'Track and analyze your blockchain transactions.',
        };
      case 'subscription':
        return {
          title: 'Subscription',
          content: 'Manage your subscription plans and billing.',
        };
      case 'api-key-generation':
        return {
          title: 'API Key Generation',
          content: 'Generate and manage your API keys.',
        };
      case 'settings':
        return {
          title: 'Settings',
          content: 'Configure your account and application settings.',
        };
      default:
        return {
          title: 'Page Not Found',
          content: 'The requested page could not be found.',
        };
    }
  };

  const pageContent = getPageContent(currentPage);

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar
        defaultActiveId={currentPage}
        onItemClick={handleItemClick}
      />
      <div style={{ 
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        padding: '20px',
        marginLeft: '280px'
      }}>
        <h2>{pageContent.title}</h2>
        <p>{pageContent.content}</p>
        <p>This simulates a real application where clicking sidebar items changes the page content.</p>
      </div>
    </div>
  );
};

export const NavigationSimulation: Story = {
  render: () => <NavigationStory />,
  parameters: {
    docs: {
      description: {
        story: 'This story simulates a real application with different page content based on the selected menu item. Click on different items to see the content change.',
      },
    },
  },
};

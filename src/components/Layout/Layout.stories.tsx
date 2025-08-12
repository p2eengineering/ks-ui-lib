import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Layout from './Layout';
import { FaTh, FaFileContract, FaCogs, FaExchangeAlt, FaGift, FaKey, FaCog } from 'react-icons/fa';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A complete application layout that combines Header and Sidebar components. Perfect for creating full-page applications with navigation.',
      },
    },
  },
  argTypes: {
    walletAddress: {
      control: 'text',
      description: 'Wallet address to display in the header',
    },
    walletBalance: {
      control: 'text',
      description: 'Wallet balance to display in the header',
    },
    profileImage: {
      control: 'text',
      description: 'URL for the profile image in the header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

const defaultSidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <FaTh />,
    isActive: true,
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
];

export const Default: Story = {
  args: {
    sidebarItems: defaultSidebarItems,
    walletAddress: '0x2E22...CD71',
    walletBalance: '$2,500.00',
    children: (
      <div>
        <h1>Welcome to KALP STUDIO</h1>
        <p>This is the main content area of your application.</p>
        <p>You can toggle the sidebar using the hamburger menu in the header.</p>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    sidebarItems: defaultSidebarItems,
    walletAddress: '0x1A2B...3C4D',
    walletBalance: '$5,250.00',
    children: (
      <div>
        <h1>Dashboard</h1>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>Recent Transactions</h3>
            <p>No recent transactions to display.</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>Smart Contracts</h3>
            <p>3 active contracts</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>API Usage</h3>
            <p>1,247 requests this month</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const ErrorPage: Story = {
  args: {
    sidebarItems: defaultSidebarItems,
    walletAddress: '0x2E22...CD71',
    walletBalance: '$2,500.00',
    children: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '120px', 
          fontWeight: 'bold', 
          color: '#404040',
          marginBottom: '20px'
        }}>
          404
        </div>
        <h1 style={{ 
          fontSize: '32px', 
          marginBottom: '10px',
          color: '#404040'
        }}>
          You're on the wrong block!
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          marginBottom: '30px'
        }}>
          Let's get you back on track!
        </p>
        <button style={{
          background: '#000',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          Go Home
        </button>
      </div>
    ),
  },
};

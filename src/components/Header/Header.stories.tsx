import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A header component that displays the KALP STUDIO logo, navigation controls, wallet information, and user profile. Perfect for application headers with blockchain integration.',
      },
    },
  },
  argTypes: {
    onMenuToggle: {
      action: 'menu toggled',
      description: 'Callback function when the hamburger menu is clicked',
    },
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
      description: 'Additional CSS classes to apply to the header',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    walletAddress: '0x2E22...CD71',
    walletBalance: '$2,500.00',
  },
};

export const WithProfileImage: Story = {
  args: {
    walletAddress: '0x1A2B...3C4D',
    walletBalance: '$5,250.00',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
};

export const CustomWalletInfo: Story = {
  args: {
    walletAddress: '0x9F8C...7A1B',
    walletBalance: '$12,847.32',
  },
};

export const LongWalletAddress: Story = {
  args: {
    walletAddress: '0x1234567890ABCDEF1234567890ABCDEF12345678',
    walletBalance: '$1,000.00',
  },
};

export const WithMenuToggle: Story = {
  args: {
    walletAddress: '0x2E22...CD71',
    walletBalance: '$2,500.00',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the header with menu toggle functionality. Click the hamburger menu to trigger the onMenuToggle callback.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states following the KS design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xl', '2xl', '3xl'],
      description: 'The size of the button',
    },
    state: {
      control: { type: 'select' },
      options: ['normal', 'hover', 'disabled'],
      description: 'The state of the button',
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'download', 'arrow'],
      description: 'Icon to display in the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    state: 'normal',
    icon: 'none',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const XL: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
};

export const TwoXL: Story = {
  args: {
    size: '2xl',
    children: 'Button',
  },
};

export const ThreeXL: Story = {
  args: {
    size: '3xl',
    children: 'Button',
  },
};

// Icon stories
export const WithDownloadIcon: Story = {
  args: {
    icon: 'download',
    children: 'Button',
  },
};

export const WithArrowIcon: Story = {
  args: {
    icon: 'arrow',
    children: 'Button',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: 'Button',
  },
};

export const DisabledText: Story = {
  args: {
    variant: 'text',
    disabled: true,
    children: 'Button',
  },
};

// Interactive stories
export const Interactive: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('Button clicked!'),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="primary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="text">Button</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
        <Button size="xl">Button</Button>
        <Button size="2xl">Button</Button>
        <Button size="3xl">Button</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.',
      },
    },
  },
};

// All icons showcase
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button icon="download">Button</Button>
        <Button icon="arrow">Button</Button>
        <Button icon="none">Button</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button icons displayed together for comparison.',
      },
    },
  },
};

// Comprehensive showcase
export const ComprehensiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Primary Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">Button</Button>
          <Button variant="primary" size="medium">Button</Button>
          <Button variant="primary" size="large">Button</Button>
          <Button variant="primary" size="xl">Button</Button>
          <Button variant="primary" size="2xl">Button</Button>
          <Button variant="primary" size="3xl">Button</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Secondary Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="small">Button</Button>
          <Button variant="secondary" size="medium">Button</Button>
          <Button variant="secondary" size="large">Button</Button>
          <Button variant="secondary" size="xl">Button</Button>
          <Button variant="secondary" size="2xl">Button</Button>
          <Button variant="secondary" size="3xl">Button</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Text Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="text" size="small">Button</Button>
          <Button variant="text" size="medium">Button</Button>
          <Button variant="text" size="large">Button</Button>
          <Button variant="text" size="xl">Button</Button>
          <Button variant="text" size="2xl">Button</Button>
          <Button variant="text" size="3xl">Button</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" icon="download">Button</Button>
          <Button variant="secondary" icon="arrow">Button</Button>
          <Button variant="text" icon="download">Button</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3' }}>Disabled States</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled>Button</Button>
          <Button variant="secondary" disabled>Button</Button>
          <Button variant="text" disabled>Button</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants, sizes, and states.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast messages are the feedback from system which helps user comprehend the status of action user has performed.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'processing'],
      description: 'Type of toast message',
    },
    title: {
      control: { type: 'text' },
      description: 'Custom title for the toast',
    },
    message: {
      control: { type: 'text' },
      description: 'Custom message for the toast',
    },
    autoClose: {
      control: { type: 'boolean' },
      description: 'Whether the toast should auto-close',
    },
    autoCloseDelay: {
      control: { type: 'number' },
      description: 'Delay in milliseconds before auto-closing',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when toast is closed',
    },
  },
  args: {
    type: 'success',
    autoClose: false,
    autoCloseDelay: 5000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC TOAST STORIES
// =============================================================================

export const SuccessToast: Story = {
  args: {
    type: 'success',
  },
};

export const ErrorToast: Story = {
  args: {
    type: 'error',
  },
};

export const ProcessingToast: Story = {
  args: {
    type: 'processing',
  },
};

export const CustomTitleAndMessage: Story = {
  args: {
    type: 'success',
    title: 'Custom Title',
    message: 'This is a custom message for the toast notification.',
  },
};

export const AutoCloseToast: Story = {
  args: {
    type: 'success',
    autoClose: true,
    autoCloseDelay: 3000,
  },
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveToast: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    const [toastType, setToastType] = useState<'success' | 'error' | 'processing'>('success');
    
    const showToast = (type: 'success' | 'error' | 'processing') => {
      setToastType(type);
      setIsVisible(true);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => showToast('success')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#1FBC5E',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Show Success
          </button>
          <button
            onClick={() => showToast('error')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#E75249',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Show Error
          </button>
          <button
            onClick={() => showToast('processing')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#FF5A24',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Show Processing
          </button>
        </div>
        
        {isVisible && (
          <Toast
            type={toastType}
            onClose={() => setIsVisible(false)}
          />
        )}
      </div>
    );
  },
};

export const ToastStack: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: string;
      type: 'success' | 'error' | 'processing';
      title?: string;
      message?: string;
    }>>([]);
    
    const addToast = (type: 'success' | 'error' | 'processing') => {
      const newToast = {
        id: Date.now().toString(),
        type,
        title: type === 'success' ? 'Success' : type === 'error' ? 'Failed!' : 'Processing',
        message: type === 'success' ? 'Operation completed successfully.' : 
                type === 'error' ? 'Something went wrong. Please try again.' : 
                'Please wait while we process your request.'
      };
      
      setToasts(prev => [...prev, newToast]);
    };
    
    const removeToast = (id: string) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => addToast('success')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#1FBC5E',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add Success
          </button>
          <button
            onClick={() => addToast('error')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#E75249',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add Error
          </button>
          <button
            onClick={() => addToast('processing')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#FF5A24',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add Processing
          </button>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              type={toast.type}
              title={toast.title}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
              autoClose={true}
              autoCloseDelay={4000}
            />
          ))}
        </div>
      </div>
    );
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const ToastShowcase: Story = {
  render: () => (
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
          Toast Messages
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666666' }}>
          Toast messages are the feedback from system which helps user comprehend the status of action user has performed.
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#404040',
              minWidth: '80px'
            }}>
              Type 1:
            </span>
            <Toast type="success" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#404040',
              minWidth: '80px'
            }}>
              Type 2:
            </span>
            <Toast type="error" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#404040',
              minWidth: '80px'
            }}>
              Type 3:
            </span>
            <Toast type="processing" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
          Custom Messages
        </h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <Toast 
            type="success"
            title="Custom Success"
            message="This is a custom success message with different content."
          />
          
          <Toast 
            type="error"
            title="Custom Error"
            message="This is a custom error message with different content."
          />
          
          <Toast 
            type="processing"
            title="Custom Processing"
            message="This is a custom processing message with different content."
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      story: 'Complete showcase of all toast message types and custom examples.',
    },
  },
};

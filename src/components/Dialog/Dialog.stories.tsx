import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { FaTimes, FaInfoCircle, FaList } from 'react-icons/fa';
import Toggle from '../Toggle/Toggle';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './Dialog';
import Button from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A composable dialog component for creating modal windows. Follows shadcn-style composition pattern with separate components for trigger, content, header, title, description, footer, and close button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controlled open state',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Default open state for uncontrolled usage',
    },
    onOpenChange: {
      action: 'open changed',
      description: 'Callback when open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// TOGGLE WITH CROSS BUTTON DEMO
// =============================================================================

export const ToggleWithCrossButton: Story = {
  render: () => {
    const [activeSegment, setActiveSegment] = useState('bars');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Toggle with Cross Button</h3>
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
            >
              Menu Control
            </Toggle>
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
// BASIC DIALOG STORIES - MATCHING THE IMAGE EXACTLY
// =============================================================================

export const BasicDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }}>
          Delete Account
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data, including saved preferences and history.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic dialog with title, description, and action buttons - exactly matching the image design.',
      },
    },
  },
};

export const DialogWithSmallIcon: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }}>
          Update Profile
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '8px' 
          }}>
            <FaInfoCircle style={{ 
              color: '#8B5CF6', 
              fontSize: '20px' 
            }} />
          </div>
          <DialogTitle>Profile Update Required</DialogTitle>
          <DialogDescription>
            Your profile information is incomplete. Please update your contact details and preferences to continue using all features of the application.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Skip</Button>
          <Button variant="primary">Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dialog with a small purple icon above the title - matching the image design.',
      },
    },
  },
};

export const DialogWithLargeIcon: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }}>
          New Feature Available
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader style={{ textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '16px' 
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#8B5CF6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px'
            }}>
              <FaInfoCircle />
            </div>
          </div>
          <DialogTitle>New Feature: Dark Mode</DialogTitle>
          <DialogDescription>
            We've just released dark mode! Switch to a more comfortable viewing experience that's easier on your eyes, especially in low-light environments.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Later</Button>
          <Button variant="primary">Try</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dialog with a large centered purple icon above the title - matching the image design.',
      },
    },
  },
};

export const DialogWithListItems: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }}>
          View Permissions
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Application Permissions</DialogTitle>
          <DialogDescription>
            The following permissions are required for this application to function properly. You can modify these settings at any time.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '0 24px 24px 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px' 
          }}>
            {[
              { id: 1, name: 'Camera Access', desc: 'Take photos and videos' },
              { id: 2, name: 'Location Services', desc: 'Access your location' },
              { id: 3, name: 'Notifications', desc: 'Send push notifications' }
            ].map((item) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '12px 0',
                borderBottom: item.id < 3 ? '1px solid #E6E6E6' : 'none'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#8B5CF6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {item.id}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '14px',
                    color: '#404040',
                    fontWeight: '500'
                  }}>
                    {item.name}
                  </div>
                  <div style={{ 
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '12px',
                    color: '#666666'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary">Deny</Button>
          <Button variant="primary">Allow</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dialog with list items below the description - matching the image design with purple circles.',
      },
    },
  },
};

export const DialogWithSmallIconAndList: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }}>
          Export Data
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '8px' 
          }}>
            <FaList style={{ 
              color: '#8B5CF6', 
              fontSize: '20px' 
            }} />
          </div>
          <DialogTitle>Export Your Data</DialogTitle>
          <DialogDescription>
            Choose which data you'd like to export. You can download your information in various formats for backup or transfer purposes.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '0 24px 24px 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px' 
          }}>
            {[
              { id: 1, name: 'Profile Information', desc: 'Personal details and preferences' },
              { id: 2, name: 'Activity History', desc: 'All your recent activities' },
              { id: 3, name: 'Saved Content', desc: 'Bookmarks and favorites' }
            ].map((item) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '12px 0',
                borderBottom: item.id < 3 ? '1px solid #E6E6E6' : 'none'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#8B5CF6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {item.id}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '14px',
                    color: '#404040',
                    fontWeight: '500'
                  }}>
                    {item.name}
                  </div>
                  <div style={{ 
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontSize: '12px',
                    color: '#666666'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dialog with both a small icon and list items - matching the image design.',
      },
    },
  },
};

// =============================================================================
// DIALOG SIZES
// =============================================================================

export const DialogSizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null);
    
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Dialog key={size} open={openSize === size} onOpenChange={(open) => setOpenSize(open ? size : null)}>
            <DialogTrigger asChild>
              <div style={{
                background: '#000000',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                fontFamily: 'Source Sans 3, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.2s ease'
              }}>
                {size.toUpperCase()} Dialog
              </div>
            </DialogTrigger>
            <DialogContent size={size}>
              <DialogHeader>
                <DialogTitle>{size.toUpperCase()} Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a {size} sized dialog. The content area adjusts based on the size prop. The action buttons are positioned at the bottom of the dialog.
                </DialogDescription>
              </DialogHeader>
              <div style={{ padding: '0 24px', flex: 1 }}>
                <p style={{ margin: '16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                  This is additional content to demonstrate how the dialog content area expands and the footer stays at the bottom.
                </p>
              </div>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dialog in different sizes: sm, md, lg, xl.',
      },
    },
  },
};

// =============================================================================
// CONTROLLED DIALOG
// =============================================================================

export const ControlledDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <div style={{
          background: '#000000',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'all 0.2s ease'
        }} onClick={() => setIsOpen(true)}>
          Open Controlled Dialog
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog is controlled externally. The open state is managed by the parent component. The action buttons are positioned at the bottom.
              </DialogDescription>
            </DialogHeader>
            <div style={{ padding: '0 24px', flex: 1 }}>
              <p style={{ margin: '16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                This demonstrates how the footer stays at the bottom even with additional content.
              </p>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled dialog with external state management.',
      },
    },
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE - MATCHING THE IMAGE LAYOUT
// =============================================================================

export const DialogShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      maxWidth: '1200px',
      padding: '20px'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px'
      }}>
        {/* Basic Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <div style={{ 
              background: 'white', 
              border: '1px solid #E6E6E6', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#000000' }}>Basic dialog title</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: 'auto' }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  border: '2px solid #000000',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 2</button>
                <button style={{
                  background: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 1</button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic dialog title</DialogTitle>
              <DialogDescription>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dialog with Small Icon */}
        <Dialog>
          <DialogTrigger asChild>
            <div style={{ 
              background: 'white', 
              border: '1px solid #E6E6E6', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ color: '#3B82F6', fontSize: '20px', marginBottom: '8px' }}>ℹ️</div>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#000000' }}>Basic dialog title</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: 'auto' }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  border: '2px solid #000000',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 2</button>
                <button style={{
                  background: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 1</button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                marginBottom: '8px' 
              }}>
                <FaInfoCircle style={{ 
                  color: '#8B5CF6', 
                  fontSize: '20px' 
                }} />
              </div>
              <DialogTitle>Basic dialog title</DialogTitle>
              <DialogDescription>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dialog with Large Icon */}
        <Dialog>
          <DialogTrigger asChild>
            <div style={{ 
              background: 'white', 
              border: '1px solid #E6E6E6', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#8B5CF6', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '24px',
                margin: '0 auto 16px auto',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>ℹ️</div>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#000000' }}>Basic dialog title</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: 'auto' }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  border: '2px solid #000000',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 2</button>
                <button style={{
                  background: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 1</button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '16px' 
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#8B5CF6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  <FaInfoCircle />
                </div>
              </div>
              <DialogTitle>Basic dialog title</DialogTitle>
              <DialogDescription>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dialog with List Items */}
        <Dialog>
          <DialogTrigger asChild>
            <div style={{ 
              background: 'white', 
              border: '1px solid #E6E6E6', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#000000' }}>Basic dialog title</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </p>
              <div style={{ marginBottom: '16px' }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: item < 3 ? '1px solid #E6E6E6' : 'none'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#8B5CF6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',

                    }}>
                      A
                    </div>
                    <span style={{ 
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '14px',
                      color: '#404040'
                    }}>List Item</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: 'auto' }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  border: '2px solid #000000',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 2</button>
                <button style={{
                  background: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 1</button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic dialog title</DialogTitle>
              <DialogDescription>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </DialogDescription>
            </DialogHeader>
            <div style={{ padding: '0 24px 24px 24px' }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px' 
              }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: item < 3 ? '1px solid #E6E6E6' : 'none'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#8B5CF6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      A
                    </div>
                    <span style={{ 
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '14px',
                      color: '#404040'
                    }}>
                      List Item
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary">Action 2</Button>
              <Button variant="primary">Action 1</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dialog with Small Icon and List */}
        {/* Dialog with Small Icon and List Items */}
        <Dialog>
          <DialogTrigger asChild>
            <div style={{ 
              background: 'white', 
              border: '1px solid #E6E6E6', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ color: '#D97706', fontSize: '20px', marginBottom: '8px' }}>📋</div>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#000000' }}>Basic dialog title</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </p>
              <div style={{ marginBottom: '16px' }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: item < 3 ? '1px solid #E6E6E6' : 'none'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#8B5CF6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      A
                    </div>
                    <span style={{ 
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '14px',
                      color: '#404040'
                    }}>List Item</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: 'auto' }}>
                <button style={{
                  background: 'white',
                  color: '#000000',
                  border: '2px solid #000000',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 2</button>
                <button style={{
                  background: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>Action 1</button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                marginBottom: '8px' 
              }}>
                <FaList style={{ 
                  color: '#8B5CF6', 
                  fontSize: '20px' 
                }} />
              </div>
              <DialogTitle>Basic dialog title</DialogTitle>
              <DialogDescription>
                A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
              </DialogDescription>
            </DialogHeader>
            <div style={{ padding: '0 24px 24px 24px' }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px' 
              }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: item < 3 ? '1px solid #E6E6E6' : 'none'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#8B5CF6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      A
                    </div>
                    <span style={{ 
                      fontFamily: 'Source Sans 3, sans-serif',
                      fontSize: '14px',
                      color: '#404040'
                    }}>
                      List Item
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Blue badge at bottom center */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <div style={{
          background: '#3B82F6',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          100
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all dialog variants - exactly matching the image layout with blue striped border and badge.',
      },
    },
  },
};

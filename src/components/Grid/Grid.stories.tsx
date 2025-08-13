import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Grid, GridRow, GridCol } from './Grid';
import GridTest from './GridTest';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive grid system based on design specifications with breakpoints for Mobile (4 columns), Tablet (8 columns), and Desktop (12 columns).',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

// Demo content component
const DemoBox = ({ title }: { title: string }) => (
  <div
    style={{
      background: '#4A3FCF',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '16px',
    }}
  >
    {title}
  </div>
);

// Section wrapper for proper spacing
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '32px' }}>
    <h2 style={{ 
      marginBottom: '16px', 
      color: '#000000', 
      fontSize: '18px',
      fontWeight: '600'
    }}>
      {title}
    </h2>
    {children}
  </div>
);

export const BasicGrid: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Basic 2-Column Layout">
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Mobile: 4 cols | Tablet: 4 cols | Desktop: 6 cols" />
            </GridCol>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Mobile: 4 cols | Tablet: 4 cols | Desktop: 6 cols" />
            </GridCol>
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic grid layout with two columns that stack on mobile and tablet, side-by-side on desktop.',
      },
    },
  },
};

export const ResponsiveColumns: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Responsive 3-Column Layout">
        <Grid>
          <GridRow>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <DemoBox title="Mobile: 2 | Tablet: 2 | Desktop: 3" />
            </GridCol>
            <GridCol mobile={2} tabs={3} desktop={4}>
              <DemoBox title="Mobile: 2 | Tablet: 3 | Desktop: 4" />
            </GridCol>
            <GridCol mobile={4} tabs={3} desktop={5}>
              <DemoBox title="Mobile: 4 | Tablet: 3 | Desktop: 5" />
            </GridCol>
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three columns with different responsive behaviors across breakpoints.',
      },
    },
  },
};

export const TwelveColumnGrid: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Full 12-Column Grid (Desktop)">
        <Grid>
          <GridRow>
            {Array.from({ length: 12 }, (_, i) => (
              <GridCol key={i} mobile={1} tabs={1} desktop={1}>
                <DemoBox title={`${i + 1}`} />
              </GridCol>
            ))}
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full 12-column grid demonstrating all available columns on desktop.',
      },
    },
  },
};

export const MixedLayout: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Complex Layout">
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={6} desktop={8}>
              <DemoBox title="Main Content Area" />
            </GridCol>
            <GridCol mobile={4} tabs={2} desktop={4}>
              <DemoBox title="Sidebar" />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <DemoBox title="Card 1" />
            </GridCol>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <DemoBox title="Card 2" />
            </GridCol>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Wide Card" />
            </GridCol>
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex layout with main content area, sidebar, and card grid.',
      },
    },
  },
};

export const ImageLayout: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Layout from Image">
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={6} desktop={8}>
              <DemoBox title="Main Content Area" />
            </GridCol>
            <GridCol mobile={4} tabs={2} desktop={4}>
              <DemoBox title="Sidebar" />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <DemoBox title="Card 1" />
            </GridCol>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <DemoBox title="Card 2" />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Wide Card" />
            </GridCol>
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Layout matching the provided image with proper spacing between rows.',
      },
    },
  },
};

export const BreakpointDemo: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Section title="Grid Specifications">
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={8} desktop={12}>
              <div style={{ 
                background: '#F9F9F9', 
                padding: '20px', 
                borderRadius: '8px',
                border: '2px solid #E6E6E6'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#000000' }}>Responsive Grid Demo</h3>
                <p style={{ margin: '0', color: '#404040' }}>
                  <strong>Mobile (≤480px):</strong> 4 columns, 20px gutters, 20px margins<br />
                  <strong>Tablet (481px-768px):</strong> 8 columns, 20px gutters, 50px margins<br />
                  <strong>Desktop (≥769px):</strong> 12 columns, 20px gutters, 50px margins
                </p>
              </div>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Mobile: Full Width | Tablet: Half | Desktop: Half" />
            </GridCol>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <DemoBox title="Mobile: Full Width | Tablet: Half | Desktop: Half" />
            </GridCol>
          </GridRow>
        </Grid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the grid system specifications with breakpoint information.',
      },
    },
  },
};

export const CompleteTest: Story = {
  render: () => <GridTest />,
  parameters: {
    docs: {
      description: {
        story: 'Complete test of the grid system with all breakpoints and layout examples.',
      },
    },
  },
};



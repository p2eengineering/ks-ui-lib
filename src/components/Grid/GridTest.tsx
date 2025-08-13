import React from 'react';
import { Grid, GridRow, GridCol } from './Grid';

const GridTest: React.FC = () => {
  const demoBoxStyle = {
  background: '#4A3FCF',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center' as const,
  minHeight: '80px',
  display: 'flex' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  fontWeight: 'bold' as const,
  fontSize: '14px'
};

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#000000' }}>
        Grid System Test
      </h1>
      
      <div style={{ 
        background: '#F9F9F9', 
        padding: '15px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #E6E6E6'
      }}>
        <h3>Grid Specifications:</h3>
        <p><strong>Mobile (≤480px):</strong> 4 columns, 20px gutters, 20px margins</p>
        <p><strong>Tablet (481px-768px):</strong> 8 columns, 20px gutters, 50px margins</p>
        <p><strong>Desktop (≥769px):</strong> 12 columns, 20px gutters, 50px margins</p>
      </div>

      {/* Test 1: Basic 2-column layout */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          marginBottom: '16px', 
          color: '#000000', 
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Test 1: Basic 2-Column Layout
        </h2>
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <div style={demoBoxStyle}>
                Mobile: 4 cols | Tablet: 4 cols | Desktop: 6 cols
              </div>
            </GridCol>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <div style={demoBoxStyle}>
                Mobile: 4 cols | Tablet: 4 cols | Desktop: 6 cols
              </div>
            </GridCol>
          </GridRow>
        </Grid>
      </div>

      {/* Test 2: Responsive 3-column layout */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          marginBottom: '16px', 
          color: '#000000', 
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Test 2: Responsive 3-Column Layout
        </h2>
        <Grid>
          <GridRow>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <div style={demoBoxStyle}>
                Mobile: 2 | Tablet: 2 | Desktop: 3
              </div>
            </GridCol>
            <GridCol mobile={2} tabs={3} desktop={4}>
              <div style={demoBoxStyle}>
                Mobile: 2 | Tablet: 3 | Desktop: 4
              </div>
            </GridCol>
            <GridCol mobile={4} tabs={3} desktop={5}>
              <div style={demoBoxStyle}>
                Mobile: 4 | Tablet: 3 | Desktop: 5
              </div>
            </GridCol>
          </GridRow>
        </Grid>
      </div>

      {/* Test 3: Full 12-column grid */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          marginBottom: '16px', 
          color: '#000000', 
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Test 3: Full 12-Column Grid (Desktop)
        </h2>
        <Grid>
          <GridRow>
            {Array.from({ length: 12 }, (_, i) => (
              <GridCol key={i} mobile={1} tabs={1} desktop={1}>
                <div style={{
                  ...demoBoxStyle,
                  padding: '10px',
                  minHeight: '60px',
                  fontSize: '12px'
                }}>
                  {i + 1}
                </div>
              </GridCol>
            ))}
          </GridRow>
        </Grid>
      </div>

      {/* Test 4: Complex layout */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          marginBottom: '16px', 
          color: '#000000', 
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Test 4: Complex Layout
        </h2>
        <Grid>
          <GridRow>
            <GridCol mobile={4} tabs={6} desktop={8}>
              <div style={demoBoxStyle}>
                Main Content Area
              </div>
            </GridCol>
            <GridCol mobile={4} tabs={2} desktop={4}>
              <div style={demoBoxStyle}>
                Sidebar
              </div>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <div style={demoBoxStyle}>
                Card 1
              </div>
            </GridCol>
            <GridCol mobile={2} tabs={2} desktop={3}>
              <div style={demoBoxStyle}>
                Card 2
              </div>
            </GridCol>
            <GridCol mobile={4} tabs={4} desktop={6}>
              <div style={demoBoxStyle}>
                Wide Card
              </div>
            </GridCol>
          </GridRow>
        </Grid>
      </div>
    </div>
  );
};

export default GridTest;

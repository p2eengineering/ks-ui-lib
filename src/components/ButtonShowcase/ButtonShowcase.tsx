import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import './ButtonShowcase.scss';

const ButtonShowcase: React.FC = () => {
  const [activeState, setActiveState] = useState<'normal' | 'hover' | 'disabled'>('normal');

  const sizes = ['small', 'medium', 'large', 'xl', '2xl', '3xl'] as const;
  const variants = ['primary', 'secondary', 'text'] as const;
  const iconTypes = ['none', 'download', 'arrow'] as const;

  const renderButtonGrid = (variant: 'primary' | 'secondary' | 'text', showIcon: boolean = false) => {
    return (
      <div className="button-grid">
        <div className="button-grid__header">
          <h4 className="button-grid__title">{variant.charAt(0).toUpperCase() + variant.slice(1)} Buttons</h4>
          {showIcon && <span className="button-grid__subtitle">With Icons</span>}
        </div>
        
        <div className="button-grid__content">
          <div className="button-grid__labels">
            <div className="button-grid__label">Normal</div>
            <div className="button-grid__label">Hover</div>
            <div className="button-grid__label">Disabled</div>
          </div>
          
          <div className="button-grid__buttons">
            {sizes.map((size) => (
              <div key={size} className="button-grid__row">
                <div className="button-grid__size-label">{size.toUpperCase()}</div>
                
                {/* Normal State */}
                <div className="button-grid__cell">
                  <Button
                    variant={variant}
                    size={size}
                    state="normal"
                    icon={showIcon ? 'download' : 'none'}
                  >
                    Button
                  </Button>
                </div>
                
                {/* Hover State */}
                <div className="button-grid__cell">
                  <Button
                    variant={variant}
                    size={size}
                    state="hover"
                    icon={showIcon ? 'download' : 'none'}
                  >
                    Button
                  </Button>
                </div>
                
                {/* Disabled State */}
                <div className="button-grid__cell">
                  <Button
                    variant={variant}
                    size={size}
                    state="disabled"
                    icon={showIcon ? 'download' : 'none'}
                  >
                    Button
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="button-showcase">
      <div className="button-showcase__header">
        <h1>Button Component Library</h1>
        <p>
          A comprehensive button system with multiple variants, sizes, and states. 
          Buttons are visual components used to trigger an action or change the state of an interface element.
        </p>
      </div>

      <div className="button-showcase__controls">
        <div className="state-toggle">
          <label>State Preview:</label>
          <select 
            value={activeState} 
            onChange={(e) => setActiveState(e.target.value as any)}
          >
            <option value="normal">Normal</option>
            <option value="hover">Hover</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
      </div>

      <div className="button-showcase__content">
        {/* Primary Buttons */}
        <Card className="mb-4">
          <Card.Body>
            {renderButtonGrid('primary', false)}
          </Card.Body>
        </Card>

        {/* Primary Buttons with Icons */}
        <Card className="mb-4">
          <Card.Body>
            {renderButtonGrid('primary', true)}
          </Card.Body>
        </Card>

        {/* Secondary Buttons */}
        <Card className="mb-4">
          <Card.Body>
            {renderButtonGrid('secondary', false)}
          </Card.Body>
        </Card>

        {/* Secondary Buttons with Icons */}
        <Card className="mb-4">
          <Card.Body>
            {renderButtonGrid('secondary', true)}
          </Card.Body>
        </Card>

        {/* Text Buttons */}
        <Card className="mb-4">
          <Card.Body>
            <div className="text-button-showcase">
              <h4>Text Buttons</h4>
              <Row>
                <Col md={6}>
                  <div className="text-button-section">
                    <h5>Normal State</h5>
                    <div className="text-button-examples">
                      <Button variant="text" size="medium">Text Button</Button>
                      <Button variant="text" size="medium" icon="arrow">Text Button →</Button>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-button-section">
                    <h5>Hover State</h5>
                    <div className="text-button-examples">
                      <Button variant="text" size="medium" state="hover">Text Button</Button>
                      <Button variant="text" size="medium" state="hover" icon="arrow">Text Button →</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        {/* Usage Examples */}
        <Card>
          <Card.Body>
            <h4>Usage Examples</h4>
            <div className="usage-examples">
              <Row>
                <Col md={6}>
                  <h5>Form Actions</h5>
                  <div className="example-buttons">
                    <Button variant="primary" size="medium">Submit</Button>
                    <Button variant="secondary" size="medium">Cancel</Button>
                  </div>
                </Col>
                <Col md={6}>
                  <h5>Download Actions</h5>
                  <div className="example-buttons">
                    <Button variant="primary" size="large" icon="download">Download</Button>
                    <Button variant="text" size="medium" icon="arrow">Learn More</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ButtonShowcase;

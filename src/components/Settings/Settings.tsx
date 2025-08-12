import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { FaCog, FaBell, FaShieldAlt, FaPalette } from 'react-icons/fa';
import './Settings.scss';

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <div className="settings-header mb-4">
        <h2>Settings</h2>
        <p className="text-muted">Global configuration and preferences</p>
      </div>

      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaCog className="me-2" />
                General Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Default Network</Form.Label>
                  <Form.Select>
                    <option value="ethereum">Ethereum</option>
                    <option value="polygon">Polygon</option>
                    <option value="bsc">Binance Smart Chain</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Default Gas Token</Form.Label>
                  <Form.Select>
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                    <option value="DAI">DAI</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Session Timeout (minutes)</Form.Label>
                  <Form.Control type="number" defaultValue={30} />
                </Form.Group>

                <Button variant="primary">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaBell className="me-2" />
                Notifications
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="email-notifications"
                    label="Email Notifications"
                    defaultChecked
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="push-notifications"
                    label="Push Notifications"
                    defaultChecked
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="transaction-alerts"
                    label="Transaction Alerts"
                    defaultChecked
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="security-alerts"
                    label="Security Alerts"
                    defaultChecked
                  />
                </Form.Group>

                <Button variant="primary">Save Preferences</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaShieldAlt className="me-2" />
                Security Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="two-factor-auth"
                    label="Two-Factor Authentication"
                    defaultChecked
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="biometric-auth"
                    label="Biometric Authentication"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Max Transaction Amount (USD)</Form.Label>
                  <Form.Control type="number" defaultValue={10000} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Whitelist Addresses</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter addresses (one per line)" />
                </Form.Group>

                <Button variant="primary">Update Security</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaPalette className="me-2" />
                Appearance
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Currency</Form.Label>
                  <Form.Select>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary">Apply Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;

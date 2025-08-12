import React, { useState } from 'react';
import { Form, Row, Col, Card, Alert } from 'react-bootstrap';
import { FaShieldAlt, FaKey, FaGlobe, FaCog } from 'react-icons/fa';
import Button from '../Button/Button';
import CustomInputField from '../ui/CustomInputField';
import CustomDropdown from '../ui/CustomDropdown';
import Toggle from '../ui/Toggle';
import { CustodialWalletConfig as CustodialConfig } from '../../types/wallet';

const CustodialWalletConfig: React.FC = () => {
  const [config, setConfig] = useState<CustodialConfig>({
    provider: 'fireblocks',
    apiKey: '',
    apiSecret: '',
    webhookUrl: '',
    gasless: {
      enabled: false,
      sponsorAddress: '',
      relayerUrl: '',
      maxGasLimit: 300000,
      gasToken: 'USDC'
    },
    security: {
      twoFactorAuth: true,
      biometricAuth: false,
      sessionTimeout: 3600,
      maxTransactionAmount: 10000,
      whitelistAddresses: []
    }
  });

  const [isValid, setIsValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const providers = [
    { value: 'fireblocks', label: 'Fireblocks', icon: FaShieldAlt },
    { value: 'coinbase', label: 'Coinbase Custody', icon: FaShieldAlt },
    { value: 'bitgo', label: 'BitGo', icon: FaShieldAlt },
    { value: 'custom', label: 'Custom Provider', icon: FaShieldAlt }
  ];

  const gasTokens = [
    { value: 'USDC', label: 'USDC', icon: FaKey },
    { value: 'USDT', label: 'USDT', icon: FaKey },
    { value: 'DAI', label: 'DAI', icon: FaKey },
    { value: 'ETH', label: 'ETH', icon: FaKey }
  ];

  const handleInputChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGaslessChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      gasless: {
        ...prev.gasless,
        [field]: value
      }
    }));
  };

  const handleSecurityChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [field]: value
      }
    }));
  };

  const validateConfig = () => {
    const isValid = Boolean(config.apiKey && config.apiSecret && config.provider);
    setIsValid(isValid);
    return isValid;
  };

  const handleSave = () => {
    if (validateConfig()) {
      setShowAlert(true);
      // Here you would typically save to backend or local storage
      console.log('Saving custodial wallet config:', config);
    }
  };

  const handleTestConnection = () => {
    if (validateConfig()) {
      // Here you would test the connection to the custodial provider
      console.log('Testing connection to:', config.provider);
    }
  };

  return (
    <div className="custodial-wallet-config">
      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Configuration saved successfully!
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaShieldAlt className="me-2" />
                Provider Configuration
              </h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Provider</Form.Label>
                <CustomDropdown
                  label=""
                  items={providers}
                  onChange={(item: any) => handleInputChange('provider', item.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>API Key</Form.Label>
                <CustomInputField
                  type="password"
                  placeholder="Enter your API key"
                  value={config.apiKey}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('apiKey', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>API Secret</Form.Label>
                <CustomInputField
                  type="password"
                  placeholder="Enter your API secret"
                  value={config.apiSecret}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('apiSecret', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Webhook URL (Optional)</Form.Label>
                <CustomInputField
                  type="url"
                  placeholder="https://your-domain.com/webhook"
                  value={config.webhookUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('webhookUrl', e.target.value)}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaGlobe className="me-2" />
                Gasless Transactions
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>Enable Gasless Transactions</span>
                <Toggle id="gasless-toggle" />
              </div>

              {config.gasless.enabled && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Sponsor Address</Form.Label>
                    <CustomInputField
                      placeholder="0x..."
                      value={config.gasless.sponsorAddress}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleGaslessChange('sponsorAddress', e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Relayer URL</Form.Label>
                    <CustomInputField
                      placeholder="https://relayer.example.com"
                      value={config.gasless.relayerUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleGaslessChange('relayerUrl', e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Max Gas Limit</Form.Label>
                    <CustomInputField
                      type="number"
                      placeholder="300000"
                      value={config.gasless.maxGasLimit}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleGaslessChange('maxGasLimit', parseInt(e.target.value))}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Gas Token</Form.Label>
                    <CustomDropdown
                      label=""
                      items={gasTokens}
                      onChange={(item: any) => handleGaslessChange('gasToken', item.value)}
                    />
                  </Form.Group>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaCog className="me-2" />
                Security Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span>Two-Factor Authentication</span>
                    <Toggle id="2fa-toggle" />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span>Biometric Authentication</span>
                    <Toggle id="biometric-toggle" />
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>Session Timeout (seconds)</Form.Label>
                    <CustomInputField
                      type="number"
                      placeholder="3600"
                      value={config.security.sessionTimeout}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Max Transaction Amount (USD)</Form.Label>
                    <CustomInputField
                      type="number"
                      placeholder="10000"
                      value={config.security.maxTransactionAmount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSecurityChange('maxTransactionAmount', parseFloat(e.target.value))}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Whitelist Addresses</Form.Label>
                    <CustomInputField
                      placeholder="0x..., 0x... (comma separated)"
                      value={config.security.whitelistAddresses.join(', ')}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSecurityChange('whitelistAddresses', e.target.value.split(',').map((addr: string) => addr.trim()))}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex gap-3">
            <Button
              variant="secondary"
              size="medium"
              onClick={handleTestConnection}
              disabled={!isValid}
            >
              Test Connection
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={handleSave}
              disabled={!isValid}
            >
              Save Configuration
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustodialWalletConfig;

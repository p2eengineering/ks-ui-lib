import React, { useState } from 'react';
import { Form, Row, Col, Card, Alert, Button as BootstrapButton, Badge } from 'react-bootstrap';
import { FaUsers, FaKey, FaNetworkWired, FaGasPump, FaCog, FaPlus, FaTrash } from 'react-icons/fa';
import Button from '../Button/Button';
import CustomInputField from '../ui/CustomInputField';
import CustomDropdown from '../ui/CustomDropdown';
import Toggle from '../ui/Toggle';
import { MPCWalletConfig as MPCConfig } from '../../types/wallet';

const MPCWalletConfig: React.FC = () => {
  const [config, setConfig] = useState<MPCConfig>({
    threshold: 2,
    totalParties: 3,
    partyIds: ['party1', 'party2', 'party3'],
    network: 'ethereum',
    gasless: {
      enabled: false,
      sponsorAddress: '',
      relayerUrl: '',
      maxGasLimit: 300000,
      gasToken: 'USDC'
    },
    transaction: {
      gasLimit: 21000,
      gasPrice: '20',
      maxFeePerGas: '30',
      maxPriorityFeePerGas: '2',
      nonce: 0
    },
    security: {
      twoFactorAuth: true,
      biometricAuth: true,
      sessionTimeout: 3600,
      maxTransactionAmount: 10000,
      whitelistAddresses: []
    }
  });

  const [isValid, setIsValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [newPartyId, setNewPartyId] = useState('');

  const networks = [
    { value: 'ethereum', label: 'Ethereum Mainnet', icon: FaNetworkWired },
    { value: 'polygon', label: 'Polygon', icon: FaNetworkWired },
    { value: 'bsc', label: 'Binance Smart Chain', icon: FaNetworkWired },
    { value: 'arbitrum', label: 'Arbitrum', icon: FaNetworkWired },
    { value: 'optimism', label: 'Optimism', icon: FaNetworkWired }
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

  const handleTransactionChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      transaction: {
        ...prev.transaction,
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

  const addParty = () => {
    if (newPartyId.trim() && !config.partyIds.includes(newPartyId.trim())) {
      setConfig(prev => ({
        ...prev,
        partyIds: [...prev.partyIds, newPartyId.trim()],
        totalParties: prev.totalParties + 1
      }));
      setNewPartyId('');
    }
  };

  const removeParty = (partyId: string) => {
    if (config.partyIds.length > config.threshold) {
      setConfig(prev => ({
        ...prev,
        partyIds: prev.partyIds.filter(id => id !== partyId),
        totalParties: prev.totalParties - 1
      }));
    }
  };

  const updateThreshold = (newThreshold: number) => {
    if (newThreshold <= config.totalParties && newThreshold > 0) {
      setConfig(prev => ({
        ...prev,
        threshold: newThreshold
      }));
    }
  };

  const validateConfig = () => {
    const isValid = Boolean(config.partyIds.length >= config.threshold && 
                   config.network && 
                   config.threshold > 0);
    setIsValid(isValid);
    return isValid;
  };

  const handleSave = () => {
    if (validateConfig()) {
      setShowAlert(true);
      console.log('Saving MPC wallet config:', config);
    }
  };

  const handleTestConnection = () => {
    if (validateConfig()) {
      console.log('Testing MPC wallet connection on:', config.network);
    }
  };

  const generateKeyShares = () => {
    console.log('Generating MPC key shares for parties:', config.partyIds);
  };

  return (
    <div className="mpc-wallet-config">
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
                <FaUsers className="me-2" />
                MPC Configuration
              </h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Network</Form.Label>
                <CustomDropdown
                  label=""
                  items={networks}
                  onChange={(item: any) => handleInputChange('network', item.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Threshold (t)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="2"
                  min={1}
                  max={config.totalParties}
                  value={config.threshold}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateThreshold(parseInt(e.target.value))}
                />
                <Form.Text className="text-muted">
                  Minimum number of parties required to sign transactions
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Total Parties (n)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="3"
                  min={config.threshold}
                  value={config.totalParties}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('totalParties', parseInt(e.target.value))}
                />
                <Form.Text className="text-muted">
                  Total number of parties in the MPC setup
                </Form.Text>
              </Form.Group>

              <div className="mb-3">
                <Form.Label>Party IDs</Form.Label>
                <div className="d-flex gap-2 mb-2">
                  <CustomInputField
                    placeholder="Enter party ID"
                    value={newPartyId}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPartyId(e.target.value)}
                  />
                  <BootstrapButton
                    variant="outline-primary"
                    size="sm"
                    onClick={addParty}
                    disabled={!newPartyId.trim() || config.partyIds.includes(newPartyId.trim())}
                  >
                    <FaPlus />
                  </BootstrapButton>
                </div>
                <div className="party-ids-container">
                  {config.partyIds.map((partyId, index) => (
                    <Badge
                      key={partyId}
                      bg="primary"
                      className="me-2 mb-2 d-inline-flex align-items-center"
                    >
                      {partyId}
                      <BootstrapButton
                        variant="link"
                        size="sm"
                        className="text-white p-0 ms-2"
                        onClick={() => removeParty(partyId)}
                        disabled={config.partyIds.length <= config.threshold}
                      >
                        <FaTrash size={12} />
                      </BootstrapButton>
                    </Badge>
                  ))}
                </div>
                <Form.Text className="text-muted">
                  Current setup: {config.threshold}-of-{config.totalParties} threshold scheme
                </Form.Text>
              </div>

              <BootstrapButton
                variant="outline-info"
                onClick={generateKeyShares}
                disabled={!isValid}
                className="w-100"
              >
                Generate Key Shares
              </BootstrapButton>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaGasPump className="me-2" />
                Transaction Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Gas Limit</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="21000"
                  value={config.transaction.gasLimit}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTransactionChange('gasLimit', parseInt(e.target.value))}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gas Price (Gwei)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="20"
                  value={config.transaction.gasPrice}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTransactionChange('gasPrice', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Max Fee Per Gas (Gwei)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="30"
                  value={config.transaction.maxFeePerGas}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTransactionChange('maxFeePerGas', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Max Priority Fee Per Gas (Gwei)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="2"
                  value={config.transaction.maxPriorityFeePerGas}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTransactionChange('maxPriorityFeePerGas', e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nonce</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="0"
                  value={config.transaction.nonce}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTransactionChange('nonce', parseInt(e.target.value))}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaKey className="me-2" />
                Gasless Transactions
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>Enable Gasless Transactions</span>
                <Toggle id="gasless-toggle-mpc" />
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

        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">
                <FaCog className="me-2" />
                Security Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>Two-Factor Authentication</span>
                <Toggle id="2fa-toggle-mpc" />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>Biometric Authentication</span>
                <Toggle id="biometric-toggle-mpc" />
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

export default MPCWalletConfig;

import React, { useState } from 'react';
import { Form, Row, Col, Card, Alert, Button as BootstrapButton } from 'react-bootstrap';
import { FaWallet, FaKey, FaNetworkWired, FaGasPump, FaCog } from 'react-icons/fa';
import Button from '../Button/Button';
import CustomInputField from '../ui/CustomInputField';
import CustomDropdown from '../ui/CustomDropdown';
import Toggle from '../ui/Toggle';
import { SelfCustodialWalletConfig as SelfCustodialConfig } from '../../types/wallet';

const SelfCustodialWalletConfig: React.FC = () => {
  const [config, setConfig] = useState<SelfCustodialConfig>({
    privateKey: '',
    mnemonic: '',
    derivationPath: "m/44'/60'/0'/0/0",
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
      twoFactorAuth: false,
      biometricAuth: true,
      sessionTimeout: 1800,
      maxTransactionAmount: 5000,
      whitelistAddresses: []
    }
  });

  const [keyType, setKeyType] = useState<'privateKey' | 'mnemonic'>('privateKey');
  const [isValid, setIsValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);

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

  const derivationPaths = [
    { value: "m/44'/60'/0'/0/0", label: "Ethereum Standard", icon: FaKey },
    { value: "m/44'/60'/0'/0", label: "Ethereum Legacy", icon: FaKey },
    { value: "m/44'/60'/0'", label: "Custom Path", icon: FaKey }
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

  const generateMnemonic = () => {
    // In a real app, you would use a proper mnemonic generation library
    const words = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
    setConfig(prev => ({
      ...prev,
      mnemonic: words
    }));
  };

  const generatePrivateKey = () => {
    // In a real app, you would use a proper private key generation library
    const privateKey = '0x' + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setConfig(prev => ({
      ...prev,
      privateKey: privateKey
    }));
  };

  const validateConfig = () => {
    const hasKey = keyType === 'privateKey' ? config.privateKey : config.mnemonic;
    const isValid = Boolean(hasKey && config.network && config.derivationPath);
    setIsValid(isValid);
    return isValid;
  };

  const handleSave = () => {
    if (validateConfig()) {
      setShowAlert(true);
      console.log('Saving self-custodial wallet config:', config);
    }
  };

  const handleTestConnection = () => {
    if (validateConfig()) {
      console.log('Testing wallet connection on:', config.network);
    }
  };

  return (
    <div className="self-custodial-wallet-config">
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
                <FaWallet className="me-2" />
                Wallet Setup
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
                <Form.Label>Key Type</Form.Label>
                <div className="d-flex gap-2 mb-3">
                  <BootstrapButton
                    variant={keyType === 'privateKey' ? 'primary' : 'outline-primary'}
                    size="sm"
                    onClick={() => setKeyType('privateKey')}
                  >
                    Private Key
                  </BootstrapButton>
                  <BootstrapButton
                    variant={keyType === 'mnemonic' ? 'primary' : 'outline-primary'}
                    size="sm"
                    onClick={() => setKeyType('mnemonic')}
                  >
                    Mnemonic Phrase
                  </BootstrapButton>
                </div>
              </Form.Group>

              {keyType === 'privateKey' ? (
                <Form.Group className="mb-3">
                  <Form.Label>Private Key</Form.Label>
                  <div className="position-relative">
                    <CustomInputField
                      type={showPrivateKey ? 'text' : 'password'}
                      placeholder="Enter your private key"
                      value={config.privateKey}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('privateKey', e.target.value)}
                    />
                    <BootstrapButton
                      variant="outline-secondary"
                      size="sm"
                      className="position-absolute end-0 top-0 h-100"
                      onClick={() => setShowPrivateKey(!showPrivateKey)}
                    >
                      {showPrivateKey ? 'Hide' : 'Show'}
                    </BootstrapButton>
                  </div>
                  <BootstrapButton
                    variant="outline-info"
                    size="sm"
                    className="mt-2"
                    onClick={generatePrivateKey}
                  >
                    Generate New Private Key
                  </BootstrapButton>
                </Form.Group>
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Mnemonic Phrase</Form.Label>
                  <div className="position-relative">
                    <CustomInputField
                      type={showMnemonic ? 'text' : 'password'}
                      placeholder="Enter your mnemonic phrase"
                      value={config.mnemonic}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('mnemonic', e.target.value)}
                    />
                    <BootstrapButton
                      variant="outline-secondary"
                      size="sm"
                      className="position-absolute end-0 top-0 h-100"
                      onClick={() => setShowMnemonic(!showMnemonic)}
                    >
                      {showMnemonic ? 'Hide' : 'Show'}
                    </BootstrapButton>
                  </div>
                  <BootstrapButton
                    variant="outline-info"
                    size="sm"
                    className="mt-2"
                    onClick={generateMnemonic}
                  >
                    Generate New Mnemonic
                  </BootstrapButton>
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Derivation Path</Form.Label>
                <CustomDropdown
                  label=""
                  items={derivationPaths}
                  onChange={(item: any) => handleInputChange('derivationPath', item.value)}
                />
              </Form.Group>
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
                <Toggle id="gasless-toggle-self" />
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
                <Toggle id="2fa-toggle-self" />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>Biometric Authentication</span>
                <Toggle id="biometric-toggle-self" />
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Session Timeout (seconds)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="1800"
                  value={config.security.sessionTimeout}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Max Transaction Amount (USD)</Form.Label>
                <CustomInputField
                  type="number"
                  placeholder="5000"
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

export default SelfCustodialWalletConfig;

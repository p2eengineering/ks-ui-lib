# Wallet Configuration Web App

A comprehensive React TypeScript application for configuring different types of cryptocurrency wallets with advanced settings including gasless transactions and security features.

## Features

### 🏦 Wallet Types Supported

1. **Custodial Wallet**
   - Third-party managed wallet with enhanced security
   - Support for major providers (Fireblocks, Coinbase Custody, BitGo)
   - API key management and webhook configuration
   - Regulatory compliance features

2. **Self-Custodial Wallet**
   - Full control over private keys
   - Support for private key and mnemonic phrase input
   - Multiple network support (Ethereum, Polygon, BSC, Arbitrum, Optimism)
   - Advanced transaction settings

3. **MPC Wallet (Multi-Party Computation)**
   - Distributed security with threshold signatures
   - Configurable threshold (t-of-n) schemes
   - Party management and key share generation
   - Enhanced protection against single points of failure

### ⚡ Gasless Transactions

All wallet types support gasless transaction configuration:
- Sponsor address configuration
- Relayer URL setup
- Gas limit management
- Multiple gas token options (USDC, USDT, DAI, ETH)

### 🔒 Security Features

- Two-factor authentication (2FA)
- Biometric authentication
- Session timeout configuration
- Transaction amount limits
- Address whitelisting
- Advanced security settings per wallet type

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wallet-configuration-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── wallet-configs/
│       ├── CustodialWalletConfig.tsx
│       ├── SelfCustodialWalletConfig.tsx
│       └── MPCWalletConfig.tsx
├── types/
│   └── wallet.ts
├── App.tsx
├── App.scss
├── index.tsx
└── index.scss
```

## Usage

### Custodial Wallet Configuration

1. Select "Custodial Wallet" from the sidebar
2. Choose your preferred provider (Fireblocks, Coinbase Custody, BitGo, or Custom)
3. Enter your API credentials
4. Configure gasless transaction settings (optional)
5. Set up security parameters
6. Test connection and save configuration

### Self-Custodial Wallet Configuration

1. Select "Self-Custodial Wallet" from the sidebar
2. Choose your network (Ethereum, Polygon, BSC, etc.)
3. Select key type (Private Key or Mnemonic Phrase)
4. Enter your private key or mnemonic phrase
5. Configure transaction settings (gas limit, gas price, etc.)
6. Set up gasless transactions and security features
7. Test connection and save configuration

### MPC Wallet Configuration

1. Select "MPC Wallet" from the sidebar
2. Configure threshold and total parties (t-of-n scheme)
3. Add party IDs for the MPC setup
4. Set up transaction parameters
5. Configure gasless transactions and security
6. Generate key shares for all parties
7. Test connection and save configuration

## Custom Components Used

The application utilizes custom components from the `@components/` directory:

- **Button**: Custom styled buttons with various states
- **CustomInputField**: Enhanced input fields with prefix icons
- **CustomDropdown**: Dropdown components with icons and labels
- **Toggle**: Toggle switches for boolean settings
- **CustomModal**: Modal dialogs for additional interactions

## Configuration Storage

Currently, configurations are logged to the console. In a production environment, you would want to:

1. Implement secure storage (encrypted local storage or backend API)
2. Add proper validation and error handling
3. Implement real wallet connection testing
4. Add proper key generation libraries (bip39, crypto-js, etc.)

## Security Considerations

⚠️ **Important Security Notes:**

- This is a demonstration application
- Never store real private keys or mnemonic phrases in plain text
- Implement proper encryption for sensitive data
- Use secure key generation libraries in production
- Add proper input validation and sanitization
- Implement rate limiting and other security measures

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety and development experience
- **React Bootstrap** - UI components and styling
- **React Icons** - Icon library
- **Sass** - CSS preprocessing
- **Web3.js/Ethers.js** - Blockchain interaction (ready for integration)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

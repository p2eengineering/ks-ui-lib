export interface GaslessConfig {
  enabled: boolean;
  sponsorAddress?: string;
  relayerUrl?: string;
  maxGasLimit?: number;
  gasToken?: string;
}

export interface TransactionConfig {
  gasLimit: number;
  gasPrice: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce?: number;
}

export interface SecurityConfig {
  twoFactorAuth: boolean;
  biometricAuth: boolean;
  sessionTimeout: number;
  maxTransactionAmount: number;
  whitelistAddresses: string[];
}

export interface CustodialWalletConfig {
  provider: string;
  apiKey: string;
  apiSecret: string;
  webhookUrl?: string;
  gasless: GaslessConfig;
  security: SecurityConfig;
}

export interface SelfCustodialWalletConfig {
  privateKey?: string;
  mnemonic?: string;
  derivationPath: string;
  network: string;
  gasless: GaslessConfig;
  transaction: TransactionConfig;
  security: SecurityConfig;
}

export interface MPCWalletConfig {
  threshold: number;
  totalParties: number;
  partyIds: string[];
  network: string;
  gasless: GaslessConfig;
  transaction: TransactionConfig;
  security: SecurityConfig;
}

export interface WalletConfigState {
  custodial: CustodialWalletConfig;
  selfCustodial: SelfCustodialWalletConfig;
  mpc: MPCWalletConfig;
}

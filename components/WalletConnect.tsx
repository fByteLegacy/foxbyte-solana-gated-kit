import { FC, useMemo } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
  GlowWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles for the wallet adapter
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnect: FC = () => {
  // Network configuration
  const network = (process.env.NEXT_PUBLIC_NETWORK as WalletAdapterNetwork) || WalletAdapterNetwork.Mainnet;
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(network);

  // Configure wallets
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new BackpackWalletAdapter(),
    new GlowWalletAdapter(),
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletMultiButton className="btn btn-primary" />
      </WalletProvider>
    </ConnectionProvider>
  );
};

// Component that only shows the connect button
export const WalletConnectButton: FC = () => {
  return <WalletMultiButton className="btn btn-primary" />;
};

export default WalletConnect; 
import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Layout from '../components/Layout';
import { useGatedAccess } from '../utils/gating';
import { useRouter } from 'next/router';
import { paths } from '../config/gatingConfig';

const Home: FC = () => {
  const { connected } = useWallet();
  const { hasGatedAccess, isLoading } = useGatedAccess(false);
  const router = useRouter();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="text-foxbyte-pink">FoxByte</span> Token Gated Kit
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Access exclusive utilities for Solana NFT and token holders
          </p>
          
          <div className="mt-10">
            {!connected ? (
              <div className="card max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4">Connect your wallet</h2>
                <p className="mb-6">
                  Connect your Solana wallet to check if you have access to our exclusive tools.
                </p>
                <div className="flex justify-center">
                  {/* Wallet adapter button is rendered by the Layout component */}
                </div>
              </div>
            ) : isLoading ? (
              <div className="card max-w-lg mx-auto">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foxbyte-pink mx-auto"></div>
                  <p className="mt-4">Checking access...</p>
                </div>
              </div>
            ) : hasGatedAccess ? (
              <div className="card max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-solana-green">Access Granted!</h2>
                <p className="mb-6">
                  You have access to the exclusive tools for token holders.
                </p>
                <button
                  onClick={() => router.push(paths.dashboard)}
                  className="btn btn-primary w-full"
                >
                  Go to Dashboard
                </button>
              </div>
            ) : (
              <div className="card max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Access Denied</h2>
                <p className="mb-6">
                  You don't have the required NFT or token to access the exclusive tools.
                </p>
                <a
                  href="https://magiceden.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary block text-center"
                >
                  Get a Token
                </a>
              </div>
            )}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Airdrop Tracker</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Track upcoming and historical airdrops for token holders.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">File Downloads</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Access exclusive files only available to our community.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get insights on token performance and community metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 
import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Layout from '../components/Layout';
import GateCheck from '../components/GateCheck';
import { paths } from '../config/gatingConfig';
import Link from 'next/link';

const Dashboard: FC = () => {
  const { publicKey } = useWallet();

  return (
    <Layout title="Dashboard | Foxbyte Token Gated Kit">
      <GateCheck>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Welcome to your exclusive token holder dashboard
            </p>
            {publicKey && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Connected: {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold mb-3">Airdrop Tracker</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Track upcoming and past airdrops for your NFT/token.
              </p>
              <Link href={paths.tools.airdrops} className="btn btn-primary block text-center">
                View Airdrops
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold mb-3">Downloads</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access exclusive files and resources for holders.
              </p>
              <Link href={paths.tools.downloads} className="btn btn-primary block text-center">
                Access Files
              </Link>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold mb-3">Analytics</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                View detailed analytics and insights about your tokens.
              </p>
              <Link href={paths.tools.analytics} className="btn btn-primary block text-center">
                View Analytics
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <div className="card bg-gradient-to-r from-solana-purple to-solana-green bg-opacity-10">
              <h2 className="text-xl font-semibold mb-3">Token Community</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect with other token holders and stay updated on the latest news.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://discord.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Join Discord
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Follow on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </GateCheck>
    </Layout>
  );
};

export default Dashboard; 
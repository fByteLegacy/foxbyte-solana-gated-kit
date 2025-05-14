import { FC } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const NoAccess: FC = () => {
  return (
    <Layout title="Access Denied | Foxbyte Token Gated Kit">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="card max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Access Denied</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You don't have the required NFT or token to access this page.
          </p>
          <div className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              To gain access, you need:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
              <li>A specific Solana NFT from our collection</li>
              <li>Or a minimum token balance as configured</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <a
              href="https://magiceden.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Purchase a Token
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoAccess; 
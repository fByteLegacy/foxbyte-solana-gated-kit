import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletConnectButton } from './WalletConnect';
import { useGatedAccess } from '../utils/gating';
import { paths } from '../config/gatingConfig';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  title = 'Foxbyte Token Gated Tools',
  description = 'Access exclusive content with your Solana NFT or tokens',
}) => {
  const { connected } = useWallet();
  const { hasGatedAccess } = useGatedAccess(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-foxbyte-pink">FoxByte</span>
                  <span className="ml-2 text-sm bg-foxbyte-pink text-white px-2 py-1 rounded-md">
                    Token Gated Kit
                  </span>
                </Link>
              </div>
              
              <nav className="flex items-center space-x-4">
                {connected && hasGatedAccess && (
                  <>
                    <Link href={paths.dashboard} className="text-gray-600 hover:text-foxbyte-pink dark:text-gray-300">
                      Dashboard
                    </Link>
                    <Link href={paths.tools.airdrops} className="text-gray-600 hover:text-foxbyte-pink dark:text-gray-300">
                      Airdrops
                    </Link>
                    <Link href={paths.tools.downloads} className="text-gray-600 hover:text-foxbyte-pink dark:text-gray-300">
                      Downloads
                    </Link>
                    <Link href={paths.tools.analytics} className="text-gray-600 hover:text-foxbyte-pink dark:text-gray-300">
                      Analytics
                    </Link>
                  </>
                )}
                <WalletConnectButton />
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>
        
        <footer className="bg-white dark:bg-gray-800 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} FoxByte Token Gated Kit
              </div>
              <div className="text-sm">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-foxbyte-pink dark:text-gray-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout; 
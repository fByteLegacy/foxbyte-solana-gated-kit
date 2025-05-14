import { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/globals.css';
import WalletConnect from '../components/WalletConnect';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WalletConnect>
      <Component {...pageProps} />
    </WalletConnect>
  );
};

export default App; 
import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { hasAccess } from './solana';
import { paths } from '../config/gatingConfig';

// Custom hook to check access and handle redirects
export const useGatedAccess = (redirectOnFailure = true) => {
  const { connected, publicKey } = useWallet();
  const [hasGatedAccess, setHasGatedAccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      setIsLoading(true);
      
      if (!connected || !publicKey) {
        setHasGatedAccess(false);
        setIsLoading(false);
        
        if (redirectOnFailure && router.pathname !== '/') {
          router.push('/');
        }
        return;
      }
      
      try {
        const access = await hasAccess(publicKey.toString());
        setHasGatedAccess(access);
        
        if (!access && redirectOnFailure && router.pathname !== paths.noAccess) {
          router.push(paths.noAccess);
        }
      } catch (error) {
        console.error("Error checking access:", error);
        setHasGatedAccess(false);
        
        if (redirectOnFailure && router.pathname !== paths.noAccess) {
          router.push(paths.noAccess);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAccess();
  }, [connected, publicKey, router, redirectOnFailure]);
  
  return { hasGatedAccess, isLoading };
};

// HOC for gated pages
export function withGatedAccess<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function GatedComponent(props: P) {
    const { hasGatedAccess, isLoading } = useGatedAccess();
    
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foxbyte-pink mx-auto"></div>
            <p className="mt-4">Checking access...</p>
          </div>
        </div>
      );
    }
    
    if (!hasGatedAccess) {
      return null; // Will be redirected by the hook
    }
    
    return <Component {...props} />;
  };
} 
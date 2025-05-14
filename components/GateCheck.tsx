import { FC, ReactNode } from 'react';
import { useGatedAccess } from '../utils/gating';
import { paths } from '../config/gatingConfig';
import Link from 'next/link';

interface GateCheckProps {
  children: ReactNode;
  redirectOnFailure?: boolean;
  loadingComponent?: ReactNode;
  noAccessComponent?: ReactNode;
}

// Default no access component
const DefaultNoAccess: FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="card max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-foxbyte-pink">Access Denied</h2>
      <p className="mb-4">
        You don't have the required NFT or token to access this page.
      </p>
      <Link href="/" className="btn btn-primary block text-center">
        Return Home
      </Link>
    </div>
  </div>
);

// Default loading component
const DefaultLoading: FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foxbyte-pink mx-auto"></div>
      <p className="mt-4">Checking access...</p>
    </div>
  </div>
);

// Main Gate Check Component
const GateCheck: FC<GateCheckProps> = ({
  children,
  redirectOnFailure = true,
  loadingComponent = <DefaultLoading />,
  noAccessComponent = <DefaultNoAccess />,
}) => {
  const { hasGatedAccess, isLoading } = useGatedAccess(redirectOnFailure);

  if (isLoading) {
    return <>{loadingComponent}</>;
  }

  if (!hasGatedAccess) {
    return <>{noAccessComponent}</>;
  }

  return <>{children}</>;
};

export default GateCheck; 
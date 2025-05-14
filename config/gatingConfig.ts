// Configuration for token gating
export const gating = {
  tokenMint: process.env.NEXT_PUBLIC_TOKEN_MINT_ADDRESS || '',
  type: process.env.NEXT_PUBLIC_TOKEN_TYPE || 'nft', // 'nft' | 'spl'
  minBalance: Number(process.env.NEXT_PUBLIC_MIN_BALANCE || '1'),
  creatorAddress: process.env.NEXT_PUBLIC_CREATOR_ADDRESS || '',
};

// Redirect paths based on access
export const paths = {
  noAccess: '/no-access',
  dashboard: '/dashboard',
  tools: {
    airdrops: '/tools/airdrops',
    downloads: '/tools/downloads',
    analytics: '/tools/analytics',
  },
}; 
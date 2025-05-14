import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { gating } from '../config/gatingConfig';
import axios from 'axios';

// Create a Solana connection
export const getConnection = (): Connection => {
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(
    (process.env.NEXT_PUBLIC_NETWORK as 'mainnet-beta' | 'devnet' | 'testnet') || 'mainnet-beta'
  );
  return new Connection(endpoint, 'confirmed');
};

// Check if a wallet has a specific SPL token with enough balance
export const hasSplToken = async (walletAddress: string): Promise<boolean> => {
  try {
    if (!gating.tokenMint) return false;
    
    const connection = getConnection();
    const publicKey = new PublicKey(walletAddress);
    const tokenPublicKey = new PublicKey(gating.tokenMint);
    
    // Query token accounts
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      { mint: tokenPublicKey }
    );
    
    let totalBalance = 0;
    
    tokenAccounts.value.forEach(accountInfo => {
      const parsedInfo = accountInfo.account.data.parsed.info;
      totalBalance += Number(parsedInfo.tokenAmount.amount) / 10 ** parsedInfo.tokenAmount.decimals;
    });
    
    return totalBalance >= gating.minBalance;
  } catch (error) {
    console.error("Error checking SPL token:", error);
    return false;
  }
};

// Check if a wallet has an NFT from a specific collection or creator
export const hasNft = async (walletAddress: string): Promise<boolean> => {
  try {
    if (!gating.tokenMint && !gating.creatorAddress) return false;
    
    const connection = getConnection();
    const walletPublicKey = new PublicKey(walletAddress);
    
    // Query NFTs using Helius or Solana FM API (can be replaced with a RPC-only approach)
    const nfts = await fetchNfts(walletPublicKey.toString());
    
    // Check for ownership based on mint or creator
    if (gating.tokenMint) {
      return nfts.some(nft => nft.mint === gating.tokenMint);
    }
    
    if (gating.creatorAddress) {
      return nfts.some(nft => 
        nft.creators && nft.creators.some(creator => 
          creator.address === gating.creatorAddress && creator.verified
        )
      );
    }
    
    return false;
  } catch (error) {
    console.error("Error checking NFT ownership:", error);
    return false;
  }
};

// Helper to fetch NFTs - this uses a simplified approach that might need to be replaced
// with a more reliable API for production use
interface NFT {
  mint: string;
  creators?: { address: string; verified: boolean }[];
}

const fetchNfts = async (walletAddress: string): Promise<NFT[]> => {
  try {
    // Use RPC connection to get token accounts, then filter for NFTs
    // For production, replace with Helius API, Shyft, or another NFT API
    const url = `https://api.mainnet-beta.solana.com`;
    const response = await axios.post(url, {
      jsonrpc: "2.0",
      id: 1,
      method: "getAssetsByOwner",
      params: {
        ownerAddress: walletAddress,
        page: 1,
        limit: 100
      }
    });
    
    // Mock response for now, replace with actual implementation
    if (response.data && response.data.result && response.data.result.items) {
      return response.data.result.items.map((item: any) => ({
        mint: item.id,
        creators: item.content?.metadata?.creators
      }));
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return [];
  }
};

// Main function to check if wallet has access
export const hasAccess = async (walletAddress: string): Promise<boolean> => {
  if (!walletAddress) return false;
  
  try {
    if (gating.type === 'spl') {
      return await hasSplToken(walletAddress);
    } else {
      return await hasNft(walletAddress);
    }
  } catch (error) {
    console.error("Error checking access:", error);
    return false;
  }
}; 
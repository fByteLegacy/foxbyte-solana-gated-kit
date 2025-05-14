# Foxbyte Solana Token-Gated Utility Kit

A complete starter kit for Solana NFT/token-gated utilities, allowing you to create exclusive tools and content only available to holders of specific NFTs or tokens.

![FoxByte](https://i.imgur.com/EKZ4cRx.png)

## Features

- 🔒 **Token Gating**: Gate access to content based on Solana NFT ownership or SPL token balance
- 👛 **Wallet Integration**: Connect with popular Solana wallets (Phantom, Solflare, Backpack)
- 🧩 **Modular Design**: Easily replace or extend gated pages with your own tools
- 🎨 **Modern UI**: Clean interface with TailwindCSS
- 📱 **Responsive**: Works on desktop and mobile
- 🚀 **Easy Deployment**: Ready for Vercel, Netlify or static hosting

## Demo Pages

- **Home**: Public landing page with wallet connection
- **Dashboard**: Overview of available tools (token-gated)
- **Airdrop Tracker**: Example tool showing upcoming and past airdrops (token-gated)
- **Downloads**: Gated file downloads for holders (token-gated)
- **Analytics**: Example token/collection analytics (token-gated)

## Quick Start

1. Clone this repository
   ```bash
   git clone https://github.com/fByteLegacy/foxbyte-solana-gated-kit.git
   cd foxbyte-solana-gated-kit
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Copy the environment file and configure your variables
   ```bash
   cp env.example .env.local
   ```

4. Update the token gating configuration in `config/gatingConfig.ts` with your NFT or token details:
   ```typescript
   export const gating = {
     tokenMint: 'YOUR_NFT_OR_TOKEN_MINT_ADDRESS',
     type: 'nft', // or 'spl' for fungible tokens
     minBalance: 1, // minimum token balance required
     creatorAddress: 'OPTIONAL_VERIFIED_CREATOR_ADDRESS'
   };
   ```

5. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view your site

## Production Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables
4. Deploy!

### Static Export

For static hosting (GitHub Pages, Netlify, etc.):

```bash
npm run export
# or
yarn export
```

This will generate a static version in the `out` directory.

## Customization

### Styling

- Update colors in `tailwind.config.js`
- Modify global styles in `styles/globals.css`

### Content

- Update tool pages in `pages/tools/`
- Replace mock data with real APIs
- Add your own tools and utilities

### Token Gating

- Modify the gating logic in `utils/solana.ts`
- Update the access configuration in `config/gatingConfig.ts`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by FoxByte 
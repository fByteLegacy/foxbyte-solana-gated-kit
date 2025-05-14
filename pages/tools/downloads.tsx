import { FC } from 'react';
import Layout from '../../components/Layout';
import GateCheck from '../../components/GateCheck';
import { withGatedAccess } from '../../utils/gating';

// Example download data
const downloads = [
  {
    id: 1,
    name: 'Exclusive Artwork',
    description: 'High-resolution artwork for NFT holders',
    fileType: 'ZIP',
    fileSize: '125 MB',
    url: '/files/artwork.zip',
    createdAt: 'June 10, 2023',
  },
  {
    id: 2,
    name: 'Community Whitepaper',
    description: 'Detailed roadmap and tokenomics guide',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    url: '/files/whitepaper.pdf',
    createdAt: 'May 22, 2023',
  },
  {
    id: 3,
    name: 'Mobile Wallpapers',
    description: 'Pack of mobile wallpapers themed on our collection',
    fileType: 'ZIP',
    fileSize: '45 MB',
    url: '/files/wallpapers.zip',
    createdAt: 'July 5, 2023',
  },
  {
    id: 4,
    name: 'Holders-Only Soundtrack',
    description: 'Original music created for our community',
    fileType: 'MP3',
    fileSize: '68 MB',
    url: '/files/soundtrack.mp3',
    createdAt: 'July 15, 2023',
  },
];

const Downloads: FC = () => {
  return (
    <Layout title="Downloads | Foxbyte Token Gated Kit">
      <GateCheck>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Downloads</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Access exclusive files only available to token holders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download) => (
              <div key={download.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{download.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {download.description}
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{download.fileType}</span>
                      <span>{download.fileSize}</span>
                      <span>Added: {download.createdAt}</span>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                    <span className="block text-xs mb-1">{download.fileType}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href={download.url} 
                    className="btn btn-primary w-full"
                    // In production, replace with real download logic
                    onClick={(e) => {
                      e.preventDefault();
                      alert('In a production app, this would download: ' + download.name);
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 card bg-gray-50 dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-4">Need Something Else?</h2>
            <p className="mb-6">
              If you're looking for specific resources or have requests for new downloads,
              please reach out to us on Discord.
            </p>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-block"
            >
              Join Discord
            </a>
          </div>
        </div>
      </GateCheck>
    </Layout>
  );
};

export default withGatedAccess(Downloads); 
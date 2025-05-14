import { FC } from 'react';
import Layout from '../../components/Layout';
import GateCheck from '../../components/GateCheck';
import { withGatedAccess } from '../../utils/gating';

// Example airdrop data
const airdrops = [
  {
    id: 1,
    name: 'Genesis Token',
    date: 'June 15, 2023',
    status: 'Completed',
    amount: '10 USDC',
    eligibility: 'All holders as of June 1, 2023',
  },
  {
    id: 2,
    name: 'Community Rewards',
    date: 'July 30, 2023',
    status: 'In Progress',
    amount: '5 SOL',
    eligibility: 'Holders with 2+ NFTs',
  },
  {
    id: 3,
    name: 'Partner Collab',
    date: 'August 15, 2023',
    status: 'Upcoming',
    amount: '1 Partner NFT',
    eligibility: 'Holders since genesis',
  },
  {
    id: 4,
    name: 'Holiday Special',
    date: 'December, 2023',
    status: 'Planned',
    amount: 'TBA',
    eligibility: 'All current holders',
  },
];

const Airdrops: FC = () => {
  return (
    <Layout title="Airdrop Tracker | Foxbyte Token Gated Kit">
      <GateCheck>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Airdrop Tracker</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Stay updated on all airdrops for token holders
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Airdrop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Eligibility
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {airdrops.map((airdrop) => (
                    <tr key={airdrop.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {airdrop.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {airdrop.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          airdrop.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                          airdrop.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' :
                          airdrop.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {airdrop.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {airdrop.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {airdrop.eligibility}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 card">
            <h2 className="text-xl font-semibold mb-4">Airdrop Notifications</h2>
            <p className="mb-4">
              Want to get notified about upcoming airdrops? Join our community channels:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </GateCheck>
    </Layout>
  );
};

export default withGatedAccess(Airdrops); 
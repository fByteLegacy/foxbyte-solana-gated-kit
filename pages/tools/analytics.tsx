import { FC } from 'react';
import Layout from '../../components/Layout';
import GateCheck from '../../components/GateCheck';
import { withGatedAccess } from '../../utils/gating';

const Analytics: FC = () => {
  return (
    <Layout title="Analytics | Foxbyte Token Gated Kit">
      <GateCheck>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              View detailed analytics about your token collection
            </p>
          </div>

          {/* Embedded analytics - in a real app, these would be actual embeds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Price History</h2>
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    In a production app, this would display a price chart from DuneAnalytics, 
                    Solana FM, or another analytics provider.
                  </p>
                  <div className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                    Interactive Price Chart
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Holder Distribution</h2>
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    In a production app, this would display a holder distribution chart, 
                    showing wallet concentration and holder stats.
                  </p>
                  <div className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                    Holder Distribution Chart
                  </div>
                </div>
              </div>
            </div>

            <div className="card col-span-1 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {/* Mock transaction data */}
                    {Array(5).fill(0).map((_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          <a 
                            href={`https://explorer.solana.com/tx/sample${index}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-foxbyte-pink hover:underline"
                          >
                            {`${index + 1}`.padStart(2, '0')}ABCxyz...{index}123
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {index % 2 === 0 ? 'Sale' : 'Transfer'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {index % 2 === 0 ? `${(index + 1) * 0.5} SOL` : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {index} hour{index !== 1 ? 's' : ''} ago
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="card bg-gradient-to-r from-solana-purple to-solana-green bg-opacity-10">
              <h2 className="text-xl font-semibold mb-4">External Resources</h2>
              <p className="mb-6">
                Check out these external analytics platforms for more detailed insights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://solscan.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Solscan
                </a>
                <a
                  href="https://solanafm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  SolanaFM
                </a>
                <a
                  href="https://hyperspace.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Hyperspace
                </a>
              </div>
            </div>
          </div>
        </div>
      </GateCheck>
    </Layout>
  );
};

export default withGatedAccess(Analytics); 
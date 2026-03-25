import { Menu, Bell, User, DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';

interface EarningsPageProps {
  onMenuOpen: () => void;
}

export function EarningsPage({ onMenuOpen }: EarningsPageProps) {
  const weeklyData = [
    { day: 'Mon', earnings: 450 },
    { day: 'Tue', earnings: 520 },
    { day: 'Wed', earnings: 380 },
    { day: 'Thu', earnings: 600 },
    { day: 'Fri', earnings: 490 },
    { day: 'Sat', earnings: 720 },
    { day: 'Sun', earnings: 550 },
  ];

  const transactions = [
    { id: 1, date: 'Today', amount: '120 ETB', jobs: 1, status: 'pending' },
    { id: 2, date: 'Yesterday', amount: '340 ETB', jobs: 3, status: 'paid' },
    { id: 3, date: 'Mar 22', amount: '280 ETB', jobs: 2, status: 'paid' },
    { id: 4, date: 'Mar 21', amount: '450 ETB', jobs: 4, status: 'paid' },
  ];

  const totalEarnings = weeklyData.reduce((sum, day) => sum + day.earnings, 0);
  const avgPerDay = Math.round(totalEarnings / 7);
  const maxEarnings = Math.max(...weeklyData.map(d => d.earnings));

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onMenuOpen}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">Earnings</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Total Earnings Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <DollarSign className="w-7 h-7" />
              </div>
              <div>
                <p className="text-green-100 text-sm">Total This Week</p>
                <h2 className="text-3xl font-bold">{totalEarnings} ETB</h2>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-100 text-sm mt-3">
              <TrendingUp className="w-4 h-4" />
              <span>+12% from last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{avgPerDay} ETB</p>
              <p className="text-sm text-gray-600">Avg per Day</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{maxEarnings} ETB</p>
              <p className="text-sm text-gray-600">Best Day</p>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Weekly Breakdown</h3>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyData.map((day) => {
                const heightPercent = (day.earnings / maxEarnings) * 100;
                return (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full flex items-end justify-center" style={{ height: '120px' }}>
                      <div
                        className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all hover:from-green-700 hover:to-green-500 cursor-pointer"
                        style={{ height: `${heightPercent}%` }}
                        title={`${day.earnings} ETB`}
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-600">{day.day}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
              <button className="text-sm text-blue-600 font-medium hover:underline">
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      transaction.status === 'paid'
                        ? 'bg-green-100'
                        : 'bg-yellow-100'
                    }`}>
                      <DollarSign className={`w-5 h-5 ${
                        transaction.status === 'paid'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.amount}</p>
                      <p className="text-xs text-gray-600">{transaction.date} · {transaction.jobs} job{transaction.jobs > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    transaction.status === 'paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {transaction.status === 'paid' ? 'Paid' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Report */}
          <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Earnings Report
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Download, TrendingUp, TrendingDown, DollarSign, Clock, Users, Star, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for charts
const dailyVisitsData = [
  { day: 'Mon', visits: 12, revenue: 1440 },
  { day: 'Tue', visits: 15, revenue: 1800 },
  { day: 'Wed', visits: 18, revenue: 2160 },
  { day: 'Thu', visits: 14, revenue: 1680 },
  { day: 'Fri', visits: 20, revenue: 2400 },
  { day: 'Sat', visits: 16, revenue: 1920 },
  { day: 'Sun', visits: 10, revenue: 1200 },
];

const serviceTypeData = [
  { name: 'Emergency Care', value: 35, color: '#EF4444' },
  { name: 'General Consultation', value: 45, color: '#3B82F6' },
  { name: 'Routine Checkup', value: 25, color: '#10B981' },
  { name: 'Chronic Care', value: 20, color: '#F59E0B' },
  { name: 'Wound Care', value: 15, color: '#8B5CF6' },
];

const providerPerformanceData = [
  { name: 'Dr. Sarah Johnson', visits: 28, rating: 4.9, revenue: 3360 },
  { name: 'Dr. Michael Chen', visits: 32, rating: 4.8, revenue: 3840 },
  { name: 'Dr. Emily White', visits: 24, rating: 5.0, revenue: 2880 },
  { name: 'Paramedic James Rodriguez', visits: 30, rating: 4.7, revenue: 3600 },
  { name: 'Nurse Lisa Anderson', visits: 26, rating: 4.6, revenue: 3120 },
];

const hourlyDistributionData = [
  { hour: '6-8 AM', requests: 8 },
  { hour: '8-10 AM', requests: 15 },
  { hour: '10-12 PM', requests: 22 },
  { hour: '12-2 PM', requests: 18 },
  { hour: '2-4 PM', requests: 20 },
  { hour: '4-6 PM', requests: 25 },
  { hour: '6-8 PM', requests: 16 },
  { hour: '8-10 PM', requests: 10 },
];

const COLORS = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

export function ReportsPage() {
  const [dateRange, setDateRange] = useState('week');

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Analytics & Reports</h2>
          <p className="text-sm text-gray-600 mt-1">Performance insights and key metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              12%
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Total Visits</h3>
          <p className="text-3xl font-bold text-gray-900">105</p>
          <p className="text-xs text-gray-500 mt-2">This week</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              8%
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900">$12,600</p>
          <p className="text-xs text-gray-500 mt-2">This week</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1 text-red-600 text-sm font-medium">
              <TrendingDown className="w-4 h-4" />
              3%
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Avg Response Time</h3>
          <p className="text-3xl font-bold text-gray-900">12 min</p>
          <p className="text-xs text-gray-500 mt-2">Time to assign</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              2%
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Customer Rating</h3>
          <p className="text-3xl font-bold text-gray-900">4.8</p>
          <p className="text-xs text-gray-500 mt-2">Average rating</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Daily Visits Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Daily Visits Overview</h3>
              <p className="text-sm text-gray-600">Number of visits per day</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyVisitsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="visits" fill="#3b82f6" name="Visits" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Service Type Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Service Type Distribution</h3>
              <p className="text-sm text-gray-600">Breakdown by service category</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <p className="text-sm text-gray-600">Daily revenue performance</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyVisitsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Revenue ($)"
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Request Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Peak Hours Analysis</h3>
              <p className="text-sm text-gray-600">Request volume by time</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hourlyDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="requests" fill="#8b5cf6" name="Requests" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Provider Performance Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Provider Performance</h3>
              <p className="text-sm text-gray-600">Top performers this week</p>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Provider Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Visits Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Revenue Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {providerPerformanceData.map((provider, index) => (
                <tr key={provider.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm">
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm">
                        {provider.name.split(' ')[1][0]}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{provider.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{provider.visits}</div>
                    <div className="text-xs text-gray-500">visits</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{provider.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-green-600">${provider.revenue.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${(provider.visits / 32) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">New Patients</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">28</p>
          <p className="text-sm text-gray-600 mt-2">This week</p>
          <div className="flex items-center gap-1 mt-3 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>15% increase</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Completion Rate</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">96.5%</p>
          <p className="text-sm text-gray-600 mt-2">Of all requests</p>
          <div className="flex items-center gap-1 mt-3 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>2% increase</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Avg Visit Duration</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">38 min</p>
          <p className="text-sm text-gray-600 mt-2">Per visit</p>
          <div className="flex items-center gap-1 mt-3 text-red-600 text-sm">
            <TrendingDown className="w-4 h-4" />
            <span>5% decrease</span>
          </div>
        </div>
      </div>
    </div>
  );
}

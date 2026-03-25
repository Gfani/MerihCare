import { useState } from 'react';
import { DollarSign, MapPin, Clock, TrendingUp, Menu, Bell, User, CheckCircle } from 'lucide-react';

interface HomeScreenProps {
  onRequestReceived: () => void;
  onMenuOpen: () => void;
}

export function HomeScreen({ onRequestReceived, onMenuOpen }: HomeScreenProps) {
  const [isOnline, setIsOnline] = useState(true);

  const todayStats = {
    jobsCompleted: 3,
    earnings: 500,
    hoursWorked: 6.5,
    averageRating: 4.9,
  };

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onMenuOpen}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">MEDI CARE</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Dr. Sarah Johnson</h2>
              <p className="text-blue-100 text-sm">General Practitioner</p>
            </div>
          </div>

          {/* Online/Offline Toggle - THE MOST IMPORTANT CONTROL */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">You are {isOnline ? 'ONLINE' : 'OFFLINE'}</h3>
                <p className="text-blue-100 text-sm">
                  {isOnline ? 'Ready to receive requests' : 'Not receiving requests'}
                </p>
              </div>
              <div className={`w-4 h-4 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            </div>
            
            <button
              onClick={handleToggleOnline}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                isOnline
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isOnline ? 'GO OFFLINE' : 'GO ONLINE'}
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Current Status */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Status</h3>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isOnline ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <span className="font-medium">{isOnline ? 'Available' : 'Offline'}</span>
            </div>
          </div>

          {/* Today's Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Summary</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Jobs Completed */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{todayStats.jobsCompleted}</p>
                <p className="text-sm text-gray-600">Jobs Completed</p>
              </div>

              {/* Earnings */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{todayStats.earnings} ETB</p>
                <p className="text-sm text-gray-600">Earnings</p>
              </div>

              {/* Hours Worked */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{todayStats.hoursWorked}h</p>
                <p className="text-sm text-gray-600">Hours Worked</p>
              </div>

              {/* Average Rating */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-yellow-600 text-white flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{todayStats.averageRating}</p>
                <p className="text-sm text-gray-600">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900">View Active Jobs</p>
                  <p className="text-sm text-gray-600">Check ongoing assignments</p>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900">Earnings History</p>
                  <p className="text-sm text-gray-600">View payment details</p>
                </div>
              </button>
            </div>
          </div>

          {/* Test Button - Simulates Incoming Request */}
          {isOnline && (
            <button
              onClick={onRequestReceived}
              className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:from-orange-600 hover:to-red-600 transition-all"
            >
              🔔 Simulate Incoming Request (Test)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
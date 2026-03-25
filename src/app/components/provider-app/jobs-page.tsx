import { Menu, Bell, User, MapPin, Clock, Navigation, Phone } from 'lucide-react';

interface JobsPageProps {
  onMenuOpen: () => void;
}

export function JobsPage({ onMenuOpen }: JobsPageProps) {
  const activeJobs = [
    {
      id: 1,
      patientName: 'John Doe',
      address: '123 Main St, Downtown',
      distance: '1.4 km',
      eta: '8 min',
      status: 'on-the-way',
      statusText: 'On the Way',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-300',
      time: '10:30 AM',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      address: '456 Oak Ave, Uptown',
      distance: '3.2 km',
      eta: '15 min',
      status: 'scheduled',
      statusText: 'Scheduled',
      statusColor: 'bg-purple-100 text-purple-700 border-purple-300',
      time: '11:00 AM',
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onMenuOpen}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">Active Jobs</h1>
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

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-blue-100 text-xs mb-1">Active Now</p>
              <p className="text-2xl font-bold">{activeJobs.filter(j => j.status === 'on-the-way').length}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-blue-100 text-xs mb-1">Upcoming</p>
              <p className="text-2xl font-bold">{activeJobs.filter(j => j.status === 'scheduled').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-4">
          {activeJobs.length > 0 ? (
            activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Status Badge */}
                <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${job.statusColor}`}>
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                    <span className="text-sm font-semibold">{job.statusText}</span>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{job.time}</span>
                </div>

                <div className="px-5 pb-5">
                  {/* Patient Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{job.patientName}</h3>
                      <p className="text-sm text-gray-600">Emergency request</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-all">
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Address */}
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 mb-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
                      <p className="text-sm font-medium text-gray-900 flex-1">{job.address}</p>
                    </div>
                  </div>

                  {/* ETA & Distance */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <p className="text-xs text-blue-700 font-medium">ETA</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{job.eta}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Navigation className="w-4 h-4 text-purple-600" />
                        <p className="text-xs text-purple-700 font-medium">Distance</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{job.distance}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  {job.status === 'on-the-way' && (
                    <button className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                      <Navigation className="w-5 h-5" />
                      VIEW DETAILS
                    </button>
                  )}

                  {job.status === 'scheduled' && (
                    <button className="w-full py-3 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
                      VIEW DETAILS
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Jobs</h3>
              <p className="text-gray-600">You don't have any active jobs at the moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

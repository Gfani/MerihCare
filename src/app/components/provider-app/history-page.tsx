import { Menu, Bell, User, MapPin, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';

interface HistoryPageProps {
  onMenuOpen: () => void;
}

export function HistoryPage({ onMenuOpen }: HistoryPageProps) {
  // Provider's own completed jobs (jobs THEY performed, not other providers)
  const myCompletedJobs = [
    {
      id: 1,
      patientName: 'Michael Brown',
      address: '789 Elm St, Midtown',
      date: 'Today, 9:45 AM',
      duration: '45 min',
      earnings: '120',
      rating: 5,
      status: 'completed',
      service: 'General Checkup',
    },
    {
      id: 2,
      patientName: 'Emily Davis',
      address: '321 Pine Rd, Eastside',
      date: 'Today, 7:30 AM',
      duration: '30 min',
      earnings: '90',
      rating: 5,
      status: 'completed',
      service: 'Blood Pressure Check',
    },
    {
      id: 3,
      patientName: 'Robert Wilson',
      address: '654 Maple Ave, Westend',
      date: 'Yesterday, 4:15 PM',
      duration: '60 min',
      earnings: '150',
      rating: 4,
      status: 'completed',
      service: 'Diabetes Management',
    },
    {
      id: 4,
      patientName: 'Sarah Martinez',
      address: '987 Cedar Ln, Northside',
      date: 'Yesterday, 2:00 PM',
      duration: '40 min',
      earnings: '110',
      rating: 5,
      status: 'completed',
      service: 'Medication Review',
    },
    {
      id: 5,
      patientName: 'David Lee',
      address: '147 Birch Ct, Southside',
      date: 'Yesterday, 10:30 AM',
      duration: '35 min',
      earnings: '95',
      rating: 5,
      status: 'completed',
      service: 'Wound Care',
    },
  ];

  const totalEarnings = myCompletedJobs.reduce((sum, job) => sum + parseInt(job.earnings), 0);
  const totalJobs = myCompletedJobs.length;
  const avgRating = (myCompletedJobs.reduce((sum, job) => sum + job.rating, 0) / totalJobs).toFixed(1);

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
            <h1 className="text-lg font-semibold">Personal History</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-blue-100 text-xs mb-1">Total Jobs</p>
              <p className="text-xl font-bold">{totalJobs}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-blue-100 text-xs mb-1">Earnings</p>
              <p className="text-xl font-bold">{totalEarnings}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-blue-100 text-xs mb-1">Avg Rating</p>
              <p className="text-xl font-bold">{avgRating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-4">
          {/* Header Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-blue-900">My Completed Jobs</p>
              <p className="text-xs text-blue-700">Patients I've treated</p>
            </div>
          </div>

          {myCompletedJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              {/* Timestamp and Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{job.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Patient Info - CLEARLY LABELED AS PATIENT */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      Patient
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-gray-500">You treated:</span>
                    <h4 className="text-base font-bold text-gray-900">{job.patientName}</h4>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <p className="text-xs">{job.address}</p>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="w-3 h-3 text-purple-600" />
                    <p className="text-xs text-purple-700 font-medium">Duration</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{job.duration}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-3 h-3 text-green-600" />
                    <p className="text-xs text-green-700 font-medium">Earnings</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{job.earnings}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Load More */}
          <button className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-xl">
            Load More History
          </button>
        </div>
      </div>
    </div>
  );
}
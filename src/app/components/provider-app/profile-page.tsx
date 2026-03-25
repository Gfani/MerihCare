import { Menu, Bell, User, Mail, Phone, MapPin, Award, Calendar, Edit, Camera, ChevronRight } from 'lucide-react';

interface ProfilePageProps {
  onMenuOpen: () => void;
}

export function ProfilePage({ onMenuOpen }: ProfilePageProps) {
  const profileData = {
    name: 'Dr. Sarah Johnson',
    role: 'General Practitioner',
    email: 'sarah.johnson@medicare.com',
    phone: '+251 91 234 5678',
    address: 'Addis Ababa, Ethiopia',
    joinDate: 'January 2024',
    license: 'MED-12345-ET',
    specialization: 'General Medicine',
    rating: 4.9,
    totalJobs: 156,
    yearsExp: 8,
  };

  const menuSections = [
    {
      title: 'Personal Information',
      items: [
        { label: 'Edit Profile', icon: Edit, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { label: 'Certifications', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-100' },
      ],
    },
    {
      title: 'Documents',
      items: [
        { label: 'Medical License', icon: Award, color: 'text-green-600', bgColor: 'bg-green-100' },
        { label: 'ID Documents', icon: Award, color: 'text-orange-600', bgColor: 'bg-orange-100' },
      ],
    },
  ];

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
            <h1 className="text-lg font-semibold">My Profile</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Edit className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white flex items-center justify-center">
                  <User className="w-10 h-10" />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg hover:bg-blue-700">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{profileData.name}</h2>
                <p className="text-blue-100 text-sm mb-2">{profileData.role}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium">{profileData.rating}</span>
                  </div>
                  <span className="text-blue-100 text-sm">·</span>
                  <span className="text-blue-100 text-sm">{profileData.totalJobs} jobs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">CONTACT INFORMATION</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Phone</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Address</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">PROFESSIONAL DETAILS</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">License No.</p>
                <p className="text-sm font-bold text-gray-900">{profileData.license}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Experience</p>
                <p className="text-sm font-bold text-gray-900">{profileData.yearsExp} years</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Specialization</p>
                <p className="text-sm font-bold text-gray-900">{profileData.specialization}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Joined</p>
                <p className="text-sm font-bold text-gray-900">{profileData.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">PERFORMANCE</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Patient Satisfaction</span>
                  <span className="text-sm font-bold text-gray-900">98%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">On-Time Arrival</span>
                  <span className="text-sm font-bold text-gray-900">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="text-sm font-bold text-gray-900">92%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          {menuSections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">{section.title.toUpperCase()}</h3>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="flex-1 text-left font-medium text-gray-900">{item.label}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Verification Badge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-sm border-2 border-green-200 p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Verified Provider ✓</h4>
                <p className="text-sm text-gray-600">Your profile is verified and approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

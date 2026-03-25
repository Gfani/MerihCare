import { useState } from 'react';
import { Search, Plus, Filter, Download, Eye, Edit, Trash2, Phone, Mail, MapPin, Star, Users, Activity, Navigation, Car } from 'lucide-react';
import { Button } from './ui/button';

interface Provider {
  id: string;
  name: string;
  specialization: string;
  license: string;
  phone: string;
  email: string;
  currentLocation: string;
  status: 'available' | 'busy' | 'offline';
  rating: number;
  visitsToday: number;
  totalVisits: number;
  experience: number;
  joinDate: string;
  certifications: string[];
  serviceArea: string;
  avatar: string;
  vehicle: string;
  currentAssignment?: string;
  eta?: string;
}

const providers: Provider[] = [
  {
    id: 'PR001',
    name: 'Dr. Sarah Johnson',
    specialization: 'General Practitioner',
    license: 'MD-2018-45678',
    phone: '+1 234-567-1001',
    email: 'sarah.j@medicare.com',
    currentLocation: 'Downtown Area',
    status: 'available',
    rating: 4.9,
    visitsToday: 3,
    totalVisits: 450,
    experience: 8,
    joinDate: '2018-03-15',
    certifications: ['Emergency Care', 'Family Medicine'],
    serviceArea: 'Central District',
    avatar: '👩‍⚕️',
    vehicle: 'Toyota Camry - Blue',
  },
  {
    id: 'PR002',
    name: 'Dr. Michael Chen',
    specialization: 'Nurse Practitioner',
    license: 'NP-2016-23456',
    phone: '+1 234-567-1002',
    email: 'michael.c@medicare.com',
    currentLocation: 'En route to patient',
    status: 'busy',
    rating: 4.8,
    visitsToday: 5,
    totalVisits: 520,
    experience: 10,
    joinDate: '2016-06-20',
    certifications: ['Urgent Care', 'Wound Care'],
    serviceArea: 'North District',
    avatar: '👨‍⚕️',
    vehicle: 'Honda Accord - White',
    currentAssignment: '456 Oak Avenue',
    eta: '5 min',
  },
  {
    id: 'PR003',
    name: 'Dr. Emily White',
    specialization: 'Pediatric Nurse',
    license: 'RN-2019-34567',
    phone: '+1 234-567-1003',
    email: 'emily.w@medicare.com',
    currentLocation: 'West Side',
    status: 'available',
    rating: 5.0,
    visitsToday: 2,
    totalVisits: 380,
    experience: 7,
    joinDate: '2019-01-10',
    certifications: ['Pediatric Care', 'Immunizations'],
    serviceArea: 'West District',
    avatar: '👩‍⚕️',
    vehicle: 'Ford Escape - Silver',
  },
  {
    id: 'PR004',
    name: 'Paramedic James Rodriguez',
    specialization: 'Emergency Medical Technician',
    license: 'EMT-2015-12345',
    phone: '+1 234-567-1004',
    email: 'james.r@medicare.com',
    currentLocation: 'En route to patient',
    status: 'busy',
    rating: 4.7,
    visitsToday: 4,
    totalVisits: 610,
    experience: 11,
    joinDate: '2015-09-05',
    certifications: ['Advanced Life Support', 'Trauma Care'],
    serviceArea: 'East District',
    avatar: '👨‍⚕️',
    vehicle: 'Chevrolet Tahoe - Red',
    currentAssignment: '123 Main St',
    eta: '8 min',
  },
  {
    id: 'PR005',
    name: 'Nurse Lisa Anderson',
    specialization: 'Home Health Nurse',
    license: 'RN-2020-56789',
    phone: '+1 234-567-1005',
    email: 'lisa.a@medicare.com',
    currentLocation: 'City Center',
    status: 'available',
    rating: 4.6,
    visitsToday: 4,
    totalVisits: 290,
    experience: 6,
    joinDate: '2020-02-18',
    certifications: ['Home Health', 'Medication Management'],
    serviceArea: 'Central District',
    avatar: '👩‍⚕️',
    vehicle: 'Nissan Rogue - Black',
  },
  {
    id: 'PR006',
    name: 'Dr. David Kim',
    specialization: 'Physical Therapist',
    license: 'PT-2017-67890',
    phone: '+1 234-567-1006',
    email: 'david.k@medicare.com',
    currentLocation: 'Unavailable',
    status: 'offline',
    rating: 4.8,
    visitsToday: 0,
    totalVisits: 440,
    experience: 9,
    joinDate: '2017-07-12',
    certifications: ['Physical Therapy', 'Rehabilitation'],
    serviceArea: 'South District',
    avatar: '👨‍⚕️',
    vehicle: 'Subaru Outback - Green',
  },
];

const statusConfig = {
  available: { color: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
  busy: { color: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-500' },
  offline: { color: 'bg-gray-100 text-gray-700', dot: 'bg-gray-500' },
};

export function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSpecialization, setFilterSpecialization] = useState<string>('all');
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' || provider.status === filterStatus;
    const matchesSpecialization =
      filterSpecialization === 'all' || provider.specialization === filterSpecialization;
    return matchesSearch && matchesStatus && matchesSpecialization;
  });

  const availableCount = providers.filter((p) => p.status === 'available').length;
  const busyCount = providers.filter((p) => p.status === 'busy').length;
  const offlineCount = providers.filter((p) => p.status === 'offline').length;
  const totalVisitsToday = providers.reduce((sum, p) => sum + p.visitsToday, 0);

  const specializations = Array.from(new Set(providers.map(p => p.specialization)));

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Providers</p>
              <p className="text-2xl font-bold text-gray-900">{providers.length}</p>
              <p className="text-xs text-gray-500 mt-1">in network</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On Duty</p>
              <p className="text-2xl font-bold text-green-600">{availableCount}</p>
              <p className="text-xs text-gray-500 mt-1">available now</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On Visit</p>
              <p className="text-2xl font-bold text-yellow-600">{busyCount}</p>
              <p className="text-xs text-gray-500 mt-1">en route or at location</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Visits Today</p>
              <p className="text-2xl font-bold text-blue-600">{totalVisitsToday}</p>
              <p className="text-xs text-gray-500 mt-1">completed</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header Actions */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Field Providers</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152d47]">
                <Plus className="w-4 h-4" />
                Add Provider
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="busy">On Visit</option>
              <option value="offline">Off Duty</option>
            </select>

            <select
              value={filterSpecialization}
              onChange={(e) => setFilterSpecialization(e.target.value)}
              className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="all">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Providers Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Provider ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Current Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Visits Today
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProviders.map((provider) => {
                const config = statusConfig[provider.status];
                return (
                  <tr
                    key={provider.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedProvider(provider)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{provider.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg">
                          {provider.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{provider.name}</div>
                          <div className="text-xs text-gray-500">{provider.license}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">{provider.specialization}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-1 text-sm text-gray-700">
                        <MapPin className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div>{provider.currentLocation}</div>
                          {provider.eta && (
                            <div className="text-xs text-orange-600">ETA: {provider.eta}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                        {provider.status === 'available' ? 'Available' : provider.status === 'busy' ? 'On Visit' : 'Off Duty'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">{provider.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900">{provider.visitsToday}</div>
                        <div className="text-xs text-gray-500">of {provider.totalVisits} total</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 hover:bg-blue-50 rounded transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-blue-600" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-green-50 rounded transition-colors"
                          title="Track Location"
                        >
                          <Navigation className="w-4 h-4 text-green-600" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-teal-50 rounded transition-colors"
                          title="Contact"
                        >
                          <Phone className="w-4 h-4 text-teal-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredProviders.length}</span> of{' '}
            <span className="font-medium">{providers.length}</span> providers
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-[#1e3a5f] text-white hover:bg-[#152d47]">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Provider Detail Modal */}
      {selectedProvider && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedProvider(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Provider Details</h3>
              <button
                onClick={() => setSelectedProvider(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Provider Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl">
                  {selectedProvider.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-900">{selectedProvider.name}</h4>
                  <p className="text-sm text-gray-600">{selectedProvider.specialization}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[selectedProvider.status].color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[selectedProvider.status].dot}`}></span>
                      {selectedProvider.status === 'available' ? 'Available' : selectedProvider.status === 'busy' ? 'On Visit' : 'Off Duty'}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{selectedProvider.rating}</span>
                      <span className="text-xs text-gray-500">rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Professional Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Provider ID</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">License Number</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.license}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Specialization</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.specialization}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Experience</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.experience} years</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Join Date</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Service Area</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.serviceArea}</p>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Status</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Current Location</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-900">{selectedProvider.currentLocation}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Vehicle</p>
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-900">{selectedProvider.vehicle}</p>
                      </div>
                    </div>
                    {selectedProvider.currentAssignment && (
                      <>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Current Assignment</p>
                          <p className="text-sm font-medium text-gray-900">{selectedProvider.currentAssignment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">ETA</p>
                          <p className="text-sm font-medium text-orange-600">{selectedProvider.eta}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Contact Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900">{selectedProvider.email}</p>
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Performance Statistics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-blue-600 mb-1">Visits Today</p>
                    <p className="text-2xl font-bold text-blue-700">{selectedProvider.visitsToday}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-xs text-purple-600 mb-1">Total Visits</p>
                    <p className="text-2xl font-bold text-purple-700">{selectedProvider.totalVisits}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-xs text-yellow-600 mb-1">Rating</p>
                    <p className="text-2xl font-bold text-yellow-700">{selectedProvider.rating} ⭐</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProvider.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Assign to Request
                </Button>
                <Button variant="outline" className="flex-1">
                  Track Location
                </Button>
                <Button variant="outline" className="flex-1">
                  Contact Provider
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
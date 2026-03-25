import { useState } from 'react';
import { Search, Filter, Download, Eye, User, MapPin, Clock, AlertCircle, CheckCircle, XCircle, Navigation, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface Request {
  id: string;
  patientId: string;
  patientName: string;
  patientPhone: string;
  address: string;
  symptoms: string;
  urgency: 'emergency' | 'urgent' | 'normal';
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  requestTime: string;
  assignedProvider?: string;
  providerId?: string;
  estimatedDuration: string;
  actualDuration?: string;
  distance: string;
  completedTime?: string;
  notes?: string;
  serviceType: string;
}

const requests: Request[] = [
  {
    id: 'REQ001',
    patientId: 'P001',
    patientName: 'John Doe',
    patientPhone: '+1 234-567-8901',
    address: '123 Main St, Apt 4B, Downtown',
    symptoms: 'Chest pain, difficulty breathing',
    urgency: 'emergency',
    status: 'in-progress',
    requestTime: '2026-03-09 10:15 AM',
    assignedProvider: 'Dr. Michael Chen',
    providerId: 'PR002',
    estimatedDuration: '45 min',
    distance: '1.4 km',
    serviceType: 'Emergency Care',
  },
  {
    id: 'REQ002',
    patientId: 'P002',
    patientName: 'Sarah Smith',
    patientPhone: '+1 234-567-8903',
    address: '456 Oak Avenue, North District',
    symptoms: 'High fever, severe headache',
    urgency: 'urgent',
    status: 'pending',
    requestTime: '2026-03-09 10:20 AM',
    estimatedDuration: '30 min',
    distance: '3.2 km',
    serviceType: 'General Consultation',
  },
  {
    id: 'REQ003',
    patientId: 'P003',
    patientName: 'Michael Brown',
    patientPhone: '+1 234-567-8905',
    address: '789 Pine Road, West Side',
    symptoms: 'Regular checkup',
    urgency: 'normal',
    status: 'assigned',
    requestTime: '2026-03-09 09:45 AM',
    assignedProvider: 'Dr. Sarah Johnson',
    providerId: 'PR001',
    estimatedDuration: '30 min',
    distance: '2.1 km',
    serviceType: 'Routine Checkup',
  },
  {
    id: 'REQ004',
    patientId: 'P004',
    patientName: 'Emily Davis',
    patientPhone: '+1 234-567-8907',
    address: '321 Elm Street, City Center',
    symptoms: 'Post-surgery wound care',
    urgency: 'normal',
    status: 'completed',
    requestTime: '2026-03-09 08:00 AM',
    assignedProvider: 'Nurse Lisa Anderson',
    providerId: 'PR005',
    estimatedDuration: '45 min',
    actualDuration: '50 min',
    distance: '1.8 km',
    completedTime: '2026-03-09 09:30 AM',
    serviceType: 'Wound Care',
  },
  {
    id: 'REQ005',
    patientId: 'P005',
    patientName: 'Robert Wilson',
    patientPhone: '+1 234-567-8909',
    address: '654 Maple Drive, East End',
    symptoms: 'Diabetes management consultation',
    urgency: 'normal',
    status: 'completed',
    requestTime: '2026-03-09 07:30 AM',
    assignedProvider: 'Dr. Sarah Johnson',
    providerId: 'PR001',
    estimatedDuration: '30 min',
    actualDuration: '35 min',
    distance: '2.5 km',
    completedTime: '2026-03-09 08:45 AM',
    serviceType: 'Chronic Care',
  },
  {
    id: 'REQ006',
    patientId: 'P006',
    patientName: 'Jennifer Martinez',
    patientPhone: '+1 234-567-8911',
    address: '987 Cedar Lane, South Hills',
    symptoms: 'Migraine treatment',
    urgency: 'urgent',
    status: 'completed',
    requestTime: '2026-03-09 06:45 AM',
    assignedProvider: 'Dr. Emily White',
    providerId: 'PR003',
    estimatedDuration: '30 min',
    actualDuration: '28 min',
    distance: '1.2 km',
    completedTime: '2026-03-09 07:45 AM',
    serviceType: 'Pain Management',
  },
  {
    id: 'REQ007',
    patientId: 'P007',
    patientName: 'David Lee',
    patientPhone: '+1 234-567-8913',
    address: '147 Birch Avenue, Riverside',
    symptoms: 'Patient cancelled',
    urgency: 'normal',
    status: 'cancelled',
    requestTime: '2026-03-09 09:00 AM',
    estimatedDuration: '30 min',
    distance: '3.5 km',
    serviceType: 'General Consultation',
    notes: 'Patient feeling better, cancelled appointment',
  },
];

const urgencyConfig = {
  emergency: { color: 'bg-red-100 text-red-700 border-red-300', icon: '🔴', dot: 'bg-red-500' },
  urgent: { color: 'bg-orange-100 text-orange-700 border-orange-300', icon: '🟡', dot: 'bg-orange-500' },
  normal: { color: 'bg-blue-100 text-blue-700 border-blue-300', icon: '🔵', dot: 'bg-blue-500' },
};

const statusConfig = {
  pending: { color: 'bg-yellow-100 text-yellow-700', icon: Clock, dot: 'bg-yellow-500' },
  assigned: { color: 'bg-blue-100 text-blue-700', icon: User, dot: 'bg-blue-500' },
  'in-progress': { color: 'bg-purple-100 text-purple-700', icon: Navigation, dot: 'bg-purple-500' },
  completed: { color: 'bg-green-100 text-green-700', icon: CheckCircle, dot: 'bg-green-500' },
  cancelled: { color: 'bg-gray-100 text-gray-700', icon: XCircle, dot: 'bg-gray-500' },
};

export function RequestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterUrgency, setFilterUrgency] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesUrgency = filterUrgency === 'all' || request.urgency === filterUrgency;
    return matchesSearch && matchesStatus && matchesUrgency;
  });

  const pendingCount = requests.filter((r) => r.status === 'pending').length;
  const assignedCount = requests.filter((r) => r.status === 'assigned').length;
  const inProgressCount = requests.filter((r) => r.status === 'in-progress').length;
  const completedCount = requests.filter((r) => r.status === 'completed').length;

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
              <p className="text-xs text-gray-500 mt-1">awaiting assignment</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Assigned</p>
              <p className="text-2xl font-bold text-blue-600">{assignedCount}</p>
              <p className="text-xs text-gray-500 mt-1">provider assigned</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-purple-600">{inProgressCount}</p>
              <p className="text-xs text-gray-500 mt-1">en route or active</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Today</p>
              <p className="text-2xl font-bold text-green-600">{completedCount}</p>
              <p className="text-xs text-gray-500 mt-1">successfully finished</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header Actions */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Service Requests</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by request ID, patient name, or address..."
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
              <option value="pending">Pending</option>
              <option value="assigned">Assigned</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={filterUrgency}
              onChange={(e) => setFilterUrgency(e.target.value)}
              className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="all">All Urgency</option>
              <option value="emergency">Emergency</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Requests Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Urgency
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request) => {
                const urgConfig = urgencyConfig[request.urgency];
                const statConfig = statusConfig[request.status];
                const StatusIcon = statConfig.icon;
                
                return (
                  <tr
                    key={request.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedRequest(request)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{request.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{request.patientName}</div>
                        <div className="text-xs text-gray-500">{request.patientId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-1 text-sm text-gray-700 max-w-xs">
                        <MapPin className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="truncate">{request.address}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">{request.serviceType}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${urgConfig.color}`}>
                        <span className="text-sm">{urgConfig.icon}</span>
                        {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statConfig.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statConfig.dot}`}></span>
                        {request.status === 'in-progress' ? 'In Progress' : request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">
                        {request.assignedProvider || <span className="text-gray-400 italic">Unassigned</span>}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{request.requestTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 hover:bg-blue-50 rounded transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-blue-600" />
                        </button>
                        {request.status === 'pending' && (
                          <button
                            className="p-1.5 hover:bg-teal-50 rounded transition-colors"
                            title="Assign Provider"
                          >
                            <User className="w-4 h-4 text-teal-600" />
                          </button>
                        )}
                        {(request.status === 'assigned' || request.status === 'in-progress') && (
                          <button
                            className="p-1.5 hover:bg-purple-50 rounded transition-colors"
                            title="Track"
                          >
                            <Navigation className="w-4 h-4 text-purple-600" />
                          </button>
                        )}
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
            Showing <span className="font-medium">{filteredRequests.length}</span> of{' '}
            <span className="font-medium">{requests.length}</span> requests
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

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedRequest(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Request Details</h3>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Request Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">{selectedRequest.id}</h4>
                  <p className="text-sm text-gray-600">{selectedRequest.serviceType}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${urgencyConfig[selectedRequest.urgency].color}`}>
                    <span>{urgencyConfig[selectedRequest.urgency].icon}</span>
                    {selectedRequest.urgency.charAt(0).toUpperCase() + selectedRequest.urgency.slice(1)}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig[selectedRequest.status].color}`}>
                    <span className={`w-2 h-2 rounded-full ${statusConfig[selectedRequest.status].dot}`}></span>
                    {selectedRequest.status === 'in-progress' ? 'In Progress' : selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Patient Information */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Patient Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Patient Name</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.patientName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Patient ID</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.patientId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.patientPhone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Distance</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.distance}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Service Location</h4>
                <div className="bg-gray-50 rounded-lg p-3 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <p className="text-sm text-gray-700">{selectedRequest.address}</p>
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Symptoms / Reason</h4>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">{selectedRequest.symptoms}</p>
                </div>
              </div>

              {/* Request Details */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Request Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Request Time</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.requestTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Estimated Duration</p>
                    <p className="text-sm font-medium text-gray-900">{selectedRequest.estimatedDuration}</p>
                  </div>
                  {selectedRequest.assignedProvider && (
                    <div>
                      <p className="text-xs text-gray-600">Assigned Provider</p>
                      <p className="text-sm font-medium text-gray-900">{selectedRequest.assignedProvider}</p>
                    </div>
                  )}
                  {selectedRequest.completedTime && (
                    <>
                      <div>
                        <p className="text-xs text-gray-600">Completed Time</p>
                        <p className="text-sm font-medium text-gray-900">{selectedRequest.completedTime}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Actual Duration</p>
                        <p className="text-sm font-medium text-gray-900">{selectedRequest.actualDuration}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Notes */}
              {selectedRequest.notes && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Notes</h4>
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-sm text-gray-700">{selectedRequest.notes}</p>
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Request Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Request Created</p>
                      <p className="text-xs text-gray-600">{selectedRequest.requestTime}</p>
                    </div>
                  </div>
                  {selectedRequest.assignedProvider && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Provider Assigned</p>
                        <p className="text-xs text-gray-600">{selectedRequest.assignedProvider}</p>
                      </div>
                    </div>
                  )}
                  {selectedRequest.status === 'in-progress' && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Visit In Progress</p>
                        <p className="text-xs text-gray-600">Provider is en route or at location</p>
                      </div>
                    </div>
                  )}
                  {selectedRequest.completedTime && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Visit Completed</p>
                        <p className="text-xs text-gray-600">{selectedRequest.completedTime}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {selectedRequest.status === 'pending' && (
                  <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                    Assign Provider
                  </Button>
                )}
                {selectedRequest.assignedProvider && (
                  <Button variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Provider
                  </Button>
                )}
                {(selectedRequest.status === 'assigned' || selectedRequest.status === 'in-progress') && (
                  <Button variant="outline" className="flex-1">
                    <Navigation className="w-4 h-4 mr-2" />
                    Track on Map
                  </Button>
                )}
                <Button variant="outline" className="flex-1">
                  View Patient Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

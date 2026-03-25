import { useState } from 'react';
import { Search, Plus, Filter, Download, MoreVertical, Eye, Edit, Trash2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  bloodType: string;
  phone: string;
  email: string;
  address: string;
  lastVisit: string;
  totalVisits: number;
  emergencyContact: string;
  emergencyPhone: string;
  medicalHistory: string[];
  insuranceProvider: string;
}

const patients: Patient[] = [
  {
    id: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodType: 'O+',
    phone: '+1 234-567-8901',
    email: 'john.doe@email.com',
    address: '123 Main St, Apt 4B, Downtown',
    lastVisit: '2026-03-05',
    totalVisits: 12,
    emergencyContact: 'Jane Doe (Wife)',
    emergencyPhone: '+1 234-567-8902',
    medicalHistory: ['Diabetes', 'Hypertension'],
    insuranceProvider: 'BlueCross Shield',
  },
  {
    id: 'P002',
    name: 'Sarah Smith',
    age: 32,
    gender: 'Female',
    bloodType: 'A+',
    phone: '+1 234-567-8903',
    email: 'sarah.smith@email.com',
    address: '456 Oak Avenue, North District',
    lastVisit: '2026-03-07',
    totalVisits: 8,
    emergencyContact: 'Mike Smith (Brother)',
    emergencyPhone: '+1 234-567-8904',
    medicalHistory: ['Asthma'],
    insuranceProvider: 'Aetna Health',
  },
  {
    id: 'P003',
    name: 'Michael Brown',
    age: 28,
    gender: 'Male',
    bloodType: 'B+',
    phone: '+1 234-567-8905',
    email: 'michael.b@email.com',
    address: '789 Pine Road, West Side',
    lastVisit: '2026-03-06',
    totalVisits: 3,
    emergencyContact: 'Lisa Brown (Mother)',
    emergencyPhone: '+1 234-567-8906',
    medicalHistory: [],
    insuranceProvider: 'United Healthcare',
  },
  {
    id: 'P004',
    name: 'Emily Davis',
    age: 55,
    gender: 'Female',
    bloodType: 'AB-',
    phone: '+1 234-567-8907',
    email: 'emily.davis@email.com',
    address: '321 Elm Street, City Center',
    lastVisit: '2026-03-08',
    totalVisits: 15,
    emergencyContact: 'Robert Davis (Husband)',
    emergencyPhone: '+1 234-567-8908',
    medicalHistory: ['Post-surgery recovery'],
    insuranceProvider: 'Cigna',
  },
  {
    id: 'P005',
    name: 'Robert Wilson',
    age: 67,
    gender: 'Male',
    bloodType: 'O-',
    phone: '+1 234-567-8909',
    email: 'robert.w@email.com',
    address: '654 Maple Drive, East End',
    lastVisit: '2026-03-04',
    totalVisits: 24,
    emergencyContact: 'Mary Wilson (Daughter)',
    emergencyPhone: '+1 234-567-8910',
    medicalHistory: ['Heart Disease', 'Diabetes'],
    insuranceProvider: 'Medicare',
  },
  {
    id: 'P006',
    name: 'Jennifer Martinez',
    age: 41,
    gender: 'Female',
    bloodType: 'A-',
    phone: '+1 234-567-8911',
    email: 'jennifer.m@email.com',
    address: '987 Cedar Lane, South Hills',
    lastVisit: '2026-03-07',
    totalVisits: 6,
    emergencyContact: 'Carlos Martinez (Spouse)',
    emergencyPhone: '+1 234-567-8912',
    medicalHistory: ['Migraine'],
    insuranceProvider: 'Kaiser Permanente',
  },
  {
    id: 'P007',
    name: 'David Lee',
    age: 35,
    gender: 'Male',
    bloodType: 'B-',
    phone: '+1 234-567-8913',
    email: 'david.lee@email.com',
    address: '147 Birch Avenue, Riverside',
    lastVisit: '2026-03-08',
    totalVisits: 4,
    emergencyContact: 'Susan Lee (Sister)',
    emergencyPhone: '+1 234-567-8914',
    medicalHistory: [],
    insuranceProvider: 'Humana',
  },
  {
    id: 'P008',
    name: 'Lisa Anderson',
    age: 50,
    gender: 'Female',
    bloodType: 'O+',
    phone: '+1 234-567-8915',
    email: 'lisa.a@email.com',
    address: '258 Willow Court, Lakeside',
    lastVisit: '2026-03-05',
    totalVisits: 9,
    emergencyContact: 'Tom Anderson (Son)',
    emergencyPhone: '+1 234-567-8916',
    medicalHistory: ['Fracture recovery'],
    insuranceProvider: 'Anthem',
  },
];

export function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
              <p className="text-xs text-gray-500 mt-1">registered</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              👥
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Visits Today</p>
              <p className="text-2xl font-bold text-blue-600">14</p>
              <p className="text-xs text-gray-500 mt-1">completed</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-green-600">5</p>
              <p className="text-xs text-gray-500 mt-1">upcoming visits</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              📅
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New This Month</p>
              <p className="text-2xl font-bold text-orange-600">12</p>
              <p className="text-xs text-gray-500 mt-1">new patients</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              ➕
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header Actions */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Patient Directory</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152d47]">
                <Plus className="w-4 h-4" />
                Add Patient
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
              />
            </div>

            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Patients Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Patient ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Age / Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Visits
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{patient.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-700">
                      {patient.age} / {patient.gender}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-700 max-w-xs">
                      <MapPin className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className="truncate">{patient.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded" title={patient.phone}>
                        <Phone className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title={patient.email}>
                        <Mail className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{patient.totalVisits}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-700">{patient.lastVisit}</span>
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
                        className="p-1.5 hover:bg-teal-50 rounded transition-colors"
                        title="Schedule Visit"
                      >
                        <Clock className="w-4 h-4 text-teal-600" />
                      </button>
                      <button
                        className="p-1.5 hover:bg-green-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-green-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredPatients.length}</span> of{' '}
            <span className="font-medium">{patients.length}</span> patients
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
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Patient Detail Modal (Simple version) */}
      {selectedPatient && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Patient Details</h3>
              <button
                onClick={() => setSelectedPatient(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Personal Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Patient ID</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Full Name</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Age</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.age}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Gender</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.gender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Blood Type</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.bloodType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Insurance</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.insuranceProvider}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Home Address</h4>
                <div className="bg-gray-50 rounded-lg p-3 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <p className="text-sm text-gray-700">{selectedPatient.address}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Contact Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.email}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Emergency Contact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Contact Name</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.emergencyContact}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.emergencyPhone}</p>
                  </div>
                </div>
              </div>

              {/* Medical Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Medical Information</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">Total Visits</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.totalVisits}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Last Visit</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPatient.lastVisit}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2">Medical History</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPatient.medicalHistory.length > 0 ? (
                      selectedPatient.medicalHistory.map((condition, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                        >
                          {condition}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">No medical history recorded</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Schedule Home Visit
                </Button>
                <Button variant="outline" className="flex-1">
                  View Visit History
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
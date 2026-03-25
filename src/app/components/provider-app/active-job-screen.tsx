import { useState } from 'react';
import { MapPin, Phone, Navigation, Clock, User, ChevronRight, Home as HomeIcon, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

interface ActiveJobScreenProps {
  onComplete: () => void;
}

export function ActiveJobScreen({ onComplete }: ActiveJobScreenProps) {
  const [status, setStatus] = useState<'on-the-way' | 'arrived' | 'treatment-started'>('on-the-way');

  const job = {
    patientName: 'John Doe',
    patientPhone: '+251 91 234 5678',
    address: '123 Main St, Downtown',
    distance: '1.4 km',
    eta: '8 min',
    symptoms: 'Chest pain, difficulty breathing',
    destinationLat: 9.0192,
    destinationLng: 38.7525,
  };

  const handleStatusUpdate = () => {
    if (status === 'on-the-way') {
      setStatus('arrived');
    } else if (status === 'arrived') {
      setStatus('treatment-started');
    }
  };

  const getStatusConfig = () => {
    switch (status) {
      case 'on-the-way':
        return {
          text: 'On the Way',
          color: 'bg-blue-100 text-blue-700 border-blue-300',
          buttonText: 'CHECK IN (ARRIVED)',
          buttonColor: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
        };
      case 'arrived':
        return {
          text: 'Arrived',
          color: 'bg-purple-100 text-purple-700 border-purple-300',
          buttonText: 'START SERVICE',
          buttonColor: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
        };
      case 'treatment-started':
        return {
          text: 'Treatment in Progress',
          color: 'bg-green-100 text-green-700 border-green-300',
          buttonText: 'CHECK OUT (COMPLETE)',
          buttonColor: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white px-6 py-4 flex-shrink-0">
        <h1 className="text-xl font-bold mb-2">Active Job</h1>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${statusConfig.color} bg-white`}>
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          <span className="text-sm font-semibold">{statusConfig.text}</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Interactive Map View with Destination Pin */}
        <div className="relative h-80 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-b-4 border-blue-500">
          {/* Simulated Map Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>
          </div>

          {/* Simulated Street Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#4b5563" strokeWidth="3" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#4b5563" strokeWidth="3" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#4b5563" strokeWidth="3" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#4b5563" strokeWidth="3" />
          </svg>

          {/* Route Line - Animated */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M 30 250 Q 150 150, 270 100"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Your Location (Provider) - Animated */}
          <div className="absolute left-8 bottom-16 animate-bounce">
            <div className="relative">
              {/* Pulsing Circle */}
              <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
              {/* Main Marker */}
              <div className="relative w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-lg text-xs font-bold text-blue-600">
                You
              </div>
            </div>
          </div>

          {/* Patient Destination Pin - Pulsing */}
          <div className="absolute right-12 top-20">
            <div className="relative">
              {/* Pulsing Circle */}
              <div className="absolute -inset-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
              {/* Destination Pin */}
              <div className="relative">
                <MapPin className="w-14 h-14 text-red-600 drop-shadow-2xl fill-red-500" strokeWidth={1.5} />
                {/* Home Icon Inside Pin */}
                <HomeIcon className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 text-white" />
              </div>
              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg shadow-lg border-2 border-red-500">
                <p className="text-xs font-bold text-gray-900">{job.patientName}</p>
                <p className="text-xs text-gray-600">Patient Location</p>
              </div>
            </div>
          </div>

          {/* ETA Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-xl shadow-2xl px-4 py-3 border-2 border-blue-500">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-600 font-medium">ETA</p>
                <p className="text-xl font-bold text-gray-900">{job.eta}</p>
              </div>
            </div>
          </div>

          {/* Distance Badge */}
          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl px-4 py-3 border-2 border-purple-500">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-xs text-gray-600 font-medium">Distance</p>
                <p className="text-xl font-bold text-gray-900">{job.distance}</p>
              </div>
            </div>
          </div>

          {/* Coordinates Display (Bottom of Map) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-mono">
            Destination: {job.destinationLat}°N, {job.destinationLng}°E
          </div>
        </div>

        <div className="px-6 py-6 space-y-4">
          {/* Navigation Button - Prominent at Top */}
          {status === 'on-the-way' && (
            <Button className="w-full py-6 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-xl rounded-2xl shadow-2xl flex items-center justify-center gap-3 border-2 border-teal-400">
              <Navigation className="w-6 h-6" />
              NAVIGATE TO PATIENT
            </Button>
          )}

          {/* Patient Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">PATIENT INFORMATION</h3>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                <User className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900">{job.patientName}</h4>
                <p className="text-sm text-gray-600">{job.patientPhone}</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-all">
                <Phone className="w-6 h-6" />
              </button>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600 mb-1">Destination Address</p>
                  <p className="text-sm font-medium text-gray-900">{job.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">SYMPTOMS</h3>
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <p className="text-sm font-medium text-gray-900">{job.symptoms}</p>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">STATUS PROGRESS</h3>
            
            <div className="space-y-3">
              {/* On the Way */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  status === 'on-the-way' || status === 'arrived' || status === 'treatment-started'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {status === 'on-the-way' || status === 'arrived' || status === 'treatment-started' ? '✓' : '1'}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    status === 'on-the-way' || status === 'arrived' || status === 'treatment-started'
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`}>
                    On the Way
                  </p>
                </div>
                {status === 'on-the-way' && <ChevronRight className="w-5 h-5 text-blue-600 animate-pulse" />}
              </div>

              {/* Arrived */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  status === 'arrived' || status === 'treatment-started'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {status === 'arrived' || status === 'treatment-started' ? '✓' : '2'}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    status === 'arrived' || status === 'treatment-started' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Arrived at Location
                  </p>
                </div>
                {status === 'arrived' && <ChevronRight className="w-5 h-5 text-purple-600 animate-pulse" />}
              </div>

              {/* Treatment Started */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  status === 'treatment-started' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {status === 'treatment-started' ? '✓' : '3'}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    status === 'treatment-started' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Treatment Started
                  </p>
                </div>
                {status === 'treatment-started' && <ChevronRight className="w-5 h-5 text-green-600 animate-pulse" />}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Call Patient Button */}
            <Button className="w-full py-5 bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              CALL PATIENT
            </Button>

            {/* Check In / Check Out Button */}
            <Button
              onClick={status === 'treatment-started' ? onComplete : handleStatusUpdate}
              className={`w-full py-6 bg-gradient-to-r ${statusConfig.buttonColor} text-white font-bold text-xl rounded-2xl shadow-2xl flex items-center justify-center gap-3`}
            >
              {status === 'on-the-way' && <LogOut className="w-6 h-6 rotate-90" />}
              {status === 'treatment-started' && <LogOut className="w-6 h-6 -rotate-90" />}
              {statusConfig.buttonText}
            </Button>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-xl border border-red-200 p-4">
            <div className="flex items-center gap-2 text-red-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm font-medium">Need help? Contact emergency support: 911</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { AlertCircle, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';

interface Request {
  id: string;
  patient: string;
  address: string;
  distance: string;
  type: 'emergency' | 'urgent' | 'normal';
  time: string;
  symptoms: string;
  estimatedDuration: string;
}

const requests: Request[] = [
  {
    id: '1',
    patient: 'John Doe',
    address: '123 Main St, Apt 4B',
    distance: '1.4 km',
    type: 'emergency',
    time: '2 min ago',
    symptoms: 'Chest pain, difficulty breathing',
    estimatedDuration: '45 min',
  },
  {
    id: '2',
    patient: 'Sarah Smith',
    address: '456 Oak Avenue',
    distance: '3.2 km',
    type: 'urgent',
    time: '5 min ago',
    symptoms: 'High fever, severe headache',
    estimatedDuration: '30 min',
  },
];

const typeConfig = {
  emergency: {
    icon: '🔴',
    color: 'border-red-600',
    bg: 'bg-red-50',
    badge: 'bg-red-100 text-red-700',
  },
  urgent: {
    icon: '🟡',
    color: 'border-orange-500',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
  },
  normal: {
    icon: '🔵',
    color: 'border-blue-500',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
};

export function LiveRequests() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Pending Requests</h2>
        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
          {requests.length} Waiting
        </span>
      </div>

      <div className="space-y-4 overflow-y-auto flex-1">
        {requests.map((request) => {
          const config = typeConfig[request.type];
          return (
            <div
              key={request.id}
              className={`border-l-[6px] rounded-lg p-4 ${config.color} ${config.bg}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{config.icon}</span>
                  <span
                    className={`font-semibold uppercase text-xs px-2 py-1 rounded ${config.badge}`}
                  >
                    {request.type}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Clock className="w-3 h-3" />
                  {request.time}
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="text-xs text-gray-600">
                  Requested: {request.time}
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start justify-between text-sm">
                  <span className="text-gray-600">Patient:</span>
                  <span className="font-medium text-gray-900 text-right">{request.patient}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Address:
                  </span>
                  <span className="font-medium text-gray-900 text-right max-w-[60%]">{request.address}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Distance:</span>
                  <span className="font-medium text-gray-900">{request.distance}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="text-gray-600">Symptoms:</span>
                  <span className="font-medium text-gray-900 text-right max-w-[60%]">{request.symptoms}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Est. Duration:</span>
                  <span className="font-medium text-gray-900">{request.estimatedDuration}</span>
                </div>
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5"
                size="sm"
              >
                Assign Nearest Provider
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
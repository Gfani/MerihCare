import { useState, useEffect } from 'react';
import { MapPin, Clock, AlertCircle, User, Phone } from 'lucide-react';
import { Button } from '../ui/button';

interface IncomingRequestScreenProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function IncomingRequestScreen({ onAccept, onDecline }: IncomingRequestScreenProps) {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    // Play notification sound (would be actual sound in production)
    console.log('🔊 NOTIFICATION SOUND PLAYING');
    
    // Vibrate if supported (mobile)
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onDecline(); // Auto-decline when timer runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onDecline]);

  const request = {
    urgency: 'emergency',
    patientName: 'John Doe',
    distance: '1.4 km',
    location: '123 Main St, Downtown',
    symptoms: 'Chest pain, difficulty breathing',
    estimatedEarnings: '120 ETB',
    patientPhone: '+251 91 234 5678',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-500">
        {/* Urgent Header with Pulse Animation */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500 animate-pulse opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">EMERGENCY REQUEST</h2>
                <p className="text-red-100 text-sm">Requires immediate attention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer - CRITICAL */}
        <div className="bg-yellow-50 border-b-2 border-yellow-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-700" />
              <span className="text-sm font-medium text-yellow-800">Auto-decline in:</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`text-3xl font-bold ${timeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-yellow-800'}`}>
                {timeLeft}s
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 w-full bg-yellow-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-yellow-600 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Request Details */}
        <div className="p-6 space-y-4">
          {/* Patient Info */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Patient</p>
                <p className="text-lg font-bold text-gray-900">{request.patientName}</p>
              </div>
              <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>

          {/* Distance & Location */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-purple-700 font-medium">Distance</p>
              </div>
              <p className="text-xl font-bold text-gray-900">{request.distance}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-green-700 font-medium">Earnings</p>
              </div>
              <p className="text-xl font-bold text-gray-900">{request.estimatedEarnings}</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
              <div>
                <p className="text-xs text-gray-600 mb-1">Location</p>
                <p className="text-sm font-medium text-gray-900">{request.location}</p>
              </div>
            </div>
          </div>

          {/* Symptoms - Most Important Info */}
          <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-xs text-red-700 font-semibold mb-1">SYMPTOMS</p>
                <p className="text-sm font-medium text-gray-900">{request.symptoms}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - HUGE and CLEAR */}
        <div className="p-6 pt-0 grid grid-cols-2 gap-4">
          <Button
            onClick={onDecline}
            className="py-5 text-lg font-bold bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl shadow-lg"
          >
            DECLINE
          </Button>
          <Button
            onClick={onAccept}
            className="py-5 text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl shadow-lg animate-pulse"
          >
            ACCEPT
          </Button>
        </div>
      </div>
    </div>
  );
}

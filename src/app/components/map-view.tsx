import { MapPin, Home } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { MapControls } from './map-controls';

interface Location {
  id: string;
  lat: number;
  lng: number;
  provider?: string;
  type: 'provider' | 'patient';
  status?: 'available' | 'busy' | 'offline';
  patientName?: string;
}

const locations: Location[] = [
  { id: '1', lat: 35, lng: 25, provider: '🧑‍⚕️', type: 'provider', status: 'available' },
  { id: '2', lat: 15, lng: 15, provider: '👨‍⚕️', type: 'provider', status: 'busy' },
  { id: '3', lat: 25, lng: 35, provider: '👩‍⚕️', type: 'provider', status: 'available' },
  { id: '4', lat: 45, lng: 55, provider: '👨‍⚕️', type: 'provider', status: 'available' },
  { id: '5', lat: 55, lng: 45, provider: '👩‍⚕️', type: 'provider', status: 'busy' },
  { id: '6', lat: 65, lng: 25, provider: '👩‍⚕️', type: 'provider', status: 'available' },
  { id: '7', lat: 40, lng: 30, type: 'patient', patientName: 'John Doe' },
  { id: '8', lat: 20, lng: 60, type: 'patient', patientName: 'Sarah Smith' },
];

export function MapView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Light map background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);

    // Draw subtle roads
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 2;
    
    // Main roads
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(500, 0);
    ctx.lineTo(500, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(width, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(width, 350);
    ctx.stroke();

    // Draw river (light blue wavy line)
    ctx.strokeStyle = '#b3d9f2';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.7);
    
    for (let x = 0; x < width; x += 5) {
      const y = height * 0.7 + Math.sin(x / 40) * 30;
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Add street labels
    ctx.fillStyle = '#b0b0b0';
    ctx.font = '11px Arial';
    ctx.save();
    ctx.translate(150, 180);
    ctx.rotate(-0.05);
    ctx.fillText('Main Street', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(400, 380);
    ctx.rotate(-0.05);
    ctx.fillText('Oak Avenue', 0, 0);
    ctx.restore();

    // Draw route lines (example routes from providers to patients)
    const busyProviders = locations.filter(l => l.type === 'provider' && l.status === 'busy');
    const patients = locations.filter(l => l.type === 'patient');
    
    if (busyProviders.length > 0 && patients.length > 0) {
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      
      // Draw route from busy provider to patient
      ctx.beginPath();
      ctx.moveTo((busyProviders[0].lng / 100) * width, (busyProviders[0].lat / 100) * height);
      ctx.lineTo((patients[0].lng / 100) * width, (patients[0].lat / 100) * height);
      ctx.stroke();
      
      if (busyProviders[1] && patients[1]) {
        ctx.beginPath();
        ctx.moveTo((busyProviders[1].lng / 100) * width, (busyProviders[1].lat / 100) * height);
        ctx.lineTo((patients[1].lng / 100) * width, (patients[1].lat / 100) * height);
        ctx.stroke();
      }
      
      ctx.setLineDash([]);
    }

  }, []);

  return (
    <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      {/* Canvas for map background */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full"
      />

      {/* Map Controls */}
      <MapControls />

      {/* Location markers */}
      {locations.map((location) => (
        <div
          key={location.id}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform group"
          style={{
            left: `${location.lng}%`,
            top: `${location.lat}%`,
          }}
        >
          {location.type === 'provider' ? (
            <div className="relative">
              <MapPin className={`w-10 h-10 drop-shadow-lg ${
                location.status === 'available' 
                  ? 'fill-green-600 text-green-600' 
                  : location.status === 'busy'
                  ? 'fill-yellow-600 text-yellow-600'
                  : 'fill-gray-600 text-gray-600'
              }`} />
              {/* Provider avatar on top of pin */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-purple-400 overflow-hidden flex items-center justify-center text-xs">
                {location.provider}
              </div>
              {/* Status indicator */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                location.status === 'available' 
                  ? 'bg-green-500' 
                  : location.status === 'busy'
                  ? 'bg-yellow-500'
                  : 'bg-gray-500'
              }`}></div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-red-500 border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                <Home className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          {/* Tooltip on hover */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {location.type === 'provider' 
                ? `Provider ${location.status === 'available' ? 'Available' : location.status === 'busy' ? 'On Visit' : 'Off Duty'}`
                : `Patient: ${location.patientName}`
              }
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Map Legend</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Available Provider</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600">Provider On Visit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600">Patient Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-yellow-400 border-dashed"></div>
            <span className="text-gray-600">Active Route</span>
          </div>
        </div>
      </div>
    </div>
  );
}
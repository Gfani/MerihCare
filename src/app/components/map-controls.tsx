import { Plus, Minus, Crosshair, Ambulance } from 'lucide-react';

export function MapControls() {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      <button
        className="bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-2.5 shadow-md transition-colors"
        title="Zoom in"
        onClick={() => console.log('Zoom in')}
      >
        <Plus className="w-5 h-5 text-gray-700" />
      </button>
      <button
        className="bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-2.5 shadow-md transition-colors"
        title="Zoom out"
        onClick={() => console.log('Zoom out')}
      >
        <Minus className="w-5 h-5 text-gray-700" />
      </button>
      <button
        className="bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-2.5 shadow-md transition-colors"
        title="Center map"
        onClick={() => console.log('Center map')}
      >
        <Crosshair className="w-5 h-5 text-gray-700" />
      </button>
      <button
        className="bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-2.5 shadow-md transition-colors"
        title="Show nearest provider"
        onClick={() => console.log('Show nearest provider')}
      >
        <Ambulance className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

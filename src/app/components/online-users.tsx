interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'available' | 'busy' | 'offline';
  distance?: string;
  eta?: string;
  currentLocation?: string;
}

const users: User[] = [
  { id: '1', name: 'Natali Craig', avatar: '🧑‍⚕️', status: 'available', distance: '1.2 km', currentLocation: 'Downtown Area' },
  { id: '2', name: 'Drew Cano', avatar: '👨‍⚕️', status: 'busy', distance: '2.5 km', currentLocation: 'En route', eta: '5 min' },
  { id: '3', name: 'Andi Lane', avatar: '👩‍⚕️', status: 'available', distance: '3.1 km', currentLocation: 'North District' },
  { id: '4', name: 'Koray Okumus', avatar: '👨‍⚕️', status: 'available', distance: '0.8 km', currentLocation: 'City Center' },
  { id: '5', name: 'Kate Morrison', avatar: '👩‍⚕️', status: 'busy', distance: '4.2 km', currentLocation: 'En route', eta: '12 min' },
  { id: '6', name: 'Melody Macy', avatar: '👩‍⚕️', status: 'available', distance: '1.9 km', currentLocation: 'West Side' },
];

const statusConfig = {
  available: { color: 'bg-green-500', text: 'Available', textColor: 'text-green-700' },
  busy: { color: 'bg-yellow-500', text: 'On Visit', textColor: 'text-yellow-700' },
  offline: { color: 'bg-red-500', text: 'Off Duty', textColor: 'text-red-700' },
};

export function OnlineUsers() {
  return (
    <div className="w-[280px] bg-white border-l border-gray-200 p-6 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="font-semibold text-gray-800">Providers On Duty</span>
      </div>

      <div className="flex-1 overflow-hidden">
        <ul className="space-y-4">
          {users.map((user) => {
            const config = statusConfig[user.status];
            return (
              <li
                key={user.id}
                className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm">
                      {user.avatar}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 ${config.color} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                    <div className="text-xs text-gray-600">
                      <span className={config.textColor}>{config.text}</span>
                      {user.distance && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{user.distance}</span>
                        </>
                      )}
                    </div>
                    {user.currentLocation && (
                      <div className="text-xs text-gray-500 mt-1 truncate">
                        📍 {user.currentLocation}
                        {user.eta && <span className="text-orange-600l ml-1">({user.eta})</span>}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
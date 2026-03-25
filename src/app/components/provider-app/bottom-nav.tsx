import { Home, Briefcase, MapPin, Clock, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'jobs' | 'history' | 'profile';
  onTabChange: (tab: 'home' | 'jobs' | 'history' | 'profile') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'jobs' as const, label: 'Jobs', icon: Briefcase },
    { id: 'history' as const, label: 'History', icon: Clock },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
      <div className="grid grid-cols-4 h-20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
import { X, Home, MapPin, Clock, User, DollarSign, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function SideMenu({ isOpen, onClose, onNavigate, currentPage }: SideMenuProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, description: 'Dashboard & status' },
    { id: 'jobs', label: 'Active Jobs', icon: MapPin, description: 'Current assignments' },
    { id: 'history', label: 'Personal History', icon: Clock, description: 'Past completed jobs' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign, description: 'Payment & stats' },
    { id: 'profile', label: 'My Profile', icon: User, description: 'Personal information' },
    { id: 'settings', label: 'Settings', icon: Settings, description: 'App preferences' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, description: 'Get assistance' },
  ];

  const handleNavigate = (pageId: string) => {
    onNavigate(pageId);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Side Menu */}
      <div
        className={`absolute top-0 left-0 h-full w-[300px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Scrollable Content */}
        <div className="h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white px-6 py-4 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                <p className="text-blue-100 text-sm">General Practitioner</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-green-200 font-medium">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items - Scrollable */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-white/20' : 'bg-gray-100'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {item.label}
                      </p>
                      <p
                        className={`text-xs ${
                          isActive ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer - Logout */}
          <div className="border-t border-gray-200 p-4 flex-shrink-0">
            <button
              onClick={() => {
                // Handle logout
                onClose();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
import { Menu, Bell, User, ChevronRight, Moon, Volume2, MapPin, Smartphone, Lock, Shield } from 'lucide-react';

interface SettingsPageProps {
  onMenuOpen: () => void;
}

export function SettingsPage({ onMenuOpen }: SettingsPageProps) {
  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        { label: 'Notifications', icon: Bell, color: 'text-blue-600', bgColor: 'bg-blue-100', toggle: true, value: true },
        { label: 'Sound Alerts', icon: Volume2, color: 'text-purple-600', bgColor: 'bg-purple-100', toggle: true, value: true },
        { label: 'Dark Mode', icon: Moon, color: 'text-gray-600', bgColor: 'bg-gray-100', toggle: true, value: false },
        { label: 'Location Services', icon: MapPin, color: 'text-green-600', bgColor: 'bg-green-100', toggle: true, value: true },
      ],
    },
    {
      title: 'Security',
      items: [
        { label: 'Change Password', icon: Lock, color: 'text-red-600', bgColor: 'bg-red-100' },
        { label: 'Two-Factor Auth', icon: Shield, color: 'text-orange-600', bgColor: 'bg-orange-100', toggle: true, value: false },
      ],
    },
    {
      title: 'Device',
      items: [
        { label: 'App Version', icon: Smartphone, color: 'text-teal-600', bgColor: 'bg-teal-100', value: 'v2.1.0' },
      ],
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onMenuOpen}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">Settings</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-blue-100 text-sm">Customize your app experience</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {settingsGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-600 mb-4">{group.title.toUpperCase()}</h3>
              <div className="space-y-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="flex-1 text-left font-medium text-gray-900">{item.label}</span>
                      
                      {item.toggle && (
                        <button
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            item.value ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                              item.value ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      )}

                      {item.value && !item.toggle && (
                        <span className="text-sm text-gray-500">{item.value}</span>
                      )}

                      {!item.toggle && !item.value && (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">ABOUT</h3>
            <div className="space-y-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">MC</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">MEDI CARE Provider</h4>
                <p className="text-sm text-gray-600">Version 2.1.0</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  © 2026 MEDI CARE. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

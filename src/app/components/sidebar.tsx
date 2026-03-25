import { LayoutDashboard, Users, Stethoscope, ClipboardList, FileText } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'patients', label: 'Patients', icon: Users },
  { id: 'providers', label: 'Providers', icon: Stethoscope },
  { id: 'requests', label: 'Requests', icon: ClipboardList },
  { id: 'reports', label: 'Reports', icon: FileText },
];

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

export function Sidebar({ activeItem = 'dashboard', onItemClick }: SidebarProps) {
  return (
    <div className="w-[240px] bg-[#1e3a5f] text-white h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
            <div className="text-center">
              <Stethoscope className="w-10 h-10 mx-auto text-cyan-400" />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="text-xs font-bold tracking-wider">MEDI CARE</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 mb-6 border-t border-white/20"></div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick?.(item.id)}
                  className={`w-full text-left px-6 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    isActive
                      ? 'bg-white/10 text-white font-medium'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
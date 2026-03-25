import { Users, LayoutDashboard, FileText, ClipboardList, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';

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
  { id: 'report', label: 'Report', icon: FileText },
];

export function NavigationMenu() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Horizontal Button Navigation */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Navigation Buttons</h2>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="default"
                className="flex items-center gap-2"
                onClick={() => console.log(`Clicked ${item.label}`)}
              >
                <Icon className="size-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Icon-Only Buttons */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Icon Buttons</h2>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="outline"
                size="icon"
                onClick={() => console.log(`Clicked ${item.label}`)}
                title={item.label}
              >
                <Icon className="size-5" />
              </Button>
            );
          })}
        </div>
      </div>

      {/* Vertical Sidebar Style */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Sidebar Style</h2>
        <div className="flex flex-col gap-2 max-w-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start gap-3"
                onClick={() => console.log(`Clicked ${item.label}`)}
              >
                <Icon className="size-5" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Card Style */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Card Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => console.log(`Clicked ${item.label}`)}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Icon className="size-8 text-gray-700" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

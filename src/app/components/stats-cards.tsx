import { Users, ClipboardList, CheckCircle } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

function StatCard({ title, value, label, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Providers On Duty"
        value="6"
        label="active in field"
        icon={Users}
        color="bg-green-100 text-green-600"
      />
      <StatCard
        title="Pending Requests"
        value="2"
        label="awaiting assignment"
        icon={ClipboardList}
        color="bg-orange-100 text-orange-600"
      />
      <StatCard
        title="Visits Completed"
        value="14"
        label="today"
        icon={CheckCircle}
        color="bg-blue-100 text-blue-600"
      />
    </div>
  );
}
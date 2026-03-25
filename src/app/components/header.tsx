import { Search, Bell, User } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Dashboard' }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px] text-sm"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
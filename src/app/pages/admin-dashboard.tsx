import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { OnlineUsers } from '../components/online-users';
import { MapView } from '../components/map-view';
import { StatsCards } from '../components/stats-cards';
import { LiveRequests } from '../components/live-requests';
import { PatientsPage } from '../components/patients-page';
import { ProvidersPage } from '../components/providers-page';
import { RequestsPage } from '../components/requests-page';
import { ReportsPage } from '../components/reports-page';
import { Smartphone } from 'lucide-react';

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const navigate = useNavigate();

  return (
    <div className="size-full flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeItem={activeNav} onItemClick={setActiveNav} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={activeNav.charAt(0).toUpperCase() + activeNav.slice(1)} />

        {/* App Mode Toggle Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Admin Dashboard</p>
              <p className="text-blue-100 text-xs">Switch to provider mobile app</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/provider')}
            className="px-5 py-2.5 bg-white text-blue-600 font-bold text-sm rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Open Provider App
          </button>
        </div>

        {/* Dashboard Content */}
        {activeNav === 'dashboard' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Main Area */}
            <div className="flex-1 p-6 overflow-auto">
              {/* Stats Cards */}
              <StatsCards />

              {/* Map and Live Requests - Adjusted ratio to 70/30 */}
              <div className="grid grid-cols-10 gap-6 h-[calc(100%-140px)]">
                {/* Map Area - Takes 7 columns (70%) */}
                <div className="col-span-7">
                  <MapView />
                </div>

                {/* Live Requests - Takes 3 columns (30%) */}
                <div className="col-span-3">
                  <LiveRequests />
                </div>
              </div>
            </div>

            {/* Online Users Sidebar */}
            <OnlineUsers />
          </div>
        )}

        {/* Patients Page */}
        {activeNav === 'patients' && <PatientsPage />}

        {/* Providers Page */}
        {activeNav === 'providers' && <ProvidersPage />}

        {/* Requests Page */}
        {activeNav === 'requests' && <RequestsPage />}

        {/* Reports Page */}
        {activeNav === 'reports' && <ReportsPage />}
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router';
import { ProviderApp as ProviderAppContent } from '../components/provider-app/provider-app';
import { ArrowLeft } from 'lucide-react';

export default function ProviderApp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-4">
      {/* Mobile Container - Everything stays inside */}
      <div className="w-full max-w-[393px] min-h-screen bg-white shadow-2xl relative overflow-hidden">
        {/* App Content */}
        <ProviderAppContent />

        {/* Back to Admin Button - Fixed at bottom inside mobile container */}
        <button
          onClick={() => navigate('/')}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl shadow-2xl hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-[100]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Admin
        </button>
      </div>
    </div>
  );
}
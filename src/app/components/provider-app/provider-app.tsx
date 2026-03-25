import { useState } from 'react';
import { LoginScreen } from './login-screen';
import { HomeScreen } from './home-screen';
import { IncomingRequestScreen } from './incoming-request-screen';
import { ActiveJobScreen } from './active-job-screen';
import { JobCompletionScreen } from './job-completion-screen';
import { SideMenu } from './side-menu';
import { JobsPage } from './jobs-page';
import { HistoryPage } from './history-page';
import { EarningsPage } from './earnings-page';
import { ProfilePage } from './profile-page';
import { SettingsPage } from './settings-page';
import { HelpPage } from './help-page';
import { BottomNav } from './bottom-nav';

type AppPage = 'home' | 'jobs' | 'history' | 'earnings' | 'profile' | 'settings' | 'help';
type AppScreen = 'login' | 'page' | 'incoming-request' | 'active-job' | 'job-completion';

export function ProviderApp() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [activeTab, setActiveTab] = useState<'home' | 'jobs' | 'history' | 'profile'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    setCurrentScreen('page');
    setCurrentPage('home');
    setIsLoggedIn(true);
  };

  const handleRequestReceived = () => {
    setCurrentScreen('incoming-request');
  };

  const handleAcceptRequest = () => {
    setCurrentScreen('active-job');
    setActiveTab('jobs');
  };

  const handleDeclineRequest = () => {
    setCurrentScreen('page');
    setCurrentPage('home');
    setActiveTab('home');
  };

  const handleCompleteJob = () => {
    setCurrentScreen('job-completion');
  };

  const handleSubmitReport = () => {
    setCurrentScreen('page');
    setCurrentPage('home');
    setActiveTab('home');
  };

  const handleTabChange = (tab: 'home' | 'jobs' | 'history' | 'profile') => {
    setActiveTab(tab);
    setCurrentScreen('page');
    
    // Map bottom nav tabs to pages
    if (tab === 'home') {
      setCurrentPage('home');
    } else if (tab === 'jobs') {
      setCurrentPage('jobs');
    } else if (tab === 'history') {
      setCurrentPage('history');
    } else if (tab === 'profile') {
      setCurrentPage('profile');
    }
  };

  const handleMenuNavigate = (page: string) => {
    setCurrentPage(page as AppPage);
    setCurrentScreen('page');
    
    // Update bottom nav tab when navigating from menu
    if (page === 'home') {
      setActiveTab('home');
    } else if (page === 'jobs') {
      setActiveTab('jobs');
    } else if (page === 'history') {
      setActiveTab('history');
    } else if (page === 'profile') {
      setActiveTab('profile');
    } else {
      // For pages not in bottom nav (earnings, settings, help)
      // Keep the current tab active or default to home
      setActiveTab('home');
    }
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50 relative">
      {/* Login Screen */}
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      
      {/* Main Pages with Menu */}
      {currentScreen === 'page' && (
        <>
          {currentPage === 'home' && (
            <HomeScreen onRequestReceived={handleRequestReceived} onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'jobs' && (
            <JobsPage onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'history' && (
            <HistoryPage onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'earnings' && (
            <EarningsPage onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'profile' && (
            <ProfilePage onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'settings' && (
            <SettingsPage onMenuOpen={handleMenuOpen} />
          )}
          
          {currentPage === 'help' && (
            <HelpPage onMenuOpen={handleMenuOpen} />
          )}

          {/* Side Menu */}
          <SideMenu
            isOpen={isMenuOpen}
            onClose={handleMenuClose}
            onNavigate={handleMenuNavigate}
            currentPage={currentPage}
          />
        </>
      )}
      
      {/* Incoming Request Screen (no menu) */}
      {currentScreen === 'incoming-request' && (
        <IncomingRequestScreen
          onAccept={handleAcceptRequest}
          onDecline={handleDeclineRequest}
        />
      )}
      
      {/* Active Job Screen (no menu during active job) */}
      {currentScreen === 'active-job' && (
        <ActiveJobScreen onComplete={handleCompleteJob} />
      )}
      
      {/* Job Completion Screen */}
      {currentScreen === 'job-completion' && (
        <JobCompletionScreen onSubmit={handleSubmitReport} />
      )}

      {/* Bottom Navigation - Only show when logged in and not on certain screens */}
      {isLoggedIn && currentScreen === 'page' && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}

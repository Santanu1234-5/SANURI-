import { useState } from 'react';
import { HomeView } from './views/HomeView';
import { AuthView } from './views/AuthView';
import { DashboardView } from './views/DashboardView';
import { NexusAIView } from './views/NexusAIView';
import { ProfileView } from './views/ProfileView';
import { AIAssistant } from './components/AIAssistant';
import { ScrollAnimation } from './components/ScrollAnimation';

export type AppView = 'home' | 'login' | 'register' | 'forgot-password' | 'reset-password' | 'dashboard' | 'nexus-input' | 'nexus-result' | 'profile';

export interface UserProfile {
  fullName: string;
  email: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleLogin = (userData: UserProfile) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const renderView = () => {
    const requiresAuth = ['dashboard', 'nexus-input', 'nexus-result', 'profile'];
    const actualView = (requiresAuth.includes(currentView) && !user) ? 'login' : currentView;

    switch(actualView) {
      case 'home': return <HomeView onNavigate={setCurrentView} />;
      case 'login':
      case 'register':
      case 'forgot-password':
      case 'reset-password':
        return <AuthView view={actualView} onNavigate={setCurrentView} onLogin={handleLogin} />;
      case 'dashboard': return <DashboardView onNavigate={setCurrentView} user={user!} onLogout={handleLogout} />;
      case 'nexus-input':
      case 'nexus-result':
        return <NexusAIView view={actualView} onNavigate={setCurrentView} onLogout={handleLogout} />;
      case 'profile': return <ProfileView onNavigate={setCurrentView} user={user!} onLogout={handleLogout} />;
      default: return <HomeView onNavigate={setCurrentView} />;
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-white font-sans overflow-x-hidden selection:bg-indigo-500/30 relative">
      <ScrollAnimation />
      <div className="relative z-10 bg-[#05050A]/70 min-h-screen">
        {renderView()}
        <AIAssistant onNavigate={setCurrentView} />
      </div>
    </div>
  );
}

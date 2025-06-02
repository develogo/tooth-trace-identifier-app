
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import ContactScreen from '@/components/ContactScreen';
import IdentificationScreen from '@/components/IdentificationScreen';
import ReportsScreen from '@/components/ReportsScreen';
import LoginForm from '@/components/LoginForm';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Componente Principal da Aplicação - Dentefier Mobile
 * Aplicação Móvel de Odontologia Forense para o curso TADS035
 * Fornece navegação entre as telas principais do sistema
 */
const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'identification' | 'reports' | 'about' | 'contact'>('home');
  const { user, logout, isAuthenticated } = useAuth();
  const [showLoginForScreen, setShowLoginForScreen] = useState<string | null>(null);

  const handleScreenChange = (screen: 'home' | 'identification' | 'reports' | 'about' | 'contact') => {
    // Verificar se a tela requer autenticação
    if ((screen === 'identification' || screen === 'reports') && !isAuthenticated) {
      setShowLoginForScreen(screen);
      return;
    }
    
    setActiveScreen(screen);
    setShowLoginForScreen(null);
  };

  const handleLoginSuccess = () => {
    if (showLoginForScreen) {
      setActiveScreen(showLoginForScreen as any);
      setShowLoginForScreen(null);
    }
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNavigate={handleScreenChange} />;
      case 'identification':
        return isAuthenticated ? <IdentificationScreen /> : <div>Acesso negado</div>;
      case 'reports':
        return isAuthenticated ? <ReportsScreen /> : <div>Acesso negado</div>;
      case 'about':
        return <AboutScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen onNavigate={handleScreenChange} />;
    }
  };

  // Se está tentando acessar uma tela protegida sem estar logado
  if (showLoginForScreen) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Container do App Móvel */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md mx-auto bg-black relative">
          {/* Simulação da Barra de Status (Móvel) */}
          <div className="h-6 bg-black text-white text-xs flex items-center justify-between px-4">
            <span>9:41</span>
            <span>Dentefier</span>
            <span>🔋 100%</span>
          </div>

          {/* Cabeçalho do App */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-xl font-bold text-yellow-500">Dentefier</h1>
                <p className="text-sm text-gray-400">Identificação Odontológica Forense</p>
              </div>
              
              {isAuthenticated && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <User size={14} />
                    <span>{user?.name}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={logout}
                    className="text-gray-400 hover:text-yellow-500 p-1"
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Área de Conteúdo Principal */}
          <div className="flex-1 px-4 py-4 pb-20 overflow-y-auto min-h-[calc(100vh-140px)] bg-black">
            {renderScreen()}
          </div>

          {/* Navegação Inferior (Móvel) */}
          <Navigation activeScreen={activeScreen} onScreenChange={handleScreenChange} />
        </div>
      </div>
    </div>
  );
};

export default Index;

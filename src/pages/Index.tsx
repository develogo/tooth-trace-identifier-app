
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import ContactScreen from '@/components/ContactScreen';
import IdentificationScreen from '@/components/IdentificationScreen';
import ReportsScreen from '@/components/ReportsScreen';

/**
 * Componente Principal da Aplicação - Dentefier Mobile
 * Aplicação Móvel de Odontologia Forense para o curso TADS035
 * Fornece navegação entre as telas principais do sistema
 */
const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'identification' | 'reports' | 'about' | 'contact'>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNavigate={setActiveScreen} />;
      case 'identification':
        return <IdentificationScreen />;
      case 'reports':
        return <ReportsScreen />;
      case 'about':
        return <AboutScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Container do App Móvel */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md mx-auto bg-gray-50 relative">
          {/* Simulação da Barra de Status (Móvel) */}
          <div className="h-6 bg-black text-white text-xs flex items-center justify-between px-4">
            <span>9:41</span>
            <span>Dentefier</span>
            <span>🔋 100%</span>
          </div>

          {/* Cabeçalho do App */}
          <div className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
            <div className="text-center">
              <h1 className="text-xl font-bold text-dental-800">Dentefier</h1>
              <p className="text-sm text-gray-600">Identificação Odontológica Forense</p>
            </div>
          </div>

          {/* Área de Conteúdo Principal */}
          <div className="flex-1 px-4 py-4 pb-20 overflow-y-auto min-h-[calc(100vh-140px)]">
            {renderScreen()}
          </div>

          {/* Navegação Inferior (Móvel) */}
          <Navigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
        </div>
      </div>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import ContactScreen from '@/components/ContactScreen';

/**
 * Main Application Component - Dentefier
 * Forensic Dentistry Mobile Application for TADS035 course
 * Provides navigation between Home, About, and Contact screens
 */
const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'about' | 'contact'>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'about':
        return <AboutScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile App Container */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md md:max-w-4xl mx-auto bg-gray-50 relative">
          {/* Status Bar Simulation (Mobile) */}
          <div className="md:hidden h-6 bg-black text-white text-xs flex items-center justify-between px-4">
            <span>9:41 AM</span>
            <span>Dentefier</span>
            <span>100%</span>
          </div>

          {/* App Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-4 md:py-6">
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800 md:text-2xl">Dentefier</h1>
              <p className="text-sm text-gray-600 md:text-base">Forensic Dentistry Assistant</p>
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <div className="hidden md:block px-4 py-4 bg-white border-b border-gray-200">
            <Navigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 px-4 py-6 pb-24 md:pb-6 overflow-y-auto">
            {renderScreen()}
          </div>

          {/* Bottom Navigation (Mobile) */}
          <div className="md:hidden">
            <Navigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-500 bg-white border-t border-gray-200">
        © 2024 Dentefier - TADS035 Course Project | Forensic Dentistry Solutions
      </footer>
    </div>
  );
};

export default Index;

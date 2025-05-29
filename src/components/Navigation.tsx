
import React from 'react';
import { Home, Info, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeScreen: 'home' | 'about' | 'contact';
  onScreenChange: (screen: 'home' | 'about' | 'contact') => void;
}

/**
 * Navigation component for mobile app simulation
 * Provides tab-based navigation between Home, About, and Contact screens
 */
const Navigation: React.FC<NavigationProps> = ({ activeScreen, onScreenChange }) => {
  const navItems = [
    {
      id: 'home' as const,
      label: 'Home',
      icon: Home,
    },
    {
      id: 'about' as const,
      label: 'About',
      icon: Info,
    },
    {
      id: 'contact' as const,
      label: 'Contact',
      icon: Phone,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:bg-transparent md:border-0 md:p-0 md:mb-8">
      <div className="flex justify-around md:justify-center md:gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200",
                "md:flex-row md:gap-2 md:px-6 md:py-3",
                isActive
                  ? "text-dental-600 bg-dental-50 md:bg-dental-600 md:text-white"
                  : "text-gray-500 hover:text-dental-600 hover:bg-dental-50"
              )}
            >
              <Icon size={20} className="md:size-5" />
              <span className="text-xs font-medium md:text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;


import React from 'react';
import { Home, Search, FileText, Info, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeScreen: 'home' | 'identification' | 'reports' | 'about' | 'contact';
  onScreenChange: (screen: 'home' | 'identification' | 'reports' | 'about' | 'contact') => void;
}

/**
 * Componente de navegação inferior para app móvel
 * Fornece navegação por abas entre as telas principais
 */
const Navigation: React.FC<NavigationProps> = ({ activeScreen, onScreenChange }) => {
  const navItems = [
    {
      id: 'home' as const,
      label: 'Início',
      icon: Home,
    },
    {
      id: 'identification' as const,
      label: 'Identificar',
      icon: Search,
    },
    {
      id: 'reports' as const,
      label: 'Relatórios',
      icon: FileText,
    },
    {
      id: 'about' as const,
      label: 'Sobre',
      icon: Info,
    },
    {
      id: 'contact' as const,
      label: 'Contato',
      icon: Phone,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-2 py-2 shadow-lg">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1",
                isActive
                  ? "text-dental-600 bg-dental-50"
                  : "text-gray-500 hover:text-dental-600 hover:bg-dental-50"
              )}
            >
              <Icon size={20} />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;


import React from 'react';
import { Home, Search, FileText, Info, Phone, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

interface NavigationProps {
  activeScreen: 'home' | 'identification' | 'reports' | 'about' | 'contact';
  onScreenChange: (screen: 'home' | 'identification' | 'reports' | 'about' | 'contact') => void;
}

/**
 * Componente de navegação inferior para app móvel
 * Fornece navegação por abas entre as telas principais
 */
const Navigation: React.FC<NavigationProps> = ({ activeScreen, onScreenChange }) => {
  const { isAuthenticated } = useAuth();
  
  const navItems = [
    {
      id: 'home' as const,
      label: 'Início',
      icon: Home,
      requiresAuth: false,
    },
    {
      id: 'identification' as const,
      label: 'Identificar',
      icon: Search,
      requiresAuth: true,
    },
    {
      id: 'reports' as const,
      label: 'Relatórios',
      icon: FileText,
      requiresAuth: true,
    },
    {
      id: 'about' as const,
      label: 'Sobre',
      icon: Info,
      requiresAuth: false,
    },
    {
      id: 'contact' as const,
      label: 'Contato',
      icon: Phone,
      requiresAuth: false,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray-900 border-t border-gray-800 px-2 py-2 shadow-lg">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          const isLocked = item.requiresAuth && !isAuthenticated;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1 relative",
                isActive
                  ? "text-yellow-500 bg-gray-800"
                  : isLocked
                  ? "text-gray-600 hover:text-gray-500"
                  : "text-gray-400 hover:text-yellow-500 hover:bg-gray-800"
              )}
            >
              <div className="relative">
                <Icon size={20} />
                {isLocked && (
                  <Lock size={12} className="absolute -top-1 -right-1 text-gray-600" />
                )}
              </div>
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;

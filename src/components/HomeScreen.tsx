
import React from 'react';
import { Search, FileText, Users, Shield, ArrowRight, Microscope } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: 'identification' | 'reports' | 'about' | 'contact') => void;
}

/**
 * Componente da Tela Inicial Mobile
 * Dashboard principal com acesso rápido às funcionalidades
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const quickActions = [
    {
      icon: Search,
      title: 'Nova Identificação',
      description: 'Iniciar processo de identificação odontológica',
      action: () => onNavigate('identification'),
      color: 'bg-dental-600'
    },
    {
      icon: FileText,
      title: 'Relatórios',
      description: 'Visualizar relatórios e histórico',
      action: () => onNavigate('reports'),
      color: 'bg-dental-700'
    }
  ];

  const features = [
    {
      icon: Microscope,
      title: 'Análise Científica',
      description: 'Ferramentas avançadas para exame dental'
    },
    {
      icon: Shield,
      title: 'Padrões Forenses',
      description: 'Compatível com protocolos internacionais'
    },
    {
      icon: Users,
      title: 'Rede Profissional',
      description: 'Conecte-se com especialistas'
    }
  ];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Seção Hero */}
      <div className="dental-gradient rounded-2xl p-6 text-black relative overflow-hidden">
        <div className="forensic-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center animate-pulse-dental">
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Bem-vindo ao Dentefier</h1>
              <p className="text-black/80 text-sm">Sistema de Identificação Forense</p>
            </div>
          </div>
          
          <p className="text-base leading-relaxed mb-4">
            Seu assistente digital para identificação odontológica forense. 
            Simplificando o processo investigativo para profissionais.
          </p>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Ações Rápidas</h2>
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.action}
              className="w-full bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-800 hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-white">{action.title}</h3>
                  <p className="text-gray-400 text-sm">{action.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Recursos do Sistema */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Recursos Principais</h2>
        <div className="space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-800"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-dental-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-dental-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-800">
        <h3 className="font-semibold text-white mb-3">Status do Sistema</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-dental-500">24</div>
            <div className="text-xs text-gray-400">Casos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-dental-500">156</div>
            <div className="text-xs text-gray-400">Identificações</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

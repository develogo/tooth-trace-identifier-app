
import React from 'react';
import { Microscope, Shield, Users, ArrowRight } from 'lucide-react';

/**
 * Componente da Tela Inicial
 * Exibe mensagem de boas-vindas, propósito do app e imagens relevantes de odontologia forense
 */
const HomeScreen: React.FC = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Análise Científica',
      description: 'Ferramentas avançadas para exame de evidências dentárias'
    },
    {
      icon: Shield,
      title: 'Padrões Forenses',
      description: 'Compatível com protocolos forenses internacionais'
    },
    {
      icon: Users,
      title: 'Rede Profissional',
      description: 'Conecte-se com especialistas em odontologia forense'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Seção Hero */}
      <div className="dental-gradient rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
        <div className="forensic-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-dental">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Dentefier</h1>
              <p className="text-blue-100 text-sm md:text-base">Assistente de Odontologia Forense</p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed mb-6 md:text-xl">
            Bem-vindo ao seu companheiro digital abrangente para identificação odontológica forense. 
            Simplificando o processo de investigação odontológica para profissionais.
          </p>
          
          <div className="flex items-center gap-2 text-blue-100">
            <span className="text-sm">Parte do Curso TADS035</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Seção Propósito do App */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Propósito e Missão</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          O Dentefier foi projetado para auxiliar profissionais forenses no processo crítico de 
          identificação odontológica durante investigações forenses. Nosso app fornece 
          ferramentas e recursos essenciais para apoiar a análise precisa e eficiente de evidências dentárias.
        </p>
        <div className="bg-dental-50 rounded-lg p-4 border-l-4 border-dental-500">
          <p className="text-dental-800 font-medium text-sm">
            🦷 Apoiando profissionais de odontologia forense na entrega de justiça através 
            de métodos científicos de identificação dentária.
          </p>
        </div>
      </div>

      {/* Grade de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 bg-dental-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-dental-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;


import React from 'react';
import { BookOpen, GraduationCap, Award, Target, Smartphone } from 'lucide-react';

/**
 * Componente da Tela Sobre - Versão Mobile
 * Informações sobre o app Dentefier Mobile
 */
const AboutScreen: React.FC = () => {
  const aboutSections = [
    {
      icon: Smartphone,
      title: 'Aplicação Mobile',
      content: 'Versão mobile do sistema Dentefier, otimizada para uso em campo e laboratório, permitindo mobilidade durante os procedimentos forenses.'
    },
    {
      icon: GraduationCap,
      title: 'Base Acadêmica',
      content: 'Desenvolvido como parte do currículo do curso TADS035, garantindo rigor acadêmico e padrões profissionais na educação em odontologia forense.'
    },
    {
      icon: Target,
      title: 'Missão Principal',
      content: 'Apoiar processos de identificação dental forense fornecendo aos profissionais ferramentas confiáveis e metodologias cientificamente fundamentadas.'
    },
    {
      icon: Award,
      title: 'Padrões Profissionais',
      content: 'Construído seguindo protocolos internacionais de odontologia forense e melhores práticas reconhecidas mundialmente.'
    }
  ];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Cabeçalho */}
      <div className="text-center">
        <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">Sobre o Dentefier</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Solução mobile para identificação odontológica forense, 
          desenvolvida para o curso TADS035
        </p>
      </div>

      {/* Card Principal */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Visão Geral</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            O Dentefier Mobile representa a evolução da identificação odontológica forense, 
            oferecendo uma interface otimizada para dispositivos móveis que permite aos 
            profissionais realizar procedimentos de identificação em qualquer local.
          </p>
          
          <p>
            Como parte do <span className="font-semibold text-dental-600">curso TADS035</span>, 
            esta aplicação demonstra a integração entre tecnologia mobile e ciência forense, 
            conectando conhecimento acadêmico com as necessidades práticas do campo.
          </p>

          <div className="bg-dental-50 rounded-lg p-3 border border-dental-200">
            <h3 className="font-semibold text-dental-800 mb-2 text-sm">Funcionalidades Principais</h3>
            <ul className="text-dental-700 text-xs space-y-1">
              <li>• Captura de evidências fotográficas em campo</li>
              <li>• Odontograma digital interativo</li>
              <li>• Sistema de comparação e matching</li>
              <li>• Geração de relatórios técnicos</li>
              <li>• Sincronização com bancos de dados forenses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seções de Recursos */}
      <div className="space-y-3">
        {aboutSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-dental-100 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-dental-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{section.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Informações do Curso */}
      <div className="bg-gradient-to-r from-dental-50 to-forensic-50 rounded-xl p-4 border border-dental-200">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Projeto do Curso TADS035</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Esta aplicação mobile demonstra conceitos avançados em tecnologia forense 
            e desenvolvimento de aplicações móveis para uso profissional em campo.
          </p>
        </div>
      </div>

      {/* Versão e Informações Técnicas */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Informações Técnicas</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Versão:</span>
            <div className="font-medium text-gray-800">1.0.0 Mobile</div>
          </div>
          <div>
            <span className="text-gray-500">Plataforma:</span>
            <div className="font-medium text-gray-800">React Native</div>
          </div>
          <div>
            <span className="text-gray-500">Última Atualização:</span>
            <div className="font-medium text-gray-800">Janeiro 2024</div>
          </div>
          <div>
            <span className="text-gray-500">Compatibilidade:</span>
            <div className="font-medium text-gray-800">iOS / Android</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;

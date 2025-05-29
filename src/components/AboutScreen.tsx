
import React from 'react';
import { BookOpen, GraduationCap, Award, Target } from 'lucide-react';

/**
 * Componente da Tela Sobre
 * Fornece informações detalhadas sobre o app, contexto do curso e suporte à odontologia forense
 */
const AboutScreen: React.FC = () => {
  const aboutSections = [
    {
      icon: GraduationCap,
      title: 'Base Acadêmica',
      content: 'Desenvolvido como parte do currículo do curso TADS035, garantindo rigor acadêmico e padrões profissionais na educação em odontologia forense.'
    },
    {
      icon: Target,
      title: 'Missão Principal',
      content: 'Nosso objetivo principal é apoiar processos de identificação dental forense fornecendo aos profissionais ferramentas confiáveis e metodologias cientificamente fundamentadas.'
    },
    {
      icon: Award,
      title: 'Padrões Profissionais',
      content: 'Construído seguindo protocolos internacionais de odontologia forense e melhores práticas reconhecidas por associações profissionais mundiais.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Seção Cabeçalho */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl">Sobre o Dentefier</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Uma solução digital abrangente projetada para avançar as práticas de odontologia forense 
          e apoiar processos profissionais de identificação.
        </p>
      </div>

      {/* Card de Conteúdo Principal */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Visão Geral da Aplicação</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            O Dentefier representa a interseção entre tecnologia e ciência forense, 
            especificamente adaptado para processos de identificação odontológica. Esta aplicação 
            serve como um kit de ferramentas abrangente para profissionais de odontologia forense trabalhando 
            em cenários investigativos.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Como parte do <span className="font-semibold text-dental-600">curso TADS035</span>, 
            este projeto demonstra a aplicação prática de soluções digitais em 
            contextos forenses, conectando conhecimento teórico com necessidades profissionais do mundo real.
          </p>

          <div className="bg-forensic-50 rounded-lg p-4 border border-forensic-200">
            <h3 className="font-semibold text-forensic-800 mb-2">Principais Capacidades</h3>
            <ul className="text-forensic-700 text-sm space-y-1">
              <li>• Abordagem sistemática para documentação de evidências dentárias</li>
              <li>• Integração com protocolos estabelecidos de identificação forense</li>
              <li>• Recursos educacionais para desenvolvimento profissional contínuo</li>
              <li>• Fluxo de trabalho simplificado para processos investigativos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção de Recursos */}
      <div className="space-y-4">
        {aboutSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-dental-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-dental-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Informações do Curso */}
      <div className="mt-8 bg-gradient-to-r from-dental-50 to-forensic-50 rounded-xl p-6 border border-dental-200">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Projeto do Curso TADS035</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Esta aplicação demonstra conceitos avançados em tecnologia forense, 
            mostrando a integração de ferramentas digitais em fluxos de trabalho profissionais de odontologia forense.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;

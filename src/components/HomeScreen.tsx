
import React from 'react';
import { Microscope, Shield, Users, ArrowRight } from 'lucide-react';

/**
 * Home Screen Component
 * Displays welcome message, app purpose, and relevant forensic dentistry imagery
 */
const HomeScreen: React.FC = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Scientific Analysis',
      description: 'Advanced tools for dental evidence examination'
    },
    {
      icon: Shield,
      title: 'Forensic Standards',
      description: 'Compliant with international forensic protocols'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Connect with forensic dentistry experts'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="dental-gradient rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
        <div className="forensic-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-dental">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Dentefier</h1>
              <p className="text-blue-100 text-sm md:text-base">Forensic Dentistry Assistant</p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed mb-6 md:text-xl">
            Welcome to your comprehensive digital companion for forensic dental identification. 
            Streamlining the odontological investigation process for professionals.
          </p>
          
          <div className="flex items-center gap-2 text-blue-100">
            <span className="text-sm">Part of TADS035 Course</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* App Purpose Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Purpose & Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Dentefier is designed to assist forensic professionals in the critical process of 
          odontological identification during forensic investigations. Our app provides 
          essential tools and resources to support accurate and efficient dental evidence analysis.
        </p>
        <div className="bg-dental-50 rounded-lg p-4 border-l-4 border-dental-500">
          <p className="text-dental-800 font-medium text-sm">
            🦷 Supporting forensic dentistry professionals in delivering justice through 
            scientific dental identification methods.
          </p>
        </div>
      </div>

      {/* Features Grid */}
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

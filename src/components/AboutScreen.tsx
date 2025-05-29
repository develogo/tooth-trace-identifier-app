
import React from 'react';
import { BookOpen, GraduationCap, Award, Target } from 'lucide-react';

/**
 * About Screen Component
 * Provides detailed information about the app, course context, and forensic dentistry support
 */
const AboutScreen: React.FC = () => {
  const aboutSections = [
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      content: 'Developed as part of the TADS035 course curriculum, ensuring academic rigor and professional standards in forensic dentistry education.'
    },
    {
      icon: Target,
      title: 'Core Mission',
      content: 'Our primary goal is to support forensic dental identification processes by providing professionals with reliable, scientifically-backed tools and methodologies.'
    },
    {
      icon: Award,
      title: 'Professional Standards',
      content: 'Built following international forensic dentistry protocols and best practices recognized by professional associations worldwide.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl">About Dentefier</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A comprehensive digital solution designed to advance forensic dentistry practices 
          and support professional identification processes.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Application Overview</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Dentefier represents the intersection of technology and forensic science, 
            specifically tailored for odontological identification processes. This application 
            serves as a comprehensive toolkit for forensic dentistry professionals working 
            in investigative scenarios.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            As part of the <span className="font-semibold text-dental-600">TADS035 course</span>, 
            this project demonstrates the practical application of digital solutions in 
            forensic contexts, bridging theoretical knowledge with real-world professional needs.
          </p>

          <div className="bg-forensic-50 rounded-lg p-4 border border-forensic-200">
            <h3 className="font-semibold text-forensic-800 mb-2">Key Capabilities</h3>
            <ul className="text-forensic-700 text-sm space-y-1">
              <li>• Systematic approach to dental evidence documentation</li>
              <li>• Integration with established forensic identification protocols</li>
              <li>• Educational resources for continuous professional development</li>
              <li>• Streamlined workflow for investigative processes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Course Information */}
      <div className="mt-8 bg-gradient-to-r from-dental-50 to-forensic-50 rounded-xl p-6 border border-dental-200">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">TADS035 Course Project</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            This application demonstrates advanced concepts in forensic technology, 
            showcasing the integration of digital tools in professional forensic dentistry workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;

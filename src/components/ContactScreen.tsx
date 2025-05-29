
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * Contact Screen Component
 * Provides contact form and professional contact information
 */
const ContactScreen: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'forensic.dental@tads035.edu',
      description: 'Professional inquiries and support'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Emergency forensic consultation'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Forensic Sciences Department',
      description: 'TADS035 Research Center'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get in touch with our forensic dentistry team for professional support, 
          inquiries, or collaboration opportunities.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 bg-dental-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-dental-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{info.label}</h3>
              <p className="text-dental-600 font-medium mb-1">{info.value}</p>
              <p className="text-gray-500 text-xs">{info.description}</p>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Dr. John Smith"
                required
                className="border-gray-200 focus:border-dental-500 focus:ring-dental-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.smith@example.com"
                required
                className="border-gray-200 focus:border-dental-500 focus:ring-dental-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your inquiry, consultation needs, or how we can assist with your forensic dentistry requirements..."
              rows={5}
              required
              className="border-gray-200 focus:border-dental-500 focus:ring-dental-500 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-dental-600 hover:bg-dental-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-6 p-4 bg-dental-50 rounded-lg border border-dental-200">
          <div className="flex items-center gap-2 text-dental-800">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Response Guarantee</span>
          </div>
          <p className="text-dental-700 text-xs mt-1">
            We respond to all professional inquiries within 24-48 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;

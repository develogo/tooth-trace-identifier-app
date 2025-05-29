
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * Componente da Tela de Contato - Versão Mobile
 * Formulário de contato otimizado para dispositivos móveis
 */
const ContactScreen: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    
    // Simular envio
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada",
        description: "Sua mensagem foi enviada com sucesso. Retornaremos em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'suporte@dentefier.com.br',
      action: 'mailto:suporte@dentefier.com.br'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 9876-5432',
      action: 'tel:+5511987654321'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo - SP',
      action: null
    }
  ];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Cabeçalho */}
      <div className="text-center">
        <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">Contato</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Entre em contato conosco para suporte técnico, 
          dúvidas ou colaborações
        </p>
      </div>

      {/* Informações de Contato Rápido */}
      <div className="grid grid-cols-1 gap-3">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dental-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-dental-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{info.label}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-dental-600 font-medium text-sm hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Formulário de Contato */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Envie uma Mensagem</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Telefone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(11) 99999-9999"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Assunto *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Sobre o que você gostaria de falar?"
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Mensagem *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Descreva sua dúvida, sugestão ou necessidade..."
              rows={4}
              required
              className="mt-1 resize-none"
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
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-4 p-3 bg-dental-50 rounded-lg border border-dental-200">
          <div className="flex items-center gap-2 text-dental-800">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Resposta Garantida</span>
          </div>
          <p className="text-dental-700 text-xs mt-1">
            Respondemos todas as mensagens em até 24 horas úteis.
          </p>
        </div>
      </div>

      {/* Suporte Técnico */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Suporte Técnico</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Segunda a Sexta: 8h às 18h</p>
          <p>• Emergências: Plantão 24h</p>
          <p>• Tempo de resposta: Até 4 horas</p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;


import React, { useState } from 'react';
import { Camera, Upload, Search, User, Calendar, MapPin, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * Tela de Identificação Odontológica
 * Permite capturar dados e realizar identificações
 */
const IdentificationScreen: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    caseNumber: '',
    location: '',
    date: '',
    examiner: '',
    observations: '',
    dentalCharacteristics: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    toast({
      title: "Dados Salvos",
      description: "As informações foram salvas com sucesso.",
    });
  };

  const handleCapture = (type: string) => {
    toast({
      title: `${type} Capturada`,
      description: "Imagem adicionada ao caso.",
    });
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Cabeçalho */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Nova Identificação</h1>
        <p className="text-gray-600 text-sm">Registro de caso odontológico forense</p>
      </div>

      {/* Formulário Principal */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="caseNumber" className="text-sm font-medium text-gray-700">
              Nº do Caso
            </Label>
            <Input
              id="caseNumber"
              name="caseNumber"
              value={formData.caseNumber}
              onChange={handleInputChange}
              placeholder="CF-2024-001"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="date" className="text-sm font-medium text-gray-700">
              Data
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location" className="text-sm font-medium text-gray-700">
            Local do Exame
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Instituto Médico Legal - São Paulo"
              className="mt-1 pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="examiner" className="text-sm font-medium text-gray-700">
            Examinador Responsável
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              id="examiner"
              name="examiner"
              value={formData.examiner}
              onChange={handleInputChange}
              placeholder="Dr. João Silva - CRO 12345"
              className="mt-1 pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="dentalCharacteristics" className="text-sm font-medium text-gray-700">
            Características Dentárias
          </Label>
          <Textarea
            id="dentalCharacteristics"
            name="dentalCharacteristics"
            value={formData.dentalCharacteristics}
            onChange={handleInputChange}
            placeholder="Descreva as características observadas..."
            rows={3}
            className="mt-1 resize-none"
          />
        </div>

        <div>
          <Label htmlFor="observations" className="text-sm font-medium text-gray-700">
            Observações Gerais
          </Label>
          <Textarea
            id="observations"
            name="observations"
            value={formData.observations}
            onChange={handleInputChange}
            placeholder="Anotações adicionais sobre o caso..."
            rows={3}
            className="mt-1 resize-none"
          />
        </div>
      </div>

      {/* Captura de Imagens */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Captura de Evidências</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={() => handleCapture('Foto')}
            className="bg-dental-600 hover:bg-dental-700 text-white flex items-center gap-2 py-3"
          >
            <Camera className="w-4 h-4" />
            Capturar Foto
          </Button>
          <Button 
            onClick={() => handleCapture('Radiografia')}
            variant="outline"
            className="border-dental-600 text-dental-600 hover:bg-dental-50 flex items-center gap-2 py-3"
          >
            <Upload className="w-4 h-4" />
            Upload Arquivo
          </Button>
        </div>
      </div>

      {/* Odontograma Simplificado */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Odontograma</h3>
        <div className="grid grid-cols-8 gap-1 mb-2">
          {Array.from({ length: 16 }, (_, i) => (
            <button
              key={i}
              className="w-8 h-8 border border-gray-300 rounded text-xs hover:bg-dental-50 transition-colors"
            >
              {i + 11}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 16 }, (_, i) => (
            <button
              key={i + 16}
              className="w-8 h-8 border border-gray-300 rounded text-xs hover:bg-dental-50 transition-colors"
            >
              {i + 31}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">Toque nos dentes para marcar características</p>
      </div>

      {/* Ações */}
      <div className="flex gap-3">
        <Button 
          onClick={handleSave}
          className="flex-1 bg-dental-600 hover:bg-dental-700 text-white flex items-center justify-center gap-2 py-3"
        >
          <Save className="w-4 h-4" />
          Salvar Caso
        </Button>
        <Button 
          variant="outline"
          className="flex-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex items-center justify-center gap-2 py-3"
        >
          <Search className="w-4 h-4" />
          Buscar Match
        </Button>
      </div>
    </div>
  );
};

export default IdentificationScreen;

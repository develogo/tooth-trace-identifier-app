
import React, { useState } from 'react';
import { FileText, Calendar, User, MapPin, Eye, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Tela de Relatórios e Histórico
 * Visualização de casos e relatórios gerados
 */
const ReportsScreen: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const mockReports = [
    {
      id: 'CF-2024-001',
      title: 'Identificação Vítima Acidente Rodoviário',
      date: '2024-01-15',
      status: 'completed',
      examiner: 'Dr. João Silva',
      location: 'IML - São Paulo',
      match: '98.5%'
    },
    {
      id: 'CF-2024-002',
      title: 'Caso Criminal - Homicídio',
      date: '2024-01-12',
      status: 'pending',
      examiner: 'Dra. Maria Santos',
      location: 'IML - Rio de Janeiro',
      match: 'Em análise'
    },
    {
      id: 'CF-2024-003',
      title: 'Identificação Desaparecido',
      date: '2024-01-10',
      status: 'completed',
      examiner: 'Dr. Carlos Lima',
      location: 'IML - Brasília',
      match: '89.2%'
    }
  ];

  const filteredReports = mockReports.filter(report => 
    filter === 'all' || report.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'pending':
        return 'Pendente';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Cabeçalho */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Relatórios</h1>
        <p className="text-gray-600 text-sm">Histórico de casos e identificações</p>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filtrar por status:</span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="text-xs"
          >
            Todos
          </Button>
          <Button
            size="sm"
            variant={filter === 'completed' ? 'default' : 'outline'}
            onClick={() => setFilter('completed')}
            className="text-xs"
          >
            Concluídos
          </Button>
          <Button
            size="sm"
            variant={filter === 'pending' ? 'default' : 'outline'}
            onClick={() => setFilter('pending')}
            className="text-xs"
          >
            Pendentes
          </Button>
        </div>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
          <div className="text-xl font-bold text-dental-600">12</div>
          <div className="text-xs text-gray-600">Total Casos</div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
          <div className="text-xl font-bold text-emerald-600">8</div>
          <div className="text-xs text-gray-600">Concluídos</div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
          <div className="text-xl font-bold text-yellow-600">4</div>
          <div className="text-xs text-gray-600">Pendentes</div>
        </div>
      </div>

      {/* Lista de Relatórios */}
      <div className="space-y-3">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-dental-600">{report.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {getStatusText(report.status)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{report.title}</h3>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>{new Date(report.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3 h-3" />
                <span>{report.examiner}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>{report.location}</span>
              </div>
              {report.status === 'completed' && (
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  <span>Match: {report.match}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="outline" className="flex-1 text-xs">
                <Eye className="w-3 h-3 mr-1" />
                Visualizar
              </Button>
              {report.status === 'completed' && (
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-8">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum relatório encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ReportsScreen;

import { 
  Heart, 
  Brain, 
  Baby, 
  Stethoscope, 
  Activity, 
  Eye,
  Bone,
  Pill
} from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      name: 'Cardiologia',
      description: 'Cuidados especializados para o coração e sistema cardiovascular.',
    },
    {
      icon: <Brain className="h-10 w-10 text-purple-500" />,
      name: 'Psiquiatria',
      description: 'Tratamento de transtornos mentais e emocionais com profissionais experientes.',
    },
    {
      icon: <Baby className="h-10 w-10 text-pink-500" />,
      name: 'Pediatria',
      description: 'Acompanhamento completo da saúde de bebês, crianças e adolescentes.',
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-blue-500" />,
      name: 'Clínico Geral',
      description: 'Atendimento médico geral para diagnóstico e tratamento de diversas condições.',
    },
    {
      icon: <Activity className="h-10 w-10 text-green-500" />,
      name: 'Endocrinologia',
      description: 'Tratamento de doenças hormonais e metabólicas como diabetes e tireoide.',
    },
    {
      icon: <Eye className="h-10 w-10 text-indigo-500" />,
      name: 'Dermatologia',
      description: 'Cuidados com a pele, cabelos e unhas com tratamentos especializados.',
    },
    {
      icon: <Bone className="h-10 w-10 text-orange-500" />,
      name: 'Ortopedia',
      description: 'Tratamento de lesões e doenças do sistema musculoesquelético.',
    },
    {
      icon: <Pill className="h-10 w-10 text-teal-500" />,
      name: 'Ginecologia',
      description: 'Saúde da mulher com acompanhamento ginecológico e obstétrico.',
    },
  ];

  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos com uma equipe multidisciplinar de profissionais especializados para atender 
            todas as suas necessidades de saúde.
          </p>
        </div>

        {/* Grid de Especialidades */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200"
            >
              <div className="flex justify-center mb-4">
                {specialty.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                {specialty.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informação Adicional */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            E muitas outras especialidades disponíveis. Entre em contato para mais informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

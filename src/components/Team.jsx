import { User } from 'lucide-react';

const Team = () => {
  const professionals = [
    {
      name: 'Dr. Carlos Almeida',
      specialty: 'Endocrinologista',
      crm: 'CRM-BA 12345',
      bio: 'Médico com 15 anos de experiência, focado no tratamento de doenças metabólicas e hormonais.',
    },
    {
      name: 'Dra. Marina Santos',
      specialty: 'Cardiologista',
      crm: 'CRM-BA 23456',
      bio: 'Especialista em cardiologia clínica e preventiva, dedicada ao cuidado cardiovascular.',
    },
    {
      name: 'Dr. Roberto Silva',
      specialty: 'Pediatra',
      crm: 'CRM-BA 34567',
      bio: 'Pediatra experiente com foco no desenvolvimento saudável de crianças e adolescentes.',
    },
    {
      name: 'Dra. Juliana Costa',
      specialty: 'Dermatologista',
      crm: 'CRM-BA 45678',
      bio: 'Dermatologista especializada em tratamentos estéticos e clínicos da pele.',
    },
    {
      name: 'Dr. Fernando Oliveira',
      specialty: 'Ortopedista',
      crm: 'CRM-BA 56789',
      bio: 'Ortopedista com expertise em cirurgias e tratamentos de lesões musculoesqueléticas.',
    },
    {
      name: 'Dra. Patrícia Lima',
      specialty: 'Ginecologista',
      crm: 'CRM-BA 67890',
      bio: 'Ginecologista e obstetra dedicada à saúde integral da mulher em todas as fases da vida.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa equipe de profissionais altamente qualificados e comprometidos com sua saúde.
          </p>
        </div>

        {/* Grid de Profissionais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Informações */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {professional.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {professional.specialty}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {professional.crm}
                </p>
                <p className="text-sm text-gray-600">
                  {professional.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

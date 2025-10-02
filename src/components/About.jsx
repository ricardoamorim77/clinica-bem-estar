import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: 'Cuidado Humanizado',
      description: 'Tratamos cada paciente com atenção, respeito e empatia, priorizando o bem-estar integral.',
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e experientes em diversas especialidades médicas.',
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Excelência em Atendimento',
      description: 'Compromisso com a qualidade e segurança em todos os nossos serviços e procedimentos.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a Clínica Bem-Estar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Clínica Bem-Estar é uma instituição de saúde comprometida em oferecer atendimento médico 
            de excelência com valores acessíveis. Nossa missão é proporcionar cuidados seguros e imediatos 
            para toda a família.
          </p>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer aos nossos pacientes um atendimento seguro, ágil e humanizado, com valores 
                acessíveis, contribuindo para a promoção da saúde e bem-estar da comunidade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como referência em atendimento médico de qualidade, destacando-se 
                pela excelência profissional e pela satisfação dos nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

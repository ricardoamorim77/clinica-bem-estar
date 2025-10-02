import { Button } from '@/components/ui/button.jsx';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-600 to-green-500 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cuidando da sua saúde com excelência
            </h1>
            <p className="text-lg md:text-xl text-blue-50">
              A Clínica Bem-Estar oferece atendimento médico de qualidade com profissionais especializados 
              e estrutura moderna para cuidar de você e sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                onClick={scrollToAppointment}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Imagem/Placeholder */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-xl font-semibold">Sua saúde em boas mãos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

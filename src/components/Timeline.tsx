
import { useEffect, useRef } from 'react';
import { History } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "10000 a.C.",
      title: "Primeiros Habitantes",
      description: "Evidências arqueológicas indicam a presença humana na América do Sul há pelo menos 12 mil anos, com grupos nômades de caçadores-coletores."
    },
    {
      year: "5000 a.C.",
      title: "Desenvolvimento Agrícola",
      description: "Início do cultivo de plantas como mandioca, milho e batata-doce, permitindo o estabelecimento de comunidades mais permanentes."
    },
    {
      year: "1000 a.C.",
      title: "Expansão Tupi-Guarani",
      description: "Povos de língua Tupi-Guarani expandem-se pelo território brasileiro, especialmente ao longo da costa e rios principais."
    },
    {
      year: "1500",
      title: "Chegada dos Europeus",
      description: "A chegada dos portugueses marca o início de profundas transformações para os povos originários, incluindo epidemias, escravização e perda territorial."
    },
    {
      year: "1549-1759",
      title: "Missões Jesuíticas",
      description: "Jesuítas estabelecem missões religiosas, resultando em aldeamentos e mudanças culturais significativas para muitas comunidades indígenas."
    },
    {
      year: "1755",
      title: "Diretório dos Índios",
      description: "Política de Marquês de Pombal promove a integração dos indígenas à sociedade colonial através da língua portuguesa e casamentos interétnicos."
    },
    {
      year: "1910",
      title: "Criação do SPI",
      description: "Fundação do Serviço de Proteção aos Índios, primeira agência governamental dedicada às questões indígenas no Brasil."
    },
    {
      year: "1967",
      title: "Fundação da FUNAI",
      description: "Criação da Fundação Nacional do Índio em substituição ao SPI, assumindo a responsabilidade pela proteção e promoção dos direitos indígenas."
    },
    {
      year: "1988",
      title: "Constituição Federal",
      description: "A nova Constituição reconhece os direitos originários dos povos indígenas sobre suas terras tradicionais e garante o respeito às suas culturas."
    },
    {
      year: "2007",
      title: "Declaração da ONU",
      description: "Brasil adota a Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas, fortalecendo compromissos internacionais."
    },
    {
      year: "Atual",
      title: "Resistência e Luta",
      description: "Povos indígenas continuam sua luta pela demarcação de terras, preservação cultural e reconhecimento dos seus direitos fundamentais."
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="history" className="py-24 bg-white dark:bg-forest-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <History className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">História e Cultura</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              A história dos povos originários do Brasil é rica e complexa, remontando a milhares de anos antes da chegada dos europeus. 
              Estas populações desenvolveram sofisticados conhecimentos sobre a flora, fauna e o manejo sustentável dos recursos naturais.
              Sua trajetória é marcada por resistência e adaptação frente às diversas pressões exercidas ao longo dos séculos.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline Center Line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-forest-300 dark:bg-forest-700"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item relative">
                  {/* Year Indicator */}
                  <div className={`
                    md:absolute md:left-1/2 md:transform md:-translate-x-1/2
                    flex items-center justify-center
                    w-8 h-8 md:w-10 md:h-10 rounded-full
                    mb-4 md:mb-0
                    ${index % 2 === 0 ? 'ml-8 md:ml-0' : 'ml-8 md:ml-0'}
                    bg-forest-600 dark:bg-forest-500 
                    text-white font-bold
                    z-10
                  `}>
                    <span className="text-sm">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className={`
                    relative ml-16 md:ml-0
                    md:w-5/12
                    glass-card p-5
                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                    border-l-4 border-forest-500
                  `}>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-forest-100 dark:bg-forest-800 text-forest-800 dark:text-forest-200 text-sm font-medium">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-2">{event.title}</h3>
                    <p className="text-forest-600 dark:text-forest-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Elements */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-forest-800 dark:text-forest-200 mb-6">
              Elementos Culturais Importantes
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Cultural Element 1 */}
              <div className="glass-card hover-scale p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
                  Arte e Artesanato
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Pinturas corporais, cerâmica, cestaria, plumária e outros objetos que expressam a cosmovisão e identidade cultural de cada povo.
                </p>
              </div>

              {/* Cultural Element 2 */}
              <div className="glass-card hover-scale p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
                  Rituais e Cerimônias
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Práticas que marcam momentos importantes como nascimento, passagem para a vida adulta, casamentos e conexão com o mundo espiritual.
                </p>
              </div>

              {/* Cultural Element 3 */}
              <div className="glass-card hover-scale p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
                  Tradição Oral
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Mitos, lendas e histórias transmitidas oralmente entre gerações, preservando conhecimentos, valores e explicações sobre o mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

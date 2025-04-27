
import { useEffect, useRef } from 'react';
import { History } from 'lucide-react';
import '../styles/flipCard.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "Antes de 1500",
      title: "Formação do Povo Krenak",
      description: "O povo Krenak tem suas origens no Vale do Rio Doce, em Minas Gerais. Desde tempos imemoriais, os Krenak viveram em estreita conexão com a natureza, desenvolvendo uma cultura rica e única, marcada por sua espiritualidade e respeito pelos recursos naturais. A organização social e a sabedoria ancestral foram passadas de geração em geração, preservando seu modo de vida e seus valores."
    },
    {
      year: "1500",
      title: "Chegada dos Portugueses",
      description: "A chegada dos portugueses marca o início de uma era de transformações drásticas para os Krenak. Além do impacto das doenças trazidas pelos colonizadores, o povo Krenak sofre com o desmatamento e a perda de territórios, resultando em deslocamentos forçados."
    },
    {
      year: "1750",
      title: "Início da Pressão Colonizadora",
      description: "O avanço das frentes de colonização e a busca por recursos naturais no interior do Brasil levam à intensificação do contato com o povo Krenak. A exploração das terras indígenas para a agricultura e mineração resulta em conflitos, mudanças no modo de vida e a redução de suas terras."
    },
    {
      year: "1830",
      title: "Expulsão Forçada e Perda de Território",
      description: "Durante o período imperial, os Krenak enfrentam a expulsão de suas terras para dar lugar a atividades agrícolas e urbanização. O povo Krenak é forçado a migrar para outras regiões, resultando em uma fragmentação de seu território ancestral."
    },
    {
      year: "1889-1930",
      title: "Desafios da República e Política Indigenista",
      description: "No início da República, os Krenak são submetidos a políticas assimilacionistas que visam a integração forçada às comunidades não indígenas. A língua Borun e os costumes tradicionais são reprimidos, enquanto as terras indígenas continuam sendo alvo de disputas e usurpação."
    },
    {
      year: "1960-1980",
      title: "Resistência e Luta pela Cultura",
      description: "Em meio a um contexto de crescente pressão para assimilação, o povo Krenak começa a resistir ativamente e reforça a importância da preservação de sua língua, cultura e modo de vida. A resistência cultural inclui a retomada de práticas espirituais, rituais e o fortalecimento da educação indígena."
    },
    {
      year: "1988",
      title: "Constituição Federal e Direitos Indígenas",
      description: "Com a promulgação da Constituição de 1988, o Brasil reconhece oficialmente os direitos territoriais e culturais dos povos indígenas, incluindo os Krenak, garantindo a proteção de suas terras e a preservação de sua cultura. Esse marco jurídico é um passo importante para a defesa dos direitos indígenas."
    },
    {
      year: "1990-2000",
      title: "Revitalização da Língua Borun",
      description: "Nos anos 1990 e 2000, o povo Krenak adota iniciativas para revitalizar a língua Borun, por meio de programas educacionais e culturais que buscam transmitir o idioma para as novas gerações, essencial para a preservação da identidade e dos saberes tradicionais."
    },
    {
      year: "2007",
      title: "Reconhecimento e Apoio Internacional",
      description: "O Brasil adota a Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas, que fortalece o compromisso do país com os direitos dos Krenak e de outros povos originários. A partir disso, há um maior reconhecimento internacional da luta pela preservação cultural e territorial."
    },
    {
      year: "Atual",
      title: "Luta Pela Demarcação de Terras e Reconhecimento Cultural",
      description: "A luta pela demarcação das terras tradicionais continua sendo uma das maiores bandeiras do povo Krenak. Além disso, há um crescente esforço em afirmar a identidade Krenak por meio da educação, arte e cultura, buscando garantir a preservação de suas tradições para as futuras gerações."
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
            A história do povo Krenak é marcada por uma conexão profunda com a natureza e uma rica tradição cultural. Originários de Minas Gerais, os Krenak desenvolveram vastos conhecimentos sobre a flora, fauna e os ciclos naturais. Sua trajetória é um exemplo de resistência, com enfrentamentos constantes para preservar sua identidade e território. Apesar dos desafios impostos pelo contato com os europeus e a sociedade externa, o povo Krenak manteve-se firme em seus saberes ancestrais. A cultura Krenak reflete um equilíbrio harmonioso entre o homem e a natureza, fundamental para sua sobrevivência e continuidade. Seu legado é uma rica expressão de resistência e adaptação.
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
    <div className="relative group w-full h-[400px]">
  <div className="flip-card w-full h-full">
    <div className="flip-card-inner w-full h-full">

      {/* Frente */}
      <div className="flip-card-front p-6 flex flex-col justify-center items-center w-full h-full bg-white dark:bg-forest-800 rounded-lg shadow-lg">
        <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
          Arte e Artesanato Krenak
        </h4>
        <p className="text-forest-600 dark:text-forest-400 text-center">
          O artesanato Krenak é uma expressão profunda de sua conexão com a natureza. A cestaria, a cerâmica e as pinturas corporais são algumas das formas de arte que representam sua cosmovisão.
        </p>
      </div>

      {/* Verso */}
      <div className="flip-card-back w-full h-full bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://www.letrasambientais.org.br/img/posts/Indigenas_e_epidemias.jpg')" }}>
      </div>

    </div>
  </div>
</div>

<div className="relative group w-full h-[400px]">
  <div className="flip-card w-full h-full">
    <div className="flip-card-inner w-full h-full">

      {/* Frente */}
      <div className="flip-card-front p-6 flex flex-col justify-center items-center w-full h-full bg-white dark:bg-forest-800 rounded-lg shadow-lg">
        <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        </div>
        <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
        Rituais de Conexão Espiritual
        </h4>
        <p className="text-forest-600 dark:text-forest-400 text-center">
        Os rituais Krenak são fundamentais para fortalecer a conexão com os espíritos da natureza. As cerimônias de passagem, como o ritual de iniciação para a vida adulta, são momentos de aprendizado profundo e de fortalecimento da relação espiritual com a terra e seus ancestrais.
        </p>
      </div>

      {/* Verso */}
      <div className="flip-card-back w-full h-full bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://museuindiavanuire.org.br/wp-content/uploads/2020/12/4-m1-1024x672.jpg')" }}>
      </div>

    </div>
  </div>
</div>


<div className="relative group w-full h-[400px]">
  <div className="flip-card w-full h-full">
    <div className="flip-card-inner w-full h-full">

      {/* Frente */}
      <div className="flip-card-front p-6 flex flex-col justify-center items-center w-full h-full bg-white dark:bg-forest-800 rounded-lg shadow-lg">
        <div className="mb-4 h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
        <h4 className="text-lg font-semibold text-forest-800 dark:text-forest-200 mb-2">
        Tradição Oral Krenak
        </h4>
        <p className="text-forest-600 dark:text-forest-400 text-center">
        As histórias Krenak, transmitidas oralmente, são uma rica fonte de conhecimento e sabedoria ancestral. Elas explicam a origem do mundo, o papel dos seres humanos na natureza e os mitos que fundamentam a identidade cultural, sendo um elo vital entre as gerações passadas e futuras.
        </p>
      </div>

      {/* Verso */}
      <div className="flip-card-back w-full h-full bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://fotocapixaba.wordpress.com/wp-content/uploads/2015/08/icon669132.jpg')" }}>
      </div>

    </div>
  </div>
</div>

  
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;

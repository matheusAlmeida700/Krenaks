
import { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';

interface Contribution {
  area: string;
  title: string;
  description: string;
  icon: string;
}

const Contributions = () => {
  const contributionsRef = useRef<HTMLDivElement>(null);

  const contributions: Contribution[] = [
    {
      area: "Medicina",
      title: "Plantas Medicinais",
      description: "O conhecimento indígena sobre plantas medicinais contribuiu para o desenvolvimento de diversos medicamentos modernos. Por exemplo, o curare, usado por diversos povos amazônicos em suas flechas, levou ao desenvolvimento de relaxantes musculares usados em cirurgias.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      area: "Agricultura",
      title: "Técnicas Agrícolas Sustentáveis",
      description: "Técnicas como o cultivo consorciado (plantar diferentes espécies juntas), manejo de áreas de floresta para agricultura (como os sistemas agroflorestais) e conhecimentos sobre a fertilidade do solo influenciaram a agricultura moderna e práticas agroecológicas.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      area: "Alimentação",
      title: "Diversidade Alimentar",
      description: "Os povos indígenas domesticaram e desenvolveram variedades de alimentos fundamentais para a dieta global, como mandioca, milho, batata-doce, amendoim, abacaxi e diversas frutas. Suas técnicas de processamento de alimentos também foram fundamentais.",
      icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
    },
    {
      area: "Ecologia",
      title: "Conservação Ambiental",
      description: "Os territórios indígenas são reconhecidos como áreas fundamentais para a conservação da biodiversidade. Estudos comprovam que áreas habitadas e geridas por povos tradicionais apresentam menores taxas de desmatamento e maior biodiversidade.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      area: "Farmacologia",
      title: "Princípios Ativos",
      description: "Muitos princípios ativos importantes foram descobertos a partir do conhecimento indígena sobre plantas, como a quinina (usada contra a malária), o jaborandi (usado em medicamentos para glaucoma) e a copaíba (com propriedades anti-inflamatórias).",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      area: "Tecnologia",
      title: "Inovações Práticas",
      description: "Diversas tecnologias indígenas foram adaptadas para uso moderno, como canoas, redes de dormir, técnicas de cestaria e cerâmica. A borracha, usada pelos indígenas da Amazônia, tornou-se fundamental para a revolução industrial.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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

    const contributionItems = document.querySelectorAll('.contribution-item');
    contributionItems.forEach(item => {
      item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(item);
    });

    return () => {
      contributionItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="contributions" className="py-24 bg-forest-50 dark:bg-forest-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigenous-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">Contribuições para a Modernidade</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              Os povos indígenas do Brasil desenvolveram ao longo dos séculos conhecimentos profundos sobre o meio ambiente, medicina natural, agricultura sustentável e tecnologias adaptadas ao seu modo de vida.
              Muitas dessas contribuições foram absorvidas pela sociedade moderna e são fundamentais para diversos avanços científicos e tecnológicos atuais.
            </p>
          </div>
          
          {/* Contributions Grid */}
          <div ref={contributionsRef} className="grid md:grid-cols-2 gap-6">
            {contributions.map((item, index) => (
              <div key={index} className="contribution-item glass-card p-6 hover-scale">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  
                  <div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-forest-100 dark:bg-forest-800 text-forest-700 dark:text-forest-300 text-sm font-medium">
                        {item.area}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-2">{item.title}</h3>
                    <p className="text-forest-600 dark:text-forest-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 indigenous-border p-6">
            <h3 className="text-center text-xl font-semibold text-forest-800 dark:text-forest-200 mb-4">
              Reconhecimento e Propriedade Intelectual
            </h3>
            <p className="text-center text-forest-600 dark:text-forest-400">
              É importante reconhecer que muitos dos conhecimentos tradicionais indígenas foram apropriados sem o devido crédito ou compensação. 
              Atualmente, há um movimento crescente para proteger os direitos de propriedade intelectual dos povos originários e garantir que 
              recebam o reconhecimento e benefícios justos por suas contribuições.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;

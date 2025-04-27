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
      area: "Tecnologia Sustentável",
      title: "Manejo Inteligente de Recursos Naturais",
      description: "O povo Krenak domina técnicas ancestrais de uso sustentável da água, do solo e das florestas. Suas práticas inspiram hoje soluções tecnológicas baseadas na biomimética e na permacultura, essenciais para um futuro mais equilibrado.",
      icon: "M12 2a10 10 0 00-7.07 17.07 10 10 0 0014.14 0A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z"
    },
    {
      area: "Medicina Tradicional",
      title: "Conhecimento de Plantas e Curandeirismo",
      description: "Os saberes medicinais Krenak, preservados através de gerações, oferecem alternativas naturais para tratamentos e inspiram a ciência moderna no desenvolvimento de fitoterápicos e pesquisas sobre biodiversidade.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      area: "Alimentação e Agricultura",
      title: "Cultivo de Alimentos Nativos",
      description: "Os Krenak cultivam e preservam espécies nativas como o milho crioulo e a mandioca, práticas que hoje são pilares dos movimentos de soberania alimentar, agroecologia e valorização da biodiversidade brasileira.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m12-6l2 2-2 2M6 8l2-2 2 2M18 8l2-2-2-2M6 16l2 2 2-2"
    },
    {
      area: "Preservação Ambiental",
      title: "Visão Holística da Natureza",
      description: "Para os Krenak, rios, florestas e montanhas são seres vivos. Essa cosmovisão inspira projetos de preservação ambiental, mudanças nas políticas públicas e a construção de uma ética ecológica mais profunda no Brasil moderno.",
      icon: "M3 3h18v18H3V3zm9 16a7 7 0 100-14 7 7 0 000 14z"
    },
    {
      area: "Direitos Humanos",
      title: "Inspiradores da Luta por Justiça e Território",
      description: "A resistência histórica dos Krenak frente à opressão territorial impulsiona movimentos contemporâneos de direitos indígenas, ambientais e sociais, reforçando a democracia e a pluralidade cultural no Brasil.",
      icon: "M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 9a3 3 0 11-6 0 3 3 0 016 0zm6 9a6 6 0 016-6h6a6 6 0 016 6v3H6v-3a6 6 0 016-6z"
    },
    {
      area: "Educação e Transmissão de Saberes",
      title: "Ensino pela Oralidade e Experiência",
      description: "A educação tradicional Krenak, baseada na oralidade e na vivência direta com a natureza, inspira metodologias pedagógicas alternativas que valorizam a experiência, a criatividade e o respeito à diversidade cultural.",
      icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
    }
  ];
  
  // Animation on scroll + 3D effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
  
    const contributionItems = document.querySelectorAll<HTMLDivElement>('.contribution-item');
  
    contributionItems.forEach(item => {
      item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'relative', 'overflow-hidden');
  
      const highlight = document.createElement('div');
      highlight.style.position = 'absolute';
      highlight.style.top = '0';
      highlight.style.left = '0';
      highlight.style.width = '100%';
      highlight.style.height = '100%';
      highlight.style.pointerEvents = 'none';
      highlight.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 60%)';
      highlight.style.opacity = '0';
      highlight.style.transition = 'opacity 0.3s ease, background-position 0.1s ease';
      item.appendChild(highlight);
  
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      let animationFrameId: number;
  
      const maxRotation = 15;
  
      const updateTransform = () => {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        item.style.transform = `rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
        animationFrameId = requestAnimationFrame(updateTransform);
      };
  
      const handleMouseMove = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * maxRotation;
        const rotateY = ((x - centerX) / centerX) * maxRotation;
        targetX = rotateY;
        targetY = rotateX;
  
        // Atualizar o brilho
        const posX = (x / rect.width) * 100;
        const posY = (y / rect.height) * 100;
        highlight.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
        highlight.style.opacity = '1';
      };
  
      const handleMouseLeave = () => {
        targetX = 0;
        targetY = 0;
        highlight.style.opacity = '0';
      };
  
      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseleave', handleMouseLeave);
  
      updateTransform(); // inicia animação contínua
  
      item.style.transition = 'transform 0.2s ease';
  
      // Cleanup
      item.addEventListener('mouseleave', () => {
        cancelAnimationFrame(animationFrameId);
      });
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
          <h2 className="section-title">Importância e Contribuição dos Krenak</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              O povo Krenak, habitante das margens do Rio Doce, construiu uma rica história de resistência, saberes e espiritualidade.
              Suas contribuições para a preservação ambiental, a valorização da diversidade cultural e a luta pelos direitos indígenas 
              são um exemplo inspirador para todo o Brasil.
            </p>
          </div>
          
          {/* Contributions Grid */}
          <div ref={contributionsRef} className="grid md:grid-cols-2 gap-6">
            {contributions.map((item, index) => (
              <div key={index} className="contribution-item glass-card p-6 transition-transform duration-300 ease-out hover:scale-105">
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
              Reconhecimento e Direitos Indígenas
            </h3>
            <p className="text-center text-forest-600 dark:text-forest-400">
              A história dos Krenak é também a história da luta pela demarcação de terras, pelo respeito à cultura e pela sobrevivência frente aos desafios modernos.
              Honrar os saberes indígenas é construir um futuro mais justo e plural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;

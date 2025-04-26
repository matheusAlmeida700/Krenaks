import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Languages } from 'lucide-react';

interface LanguageInfo {
  name: string;
  family: string;
  speakers: string;
  region: string;
  description: string;
}

const Languages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const indigenousLanguages: LanguageInfo[] = [
    {
      name: "Tupi-Guarani",
      family: "Família Tupi",
      speakers: "~25,000",
      region: "Sul, Sudeste, Centro-Oeste",
      description: "O Tupi-Guarani é uma das línguas indígenas mais influentes na formação do português brasileiro. Muitas palavras do nosso vocabulário têm origem Tupi, como abacaxi, mandioca, pipoca, etc."
    },
    {
      name: "Yanomami",
      family: "Família Yanomami",
      speakers: "~35,000",
      region: "Norte (Amazonas e Roraima)",
      description: "A língua Yanomami é falada pelos Yanomami, um dos maiores povos indígenas relativamente isolados. É uma língua complexa com várias entonações e sons que são difíceis para falantes não-nativos."
    },
    {
      name: "Xavante",
      family: "Família Jê",
      speakers: "~18,000",
      region: "Centro-Oeste (Mato Grosso)",
      description: "O Xavante possui uma fonética única e padrões gramaticais complexos. A tradição oral é muito importante para transmitir a cultura e o conhecimento ancestral."
    },
    {
      name: "Karajá",
      family: "Família Macro-Jê",
      speakers: "~3,000",
      region: "Centro-Oeste e Norte (Tocantins, Goiás, Mato Grosso)",
      description: "O Karajá tem a particularidade de apresentar diferenças na fala entre homens e mulheres, fenômeno raro nas línguas mundiais."
    },
    {
      name: "Tikuna",
      family: "Língua Isolada",
      speakers: "~50,000",
      region: "Norte (Amazonas)",
      description: "É a língua indígena com maior número de falantes no Brasil. É considerada uma língua tonal, onde a entonação pode mudar o significado da palavra."
    }
  ];

  const nextSlide = () => {
    if (currentIndex === indigenousLanguages.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(indigenousLanguages.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="languages" className="py-24 bg-forest-50 dark:bg-forest-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigenous-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-3 mb-12">
          <Languages className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">Línguas Indígenas</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Introduction text */}
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              O Brasil possui uma grande riqueza linguística indígena, com cerca de 274 línguas ainda faladas hoje. 
              Estas línguas representam um tesouro cultural e de conhecimento ecológico tradicional.
              Infelizmente, muitas delas estão em risco de extinção devido à redução populacional, 
              pressões culturais e falta de transmissão para as novas gerações.
            </p>
          </div>
          
          {/* Language Slider */}
          <div className="relative overflow-hidden">
            <div
              ref={slideRef}
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {indigenousLanguages.map((language, index) => (
                  <div 
                    key={language.name} 
                    className="min-w-full p-4"
                  >
                    <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800">
                      <div className="indigenous-border inline-block px-4 py-1 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                          {language.name}
                        </h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="mb-6">
                            <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-4">
                              {language.description}
                            </p>
                          </div>
                          
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                              <span className="text-forest-600 dark:text-forest-400 font-medium w-28">Família:</span>
                              <span className="text-forest-800 dark:text-forest-200">{language.family}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <span className="text-forest-600 dark:text-forest-400 font-medium w-28">Falantes:</span>
                              <span className="text-forest-800 dark:text-forest-200">{language.speakers}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <span className="text-forest-600 dark:text-forest-400 font-medium w-28">Região:</span>
                              <span className="text-forest-800 dark:text-forest-200">{language.region}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative h-64">
                          <div className="absolute inset-0 bg-forest-600/10 dark:bg-forest-700/20 rounded-lg flex items-center justify-center">
                            {/* Placeholder for language sample */}
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto rounded-full bg-forest-600/20 dark:bg-forest-600/30 flex items-center justify-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                              </div>
                              <p className="text-sm text-forest-700 dark:text-forest-300">Amostra de áudio disponível em breve</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white dark:bg-forest-800 p-3 rounded-full shadow-md hover:bg-forest-100 dark:hover:bg-forest-700 transition-colors z-10"
            >
              <ArrowLeft className="h-5 w-5 text-forest-600 dark:text-forest-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white dark:bg-forest-800 p-3 rounded-full shadow-md hover:bg-forest-100 dark:hover:bg-forest-700 transition-colors z-10"
            >
              <ArrowRight className="h-5 w-5 text-forest-600 dark:text-forest-300" />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {indigenousLanguages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-forest-600 dark:bg-forest-400 w-8' 
                    : 'bg-forest-300 dark:bg-forest-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Languages as LanguagesIcon,
} from "lucide-react";
import Borun from "../../assets/songs/borun.mp3";
import Swal from "sweetalert2";

const Languages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <section
      id="languages"
      className="py-24 bg-forest-50 dark:bg-forest-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-indigenous-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-3 mb-12">
          <LanguagesIcon className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">Línguas Krenak</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              O Brasil possui uma vasta riqueza de línguas indígenas, um tesouro
              cultural e de saber tradicional. O povo Krenak preserva sua
              língua, o Krenak (Borun), crucial para sua identidade. Embora o
              português seja amplamente falado, a língua Krenak enfrenta
              desafios de preservação. Valorizar ambas as línguas é essencial
              para entender a cultura Krenak.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={slideRef}
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Slide 1 - Borun */}
              <div className="min-w-full p-4">
                <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800">
                  <div className="indigenous-border inline-block px-4 py-1 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                      Borun
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-4">
                        Para os Krenak, o Borun é a essência de sua identidade e
                        ancestralidade, transmitindo saberes e histórias. É
                        símbolo de resistência e crucial para a preservação
                        cultural. A revitalização do Borun é prioridade para
                        garantir a continuidade da identidade Krenak.
                      </p>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                          <span className="text-forest-600 dark:text-forest-400 font-medium w-28">
                            Família:
                          </span>
                          <span className="text-forest-800 dark:text-forest-200">
                            Macro-Jê
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-forest-600 dark:text-forest-400 font-medium w-28">
                            Falantes:
                          </span>
                          <span className="text-forest-800 dark:text-forest-200">
                            ~1000
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-forest-600 dark:text-forest-400 font-medium w-28">
                            Região:
                          </span>
                          <span className="text-forest-800 dark:text-forest-200">
                            Minas Gerais
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-forest-600/10 dark:bg-forest-700/20 rounded-lg flex flex-col-reverse gap-5 items-center justify-start pb-4">
                        <audio controls className="w-3/4 max-w-md">
                          <source src={Borun} type="audio/mpeg" />
                          Seu navegador não suporta o elemento de áudio.
                        </audio>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto rounded-full bg-forest-600/20 dark:bg-forest-600/30 flex items-center justify-center mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-forest-600 dark:text-forest-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-forest-700 dark:text-forest-300">
                            Amostra de áudio disponível
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Português */}
              <div className="min-w-full p-4">
                <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800">
                  <div className="indigenous-border inline-block px-4 py-1 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                      Português
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-4">
                        O português é a língua majoritária entre os Krenak,
                        especialmente os mais jovens. Tornou-se a principal
                        língua fora do lar e na educação. Para muitas crianças,
                        é a primeira língua, impactando a transmissão do Borun.
                        Apesar da predominância do português, os Krenak
                        valorizam sua língua materna como identidade cultural.
                        Há um crescente esforço para revitalizar o Borun através
                        da educação bilíngue e iniciativas comunitárias.
                      </p>
                    </div>

                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-forest-600/10 dark:bg-forest-700/20 rounded-lg flex flex-col-reverse gap-5 items-center justify-start">
                        <img
                          className="h-[400px] w-full text-center rounded-lg"
                          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGZmaAjwN_PlMvp96MLcnnCeaJ0y77hsKQFG-viHqjBBUhwvJ2kukTYW5WG-gJQ9aceFEfrDqhWd2f8P0dou-Yjgw7mSNHfnIoZjkrxKo0Hph-Cd7xQ6gS2swpMc4ZN1g_sYjLHuB-o5Q/s1600/krenak.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Importância */}
              <div className="min-w-full p-4">
                <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800">
                  <div className="indigenous-border inline-block px-4 py-1 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                      Importância do Borun
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-4">
                        Manter o Borun é vital para a herança Krenak,
                        preservando sua história única. Fortalece a cultura,
                        transmitindo rituais e saberes ancestrais. Assegura o
                        legado para as futuras gerações, mantendo viva sua
                        identidade. Cria um forte vínculo comunitário, unindo os
                        membros através da língua. Promove a união e a
                        resistência cultural diante de influências externas. O
                        Borun é a alma do povo Krenak, sua voz e sua essência.
                      </p>
                    </div>

                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-forest-600/10 dark:bg-forest-700/20 rounded-lg flex flex-col-reverse gap-5 items-center justify-start">
                        <img
                          className="h-[400px] w-full text-center rounded-lg"
                          src="https://img.socioambiental.org/d/216091-1/krenak_2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 - Revitalização Linguística */}
              <div className="min-w-full p-4">
                <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800">
                  <div className="indigenous-border inline-block px-4 py-1 mb-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                      Revitalização Linguística
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-4">
                        O povo Krenak tem investido em projetos de revitalização
                        da língua Borun, incluindo a criação de materiais
                        didáticos, oficinas comunitárias e ensino bilíngue nas
                        escolas indígenas. Jovens e anciãos se unem para
                        fortalecer a transmissão oral, gravando histórias e
                        músicas tradicionais. A língua é celebrada em eventos
                        culturais, reafirmando a identidade e resistência do
                        povo Krenak diante das ameaças à sua cultura.
                      </p>

                      <div className="flex flex-col space-y-2 mt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-forest-600 dark:text-forest-400 font-medium">
                            Iniciativas:
                          </span>
                          <span className="text-forest-800 dark:text-forest-200">
                            Educação bilíngue, oficinas culturais
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-forest-600 dark:text-forest-400 font-medium">
                            Objetivo:
                          </span>
                          <span className="text-forest-800 dark:text-forest-200">
                            Preservação e fortalecimento do Borun
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-forest-600/10 dark:bg-forest-700/20 rounded-lg flex flex-col-reverse gap-5 items-center justify-start">
                        <img
                          className="h-[400px] w-full object-cover rounded-lg"
                          src="https://museuindiavanuire.org.br/wp-content/uploads/2020/12/10-m1.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 5 - Curiosidades Krenak (Interativo) */}
              <div className="min-w-full ">
                <div className="glass-card p-8 h-full shadow-lg border border-forest-200 dark:border-forest-800 flex flex-col md:flex-row items-center gap-6">
                  {/* Parte Esquerda - Texto + Quiz */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="indigenous-border inline-block px-4 mb-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-forest-800 dark:text-forest-200">
                        Você sabia?
                      </h3>
                    </div>

                    <p className="text-forest-600 dark:text-forest-400 text-lg leading-relaxed mb-2">
                      A língua Borun carrega conhecimentos milenares sobre o
                      meio ambiente, plantas medicinais e espiritualidade.
                      Preservar essa língua é preservar também uma forma única
                      de entender o mundo. Vamos testar seus conhecimentos?
                    </p>

                    {/* Mini Quiz */}
                    <div className="bg-forest-100 dark:bg-forest-800 p-4 rounded-lg shadow-inner space-y-3">
                      <p className="text-forest-700 dark:text-forest-300 font-medium">
                        Qual é a família linguística do Borun?
                      </p>
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() =>
                            Swal.fire("Quase!", "Tente de novo.", "error")
                          }
                          className="bg-white dark:bg-forest-700 text-forest-800 dark:text-forest-200 rounded-md px-4 py-2 hover:bg-forest-200 dark:hover:bg-forest-600 transition"
                        >
                          Tupi-Guarani
                        </button>
                        <button
                          onClick={() =>
                            Swal.fire(
                              "Isso mesmo!",
                              "Borun pertence à família Macro-Jê!",
                              "success"
                            )
                          }
                          className="bg-white dark:bg-forest-700 text-forest-800 dark:text-forest-200 rounded-md px-4 py-2 hover:bg-forest-200 dark:hover:bg-forest-600 transition"
                        >
                          Macro-Jê
                        </button>
                        <button
                          onClick={() =>
                            Swal.fire(
                              "Não é essa!",
                              "Borun pertence à família Macro-Jê.",
                              "error"
                            )
                          }
                          className="bg-white dark:bg-forest-700 text-forest-800 dark:text-forest-200 rounded-md px-4 py-2 hover:bg-forest-200 dark:hover:bg-forest-600 transition"
                        >
                          Aruak
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Parte Direita - Imagem */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=431,fit=crop/YBg8WGo2R4hZl3ZO/ailton-krenak-entre-os-yanomami.-foto---claudia-andujar-dOqNe6M54XI8NOO2.png"
                        alt="Conhecimento ancestral"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
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
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-forest-600 dark:bg-forest-400 w-8"
                    : "bg-forest-300 dark:bg-forest-700"
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

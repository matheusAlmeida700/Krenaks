
import { Flag, Info } from 'lucide-react';

interface Right {
  title: string;
  description: string;
  basis: string;
}

interface Challenge {
  title: string;
  description: string;
}

const RightsSection = () => {
  const indigenousRights: Right[] = [
    {
      title: "Direito às Terras Tradicionais",
      description: "Os povos indígenas têm direito às terras que tradicionalmente ocupam, sendo dever da União demarcá-las, protegê-las e fazer respeitar todos os seus bens.",
      basis: "Art. 231, Constituição Federal"
    },
    {
      title: "Organização Social, Costumes e Línguas",
      description: "Reconhecimento da organização social, costumes, línguas, crenças e tradições dos povos indígenas.",
      basis: "Art. 231, caput, Constituição Federal"
    },
    {
      title: "Direitos Originários sobre as Terras",
      description: "São reconhecidos aos indígenas os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União demarcá-las.",
      basis: "Art. 231, caput, Constituição Federal e Convenção 169 da OIT"
    },
    {
      title: "Usufruto Exclusivo",
      description: "As terras tradicionalmente ocupadas pelos índios destinam-se à sua posse permanente, cabendo-lhes o usufruto exclusivo das riquezas do solo, dos rios e dos lagos nelas existentes.",
      basis: "Art. 231, § 2º, Constituição Federal"
    },
    {
      title: "Proteção Cultural",
      description: "O Estado garantirá a todos o pleno exercício dos direitos culturais e acesso às fontes da cultura nacional, e apoiará e incentivará a valorização e a difusão das manifestações culturais, incluindo as indígenas.",
      basis: "Art. 215, Constituição Federal"
    }
  ];

  const currentChallenges: Challenge[] = [
    {
      title: "Demarcação de Terras",
      description: "Apesar dos direitos constitucionais, o processo de demarcação de terras indígenas enfrenta obstáculos políticos e econômicos, com numerosos territórios ainda não demarcados ou em disputa."
    },
    {
      title: "Invasões e Violência",
      description: "Muitas terras indígenas sofrem com invasões de madeireiros, garimpeiros e grileiros, resultando em conflitos e violência contra comunidades indígenas."
    },
    {
      title: "Acesso à Saúde e Educação",
      description: "Comunidades indígenas frequentemente enfrentam dificuldades de acesso a serviços básicos de saúde e educação culturalmente adequados, apesar dos direitos legalmente garantidos."
    },
    {
      title: "Mudanças Climáticas",
      description: "Os povos indígenas são especialmente vulneráveis aos efeitos das mudanças climáticas, que ameaçam seus territórios, modos de subsistência e conhecimentos tradicionais."
    },
    {
      title: "Reconhecimento Político",
      description: "Há desafios persistentes na garantia de participação política efetiva e consulta prévia em decisões que afetam diretamente as comunidades indígenas, conforme garantido pela Convenção 169 da OIT."
    }
  ];

  return (
    <section id="rights" className="py-24 bg-white dark:bg-forest-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Flag className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">Direitos e Desafios Atuais</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="glass-card p-6 mb-12">
            <p className="text-forest-700 dark:text-forest-300 leading-relaxed">
              A Constituição Federal de 1988 representou um marco no reconhecimento dos direitos dos povos indígenas no Brasil. No entanto, 
              a aplicação efetiva desses direitos continua sendo um desafio, com muitas comunidades enfrentando graves ameaças aos seus 
              territórios, culturas e modos de vida tradicionais.
            </p>
          </div>
          
          {/* Rights Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-forest-800 dark:text-forest-200 mb-8 flex items-center">
              <Info className="h-6 w-6 mr-2 text-forest-600 dark:text-forest-400" />
              Direitos Garantidos na Legislação Brasileira
            </h3>
            
            <div className="space-y-6">
              {indigenousRights.map((right, index) => (
                <div key={index} className="glass-card p-6 hover-scale">
                  <h4 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-3">
                    {right.title}
                  </h4>
                  <p className="text-forest-600 dark:text-forest-400 mb-3">
                    {right.description}
                  </p>
                  <div className="indigenous-border inline-block px-3 py-1">
                    <span className="text-sm font-medium text-forest-700 dark:text-forest-300">
                      Base legal: {right.basis}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Legal Framework */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-forest-800 dark:text-forest-200 mb-6">
              Marco Legal Internacional
            </h3>
            
            <div className="glass-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-3">
                  Convenção 169 da OIT
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Ratificada pelo Brasil em 2002, estabelece o direito à consulta prévia, livre e informada sobre medidas legislativas 
                  e administrativas que possam afetar povos indígenas diretamente.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-3">
                  Declaração da ONU sobre os Direitos dos Povos Indígenas
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Adotada em 2007, reconhece direitos como autodeterminação, autonomia, terras, territórios e recursos naturais, participação política e preservação cultural.
                </p>
              </div>
            </div>
          </div>
          
          {/* Current Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-forest-800 dark:text-forest-200 mb-8">
              Desafios Contemporâneos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentChallenges.map((challenge, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-earth-500">
                  <h4 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-2">
                    {challenge.title}
                  </h4>
                  <p className="text-forest-600 dark:text-forest-400">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 glass-card forest-gradient p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Como Apoiar a Causa Indígena</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                O reconhecimento e respeito aos direitos dos povos originários é responsabilidade de toda a sociedade. 
                Você pode contribuir através do apoio a organizações indígenas, consumo consciente de produtos indígenas, 
                divulgação das causas e cobrança de políticas públicas efetivas.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://apiboficial.org/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-forest-700 font-medium rounded-lg hover:bg-forest-50 transition-colors">
                  APIB - Articulação dos Povos Indígenas do Brasil
                </a>
                <a href="https://www.survivalinternational.org/povos/indios-isolados-brasil" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-forest-700 font-medium rounded-lg hover:bg-forest-50 transition-colors">
                  Survival International
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightsSection;

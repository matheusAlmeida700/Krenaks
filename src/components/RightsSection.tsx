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
      title: "Direito ao Território Krenak",
      description: "O povo Krenak tem direito histórico e ancestral às terras banhadas pelo Rio Doce (Watu), que são parte fundamental de sua identidade espiritual e cultural.",
      basis: "Art. 231, Constituição Federal; Convenção 169 da OIT; Declaração da ONU sobre Povos Indígenas"
    },
    {
      title: "Proteção da Religião, Cultura e Tradições",
      description: "A preservação das práticas espirituais, das narrativas orais, dos rituais sagrados e da relação sagrada com a natureza é garantida como direito fundamental dos Krenak.",
      basis: "Art. 215 e 216 da Constituição Federal; Declaração da ONU sobre Povos Indígenas"
    },
    {
      title: "Direito à Reparação Histórica e Ambiental",
      description: "Os Krenak têm direito à reparação integral pelos danos sofridos, especialmente após o crime ambiental do rompimento da barragem de Fundão em 2015, que destruiu seu principal rio sagrado.",
      basis: "Convenção 169 da OIT; Declaração Americana sobre Direitos dos Povos Indígenas (OEA, 2016)"
    },
    {
      title: "Autodeterminação e Consulta Livre",
      description: "É direito dos Krenak decidir suas prioridades de desenvolvimento econômico, social e cultural, e serem consultados previamente sobre medidas que os afetem.",
      basis: "Convenção 169 da OIT; Art. 6º e 7º"
    },
    {
      title: "Revitalização Linguística e Educacional",
      description: "O povo Krenak tem direito de preservar, ensinar e transmitir sua língua nativa, elemento essencial para sua sobrevivência cultural.",
      basis: "Art. 210 da Constituição Federal; Declaração da ONU sobre Povos Indígenas"
    }
  ];

  const currentChallenges: Challenge[] = [
    {
      title: "Devastação do Rio Doce (Watu)",
      description: "O rompimento da barragem de rejeitos destruiu o Rio Doce, considerado sagrado, comprometendo a vida espiritual, cultural e a segurança alimentar dos Krenak."
    },
    {
      title: "Demarcação Incompleta do Território",
      description: "Embora possuam uma Terra Indígena oficialmente demarcada, os Krenak lutam pela ampliação e reconhecimento de territórios tradicionais ainda usurpados."
    },
    {
      title: "Risco de Extinção Cultural e Linguística",
      description: "Devido a séculos de violência, deslocamento forçado e assimilação forçada, a cultura Krenak e sua língua original enfrentam sérios riscos de desaparecer."
    },
    {
      title: "Violação de Direitos Ambientais e Humanos",
      description: "Além da destruição ambiental, os Krenak sofrem com a falta de saneamento, contaminação da água, e barreiras no acesso à saúde e educação intercultural."
    },
    {
      title: "Falta de Políticas de Reparação e Justiça",
      description: "As indenizações, compensações e políticas públicas específicas para reparar o crime contra o povo Krenak seguem lentas e insuficientes."
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
              O povo Krenak, guardião ancestral do Vale do Rio Doce, resiste há séculos a processos de violência, expulsão e destruição ambiental. 
              Sua luta atual não é apenas por território, mas pela própria continuidade de sua cultura, espiritualidade e modos de vida. 
              Mesmo diante de tragédias recentes, como o desastre de Mariana, os Krenak seguem reafirmando sua existência e o direito a viver plenamente em sua terra sagrada.
            </p>
          </div>

          {/* Rights Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-forest-800 dark:text-forest-200 mb-8 flex items-center">
              <Info className="h-6 w-6 mr-2 text-forest-600 dark:text-forest-400" />
              Direitos Garantidos na Legislação Brasileira e Internacional
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
                  Instrumento internacional que assegura aos povos indígenas o direito de serem consultados sobre qualquer medida que impacte diretamente seus territórios e modos de vida.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-forest-800 dark:text-forest-200 mb-3">
                  Declaração da ONU sobre os Direitos dos Povos Indígenas
                </h4>
                <p className="text-forest-600 dark:text-forest-400">
                  Reconhece o direito à autodeterminação, à integridade cultural e à restituição de terras, recursos e meios de subsistência dos povos indígenas.
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
              <h3 className="text-2xl font-bold mb-4">Como Apoiar a Causa Krenak</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Apoiar os Krenak é reconhecer seu direito de existir plenamente. Conheça sua história, respeite sua luta e amplifique sua voz.
                Apoie iniciativas que lutam pela recuperação do Rio Doce e pela proteção das culturas indígenas.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://apiboficial.org/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-forest-700 font-medium rounded-lg hover:bg-forest-50 transition-colors">
                  APIB - Articulação dos Povos Indígenas do Brasil
                </a>
                <a href="https://www.survivalbrasil.org/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-forest-700 font-medium rounded-lg hover:bg-forest-50 transition-colors">
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

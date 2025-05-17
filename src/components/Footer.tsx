import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-forest-800 dark:bg-forest-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">
              A Força Ancestral Krenak
            </h3>
            <p className="text-forest-300 mb-4">
              Um projeto dedicado à valorização dos povos originários do Brasil,
              suas culturas, línguas, contribuições e lutas atuais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#region"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Região Geográfica
                </a>
              </li>
              <li>
                <a
                  href="#languages"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Línguas Indígenas
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  História e Cultura
                </a>
              </li>
              <li>
                <a
                  href="#contributions"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Contribuições
                </a>
              </li>
              <li>
                <a
                  href="#rights"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Direitos e Desafios
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">
              Recursos Adicionais
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://pib.socioambiental.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Povos Indígenas no Brasil (ISA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/funai/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  FUNAI
                </a>
              </li>
              <li>
                <a
                  href="https://apiboficial.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  APIB
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/museudoindio/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-300 hover:text-forest-100 transition-colors"
                >
                  Museu do Índio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">
              Desenvolvedores
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-forest-300">Isabelly Chirai</p>
              </li>
              <li>
                <p className="text-forest-300">Gabriel Luís de Lima Ramos</p>
              </li>
              <li>
                <p className="text-forest-300">Marco Antônio da Costa Silva</p>
              </li>
              <li>
                <p className="text-forest-300">Matheus Almeida</p>
              </li>
              <li>
                <p className="text-forest-300">Murilo Moreno Figuerôa Vieira</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">Fontes</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-forest-300">
                  <a
                    href="https://pt.wikipedia.org/wiki/Crenaques"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia: Krenaks
                  </a>
                </p>
              </li>
              <li>
                <p className="text-forest-300">
                  <a
                    href="https://pib.socioambiental.org/pt/Povo%3AKrenak"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Povos Indígenas no Brasil: Krenak
                  </a>
                </p>
              </li>
              <li>
                <p className="text-forest-300">
                  <a
                    href="https://brasil.mongabay.com/2021/10/para-o-povo-krenak-a-justica-chega-meio-seculo-depois/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mongabay Brasil: Para o povo Krenak, justiça chega meio
                    século depois
                  </a>
                </p>
              </li>
              <li>
                <p className="text-forest-300">
                  <a
                    href="https://www.terra.com.br/story/nos/conheca-a-historia-do-povo-indigena-krenak-sobreviventes-da-tragedia-de-mariana%2C845b6638d52fc8275a92bf915f4c6f70iqiq7t4e.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terra: Conheça a história do povo indígena Krenak
                  </a>
                </p>
              </li>
              <li>
                <p className="text-forest-300">
                  <a
                    href="https://www.mpmg.mp.br/portal/menu/areas-de-atuacao/casa-lilian/conheca-a-casa-lilian/espaco-de-memorias-casa-lilian/povo-krenak.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ministério Público de MG: Povo Krenak
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-forest-100">
              Professora Orientadora
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-forest-300">Tatiane</p>
              </li>
            </ul>
          </div>

          <div>
            <img
              className="w-4/5 mt-10"
              src="https://logodownload.org/wp-content/uploads/2016/10/sesi-logo.png"
              alt=""
            />
          </div>
        </div>

        {/* Scroll to top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-forest-700 hover:bg-forest-600 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-500"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-forest-700 pt-6 text-center">
          <p className="text-forest-400">
            &copy; {new Date().getFullYear()} A Força Ancestral Krenak. Todos os
            direitos reservados.
          </p>
          <p className="text-forest-500 text-sm mt-2">
            Desenvolvido como um tributo à rica herança dos povos originários do
            Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

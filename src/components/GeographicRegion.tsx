
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Earth } from 'lucide-react';

const GeographicRegion = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    // We'll use a placeholder until the user inputs their own token
    const initializeMap = (token: string) => {
      if (!token) return;
      
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [-55, -10], // Center on Brazil
        zoom: 3,
        pitch: 45,
        attributionControl: true
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add indigenous territories (simplified for demonstration)
      map.current.on('load', () => {
        // Add indigenous territories data
        map.current?.addSource('indigenous-territories', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [[
                    [-63, -10],
                    [-60, -10],
                    [-60, -8],
                    [-63, -8],
                    [-63, -10]
                  ]]
                },
                properties: {
                  name: 'Terras Yanomami',
                  people: 'Yanomami'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [[
                    [-53, -5],
                    [-51, -5],
                    [-51, -3],
                    [-53, -3],
                    [-53, -5]
                  ]]
                },
                properties: {
                  name: 'Terras Kayapó',
                  people: 'Kayapó'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [[
                    [-70, -9],
                    [-68, -9],
                    [-68, -7],
                    [-70, -7],
                    [-70, -9]
                  ]]
                },
                properties: {
                  name: 'Terras Ashaninka',
                  people: 'Ashaninka'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [[
                    [-46, -15],
                    [-44, -15],
                    [-44, -13],
                    [-46, -13],
                    [-46, -15]
                  ]]
                },
                properties: {
                  name: 'Terras Xavante',
                  people: 'Xavante'
                }
              }
            ]
          }
        });

        // Add territory layer
        map.current?.addLayer({
          id: 'territories-fill',
          type: 'fill',
          source: 'indigenous-territories',
          paint: {
            'fill-color': '#047857',
            'fill-opacity': 0.5
          }
        });

        // Add territory borders
        map.current?.addLayer({
          id: 'territories-line',
          type: 'line',
          source: 'indigenous-territories',
          paint: {
            'line-color': '#065f46',
            'line-width': 2
          }
        });

        // Add territory labels
        map.current?.addLayer({
          id: 'territories-label',
          type: 'symbol',
          source: 'indigenous-territories',
          layout: {
            'text-field': ['get', 'name'],
            'text-font': ['DIN Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          },
          paint: {
            'text-color': '#ffffff',
            'text-halo-color': '#065f46',
            'text-halo-width': 1
          }
        });
      });
    };

    // For demonstration purposes, we'll use a placeholder token input
    // In a real application, this should be handled more securely
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      localStorage.setItem('mapbox-token', mapboxToken);
      
      // Re-initialize map with new token
      map.current?.remove();
      map.current = null;
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (mapContainer.current) {
          // Initialize map with the new token
          const token = mapboxToken;
          mapboxgl.accessToken = token;
          map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [-55, -10], // Center on Brazil
            zoom: 3,
            pitch: 45,
            attributionControl: true
          });
        }
      }, 100);
    }
  };

  return (
    <section id="region" className="py-24 bg-white dark:bg-forest-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Earth className="h-8 w-8 text-forest-600 dark:text-forest-400" />
          <h2 className="section-title">Região Geográfica</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-forest-700 dark:text-forest-300">
                Distribuição do Povo Krenak
              </h3>
              <p className="mb-4 text-forest-600 dark:text-forest-400">
              O povo Krenak possui uma profunda e ancestral ligação com o Vale do Rio Doce, em Minas Gerais. O rio Watu sempre foi o elemento central de sua existência, moldando sua cultura, subsistência e identidade. As margens férteis da Mata Atlântica proporcionavam os recursos essenciais para sua vida. Atualmente, a principal concentração Krenak se encontra na Terra Indígena em Resplendor (MG), uma porção importante, mas reduzida, de seu vasto território tradicional, onde a conexão com a natureza e a prática de atividades ancestrais permanecem vitais.
              </p>
              <p className="mb-4 text-forest-600 dark:text-forest-400">
              A localização atual dos Krenak é resultado de um histórico de perda territorial e deslocamentos forçados, causados pela colonização e projetos de desenvolvimento. Originalmente, seu território se estendia por áreas da Bahia e do Espírito Santo, sempre tendo o Rio Doce como referência geográfica fundamental. Apesar da redução de suas terras, o Vale do Rio Doce continua sendo o núcleo de sua identidade, e a luta pela recuperação de áreas significativas, como Sete Salões, demonstra sua persistente ligação com a totalidade de seu território ancestral.
              </p>
              <p className="text-forest-600 dark:text-forest-400">
              A região geográfica do Vale do Rio Doce não é apenas um espaço físico para os Krenak, mas sim um território imbuído de significado cultural, histórico e espiritual. O impacto do desastre de 2015, com a contaminação do rio, evidenciou a inseparável conexão entre o povo Krenak e seu ambiente, reforçando a importância da preservação e da recuperação desse território para a continuidade de sua cultura e modo de vida. A luta pela plena garantia de seus direitos territoriais e pela saúde do Rio Doce segue sendo uma prioridade para o povo Krenak.
              </p>
            </div>
          </div>
          
          <div className="h-[700px] relative rounded-xl overflow-hidden grid grid-rows-2 gap-8">
            <div className='rounded-xl'>
          <iframe src="https://www.google.com/maps/embed?pb=!4v1745695518604!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDQ1b3VlMHdF!2m2!1d-19.4051473359281!2d-40.06058667425673!3f230.10893744877404!4f-1.2758239545252081!5f0.8830993489712904" width="670" height="350" className="border:0 rounded-xl"  loading="lazy"></iframe>
          </div>
          <div>
            <img className='rounded-xl' src="https://ogimg.infoglobo.com.br/in/22011201-13d-1ca/FT1086A/72706060_SOC-Rio-de-Janeiro-RJ-29-10-2017Canal-Futura-exibe-documentario-sobre-os-indios-Krenak-A.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicRegion;

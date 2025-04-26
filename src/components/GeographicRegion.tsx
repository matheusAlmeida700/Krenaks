
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
                Distribuição dos Povos Originários
              </h3>
              <p className="mb-4 text-forest-600 dark:text-forest-400">
                Os povos indígenas do Brasil estão distribuídos por todo o território nacional, 
                com maior concentração na região amazônica. Atualmente, existem mais de 300 etnias 
                reconhecidas oficialmente, falando cerca de 274 línguas.
              </p>
              <p className="mb-4 text-forest-600 dark:text-forest-400">
                A maior parte das terras indígenas demarcadas encontra-se na Amazônia Legal, 
                onde vivem cerca de 60% da população indígena brasileira. Estas terras são 
                fundamentais para a preservação da biodiversidade e dos recursos naturais.
              </p>
              <p className="text-forest-600 dark:text-forest-400">
                No mapa interativo, você pode visualizar algumas das principais terras indígenas do Brasil,
                representando diferentes etnias e regiões geográficas.
              </p>
              
              {!localStorage.getItem('mapbox-token') && (
                <div className="mt-6 p-4 bg-forest-50 dark:bg-forest-900 rounded-lg">
                  <h4 className="font-medium text-forest-700 dark:text-forest-300 mb-2">
                    API Key do Mapbox
                  </h4>
                  <p className="text-sm text-forest-600 dark:text-forest-400 mb-4">
                    Para visualizar o mapa, é necessário inserir um token do Mapbox.
                    Você pode obter um gratuitamente em <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-forest-500 underline">mapbox.com</a>
                  </p>
                  <form onSubmit={handleTokenSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      placeholder="Cole o token do Mapbox aqui"
                      className="flex-1 px-4 py-2 rounded-md border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-800 text-forest-800 dark:text-forest-200"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-medium rounded-md transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          
          <div className="h-[500px] relative rounded-xl overflow-hidden">
            <div ref={mapContainer} className="h-full w-full" />
            
            {!mapboxToken && (
              <div className="absolute inset-0 flex items-center justify-center bg-forest-100/70 dark:bg-forest-900/70 backdrop-blur-sm">
                <p className="text-center text-forest-800 dark:text-forest-200 font-medium px-4">
                  Insira um token do Mapbox para visualizar o mapa interativo
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicRegion;

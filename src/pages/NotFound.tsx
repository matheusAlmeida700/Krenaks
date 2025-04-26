
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-forest-100 to-white dark:from-forest-900 dark:to-forest-950 p-4">
      <div className="glass-card p-8 md:p-12 max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-forest-600 dark:text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-forest-800 dark:text-forest-200">Página não encontrada</h1>
        
        <div className="indigenous-border mb-8">
          <p className="text-forest-600 dark:text-forest-400 text-lg">
            O caminho que você está procurando não existe ou foi movido para outra localização.
          </p>
        </div>
        
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-forest-600 hover:bg-forest-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> 
          Retornar à página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;

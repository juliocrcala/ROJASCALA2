import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function App() {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { error } = await supabase.from('_').select('*').limit(1);
        if (error && error.message.includes('does not exist')) {
          setConnected(true);
        } else {
          setConnected(true);
        }
      } catch (error) {
        console.error('Connection error:', error);
        setConnected(false);
      } finally {
        setLoading(false);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Mi Aplicación
            </h1>
            <p className="text-xl text-slate-600">
              Conectada a Supabase y lista para usar
            </p>
          </header>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-slate-800">
                Estado de Conexión
              </h2>
              {loading ? (
                <div className="flex items-center gap-2 text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                  <span>Verificando...</span>
                </div>
              ) : (
                <div className={`flex items-center gap-2 ${connected ? 'text-green-600' : 'text-red-600'}`}>
                  <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="font-medium">
                    {connected ? 'Conectado' : 'Desconectado'}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  ¿Qué puedes hacer ahora?
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Crear tablas en tu base de datos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Agregar funcionalidades como listas, formularios, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Implementar autenticación de usuarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Construir tu aplicación personalizada</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800">
                  <strong>Dime qué quieres crear</strong> y te ayudaré a construirlo.
                  Por ejemplo: una lista de tareas, un blog, un catálogo de productos, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

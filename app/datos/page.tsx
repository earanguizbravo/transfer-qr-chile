import { getNegocios } from '@/lib/data';
import Link from 'next/link';

export default async function DatosPublicosPage() {
  const registros = await getNegocios();
  
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Volver al inicio
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          📋 Datos compartidos públicamente
        </h1>
        <p className="text-slate-600 mb-8 text-sm">
          Información bancaria que usuarios han decidido hacer visible para facilitar transferencias
        </p>
        
        <div className="grid gap-3">
          {registros.map(d => (
            <Link 
              key={d.slug} 
              href={`/${d.slug}`} 
              className="block p-5 bg-white rounded-xl shadow hover:shadow-md transition border border-slate-100"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-slate-900">{d.nombre}</h2>
                  <p className="text-slate-500 text-xs mt-1">
                    {d.banco} • {d.tipoCuenta}
                  </p>
                </div>
                <span className="text-blue-600 text-xs font-medium">
                  Ver datos →
                </span>
              </div>
            </Link>
          ))}
          
          {registros.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-4">Aún no hay datos compartidos.</p>
              <Link href="/" className="text-blue-600 hover:underline text-sm">
                Sé el primero en compartir →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

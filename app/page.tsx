import { getNegocios } from '@/lib/data';
import Link from 'next/link';

export default async function Home() {
  const negocios = await getNegocios();
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">📲 Transferencias Abiertas - Chile</h1>
        <div className="grid gap-3">
          {negocios.map(n => (
            <Link key={n.slug} href={`/${n.slug}`} className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{n.nombre}</span>
                <span className="text-blue-600 text-sm">Ver datos →</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{n.banco} • {n.tipoCuenta}</p>
            </Link>
          ))}
          {negocios.length === 0 && <p className="text-gray-500 text-center py-8">Aún no hay negocios registrados.</p>}
        </div>
      </div>
    </main>
  );
}

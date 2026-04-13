import { getNegocios } from '@/lib/data';
import { formatRUT } from '@/lib/utils';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import CopyButton from '@/components/CopyButton';

const QRCode = dynamic(() => import('react-qr-code'), { ssr: false });

export default async function DatosPage({ params }: { params: { slug: string } }) {
  const registros = await getNegocios();
  const dato = registros.find(x => x.slug === params.slug);
  if (!dato) notFound();

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://transfer-qr-chile.vercel.app'}/${dato.slug}`;
  
  // Formato optimizado para pegar en apps bancarias chilenas
  const copyText = `Datos para transferencia:\nBanco: ${dato.banco}\nTitular: ${dato.titular}\nRUT: ${formatRUT(dato.rut)}\nTipo: ${dato.tipoCuenta}\nCuenta: ${dato.numeroCuenta}`;

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-center border border-slate-200">
        <h1 className="text-xl font-bold text-slate-900 mb-1">{dato.nombre}</h1>
        <p className="text-slate-500 text-sm mb-6">Información para transferencia bancaria</p>

        <div className="bg-slate-50 rounded-xl p-4 text-left space-y-3 mb-6 border border-slate-100">
          <div className="flex justify-between"><span className="text-slate-600">Banco</span><span className="font-medium">{dato.banco}</span></div>
          <div className="flex justify-between"><span className="text-slate-600">Titular</span><span className="font-medium">{dato.titular}</span></div>
          <div className="flex justify-between"><span className="text-slate-600">RUT</span><span className="font-mono text-sm">{formatRUT(dato.rut)}</span></div>
          <div className="flex justify-between"><span className="text-slate-600">Tipo</span><span>{dato.tipoCuenta}</span></div>
          <div className="flex justify-between"><span className="text-slate-600">Cuenta</span><span className="font-mono text-sm break-all">{dato.numeroCuenta}</span></div>
        </div>

        <CopyButton text={copyText} />

        <div className="mt-6 inline-block p-3 bg-white rounded-xl border border-slate-200">
          <QRCode value={url} size={160} bgColor="#ffffff" fgColor="#1e293b" />
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Escanea para acceder a esta información
        </p>
        
        <p className="text-[10px] text-slate-300 mt-6 leading-tight">
          * Esta página solo muestra datos bancarios públicos. 
          No interviene en transacciones ni reemplaza obligaciones tributarias.
        </p>
      </div>
    </main>
  );
}

import { getNegocios } from '@/lib/data';
import { formatRUT } from '@/lib/utils';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import CopyButton from '@/components/CopyButton';

const QRCode = dynamic(() => import('react-qr-code'), { ssr: false });

export default async function NegocioPage({ params }: { params: { slug: string } }) {
  const negocios = await getNegocios();
  const n = negocios.find(x => x.slug === params.slug);
  if (!n) notFound();

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://transfer-qr-chile.vercel.app'}/${n.slug}`;
  const copyText = `🏦 TRANSFERENCIA BANCARIA\nBanco: ${n.banco}\nTitular: ${n.titular}\nRUT: ${formatRUT(n.rut)}\nTipo: ${n.tipoCuenta}\nCuenta: ${n.numeroCuenta}`;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-1">{n.nombre}</h1>
        <p className="text-gray-500 text-sm mb-6">Datos verificados para transferencia</p>

        <div className="bg-gray-50 rounded-xl p-4 text-left space-y-3 mb-6 border border-gray-100">
          <div className="flex justify-between"><span className="text-gray-600">Banco</span><span className="font-medium">{n.banco}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Titular</span><span className="font-medium">{n.titular}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">RUT</span><span className="font-mono">{formatRUT(n.rut)}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Tipo</span><span>{n.tipoCuenta}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Cuenta</span><span className="font-mono break-all">{n.numeroCuenta}</span></div>
        </div>

        <CopyButton text={copyText} />

        <div className="mt-6 inline-block p-3 bg-white rounded-xl border border-gray-200">
          <QRCode value={url} size={160} bgColor="#ffffff" fgColor="#111827" />
        </div>
        <p className="text-xs text-gray-400 mt-3">Escanea con tu app bancaria o cámara</p>
      </div>
    </main>
  );
}

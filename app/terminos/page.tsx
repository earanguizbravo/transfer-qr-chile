import Link from 'next/link';

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <Link href="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
          ← Volver
        </Link>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Términos de uso</h1>
        
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Propósito de la herramienta</strong><br/>
            Esta plataforma permite a usuarios compartir voluntariamente datos bancarios de dominio público 
            (banco, titular, RUT, número de cuenta) para facilitar la realización de transferencias. 
            No procesa pagos, no almacena fondos, y no interviene en transacciones de ningún tipo.
          </p>
          
          <p>
            <strong>2. Responsabilidad del usuario</strong><br/>
            El usuario que comparte información declara ser titular o estar autorizado para divulgar 
            los datos bancarios ingresados. Es responsable exclusivo de: (a) la veracidad de la información, 
            (b) el cumplimiento de obligaciones tributarias ante el SII, y (c) el uso que terceros den 
            a los datos compartidos.
          </p>
          
          <p>
            <strong>3. Limitación de responsabilidad</strong><br/>
            La plataforma no se hace responsable por: errores en los datos ingresados por usuarios, 
            uso indebido de la información por terceros, pérdidas derivadas de transferencias, 
            ni incumplimientos normativos de los usuarios.
          </p>
          
          <p>
            <strong>4. Privacidad</strong><br/>
            Solo se almacenan los datos bancarios que el usuario decide hacer públicos. 
            No se recopilan claves, PINs, credenciales de acceso, ni información sensible. 
            Los datos pueden ser eliminados solicitándolo mediante el formulario de contacto.
          </p>
          
          <p>
            <strong>5. Marco legal</strong><br/>
            Esta herramienta se rige por las leyes de la República de Chile. 
            Cualquier controversia se someterá a los tribunales competentes de Santiago.
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
          Última actualización: {new Date().toLocaleDateString('es-CL')}
        </div>
      </div>
    </main>
  );
}

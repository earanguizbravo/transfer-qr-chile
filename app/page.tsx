import Link from 'next/link';

export default function OnboardingPage() {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfC_i_GrNDL7GCPaglZ7QMtFEU9LKj4CyRq1kjbq47EAowMUw/viewform';
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-4">
          <span className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
            🇨🇱 Hecho en Chile
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Comparte tus datos de transferencia en un QR
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Una forma simple de mostrar tu información bancaria para que otros 
          puedan transferirte fácilmente. Sin intermediarios, sin instalaciones.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl"
          >
            📝 Compartir mis datos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <Link 
            href="/datos"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border-2 border-slate-200 transition"
          >
            🔍 Ver datos compartidos
          </Link>
        </div>
        
        <p className="text-sm text-slate-500 mt-4">
          ⏱️ Configuración en menos de 2 minutos
        </p>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          ¿Cómo funciona?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '📝',
              title: '1. Comparte tu información',
              desc: 'Llena el formulario con los datos bancarios que deseas hacer visibles. Solo información pública de transferencia.'
            },
            {
              icon: '📲',
              title: '2. Obtén tu QR personal',
              desc: 'Recibirás una página con tu información y un código QR. Descárgalo para compartirlo donde lo necesites.'
            },
            {
              icon: '🔄',
              title: '3. Actualiza cuando quieras',
              desc: 'Si cambias de cuenta o banco, edita tus datos y tu QR se actualizará automáticamente.'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-slate-100">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transparencia / Legal */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">🔒 Transparencia y responsabilidad</h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Esta herramienta solo muestra información bancaria de dominio público que tú decides compartir. 
            No procesamos pagos, no almacenamos fondos, y no intervenimos en ninguna transacción. 
            Eres responsable de la veracidad de los datos y del cumplimiento de tus obligaciones tributarias.
          </p>
        </div>
      </section>

      {/* Ejemplo visual */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
          Así se verá tu información
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="text-center">
            <div className="inline-block p-4 bg-slate-100 rounded-2xl mb-6">
              <div className="w-32 h-32 bg-slate-300 rounded-lg flex items-center justify-center text-slate-500 text-xs text-center px-2">
                [Código QR con link a tus datos]
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nombre o identificador</h3>
            <p className="text-slate-500 text-sm mb-6">Información para transferencia bancaria</p>
            
            <div className="bg-slate-50 rounded-xl p-4 text-left space-y-3 max-w-sm mx-auto mb-6 border border-slate-100">
              <div className="flex justify-between"><span className="text-slate-600">Banco</span><span className="font-medium">Banco Estado</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Titular</span><span className="font-medium">Nombre del titular</span></div>
              <div className="flex justify-between"><span className="text-slate-600">RUT</span><span className="font-mono text-sm">76.123.456-7</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Cuenta</span><span className="font-mono text-sm">1234567890</span></div>
            </div>
            
            <button className="w-full py-3 bg-slate-100 text-slate-700 rounded-lg font-medium cursor-default">
              📋 Copiar información
            </button>
            <p className="text-xs text-slate-400 mt-3">
              * Los datos se copian para que los pegues en tu app bancaria
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Legal-Safe */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Preguntas frecuentes
        </h2>
        
        <div className="space-y-4">
          {[
            {
              q: '¿Esta plataforma cobra comisiones?',
              a: 'No. Es una herramienta gratuita de código abierto. No procesamos pagos ni cobramos por su uso.'
            },
            {
              q: '¿Reemplaza la emisión de boletas?',
              a: 'No. Esta herramienta solo facilita compartir datos bancarios. La emisión de boletas y el cumplimiento tributario son responsabilidad exclusiva del usuario.'
            },
            {
              q: '¿Puedo editar o eliminar mis datos?',
              a: 'Sí. Puedes actualizar tu información en cualquier momento volviendo a enviar el formulario con tu mismo identificador.'
            },
            {
              q: '¿Qué datos se almacenan?',
              a: 'Solo la información bancaria pública que tú compartes (banco, titular, RUT, cuenta). No almacenamos claves, PINs, ni datos sensibles.'
            },
            {
              q: '¿Funciona con todos los bancos de Chile?',
              a: 'Sí, la información se muestra en formato de texto plano compatible con cualquier aplicación bancaria que permita pegar datos para transferencia.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          ¿Listo para compartir tus datos de forma simple?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Configura tu QR en menos de 2 minutos
        </p>
        <a 
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl"
        >
          🚀 Compartir mis datos - Gratis
        </a>
      </section>

      {/* Footer con disclaimer legal */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-xs space-y-3">
          <p>
            <strong>Descargo de responsabilidad:</strong> Esta plataforma solo facilita la visualización de datos bancarios de dominio público. 
            No interviene en transacciones, no almacena fondos, y no reemplaza la emisión de boletas ni el cumplimiento de obligaciones tributarias 
            ante el Servicio de Impuestos Internos (SII) de Chile. El usuario es único responsable de la veracidad de la información compartida 
            y del cumplimiento de la normativa vigente.
          </p>
          <p className="pt-4 border-t border-slate-700">
            © {new Date().getFullYear()} Transferencias Chile • Herramienta de código abierto
          </p>
        </div>
      </footer>
    </main>
  );
}

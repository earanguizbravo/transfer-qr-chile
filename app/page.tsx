import Link from 'next/link';
import { getNegocios } from '@/lib/data';

export default function OnboardingPage() {
  const GOOGLE_FORM_URL = 'https://forms.gle/TU_LINK_AQUI'; // ← Reemplaza con tu link
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
            🚀 Gratis para siempre
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tu negocio a un QR de distancia
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Genera tu página con datos bancarios y QR para que tus clientes 
          te paguen por transferencia en segundos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl"
          >
            📝 Registrar mi negocio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <Link 
            href="/negocios"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 transition"
          >
            🔍 Ver negocios registrados
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          ⏱️ Registro en menos de 2 minutos
        </p>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Cómo funciona?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '📝',
              title: '1. Regístrate',
              desc: 'Llena el formulario con los datos bancarios de tu negocio. Es gratis y toma 2 minutos.'
            },
            {
              icon: '📲',
              title: '2. Recibe tu QR',
              desc: 'Obtén tu página personalizada con QR. Descárgalo e imprímelo para tu mostrador.'
            },
            {
              icon: '💰',
              title: '3. Cobra fácil',
              desc: 'Tus clientes escanean, copian los datos y te pagan al instante. Sin complicaciones.'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué usar Transferencias Chile?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', text: 'Sin comisiones' },
              { icon: '🔒', text: 'Tus datos seguros' },
              { icon: '📱', text: 'Funciona en cualquier banco' },
              { icon: '🎨', text: 'QR profesional' },
              { icon: '✏️', text: 'Edita cuando quieras' },
              { icon: '📊', text: 'Sin instalar nada' },
              { icon: '🌐', text: 'Acceso 24/7' },
              { icon: '💬', text: 'Soporte incluido' }
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-blue-700 p-4 rounded-xl">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplo visual */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Así se verá tu página
        </h2>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <div className="text-center">
            <div className="inline-block p-4 bg-gray-100 rounded-2xl mb-6">
              <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                [Tu QR aquí]
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Nombre de tu Negocio</h3>
            <p className="text-gray-500 mb-6">Datos verificados para transferencia</p>
            
            <div className="bg-gray-50 rounded-xl p-4 text-left space-y-3 max-w-sm mx-auto mb-6">
              <div className="flex justify-between"><span>Banco</span><span className="font-medium">Banco Estado</span></div>
              <div className="flex justify-between"><span>RUT</span><span className="font-mono">76.123.456-7</span></div>
              <div className="flex justify-between"><span>Cuenta</span><span className="font-mono">1234567890</span></div>
            </div>
            
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
              📋 Copiar datos
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas frecuentes
        </h2>
        
        <div className="space-y-4">
          {[
            {
              q: '¿Es realmente gratis?',
              a: 'Sí, 100% gratis. Sin comisiones ocultas ni planes premium.'
            },
            {
              q: '¿Puedo cambiar mis datos después?',
              a: 'Por supuesto. Recibirás un link para editar tu información cuando lo necesites.'
            },
            {
              q: '¿Funciona con todos los bancos de Chile?',
              a: 'Sí, funciona con Banco Estado, Banco de Chile, Santander, BCI, Scotiabank, Itaú, Falabella, Security y más.'
            },
            {
              q: '¿Cómo imprimo el QR?',
              a: 'Puedes descargarlo como imagen PNG e imprimirlo en cualquier tamaño. Recomendamos al menos 5x5 cm.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Listo para facilitar los pagos en tu negocio?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Únete a los negocios que ya cobran más rápido
        </p>
        <a 
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg hover:shadow-xl text-lg"
        >
          🚀 Comenzar ahora - Es gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>Transferencias Chile - Facilitando pagos para pequeños negocios</p>
      </footer>
    </main>
  );
}
 

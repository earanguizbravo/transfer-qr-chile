'use client';
export default function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        const btn = document.getElementById('copy-btn');
        if (btn) {
          btn.textContent = '✅ ¡Copiado!';
          setTimeout(() => (btn.textContent = '📋 Copiar datos'), 2000);
        }
      }}
      id="copy-btn"
      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer"
    >
      📋 Copiar datos
    </button>
  );
}

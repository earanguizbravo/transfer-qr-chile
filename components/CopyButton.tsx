'use client';
export default function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        const btn = document.getElementById('copy-btn');
        if (btn) {
          btn.textContent = '✅ Información copiada';
          setTimeout(() => (btn.textContent = '📋 Copiar información'), 2000);
        }
      }}
      id="copy-btn"
      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition cursor-pointer border border-slate-200"
    >
      📋 Copiar información
    </button>
  );
}

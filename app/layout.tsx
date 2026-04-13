import type { Metadata } from "next";
import "./globals.css";

export const meta Metadata = {
  title: "Transferencias Chile - Datos QR",
  description: "Copia rápido los datos bancarios para transferencia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}

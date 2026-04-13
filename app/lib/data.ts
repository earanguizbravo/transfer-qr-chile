import { parseCSV } from './utils';

export interface Negocio {
  slug: string;
  nombre: string;
  banco: string;
  titular: string;
  rut: string;
  tipoCuenta: string;
  numeroCuenta: string;
}

export async function getNegocios(): Promise<Negocio[]> {
  const csvUrl = process.env.NEXT_PUBLIC_SHEET_CSV_URL;
  if (!csvUrl) return [];

  const res = await fetch(csvUrl, { next: { revalidate: 3600 } });
  const text = await res.text();
  const rows = parseCSV(text);

  const map = new Map<string, Negocio>();
  for (const r of rows) {
    const slug = r['identificador (slug)']?.toLowerCase().replace(/\s+/g, '-');
    if (!slug || !r['rut'] || !r['banco']) continue;
    map.set(slug, {
      slug,
      nombre: r['nombre del negocio'] || 'Sin nombre',
      banco: r['banco'],
      titular: r['nombre del titular'] || '',
      rut: r['rut'],
      tipoCuenta: r['tipo de cuenta'] || 'Cuenta Vista',
      numeroCuenta: r['número de cuenta'] || ''
    });
  }
  return Array.from(map.values());
}

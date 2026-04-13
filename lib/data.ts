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

  const res = await fetch(csvUrl, { next: { revalidate: 60 } }); // Cache 1 min
  const text = await res.text();
  const rows = parseCSV(text);

  // Toma siempre la ÚLTIMA versión enviada por slug
  const map = new Map<string, Negocio>();
  for (const r of rows) {
    const rawSlug = r['identificador (slug)'] || '';
    // Limpieza robusta del slug: minúsculas, sin espacios, sin caracteres raros
    const slug = rawSlug
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quita tildes
      .replace(/\s+/g, '-')      // Espacios → guiones
      .replace(/[^a-z0-9-]/g, '') // Solo letras, números y guiones
      .replace(/^-+|-+$/g, '');   // Quita guiones al inicio/final
    
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
  
  // DEBUG: Ver en logs de Vercel qué slugs se están procesando
  console.log('📦 Negocios encontrados:', Array.from(map.keys()));
  
  return Array.from(map.values());
}

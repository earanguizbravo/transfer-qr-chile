export function formatRUT(rut: string): string {
  const clean = rut.replace(/[.-]/g, '').toUpperCase();
  if (clean.length < 2) return rut;
  const dv = clean.slice(-1);
  const body = clean.slice(0, -1);
  return `${body.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}-${dv}`;
}

export function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.replace(/\r\n/g, '\n').split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    const vals: string[] = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) { vals.push(current); current = ''; }
      else current += char;
    }
    vals.push(current);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => obj[h] = vals[i]?.replace(/^"|"$/g, '').trim() || '');
    return obj;
  });
}

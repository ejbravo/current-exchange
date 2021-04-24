type DateFormat = 'DD:MM:YYYY' | 'YYYY:MM:DD';

export function formatDate(
  timestamp: number,
  separator: string = '.',
  format: DateFormat = 'DD:MM:YYYY'
): string {
  const d = new Date(timestamp);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  if (format === 'YYYY:MM:DD')
    return `${year}${separator}${month}${separator}${day}`;
  return `${day}${separator}${month}${separator}${year}`;
}

export function formatIndicator(value: number, precision: number = 1): string {
  return value.toFixed(precision);
}

export function processInt(value: any): number | null {
  const num = parseInt(value, 10);
  return isNaN(num) ? null : num;
}

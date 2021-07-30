export function formatPercent(value: number, precision: number = 1): string {
  return `${value.toFixed(precision)}%`;
}

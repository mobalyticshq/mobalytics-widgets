export function calcWinRate(wins: number, looses: number): number {
  return wins === 0 && looses === 0 ? 0 : (wins / (wins + looses)) * 100;
}

export function calcKDA(k: number, d: number, a: number): number {
  return d === 0 ? k + a : (k + a) / d;
}

export function calcKd(k: number, d: number): number {
  return d === 0 ? k : k / d;
}

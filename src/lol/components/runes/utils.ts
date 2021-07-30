import { RunesData } from './types';

export const formatRunesData = (IDs: number[]): RunesData => {
  return { primary : IDs.slice(1, 4), secondary : IDs.slice(4,6), perks : IDs.slice(6,9) };
}

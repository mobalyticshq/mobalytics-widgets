export interface RunesData {
  primary: number[];
  secondary: number[];
  perks: number[];
}

export interface RunesComponentProps {
  keystone: number;
  runes: RunesData;
  style: number;
  subStyle: number;
}

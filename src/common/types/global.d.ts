import { NBoolean } from './lang';

declare global {
  interface Element {
    __isMobaMounted: NBoolean;
  }
}

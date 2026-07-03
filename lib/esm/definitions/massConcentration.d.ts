import { Measure } from './../index.js';
export type MassConcentrationUnits = MassConcentrationSIUnits;
export type MassConcentrationSystems = 'SI';
export type MassConcentrationSIUnits = 'mg/L' | 'g/L' | 'µg/L' | 'kg/m3' | 'g/mL' | 'mg/mL';
declare const measure: Measure<MassConcentrationSystems, MassConcentrationUnits>;
export default measure;

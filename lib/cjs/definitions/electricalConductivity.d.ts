import { Measure } from './../index.js';
export type ElectricalConductivityUnits = ElectricalConductivitySIUnits;
export type ElectricalConductivitySystems = 'SI';
export type ElectricalConductivitySIUnits = 'S/m' | 'dS/m' | 'mS/m' | 'μS/m' | 'nS/m' | 'pS/m' | 'S/cm' | 'dS/cm' | 'mS/cm' | 'μS/cm' | 'nS/cm' | 'pS/cm';
declare const measure: Measure<ElectricalConductivitySystems, ElectricalConductivityUnits>;
export default measure;

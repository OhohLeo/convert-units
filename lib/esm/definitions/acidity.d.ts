import { Measure } from './../index.js';
export type AcidityUnits = AcidityPHUnits | AcidityPOHUnits;
export type AciditySystems = 'pH' | 'pOH';
export type AcidityPHUnits = 'pH';
export type AcidityPOHUnits = 'pOH';
declare const measure: Measure<AciditySystems, AcidityUnits>;
export default measure;

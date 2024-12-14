import { IJefe, NewJefe } from './jefe.model';

export const sampleWithRequiredData: IJefe = {
  id: 24134,
  nombreJefe: 'beautifully excluding pace',
  telefonoJefe: 'majority boo',
};

export const sampleWithPartialData: IJefe = {
  id: 28762,
  nombreJefe: 'spice bus astride',
  telefonoJefe: 'shampoo',
};

export const sampleWithFullData: IJefe = {
  id: 20452,
  nombreJefe: 'giving jagged',
  telefonoJefe: 'yearly crooked',
};

export const sampleWithNewData: NewJefe = {
  nombreJefe: 'yesterday medium',
  telefonoJefe: 'dependency cautiously',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

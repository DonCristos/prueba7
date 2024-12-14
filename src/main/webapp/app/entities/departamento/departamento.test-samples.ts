import { IDepartamento, NewDepartamento } from './departamento.model';

export const sampleWithRequiredData: IDepartamento = {
  id: 28637,
  nombreDepartamento: 'unimpressively gah seemingly',
};

export const sampleWithPartialData: IDepartamento = {
  id: 17036,
  nombreDepartamento: 'retention blah',
};

export const sampleWithFullData: IDepartamento = {
  id: 32592,
  nombreDepartamento: 'nifty',
  ubicacionDepartamento: 'lest eternity at',
  presupuestoDepartamento: 27747.85,
};

export const sampleWithNewData: NewDepartamento = {
  nombreDepartamento: 'opposite wherever uh-huh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

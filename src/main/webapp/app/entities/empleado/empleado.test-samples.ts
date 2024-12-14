import { IEmpleado, NewEmpleado } from './empleado.model';

export const sampleWithRequiredData: IEmpleado = {
  id: 23987,
  nombreEmpleado: 'since bemuse',
  apellidoEmpleado: 'bog individual squirm',
};

export const sampleWithPartialData: IEmpleado = {
  id: 30735,
  nombreEmpleado: 'schematise next interestingly',
  apellidoEmpleado: 'until atop',
};

export const sampleWithFullData: IEmpleado = {
  id: 6861,
  nombreEmpleado: 'because apropos yahoo',
  apellidoEmpleado: 'alongside',
  telefonoEmpleado: 'excited',
  correoEmpleado: 'milestone for drag',
};

export const sampleWithNewData: NewEmpleado = {
  nombreEmpleado: 'how',
  apellidoEmpleado: 'actually',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

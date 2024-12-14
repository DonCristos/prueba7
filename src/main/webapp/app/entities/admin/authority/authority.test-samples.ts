import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '45717598-403d-4967-a79a-2b11e14a6350',
};

export const sampleWithPartialData: IAuthority = {
  name: '0df61238-3240-435e-a697-87fa1934a0d2',
};

export const sampleWithFullData: IAuthority = {
  name: '84dd20ea-c2fd-4438-84a3-8c2b02a5725d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 8009,
  login: 'uCUS',
};

export const sampleWithPartialData: IUser = {
  id: 4290,
  login: 'TpJ7qU@vNqT\\!c0Py',
};

export const sampleWithFullData: IUser = {
  id: 7369,
  login: 'GKmP1I@OxS\\m06T',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

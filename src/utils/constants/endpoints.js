export const base = 'https://besafe-backend.herokuapp.com';

const service = 'api';
const version = 'v1';
// const prefix = 'admin';

export const basePath = `${base}/${service}/${version}`;

/* Conditions endpoints */
export const CONDITIONS_CREATE = `${basePath}/conditions`;
export const CONDITIONS_UPDATE = (id) => `${basePath}/conditions/updateCondition/${id}`;
export const CONDITIONS_DELETE = (id) => `${basePath}/conditions/deleteCondition/${id}`;
export const GET_CONDITION = `${basePath}/conditions`;

import { COMPOSE } from './constants.js';

export const semigroupoid = (...value) => Object.defineProperty(
    { [COMPOSE]: (composite) => semigroupoid(...value, ...composite.value) },
    'value',
    { value },
);

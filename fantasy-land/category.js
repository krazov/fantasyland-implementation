import { semigroupoid } from './semigroupoid.js';
import { ID } from './constants.js';

export const category = (...values) => Object.assign(semigroupoid(...values), {
    [ID]: () => category(),
});

import { semigroupoid } from './semigroupoid.js';
import { ID } from './constants.js';

export const category = Object.assign(
    (...values) => semigroupoid(...values),
    { [ID]: () => category() },
);

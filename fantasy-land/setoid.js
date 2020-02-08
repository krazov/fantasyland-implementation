import { EQUALS } from './constants.js';
import { equals } from './utils/equals.js';

export const setoid = (value) => Object.defineProperty(
    { [EQUALS]: equals(value) },
    'value',
    { value },
);
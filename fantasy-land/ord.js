import { LTE } from './constants.js';
import { setoid } from './setoid.js';
import { lte } from './utils/lte.js';

export const ord = (value) => Object.assign(setoid(value), {
    [LTE]: lte(value),
});

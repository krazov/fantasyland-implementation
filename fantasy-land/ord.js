import { setoid } from './setoid.js';

export const ord = (value) => Object.assign(setoid(value), {});

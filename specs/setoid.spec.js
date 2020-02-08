import { setoid } from '../fantasy-land/setoid.js';

describe('setoid', () => {
    it('a[\'fantasy-land/equals\'](a) === true (reflexivity)', () => {
        const setoid42 = setoid(42);
        const actual = setoid42['fantasy-land/equals'](setoid42);

        expect(actual).toBe(true);
    });
});
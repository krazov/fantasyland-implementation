import { setoid } from '../fantasy-land/setoid.js';

describe('setoid', () => {
    describe("a['fantasy-land/equals'](a) === true (reflexivity)", () => {
        it('should work for number', () => {
            const setoid63 = setoid(63);
            const actual = setoid63['fantasy-land/equals'](setoid63);

            expect(actual).toBe(true);
        });

        it('should work for string', () => {
            const setoid63 = setoid('63');
            const actual = setoid63['fantasy-land/equals'](setoid63);

            expect(actual).toBe(true);
        });

        it('should work for object', () => {
            const setoid63 = setoid({ theNumber: 63 });
            const actual = setoid63['fantasy-land/equals'](setoid63);

            expect(actual).toBe(true);
        });
    });
});
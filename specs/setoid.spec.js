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

    describe("a['fantasy-land/equals'](b) === b['fantasy-land/equals'](a) (symmetry)", () => {
        it('should work for the same setoid', () => {
            const setoid63a = setoid(63);
            const setoid63b = setoid63a;

            const actual = setoid63a['fantasy-land/equals'](setoid63b) === setoid63b['fantasy-land/equals'](setoid63a);

            expect(actual).toBe(true);
        });

        it('should work for different setoids carrying the same value (number)', () => {
            const setoid63a = setoid(63);
            const setoid63b = setoid(63);

            const actual = setoid63a['fantasy-land/equals'](setoid63b) === setoid63b['fantasy-land/equals'](setoid63a);

            expect(actual).toBe(true);
        });

        it('should work for different setoids carrying the same value (object)', () => {
            const commonObject = { theNumber: 63 };
            const setoid63a = setoid(commonObject);
            const setoid63b = setoid(commonObject);

            const actual = setoid63a['fantasy-land/equals'](setoid63b) === setoid63b['fantasy-land/equals'](setoid63a);

            expect(actual).toBe(true);
        });

        it('should work for setoids carrying different values (object)', () => {
            const setoid63a = setoid({ theNumber: 63 });
            const setoid63b = setoid({ theNumber: 63 });

            const actual = setoid63a['fantasy-land/equals'](setoid63b) === setoid63b['fantasy-land/equals'](setoid63a);

            expect(actual).toBe(true);
        });
    });

    describe("if a['fantasy-land/equals'](b) and b['fantasy-land/equals'](c), then a['fantasy-land/equals'](c) (transitivity)", () => {
        it('should work for a(b), b(c), and a(c)', () => {
            const setoid63a = setoid(63);
            const setoid63b = setoid(63);
            const setoid63c = setoid(63);

            const actual1 = setoid63a['fantasy-land/equals'](setoid63b);
            const actual2 = setoid63b['fantasy-land/equals'](setoid63c);
            const actual3 = setoid63a['fantasy-land/equals'](setoid63c);

            expect(actual1).toBe(true);
            expect(actual2).toBe(true);
            expect(actual3).toBe(true);
        });
    })
});

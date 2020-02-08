import { setoid } from '../fantasy-land/setoid.js';
import { ord } from '../fantasy-land/ord.js';

describe('ord', () => {
    describe('a value that implements the Ord specification must also implement the Setoid specification', () => {
        it('should have reflexivity', () => {
            const setoid63 = setoid(63);
            const ord63 = ord(63);

            const actual = ord63['fantasy-land/equals'](ord63);

            expect(actual).toBe(true);
        });

        it('should have symmetry', () => {
            const ord63a = ord(63);
            const ord63b = ord(63);

            const actualA = ord63b['fantasy-land/equals'](ord63a);
            const actualB = ord63a['fantasy-land/equals'](ord63b);

            expect(actualA).toBe(true);
            expect(actualB).toBe(true);
        });

        it('should have transivity', () => {
            const ord63a = ord(63);
            const ord63b = ord(63);
            const ord63c = ord(63);

            const actual1 = ord63a['fantasy-land/equals'](ord63b);
            const actual2 = ord63b['fantasy-land/equals'](ord63c);
            const actual3 = ord63a['fantasy-land/equals'](ord63c);

            expect(actual1).toBe(true);
            expect(actual2).toBe(true);
            expect(actual3).toBe(true);
        })
    });
});

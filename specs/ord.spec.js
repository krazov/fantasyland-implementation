import { ord } from '../fantasy-land/ord.js';

describe('ord', () => {
    describe('a value that implements the Ord specification must also implement the Setoid specification', () => {
        it('should have reflexivity', () => {
            const ord63 = ord(63)
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

    describe("a['fantasy-land/lte'](b) or b['fantasy-land/lte'](a) (totality)", () => {
        it('should give true for either a <= b or b <= a', () => {
            const ord63 = ord(63);
            const ord97 = ord(97);

            const actual = ord63['fantasy-land/lte'](ord97) || ord97['fantasy-land/lte'](ord63);

            expect(actual).toBe(true);
        });
    });

    describe("if a['fantasy-land/lte'](b) and b['fantasy-land/lte'](a), then a['fantasy-land/equals'](b) (antisymmetry)", () => {
        it('should be equal if both a <= b and b <= a', () => {
            const ord63a = ord(63);
            const ord63b = ord(63);

            const actual1 = ord63a['fantasy-land/lte'](ord63b);
            const actual2 = ord63b['fantasy-land/lte'](ord63a);
            const actual3 = ord63a['fantasy-land/equals'](ord63b);

            expect(actual1).toBe(true);
            expect(actual2).toBe(true);
            expect(actual3).toBe(true);
        });
    });

    describe("If a['fantasy-land/lte'](b) and b['fantasy-land/lte'](c), then a['fantasy-land/lte'](c) (transitivity)", () => {
        it('if a <= b and b <= c then a <= c', () => {
            const ord63a = ord(42);
            const ord63b = ord(63);
            const ord63c = ord(97);

            const actual1 = ord63a['fantasy-land/lte'](ord63b);
            const actual2 = ord63b['fantasy-land/lte'](ord63c);
            const actual3 = ord63a['fantasy-land/lte'](ord63c);

            expect(actual1).toBe(true);
            expect(actual2).toBe(true);
            expect(actual3).toBe(true);
        });
    });
});

import { category } from '../fantasy-land/category.js';
import { compareArrays } from '../fantasy-land/utils/_compareArrays.js';

describe('category', () => {
    describe('a value that implements the Category specification must also implement the Semigroupoid specification', () => {
        it('should respect the rule of associativity', () => {
            const category42 = category(42);
            const category63 = category(63);
            const category97 = category(97);

            const leftHand  = category42['fantasy-land/compose'](category63)['fantasy-land/compose'](category97);
            const rightHand = category42['fantasy-land/compose'](category63['fantasy-land/compose'](category97));

            let actual = compareArrays(leftHand.value, rightHand.value);

            expect(actual).toBe(true);
        });
    });

    describe('a value which has a Category must provide a fantasy-land/id function on its type representative', () => {
        it("a['fantasy-land/compose'](C['fantasy-land/id']()) is equivalent to a (right identity)", () => {
            const category63 = category(63);
            const category__ = category();

            const composed = category63['fantasy-land/compose'](category__['fantasy-land/id']());

            const actual = compareArrays(category63.value, composed.value);

            expect(actual).toBe(true);
        });

        it("C['fantasy-land/id']()['fantasy-land/compose'](a) is equivalent to a (left identity)", () => {
            const category63 = category(63);
            const category__ = category();

            const composed = category__['fantasy-land/id']()['fantasy-land/compose'](category63);

            const actual = compareArrays(category63.value, composed.value);

            expect(actual).toBe(true);
        });
    });
});

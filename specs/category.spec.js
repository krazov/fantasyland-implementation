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
});

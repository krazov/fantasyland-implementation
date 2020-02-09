import { semigroupoid } from '../fantasy-land/semigroupoid.js';
import { compareArrays } from '../fantasy-land/utils/_compareArrays.js';

describe('Semigroupoid', () => {
    describe("a['fantasy-land/compose'](b)['fantasy-land/compose'](c) === a['fantasy-land/compose'](b['fantasy-land/compose'](c)) (associativity)", () => {
        it('should respect the rule of associativity', () => {
            const semigroupoid42 = semigroupoid(42);
            const semigroupoid63 = semigroupoid(63);
            const semigroupoid97 = semigroupoid(97);

            const leftHand  = semigroupoid42['fantasy-land/compose'](semigroupoid63)['fantasy-land/compose'](semigroupoid97);
            const rightHand = semigroupoid42['fantasy-land/compose'](semigroupoid63['fantasy-land/compose'](semigroupoid97));

            let actual = compareArrays(leftHand.value, rightHand.value);

            expect(actual).toBe(true);
        });

        it('should respect the rule of associativity for multiple nesting', () => {
            const semigroupoid11 = semigroupoid(11);
            const semigroupoid23 = semigroupoid(23);
            const semigroupoid42 = semigroupoid(42);
            const semigroupoid63 = semigroupoid(63);
            const semigroupoid97 = semigroupoid(97);

            const leftHand = semigroupoid11['fantasy-land/compose'](semigroupoid23)
                ['fantasy-land/compose'](semigroupoid42)
                ['fantasy-land/compose'](semigroupoid63)
                ['fantasy-land/compose'](semigroupoid97);

            const rightHand = semigroupoid11['fantasy-land/compose'](
                semigroupoid23['fantasy-land/compose'](semigroupoid42['fantasy-land/compose'](semigroupoid63))
            )
                ['fantasy-land/compose'](semigroupoid97);

            let actual = compareArrays(leftHand.value, rightHand.value);

            expect(actual).toBe(true);
        });
    });
});

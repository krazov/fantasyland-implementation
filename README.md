# fantasyland-implementation

My own implementation of https://github.com/fantasyland/fantasy-land

## Implemented specs

Implementation specs are quoted after [Fantasy Land’s README.md](https://github.com/fantasyland/fantasy-land/blob/master/README.md).

### Setoid

1. `a['fantasy-land/equals'](a) === true` (reflexivity)
2. `a['fantasy-land/equals'](b) === b['fantasy-land/equals'](a)` (symmetry)
3. If `a['fantasy-land/equals'](b)` and `b['fantasy-land/equals'](c)`, then `a['fantasy-land/equals'](c)` (transitivity)

### Ord

>A value that implements the Ord specification must also implement the Setoid specification.

1. `a['fantasy-land/lte'](b)` or `b['fantasy-land/lte'](a)` (totality)
2. If `a['fantasy-land/lte'](b)` and `b['fantasy-land/lte'](a)`, then `a['fantasy-land/equals'](b)` (antisymmetry)
3. If `a['fantasy-land/lte'](b)` and `b['fantasy-land/lte'](c)`, then `a['fantasy-land/lte'](c)` (transitivity)

### Semigroupoid

1. `a['fantasy-land/compose'](b)['fantasy-land/compose'](c) === a['fantasy-land/compose'](b['fantasy-land/compose'](c))` (associativity)
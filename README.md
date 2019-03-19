# @remi_bse/magic-square-solver

Ce module permet de vérifier si une matrice est un carré magique ou non. Pour rappel, un carré magique est une matrice N * N dont les nombres sont distincts et compris entre 1 et (N * N) où la somme d'une ligne, d'une colonne ou d'une diagonale est toujours égale au même nombre.

This module makes it possible to check if a matrix is a magic square or not. As a reminder, a magic square is a matrix N * N whose numbers are distinct and between 1 and (N * N) where the sum of a line, a column or a diagonal is always equal to the same number.

## Installation 
```sh
npm install @remi_bse/magic-square-solver --save
```
## Usage

### Javascript
```javascript

var mss = require('@remi_bse/magic-square-solver').MagicSquareSolver;

var square = {
    square : [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
    dimension : 3
};

var mySquare = new mss(square);

var result = verify.check();

```
```sh
Output should be => Magic square : true
```
### TypeScript
```typescript
import { MagicSquareSolver } from '@remi_bse/magic-square-solver';
import { IMagicSquare } from '@remi_bse/magic-square.interface';

var square : IMagicSquare = 
{
    square : [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    dimension : 3
};
var mss = new MagicSquareSolver(square);
var verify = mss.check();

```
```sh
Output should be => Magic square : false
```

Copyright (C) 2019, Rémi BOISSISE

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

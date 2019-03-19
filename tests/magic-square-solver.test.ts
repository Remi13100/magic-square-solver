import { expect } from 'chai';
import { MagicSquareSolver } from '../src/magic-square-solver.class';
import { IMagicSquare } from '../src/models/magic-square.interface';

describe('Magic Square Solver', function() {
    it('constructor : dimension', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('constructor : duplicate', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3], [4, 5, 6], [7, 1, 1]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('constructor : boundary', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3], [4, 5, 6], [7, 1, 10]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('constructor : boundary', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3], [4, 0, 6], [7, 1, 9]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('constructor : boundary', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3], [4, -1, 6], [7, 1, 9]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('constructor : dimension', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 3], [4, -1, 6], [7, 1, 9]],
            dimension : 3
        };
        var create = () => { new MagicSquareSolver(square) };
        expect(create).to.throw();
    });

    it('check : diagonaleLeftToRight', function() {
        var square : IMagicSquare = 
        {
            square : [[2, 1, 3], [4, 5, 6], [7, 8, 9]],
            dimension : 3
        };
        var mss = new MagicSquareSolver(square);
        var verify = mss.check();

        expect(verify.status).to.be.equal(false);
        expect(verify.message).to.be.equal("La somme de la diagonale de la gauche vers la droite n'est pas correcte");
    });

    it('check : columnAndLine', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            dimension : 3
        };
        var mss = new MagicSquareSolver(square);
        var verify = mss.check();

        expect(verify.status).to.be.equal(false);
    });

    it('check : diagonaleRightToLeft', function() {
        var square : IMagicSquare = 
        {
            square : [[1, 3, 2], [4, 5, 6], [7, 8, 9]],
            dimension : 3
        };
        var mss = new MagicSquareSolver(square);
        var verify = mss.check();

        expect(verify.status).to.be.equal(false);
        expect(verify.message).to.be.equal("La somme de la diagonale de la droite vers la gauche n'est pas correcte");
    });

    it('check : function', function() {
        var square : IMagicSquare = 
        {
            square : [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
            dimension : 3
        };
        var mss = new MagicSquareSolver(square);
        var verify = mss.check();

        expect(verify.status).to.be.equal(true);
        expect(verify.message).to.be.equal("Il s'agit bien d'un carré magique");
    });
});

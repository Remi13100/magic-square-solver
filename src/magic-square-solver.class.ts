import { IMagicSquare } from "./models/magic-square.interface";
import { IMagicSquareResponse } from "./models/magic-square-response.interface";

export class MagicSquareSolver 
{
    // Somme des lignes, colonnes et diagonales attendu
    private expected : number; 

    constructor(readonly ms : IMagicSquare)
    {
        if(!!!ms.square) {
            throw new Error("Le carré magique n'est pas défini");
        }

        if(!!!ms.dimension) {
            throw new Error("La dimension du carré magique n'est pas définie");
        }

        if(ms.dimension != ms.square.length)
        {
            throw new Error("La dimension renseignée n'est pas en accord avec la dimension du carré magique");
        }

        for(var i = 0, j = ms.square.length; i < j; i++)
        {
            if(ms.square[i].length != ms.dimension)
            {
                throw new Error("La dimension renseignée de la ligne n°" + (i + 1) + " n'est pas en accord avec la dimension du carré magique");
            }
        }

        let dimension = (this.ms.dimension * this.ms.dimension);
        let array : Array<number> = [].concat.apply([], ms.square);

        let isInside = array.every((number) => { 
            return ((number >= 1) && (number <= dimension));
        });

        if(!isInside)
        {
            throw new Error("Les nombres de votre carré magique doivent être inclus entre 1 et " + dimension);
        }

        let array_sorted = array.slice().sort();
        let duplicate = [];

        for (var i = 0; i < array_sorted.length - 1; i++) {
            if (array_sorted[i + 1] == array_sorted[i]) {
                duplicate.push(array_sorted[i]);
            }
        }

        if(duplicate.length > 0)
        {
            throw new Error("Le(s) nombre(s) " + duplicate.toString() + " se retrouve(nt) une ou plusieurs fois dans le carré magique");
        }

        this.ms.dimension = ms.dimension;
        this.ms.square = ms.square;
        this.expected = ((dimension * (dimension + 1)) / 2) / this.ms.dimension;
    }

    /**
     * Permet de vérifier s'il s'agit bien d'un carré magique
     */
    check() : IMagicSquareResponse
    {
        if(this.ms === undefined)
        {
            throw new Error("MagicSqaure is undefined");
        }

        let response = { message : null, status : false };

        // Vérification de la somme de la diagnoale (gauche à droite)
        if(!this.diagonaleLeftToRight()) {
            response.message = "La somme de la diagonale de la gauche vers la droite n'est pas correcte";
            return response;
        }

        // Vérification de la somme de la diagnoale (droite à gauche)
        if(!this.diagonaleRightToLeft()) {
            response.message = "La somme de la diagonale de la droite vers la gauche n'est pas correcte";
            return response;
        }

        // Vérification de la somme des lignes et des colonnes
        let resultColumnAndLine = this.columnAndline();

        if(!resultColumnAndLine.status) {
            return resultColumnAndLine;
        }

        response.status = true;
        response.message = "Il s'agit bien d'un carré magique";

        return response;
    }

    /** Vérification de la somme des colonnes et des lignes */
    private columnAndline() : IMagicSquareResponse {
        var sc : number = 0;
        var sl : number = 0;
        for (var i = 0; i < this.ms.dimension; i++) {
            for(var j = 0; j < this.ms.dimension; j++)
            {
                sl += this.ms.square[i][j];
                sc += this.ms.square[j][i];
            }

            if(sc != this.expected) {
                return { 
                    message : "La somme de la colonne " + (i + 1) + " n'est pas bonne (somme = " + sc + "). La somme de la colonne attendue doit être la suivante : " + this.expected, 
                    status : false 
                };
            }

            if(sl != this.expected) {
                return { 
                    message : "Le somme de la ligne " + (i + 1) + " n'est pas bonne (somme = " + sc + "). La somme de la ligne attendue doit être la suivante : " + this.expected, 
                    status : false 
                };
            }
            
            sc = 0;
            sl = 0;
        }
        return { message : null, status : true };
    }
    
    /** Vérification de la somme de la première diagonale (de gauche à droite, du haut vers le bas) */
    private diagonaleLeftToRight() : boolean {
        var s : number = 0;
        for (var i = 0; i < this.ms.dimension; i++) {
            s += this.ms.square[i][i];
        }
        return (s == this.expected); 
    }
    
    /** Vérification de la somme de la seconde diagonale (de droite à gauche, du haut vers le bas) */
    private diagonaleRightToLeft() : boolean {
        var s : number = 0;
        for (var i = 0; i < this.ms.dimension; i++) {
            s += this.ms.square[i][this.ms.dimension-i-1];
        }
        return (s == this.expected);
    }
}
/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

let primaLista = [1, 2, 3, 4, 5, 6, 7, 8];

let secondaLista = [9, 31, 46];



for (i=secondaLista.length; i < primaLista.length; i++) {
    
    nuovoElemento = (Math.floor(Math.random() * 1000)); // 1000 è il massimo da cui attingerà per i numeri random
    secondaLista.push(nuovoElemento);
}

console.log (secondaLista);

document.getElementById("prima-lista").innerHTML = '<li>' + primaLista + '</li>' ;

document.getElementById("seconda-lista").innerHTML = '<li>' + secondaLista + '</li>' ;


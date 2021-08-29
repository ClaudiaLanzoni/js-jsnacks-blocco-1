/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

let cassettoNumeri = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt (prompt("inserisci numero"))

    if (numero % 2 == 1) {
        cassettoNumeri.push(numero)
    }
}

console.log(cassettoNumeri)
/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */


/*let somma = 0;

for (let i = 0; i < 5; i++) {
    let numeroUtente = parseInt (prompt("inserisci numero"));
    somma = somma + numeroUtente;
}


console.log(somma);*/


let contatore = 0

while (contatore < 5) {
    let numeroUtente = parseInt (prompt("inserisci numero"));
    contatore = contatore + numeroUtente;
}

console.log (contatore);
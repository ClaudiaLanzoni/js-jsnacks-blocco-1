/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let primaParola = prompt("Inserisci la prima parola");

let secondaParola = prompt ("Inserisci la seconda parola");

if (primaParola.length < secondaParola.length) {
    console.log (primaParola);
    console.log (secondaParola);
} else if (secondaParola.length < primaParola.length) {
    console.log (secondaParola);
    console.log (primaParola);
} else if (primaParola.length == secondaParola.length) {
    console.log ("Le parole hanno la stessa lunghezza")
}

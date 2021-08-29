/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */


 let arrayParole = [];

 

 /*for (i=0 ; i<5; i++) {
    let parole = prompt("Inserisci una parola");

         if (parole === parole.toUpperCase()) {
            alert ("Non scrivere in maiuscolo");
         } else 
         (arrayParole.push(parole));
   }

console.log (arrayParole);*/

let parole = prompt("Inserisci una parola");

 while (parole != parole.toUpperCase()) {
   arrayParole.push(parole);
 }

 if (parole === parole.toUpperCase())
      alert ("Non scrivere in maiuscolo");

      console.log(arrayParole)
   

   
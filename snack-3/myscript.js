/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

 let nomeUtente = prompt ("Come si chiama?");

 let listaInvitati = ["Gino", "Pino", "Tizia", "Caia"];
 
 if (listaInvitati.includes(nomeUtente)) {
     alert ("Benvenuto")
 } else {
     alert ("Non può partecipare alla festa")
 }


/*let verificaInvitato = false;

for (let i = 0; i < listaInvitati.lenght ; i++){
    let invitatoCorrente = listaInvitati[i];

    if (invitatoCorrente == nomeUtente) {
        verificaInvitato = true;
    }
}

if (verificaInvitato = true) {
    console.log("Benvenuto")
} else {
    console.log("Non puoi entrare")
}
*/

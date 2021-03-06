/* Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato. 
In particolare vanno generate per ogni giocatore le seguenti informazioni, 
facendo attenzione che il numero generato abbia senso: 
Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri) 
Numero di punti fatti, 
Numero di rimbalzi ,
Falli, 
Percentuale di successo per tiri da 2 punti , 
Percentuale di successo per  da 3 punti.
Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche. */

var lettere = "ABCDEFGHILMNOPQRSTUVZ"; //Questo serve per pescare 3 lettere randomiche per il codice giocatore univico


function ricerca(richiesta, statisticheGiocatori) { 
    var trovato = -1; //non trovato
    for(var y = 0; y < statisticheGiocatori.length; y++) { //Devo fare algoritmo di ricerca
        if(richiesta == statisticheGiocatori[y].giocatoreUnivoco) {
            trovato = y; //trovato
        }
    }    
    return trovato
}

var statisticheGiocatori = []; // Qui creiamo un array in cui inserire l'oggetto giocatoriOggetto

for(var x = 0; x < 100; x++) {
    var giocatoriOggetto = {}; // Qui creiamo un oggetto in cui inserire le statistiche

    do {
        var codiceGiocatore = ""; //Qui è dove mettiamo il codice con la concatenazione
        for(var i = 0; i < 3; i++){ //Questo primo for mi serve per generare tre lettere randomiche e aggiungerle a codiceGiocatore
            var generatore = Math.floor(Math.random() * lettere.length);
            codiceGiocatore += lettere[generatore];
        } 
    
        for(var counter = 0; counter < 3; counter++) { //Questo secondo for mi serve per generare tre numeri, aggiungerli a codiceGiocatore 
            var numeriRandom = Math.floor(Math.random() * 9);
            codiceGiocatore += numeriRandom;
        }
    } while(ricerca(codiceGiocatore, statisticheGiocatori) !== -1); //Finche il codice giocatore creato esiste gia devo rigenerarlo

    giocatoriOggetto.giocatoreUnivoco = codiceGiocatore; //Così aggiungo il codice in un oggetto

    giocatoriOggetto.puntiFatti = Math.floor(Math.random() * 30); //Qui aggiungo in giocatoriOggetto i punti fatti
    giocatoriOggetto.numeroRimbalzi = Math.floor(Math.random() * 15); //Qui aggiungo in giocatoriOggetto i rimbalzi
    giocatoriOggetto.falli = Math.floor(Math.random() * 10); //Qui aggiungo in giocatoriOggetto i falli
    giocatoriOggetto.successo2Punti = Math.floor(Math.random() * 100); //Qui aggiungo in giocatoriOggetto la percentuale di successo per tiri da 2 punti
    giocatoriOggetto.successo3Punti = Math.floor(Math.random() * 100); //Qui aggiungo in giocatoriOggetto la percentuale di successo per tiri da 3 punti

    statisticheGiocatori.push(giocatoriOggetto); //Qui pusho l'oggetto all'interno dell'array statisticheGiocatori;
}
console.log(statisticheGiocatori);

var richiesta = prompt("Inserisci il numero Giocatore Univoco");

var trovato = ricerca(richiesta, statisticheGiocatori); 

if (trovato == -1) {
    alert("Nessun giocatore trovato");
} else {
    alert("Numero giocatore univoco: " + statisticheGiocatori[trovato].giocatoreUnivoco + " Punti fatti: " + statisticheGiocatori[trovato].puntiFatti + " Numero di rimbalzi: " + statisticheGiocatori[trovato].numeroRimbalzi + " Falli: " + statisticheGiocatori[trovato].falli + " Percentuale di successo per tiri da 2 punti: " + statisticheGiocatori[trovato].successo2Punti + "%" + " Percentuale di successo per tiri da 3 punti: " + statisticheGiocatori[trovato].successo3Punti + "%");
}

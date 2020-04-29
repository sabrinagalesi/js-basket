/* Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato. 
In particolare vanno generate per ogni giocatore le seguenti informazioni, 
facendo attenzione che il numero generato abbia senso: 
Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri) 
Numero di punti fatti, 
Numero di rimbalzi ,
Falli, 
Percentuale di successo per tiri da 2 punti , 
Percentuale di successo per  da 3 punti.
Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche. 

Prima di tutto faccio un array che contenga una serie di lettere
Poi faccio un for che si ripeta 3 volte e prenda 3 lettere casuali dall'array di prima
Anche stavolta faccio un for che prenda per 3 volte tre numeri casuali .
Poi uniamo il risultato del primo for con il secondo for e avremo ottenuto il Codice Giocatore Univoco
Per far si che sia univoco, ogni volte che creiamo un codice lo inseriamo in un array, e facciamo girare il for finche non trova un codice univoco diverso.*/

var lettere = "ABCDEFGHILMNOPQRSTUVZ";

console.log(lettere.length);

for(var i = 0; i < 3; i++){
    console.log(lettere[i]);
    var generatore = Math.floor(Math.random() * lettere.length);

}

console.log(generatore);
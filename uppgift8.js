"use strict";
/* Programmet visar information om en bok och skriver ut informationen.
 Av Julia Anderberg, 2026 */

// Objekt som representerar en bok
const bok = {
    titel: "The picture of Dorian Gray", 
    författare: "Oscar Wilde",
    utgivningsår: 1890
    };

// Funktion som tar emot bokobjektet som parametrar 
function bokInformation(bok) {

    console.log("Titel: " + bok.titel);
    console.log("Författare: " + bok.författare);
    console.log("Utgivningsår: " + bok.utgivningsår);
}

// Utskrift av bokinformation 
bokInformation(bok);



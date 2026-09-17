"use strict";
/* Programmet räknar ut arean av en rektangel tre gånger. 
 Av Julia Anderberg, 2026 */
 
// Funktion som beräknar arean
function calculateArea(bredd, höjd) {
    return bredd * höjd; 
}

// Skriver ut resultaten av funktionen 
const area1 = calculateArea(80, 40);
const area2 = calculateArea(100, 80);
const area3 = calculateArea(300, 150);

console.log("Arean är " + area1);
console.log("Arean är " + area2);
console.log("Arean är " + area3);




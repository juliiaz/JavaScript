"use strict";
/* Programmet räknar ut summan av talen 1 till 8.  
 Av Julia Anderberg, 2026 */

// Array med tal 1 till 8
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Funktionen beräknar summan av talen i arrayen 
function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i ++) { 

    sum = sum + numbers[i];
    } 

    return sum;
}

// Anropar funktionen + skriver ut resultatet 
 console.log("Summan är " + sumNumbers(numbers));



"use strict";
/* Programmet visar information om personer och skriver ut den. 
 Av Julia Anderberg, 2026 */

// Array med tre stycken objekt 
const people = [
{
    name: "Julia",
    age: 22,
    city: "Göteborg"
},
{
    name: "Maya",
    age: 23, 
    city: "Malmö"
}, 
{
    name: "Jonathan", 
    age: 25, 
    city: "Stockholm"
}
]; 

// For-loop för arrayen
for (let i = 0; i < people.length; i++){
    const person = people[i];

    peopleInformation(person);
}

// Funktionen med namn och stad
function peopleInformation(person){
console.log("Namn: " + person.name);
console.log("Stad: " + person.city);

// Villkor med if och else 

    if (person.age >= 18){
        console.log("Personen är myndig");
        } 

    else {
        console.log("Personen är inte myndig");

}

}















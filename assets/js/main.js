/* Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */



const numberKilometer = prompt('Quanti chilometri devi percorrere?');

console.log(numberKilometer);

const userBirth = prompt('Quanti anni hai?');

console.log(userBirth);

const ticketPrice = numberKilometer * 0.21;

console.log(ticketPrice);

const ticketMinors = ticketPrice * 20 / 100;

console.log(ticketMinors);

const ticketSeniors = ticketPrice * 40 / 100;

console.log(ticketSeniors);

const ticketNormal = ticketPrice;

console.log(ticketNormal);

let result_discount;

if (userBirth <= 18) {

    console.log('ticketMinors');

    result_discount= ticketMinors

    alert('ticketPrice * 20 / 100')


} else if (userBirth >= 65){

    console.log('ticketSeniors');

    result_discount= ticketSeniors

    alert('ticketPrice * 40 / 100')
} else {

    console.log('ticketNormal');

    result_discount= ticketNormal

    alert('ticketPrice')
}
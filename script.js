// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.

var userAsk = prompt("pari o dispari?");
var userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
var randomNum = Math.floor(Math.random()* 5 + 1);

function somma (a, b) {
    var result = a + b;
    return result;
}

somma(userNum, randomNum);
document.getElementById("result").innerHTML += somma();
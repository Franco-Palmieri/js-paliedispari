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
var resultSum = document.getElementById("result");
var outputElement = document.getElementById("winner")

function somma(a, b){
    result = a + b;
    return result;
}
var calcSum = somma(userNum, randomNum);

function isPari(calcSum) {
    if (calcSum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
var resultPari = isPari(calcSum);

if (resultPari) {
    outputElement.innerText += "\n Il numero è pari";
}else{
    outputElement.innerText += "\n Il numero è dispari"
}
resultSum.innerHTML += somma(userNum, randomNum);
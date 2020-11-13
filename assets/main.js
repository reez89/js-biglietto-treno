//**Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var chilometri = Number(prompt("Quanti km devi percorrere?"));
var etàPasseggero = Number(prompt("Quanti anni hai?"));

console.log(chilometri, etàPasseggero);

//**Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//**il prezzo del biglietto è definito in base ai km (0.21 € al km)

var prezzoChilometri = 0.21;
var prezzoBiglietto = chilometri * prezzoChilometri;

console.log(prezzoBiglietto);

//**va applicato uno sconto del 20% per i minorenni
var discountYoung = .20;
var discountOlder = .40;
var newTicket

if (etàPasseggero < 18){
    newTicket = prezzoBiglietto  - (prezzoBiglietto * 0.2);
    console.log(newTicket);
}
//**va applicato uno sconto del 40% per gli over 65

else if (etàPasseggero > 65){
    newTicket = prezzoBiglietto  - (prezzoBiglietto * 0.4);
    console.log(newTicket)
}

let sale;
let result;

const passengerAge =parseFloat(prompt("Inserisci la tua età"));

const Km = parseFloat(prompt("Inserisci quanti kilometri devi fare nel viaggio"));

let TicketCost = 0.21 * Km;

if(passengerAge < 18){
    //Applica sconto del 20%
    sale = (20 / 100) * TicketCost;
    result = TicketCost - sale;
    result = result.toFixed(2);
    document.getElementById("sconto").innerHTML = "Sei minorenne e hai diritto ad uno sconto del 20% sul costo del biglietto!! Costo senza sconto: " + TicketCost + "€";
} else if(passengerAge > 65){
     //Applica sconto del 40%
    sale = (40 / 100) * TicketCost;
    result = TicketCost - sale;
    result = result.toFixed(2);
    document.getElementById("sconto").innerHTML = "Sei un anziano e hai diritto ad uno sconto del 40% sul costo del biglietto!! Costo senza sconto: " + TicketCost + "€";
}else{
    // Il passeggero non rientra nella categoria per ricevere lo sconto
    result = TicketCost;
    result = result.toFixed(2);
    document.getElementById("sconto").innerHTML = "Non hai diritto a nessun tipo di sconto ----- Sfigato!!"
}

document.getElementById("cost").innerHTML += " " + result + "€ !!"

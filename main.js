const km = parseInt(prompt("Quanto è lungo il viaggio? in KM"));
const eta = parseInt(prompt("Qual'è l'età del passeggero?"));

let costo = 0.21 * km;

if(eta < 18) {
    costo = (costo * 20) / 100;
} else if(eta >= 65) {
    costo = (costo * 40) / 100;
}

console.log(costo.toFixed(2));
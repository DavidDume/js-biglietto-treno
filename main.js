const title = document.getElementById('title');
const costoHtml = document.getElementById('costo');

const km = parseInt(prompt("Quanto è lungo il viaggio? in KM"));
const eta = parseInt(prompt("Qual'è l'età del passeggero?"));

if(isNaN(km) || isNaN(eta)) {
    title.innerHTML = "Insersci un numero valido!";
    console.log('Insersci un numero valido!');
} else {
    let costo = 0.21 * km;

    if(eta < 18) {
        title.innerHTML = "Hai diritto allo sconto per minorenni!";
        costo = (costo * 20) / 100;
    } else if(eta >= 65) {
        title.innerHTML = "Hai diritto allo sconto per anziani!";
        costo = (costo * 40) / 100;
    }
    
    costoHtml.innerHTML = `Il costo totale è di ${costo.toFixed(2)} €`;
}
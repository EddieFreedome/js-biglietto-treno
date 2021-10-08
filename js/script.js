const prezzoChilometro = 0.21;
let etaUtente = prompt("Inserisci la tua eta'");
etaUtente = parseInt(etaUtente)
const distanza = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere"));

//prezzo
const prezzoStandard = prezzoChilometro * distanza.toFixed(2);
let prezzoJunior = prezzoStandard - (prezzoStandard / 100 * 20).toFixed(2);
let prezzoSenior = prezzoStandard - (prezzoStandard / 100 * 40).toFixed(2);

//eta utente

if (etaUtente < 18) {
    alert(`Promo Junior: ti e' stato applicato uno sconto del 20%. Il prezzo del tuo biglietto è: ${prezzoJunior}`)
}

if (etaUtente >= 18 && etaUtente <= 65) {
    alert(`Promo Standard: Il prezzo del tuo biglietto è: ${prezzoStandard}`)
}

if (etaUtente > 65) {
    alert(`Promo Senior: ti e' stato applicato uno sconto del 40%. Il prezzo del tuo biglietto è: ${prezzoSenior}`)
}



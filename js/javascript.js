const numberKm = parseInt(prompt('Salve, Quanti km deve percorrere?'));
console.log(numberKm);

const ageUse = parseInt(prompt("Perfetto! Mi dica la sua età"));
console.log(ageUse);

const price =(0.21);
console.log(price * numberKm);

if(ageUser < 18) {
    console.log(price * numberKm * 20 / 100);
}
else(ageUse > 18) {
    console.log(price * numberKm );
}


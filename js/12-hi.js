/*
Reikia funkcijos, kuriai davus varda, grazintu pasisveikinimo teksta

pvz: Labas, as esu Vardenis!
*/


// Vardenis -> Labas, as esu Vardenis!
// Maryte -> Labas, as esu Maryte!
// Petras -> Labas, as esu Petras!

function hi(vardas) {
    return `Labas, as esu ${vardas}!`;
}

const hiVardenis = hi('Vardenis');
console.log(hiVardenis);

const hiMaryte = hi('Maryte');
console.log(hiMaryte);
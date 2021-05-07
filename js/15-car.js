/*
automobilis:
kuro kiekis (l) kiekis
kuro sanaudos 100 kilometru
norimas nuvaziuoti atstumas (km)

ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

function arPavyks (kiekis, sanaudos, atstumas) {
    if (kiekis / sanaudos >= atstumas / 100) {
    return true;
    }

    if (kiekis / sanaudos < atstumas / 100) {
    return false;
    }
}



console.log(arPavyks(10,10,300));



function arPavyks (kiekis, sanaudos, atstumas) {
    const imanomasNuvaziuotiAtstumas = kiekis / sanaudos * 100;
    if (imanomasNuvaziuotiAtstumas >= atstumas) {
        return true;
    }

    return false;
}



const try1 = arPavyks(20,5,400);

console.log(try1);
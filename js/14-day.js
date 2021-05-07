/*
DAY

jeigu dabar yra 5.00 iki 10.59 -> rytas
jeigu dabar yra 11.00 iki 18.59 -> diena
jeigu dabar yra 19.00 iki 23.59 -> vakaras
jeigu dabar yra 0.00 iki 4.59 -> naktis

*/

function parosMetas(val,min) {
    if (val < 5) {
        return 'naktis';
    }
    
    if (val < 11) {
        return 'rytas';
    }

    if (val < 19) {
        return 'diena';
    }

    if (val < 24) {
        return 'naktis';
    }
}

console.log(parosMetas(5,15));
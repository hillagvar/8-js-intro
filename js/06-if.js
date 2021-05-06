/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==

SABLONAI:
if () {}
if () {} else {}

if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} else if () {} ... else {}

*/

const a = 44;
const b = '44';

if( a === b) {
    console.log('taip');
} else {
    console.log('ne');
}

const akys = 'juodos';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Nezinoma akiu spalva');
}

console.log('--------------------')

const parosMetas = 'naktis';

if (parosMetas === 'rytas') {
    console.log('Labas rytas');
} else {
    if (parosMetas === 'diena') {
        console.log('Laba diena');
    } else {
        if (parosMetas === 'vakaras') {
            console.log('Labas vakaras');
        } else {
                console.log('Neatpazintas paros metas');
            }
        }
    }    

    

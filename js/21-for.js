/*
isspausdinti skaicius intervale
*/

console.log('start');

for (let i = 0; i <= 5; i++) {
    if (i !== 0) {
    console.log(i);
    }

}

console.log('finish');


console.log('start');

const nuo = 3;
const iki = 10;

for (let i = nuo; i <= iki; i++) {
    
    console.log(i);

}

console.log('finish');


console.log('----------------');

/*
isspausdinti skaicius intervale, bet padvigubintus
*/

console.log('start');

const nuo2 = 2;
const iki2 = 7;

for (let i = nuo2; i <= iki2; i++) {
    
    console.log(i*2);

}

console.log('finish');


console.log('----------------');


/* 
Turime sarasa (array) ir reikia isspausdinti visas jo reiksmes
*/

const marks = [10,2,8,4,6,9,1,7,3,5,10,18,19];

for (let i = 0; i < marks.length; i++) {
    
    console.log(marks[i]);

}
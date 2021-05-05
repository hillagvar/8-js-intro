/*
ARRAY
*/

const marks = [10,2,8,4,6];
const size = marks.length;

console.log(marks);

const firstMark = marks[0];

console.log('pirmas:', firstMark);

const second = marks[1];
const last = marks[size - 1];

console.log('antras:', second);
console.log('paskutinis:', last);

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];

const paskutinisZodis = zodynas[zodynas.length - 1];
console.log('paskutinis zodis:', paskutinisZodis);

const abc = ['b', 'c'];
console.log(abc);

abc.push('d');
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift('a');
console.log(abc);

console.log(abc.reverse());
console.log(abc);

console.log(['a', 'b'].concat(['c', 'd']));

console.log(abc);

console.log('------------');

const a1 = ['a', 'b'];
const a2 = ['c', 'd'];
const a12 = a1.concat(a2);
console.log(a1);
console.log(a2);
console.log(a12);

console.log('------------');

const modern1 = [...a1, ...a2, ...a12];
console.log(modern1);

const modern2 = [...a2, ...a1];
console.log(modern2);
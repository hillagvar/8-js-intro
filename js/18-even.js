function even (s1) {
    if (s1 % 2 === 0) {
        return true;
    }

    return false;
}

console.log(even(20));
console.log(even(1));
console.log(even(124));


console.log('---------------');

function even (s1) {
    return s1 % 2 === 0 ? true : false;
}

console.log(even(20));
console.log(even(1));
console.log(even(124));

console.log('---------------');

function even (s1) {
    return s1 % 2 === 0;
}

console.log(even(20));
console.log(even(1));
console.log(even(124));
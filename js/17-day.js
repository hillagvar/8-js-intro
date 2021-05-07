function weekday (day) {
    if (day % 7 === 0) {
        return 7;
    }

    return day % 7;
}

console.log(weekday(1), '->', 1);
console.log(weekday(2), '->', 2);
console.log(weekday(3), '->', 3);
console.log(weekday(4), '->', 4);
console.log(weekday(5), '->', 5);
console.log(weekday(10), '->', 3);
console.log(weekday(20), '->', 6);
console.log(weekday(28), '->', 7);
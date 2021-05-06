/*
Objektas: key-value poru rinkinys
*/


const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    'likes banana': true
};

console.log(petras);

const maryte = {
    name:'Maryte',
    age: 87,
    color: 'red',
    likesBanana: false
};

console.log(petras.age);
console.log(maryte.age);
console.log(maryte.color);
console.log(petras["likes banana"]);
console.log(maryte.likesBanana);

console.log(petras.name, petras.age, petras.color);
console.log(maryte.name, maryte.age, maryte.color);


console.log('--------------------');

const gyventojai = [petras, maryte];

console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [
        {
            country: 'LT',
            price: 99
        },
        {
            country: 'LV',
            price: 88
        },
        {
            country: 'EE',
            price: 140
        },
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'Skrybeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 140
    }
}

console.log(kepure.pricing.lt);
/*
STRINGS (tekstas)

inicijavimo budai:
- viengubos kabutes
- dvigubos kabutes
- backtick (`) kabutes

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes.
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);

// Dvigubos (") kabutes.
const kabutes12 = 'Dvigubos (") kabutes.';
console.log(kabutes12);

// Viengubos ir dvigubos kabutes.
const kabutes1e = 'Viengubos (\') ir dvigubos (") kabutes.';
console.log(kabutes1e);
const kabutes2e = "Viengubos (') ir dvigubos (\") kabutes.";
console.log(kabutes2e);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Sveiki, as esu Vardenis!
const sayHi = 'Sveiki, as esu ' + vardas + '!';
console.log(sayHi);

// \n - enter
// \t - tab

const imgSrc = './img/logo.png';
const HTML = '<header>\n\
<img src="' + imgSrc + '" alt="logo" class="logo">\n\
<nav>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
</nav>\n\
</header>';
console.log(HTML);

const H2 = `<header>
<img src="` + imgSrc + `" alt="logo" class="logo">
<nav>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
</nav>
</header>`;
console.log(H2);

const H3 = `<header>
<img src="${imgSrc}" alt="logo" class="logo">
<nav>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
</nav>
</header>`;
console.log(H3);


// ${imgSrc} veikia tik su ` inicijavimu
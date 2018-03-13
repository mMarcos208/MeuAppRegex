const texto =`De longe eu avistei o fogo e uma pessoa gritando: fogoooooo!`;
const texto2 =`There is a big fog in NYC`;

const regex = /fogo*/gi;
console.log(texto.match(regex));
console.log(texto2.match(regex));

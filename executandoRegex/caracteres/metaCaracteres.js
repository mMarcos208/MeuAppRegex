const texto = `1,2,3,4,5,6,a.b c?d!f`;

let expressao = /\.|\?|,| |!/g

console.log(texto.split(expressao))
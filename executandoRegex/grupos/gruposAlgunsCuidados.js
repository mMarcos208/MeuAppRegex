const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

const expressao = /[(ABC)]/gi; //não é um grupo
console.log(texto.match(expressao));

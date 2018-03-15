const texto = 'Supermercado hipermercado minimercado mercado';

const expressao = /(hiper|Super|mini)?mercado/gi;
console.log(texto.match(expressao));
console.log(texto.match(/((hi|su)per|mini)?mercado/gi));

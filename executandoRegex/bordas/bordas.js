const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador.';

const expressao = /^r/gi; //^fora dos conjuntos quer dizer inicio de linha!
console.log(texto.match(expressao));
console.log(texto.match(/r.$/gi));
console.log(texto.match(/^r.*r.$/gi));
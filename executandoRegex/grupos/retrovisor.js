const texto = '<b>Destaque</b><strong>Destaque</strong><div>Conteudo</div>';

const expressao = /<(\w+)>.*<\/\1>/g;
console.log(texto.match(expressao));


const texto2 = `Lentamente é mente muito lenta.`;

const expressao2 = /(Lenta)(mente)\s.\s\2.+\1/gi;
console.log(texto2.match(expressao2));
console.log(texto2.match(/(?:Lenta)(mente).+\1/g)); // não guarda o retrovisor ?:!
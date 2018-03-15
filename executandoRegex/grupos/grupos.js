const texto = 'O josé simão é muito engraçado...hehehehe';

const expressao = /(he)+/g;
console.log(texto.match(expressao));


const texto2 = `http://www.eturn.com.br
http://www.iusnatura.com.br
http://www.cntecnologia.com.br
www.csu.com.br
google.com.ag
`;

const expressao2 = /(http:\/)?(www\.)?\w+\.\w{2,}(\.\w+)?/g;
console.log(texto2.match(expressao2));
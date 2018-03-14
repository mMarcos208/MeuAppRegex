const texto = `Os e-mail dos convidados são:
-marconi@gmail.com
-marconimbarroso@gmail.com
-magno@gmail.com.br
-marconimbarroso@gmailcom
-marconi.mbarroso@gmail.com
-marconi.mbarroso@gmail.com.br`

const expressao = /\w+@\w+\.\w{2,4}/g; //1ª versão
const expressao2 = /[\w.]+@\w+\.\w{2,4}/g; //2ª versão
const expressao3 = /[\w.]+@\w+\.\w{2,4}\.?\w+/g; //3ª versão

console.log(texto.match(expressao));
console.log(texto.match(expressao2));
console.log(texto.match(expressao3));
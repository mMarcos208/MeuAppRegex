const texto = `Os e-mail dos convidados são:
-marconi@gmail.com
-marconimbarroso@gmail.com
-magno@gmail.com.br
-marconimbarroso@gmail.com`

const expressao = /.+@.+/g;

console.log(texto.match(expressao));
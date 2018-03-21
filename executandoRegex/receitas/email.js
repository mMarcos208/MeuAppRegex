const texto = `Os e-mail dos convidados são:
-marconi@gmail.com
-marconimbarroso@gmail.com
-magno@gmail.com.br
-marconimbarroso@gmailcom
-marconi.mbarroso@gmail.com
-marconi.mbarroso@gmail.com.br
-marconi.mbarroso@outlook.com.b
-marconi.mbarroso@outlook.infonet.br`

const expressao = /\S+@\w+\.\w{2,6}(\.\w{2})?/g
console.log(texto.match(expressao));
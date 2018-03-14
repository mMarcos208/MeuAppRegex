const texto = `Cpf dos aprovados:
-102.149.456-93
-567.127.720-52
-081.750.730-20
-495.383.910-20`
const expressao = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;

console.log(texto.match(expressao));

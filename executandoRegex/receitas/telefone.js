const texto = `Lista Telefonica:
-(31)98753-0079)
-(31)98753-0032
-(31) 98753-0022
-(31)98753-0080
-(3)98753-0080
-9875333-0080
-3764-0080`
const expressao = /(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g;

console.log(texto.match(expressao));
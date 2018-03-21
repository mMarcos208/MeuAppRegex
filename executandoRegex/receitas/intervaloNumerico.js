const texto = `0 1 10 192 199 201 249 255 256 312 1010 1512`

//números entre 0 e 255
const expressao = /\b(\d{1,2}|1\d{2}|2[0-4]|25[0-5])\b/g;

console.log(texto.match(expressao));
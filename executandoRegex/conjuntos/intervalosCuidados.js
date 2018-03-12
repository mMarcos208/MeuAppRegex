const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))
console.log(texto.match(/[A-z]/g)) //segue a tabela unicode, verificar em https://unicode-table.com/pt/
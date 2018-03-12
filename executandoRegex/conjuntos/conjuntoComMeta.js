const texto = ".*?+-";

console.log(texto.match(/[+?.*-]/g)); //não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)); // Isso é um intervalo.
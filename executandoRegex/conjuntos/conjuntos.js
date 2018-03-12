const texto = "1,2,3,4,5,6,12,a.b c!d?e[f";

//para se definir uma classe(que significa o mesmo que conjunto em regex) use o '[]'

const expressao = /[02468]/g //é a mesma coisa que /0|2|4|6|8/g
console.log(texto.match(expressao));

let texto2 = "joão não vai passear na moto. joao irá passear de bike!"
const expressaoComSemAcento = /jo[ãa]./g
texto2 = texto2.replace(expressaoComSemAcento,"joana");
console.log(texto2);
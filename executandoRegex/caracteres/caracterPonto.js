/* '.' é um coringa(valido para apenas uma posição 
dentro da string)
 * Serve para ignorar caracteres
 * No primeiro exeplo ele irá ignorar a virgula e match será: 1,2
*/

const texto = "1,2,3,4,5,6,7,8,9"

console.log(texto.match(/1.2/g))

const notas = `
1.3,2.5,5.3
`
console.log(notas.match(/.\../g))
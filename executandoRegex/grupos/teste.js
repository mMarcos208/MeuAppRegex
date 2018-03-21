let texto = '10,'

texto = texto.replace(/\,$/,'')
console.log(texto.match(/(\d+,)/g))
console.log(texto.replace(/(\d+,)/g, '$100'));
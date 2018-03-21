
const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style='color: #${cor}'><b>$1</b></span>`);

const files = require('./files')
let texto = files.read('codigoFonte.html')
const codRegex = /<code>[\s\S].*<\/code>/i

console.log(texto.match(codRegex))
const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));

//operador lazy (Não guloso)

console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));

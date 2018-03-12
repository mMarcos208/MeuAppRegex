const texto = "Você precisa responder sim não ou não sei"
let array = texto.match(/sim|não|sei/g);

for(let i = 0; i< array.length; i++){
    console.log(array[i])
}
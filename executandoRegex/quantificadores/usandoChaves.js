const texto =`O joão recebeu 120 milhões apostando 6,9,21,23,45,46.`;


const regex = /\d{1,2}/gi;
console.log(texto.match(regex));
console.log(texto.match(/[0-9]{2}/g));
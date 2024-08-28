function somaArray(array){return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);}
console.log(somaArray([1, 2, 3, 4, 5]));
console.log(somaArray([2, 4, 6, 8]));
console.log(somaArray([1, 3, 5, 7]));
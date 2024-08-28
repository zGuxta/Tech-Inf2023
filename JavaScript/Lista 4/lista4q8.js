function concateando(array,array2){
    return array.concat(array2);
}
console.log(concateando([1, 2, 3], [4, 5, 6]));
console.log(concateando(["a", "b"], ["c", "d"]));
console.log(concateando([], [1, 2, 3]));
function addatfirst(array,elemnto){
    return array.unshift(elemnto);
}
console.log(addatfirst([1, 2, 3, 4, 5], 6));
console.log(addatfirst(["a", "b", "c"], "d"));
console.log(addatfirst([10], 20));
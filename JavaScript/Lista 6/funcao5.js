function rowToJSON(header,content){
    const obj = {};

    console.log(key,value);
    for(let i = 0; i<header.length; i++){
        let key = header[i];
        let value = content[i];

        obj[key] = value;
        console.log(obj);
    }
}
console.log(rowToJSON(["nome", "idade"],["João", "28"]));
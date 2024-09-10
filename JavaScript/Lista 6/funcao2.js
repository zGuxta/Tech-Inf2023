function linesToColumns(lines){
    let columns = [];
    for (let i = 0; i < lines.length; i++){
        console.log(lines[i]);
        columns.push(lines[i].split(';'));
    }
    return columns;
}
console.log(linesToColumns(["nome;idade", "João;28", "Maria;32"]));
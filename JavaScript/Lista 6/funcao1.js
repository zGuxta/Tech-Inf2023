function csvToLine(CSV){
    return CSV.split('\n');
}

console.log(csvToLine("nome;idade\nJoão;28\nMaria;32"));
console.log(csvToLine("produto;preço\nArroz;5.00\nFeijão;7.50"));
console.log(csvToLine("Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta\nParasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M\nGreen Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"));
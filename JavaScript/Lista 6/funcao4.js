function extractContent(content){
    return content.slice(1);
    }
console.log(extractContent([["nome", "idade"], ["João", "28"], ["Maria", "32"]]));
console.log(extractContent([["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]));
console.log(extractContent([["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem","Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA","321.8M"]]));
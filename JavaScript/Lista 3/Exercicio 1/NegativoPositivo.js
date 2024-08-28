function inteiro(num){
	let resultado =num;
	if(num > 0)
	resultado = "Positivo"
else if (num < 0)
	resultado = "Negativo"
else if (num == 0)
	resultado = "Seu numero é igual a ZERO"
	return resultado;
}
console.log(inteiro(5));
console.log(inteiro(-3));
console.log(inteiro(0));
console.log(inteiro(1110));
console.log(inteiro(-987654321));

/*let num, resultado, mensagem;

num = Number(prompt("Insira o numero:"));

resultado = inteiro(num);

mensagem = "O número "+num+" é "+resultado;

document.writeln(mensagem);*/
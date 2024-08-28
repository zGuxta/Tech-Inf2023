import { comparar, SepararString } from "./Compara";

let texto1 = "O rato roeu a roupa do rei de Roma";
let esperado1 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];
let saida1 = SepararString(" ", texto1);

console.log(comparar(esperado1, saida1));

let texto2 = "JavaScript é incrível";
let esperado2 = ["JavaScript", "é", "incrível"];
let saida2 = SepararString(" ", texto2);

console.log(comparar(esperado2, saida2));
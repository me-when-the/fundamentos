var nota1 = parseInt(prompt("Informe a primeira nota"));
var nota2 = parseInt(prompt("Informe a segunda nota"));
var nota3 = parseInt(prompt("Informe a terceira nota"));
var nota4 = parseInt(prompt("Informe a quarta nota"));
var media = parseInt(nota1 + nota2 + nota3 + nota4) / 4
var notafinal = parseInt(nota1 + nota2 + nota3 + nota4) / 4


if (media >= 6) {
    document.write(`Sua nota foi ${notafinal}. Voce foi aprovado`);
}
else {
    document.write(`Sua nota foi ${notafinal}. Voce foi reprovado`);
}
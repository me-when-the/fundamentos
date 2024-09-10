var num = parseInt(prompt('Escreva um numero.'));

if (num < 0) {
    document.write('O numero é negativo.');
}

else if (num == 0) {
    document.write('O número é zero.');
}
else {
    document.write('O numero é positivo.');
}
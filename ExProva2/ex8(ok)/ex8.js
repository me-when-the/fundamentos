let numeros = [Number(prompt('numero1')), Number(prompt('numero2')), Number(prompt('numero3'))];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
document.write(maiorNumero);
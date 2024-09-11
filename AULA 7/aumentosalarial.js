var salario = parseFloat(prompt('Digite o salário:'));

if (salario <= 500) {
    menor = salario * 0.15
    console.log(menor + salario);
    document.write(`Seu salário será: R$ ${menor + salario}`);
}
else if (salario > 500 & salario <= 1000) {
    maior = salario * 0.125
    console.log(maior + salario);
    document.write(`Seu salário será: R$ ${maior + salario}`);
}
else if (salario > 1000) {
    aindamaior = salario * 0.10
    console.log(aindamaior + salario);
    document.write(`Seu salário será: R$ ${aindamaior + salario}`);
}

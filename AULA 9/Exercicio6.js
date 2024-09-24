function caixademercado() {
    let totalgeral = 0;
    let numprodutos = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";

    for (let i = 0; i < numprodutos; i++) {
        let nomeproduto = prompt(`Nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`Quantidade de ${nomeproduto}:`));
        let valorunitario = parseFloat(prompt(`Valor unitário de ${nomeproduto}:`));

        //calcula o valor total do produto
        let valortotalproduto = quantidade + valorunitario;
        totalgeral += valortotalproduto;

        recibo += `${nomeproduto}: ${quantidade} x R$ ${valorunitario.toFixed(2)} = R$ ${valortotalproduto.toFixed(2)}\n`;

    }
    //exibe o recibo e o total geral
    recibo += `\nTotal geral: R$ ${totalgeral.toFixed(2)}`;
    alert(recibo);
}

//chama a função
caixademercado();
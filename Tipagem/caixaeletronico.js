saldoDisponivel = 1000;
valorDoSaque = prompt('informe o valor do saque: ')

if(valorDoSaque <= saldoDisponivel){
    saldoDisponivel = saldoDisponivel - valorDoSaque
document.write("Voce esta sacando R$ ", valorDoSaque, ". ")
} else{
    document.write("O valor solicitado e maior que o valor disponivel para saque!")
}

    document.write("Saldo disponivel R$ ", saldoDisponivel)
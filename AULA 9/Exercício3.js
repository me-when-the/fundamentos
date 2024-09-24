function somar() {
    var soma = 0;
    var count;

    for (count = 1; count <= 100; count++)
        soma = soma + count;
    
    document.write('Soma: ' + soma);
}

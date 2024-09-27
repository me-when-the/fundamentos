var ddd = prompt('Informe o DDD: ');

switch (ddd) {
    case '61':
        document.write('Brasília');
        break

    case '71':
        document.write('Salvador');
        break

    case '11':
        document.write('São Paulo');
        break

    case '21':
        document.write('Rio de Janeiro');
        break

    case '32':
        document.write('Juiz de Fora');
        break

    case '19':
        document.write('Campinas');
        break

    case '27':
        document.write('Vitoria');
        break

    case '31':
        document.write('Belo Horizonte');
        break

    default:
        document.write('DDD não cadastrado.');

}
console.log(ddd);
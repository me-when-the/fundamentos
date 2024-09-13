var carro = prompt('Informe o carro') 

switch(carro){
    case 'hatch':
    document.write('Compra efetuada com sucesso!');
    break

    case 'sedans':
    case 'motocicletas':
    case 'caminhonetes':
    document.write('Tem certeza que não prefere outro modelo?');
    break

    default:
        document.write('Não vendemos este tipo de veículo.')
}
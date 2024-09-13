var fruta = prompt('Informe a fruta');

switch(fruta){
    case 'Maçã':
        document.write('Não vendemos essa fruta.');
        break

    case 'Kiwi':
        document.write('Estamos com escassez de kiwis.');
        break

    case 'Melancia':
        document.write('Aqui está, são 3 reais o quilo')
        break
    default:
        console.log('Erro')
}
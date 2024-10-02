let pessoa = {
    nome: 'Ana',
    idade: 30
};

//adicionar nova propriedade
pessoa.cidade = 'Rio de Janeiro';
console.log(pessoa.cidade); //saida: rio de janeiro

//modificar propriedade existente
pessoa.idade = 31;
console.log(pessoa.idade); //saida: 31

//excluir propriedade
delete pessoa.cidade;
console.log(pessoa.cidade); //saida: undefined
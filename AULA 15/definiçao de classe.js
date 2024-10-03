//definição de classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    //método da classe = ação
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
    static Endereco = class {
        constructor(rua, cep, cidade){
            this.rua = rua,
            this.cep = cep,
            this.cidade = cidade;
        }
        apresentar() {
            console.log(`Meu endereço é: Rua ${rua}, cep: ${this.cep}, cidade: ${this.cidade}`);
        }
}

}
//instanciação/criação de objetos a partir da classe

const pessoa1 = new Pessoa("Daiane", 30);
const pessoa2 = new Pessoa("Bob Charlton", 18);

//chamar método da classe dos objetos
pessoa1.apresentar();
pessoa2.apresentar();

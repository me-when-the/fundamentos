class Endereço {
    constructor(rua, numero){
        this.rua = rua;
        this.numero = numero;
    }
}

class Pessoa extends Endereço{
    constructor(pessoa, rua, numero){
        super(rua, numero);
        this.pessoa = pessoa;
    }
    exibirInformacoes(){
        return `Nome: ${this.pessoa} | Rua: ${this.rua} | Numero: ${this.numero}`;
    }
}

const loc = new Pessoa ('Luis', 'Rua D Pedro I', '40');
console.log(loc.exibirInformacoes());
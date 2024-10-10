class Funcionario {
    constructor(id, nome, alocacao, departamento){
        this.id = id;
        this.nome = nome;
        this.alocacao = alocacao;
        this.departamento = departamento;
    }
    info(){
        return `${this.id} | ${this.nome} | ${this.alocacao} | ${this.departamento}`;
    }

    calculaSalario(){
        return 2000;
    }
}

class Gerente extends Funcionario{
    constructor(id, nome, alocacao, departamento, quantidadeDeSubordinados){
        super(id, nome, alocacao, departamento);
        this.quantidadeDeSubordinados = quantidadeDeSubordinados;
    }
    info(){
        return `${this.id} | ${this.nome} | ${this.alocacao} | ${this.departamento}`;
    }

    calculaSalario(){
        return 2000 + 2000 * 0.40;
    }
}

const func = new Funcionario ('003452', 'Rogerio Garcia', '24', 'Oficina');
const ger = new Gerente ('000437', 'Andre Santos', '24', 'Gerencia');

console.log(func.info() + ' | Salario: R$ ' + func.calculaSalario());
console.log(ger.info() + ' | Salario: R$ ' + ger.calculaSalario());

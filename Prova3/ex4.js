class Emprestimo{
    constructor(emprestimo){
        this.emprestimo = emprestimo;
    }
    emp(){
        return `${this.emprestimo}`
    }
}

class Pessoa extends Emprestimo {
    constructor(emprestimo, pessoa){
        super(emprestimo);
        this.pessoa = pessoa;
    }
    pes(){
        return `${super.emp()} | Cliente: ${this.pessoa}`;
    }
}

class Livro extends Pessoa {
    constructor(emprestimo, pessoa, livro){
        super(emprestimo, pessoa);
        this.livro = livro
    }
    liv(){
        return `${super.pes()} | Livro: ${this.livro}`
    }
}

const loc = new Livro ('Biblioteca', 'Maria Carla', 'O Pequeno Principe');
console.log(loc.liv());

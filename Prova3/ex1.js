class num {
    constructor(quantidade){
        this.quantidade = quantidade;}
            Quantidade() {
                return `${this.quantidade}`;
            }
}

class val extends num {
    constructor(quantidade,valor){
        super(quantidade);
        this.valor = valor;
    }
        Valor(){
            return `${super.Quantidade()} un. | R$ ${this.valor}`;
        }
}

class pro extends val {
    constructor(produto, quantidade, valor){
        super(quantidade, valor);
        this.produto = produto;
    }
    Produto(){
        return `Produto: ${this.produto} | ${super.Valor()}`;
    }
}

const newProduto = new pro ('Banana', '1', '0,20');
console.log(newProduto.Produto())
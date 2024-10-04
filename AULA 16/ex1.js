let car = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2006,
    cor: 'prata',
    quilometragem: 0,

    dirigir: function (distancia) {
        this.quilometragem += distancia;
    },

    exibirInformacoes: function () {
        console.log(`Carro: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Quilometragem: ${this.quilometragem}`);
    },

    pintarCarro: function (novaCor) {
        this.cor = novaCor;
    }
};

car.dirigir(50);
car.exibirInformacoes();

car.pintarCarro('Azul');
car.exibirInformacoes();
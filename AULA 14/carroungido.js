function Carroungido (marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function() {
        console.log('O carro está ligado.');
    };   
}

let meuCarro = new Carroungido('Volkswagen','gol',2016,'preto');

console.log(meuCarro.marca, meuCarro.modelo, meuCarro.ano, meuCarro.cor);
meuCarro.ligar();
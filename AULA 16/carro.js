let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'azul',

    mostrarInformaçcao:function(){
        console.log(`Carro: ${this.marca}, Modelo: ${this.modelo}, ano: ${this.ano}, cor: ${this.cor}, tipo de combustivel: ${this.tipodecombustivel}`)
    },

        pintarCarro: function(novaCor){
            this.cor = novaCor;
        }

};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

carro.mostrarInformaçcao();


console.log(carro.mostrarInformaçcao());

carro.tipodecombustivel = 'GNV';
console.log(carro.tipodecombustivel);
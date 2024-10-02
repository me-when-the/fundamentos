let caminhao = {
    marca: 'Volkswagen',
    modelo: 'Constelation',
    ano: 2024,
    cor: 'Prata',
    cabine: [
        {tipo: 'Simples.', capacidade: 2, teto: 'Fechada'},
        {tipo: 'Dupla', capacidade: 5},
],
    ligar: function () {
        console.log('O caminhão está ligado');
    }
};

console.log(caminhao.marca);
console.log('Cabine: ' + caminhao.cabine[0].teto)
console.log('Ano: ' + caminhao['ano']);

caminhao.ligar();
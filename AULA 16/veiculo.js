class veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    info(){
        return `Veiculo: ${this.marca} ${this.modelo}`;
    }
    velocidademaxima(){
        return 'Velocidade máxima não definida';
    }
}

class carro extends veiculo{
    constructor(marca, modelo, portas){
        super(marca, modelo);
        this.portas = portas;
    }
    info(){
        return `${super.info()} | portas: ${this.portas}`
    }
    velocidademaxima(){
        return `${super.velocidademaxima()} km/h`
    }
}

const meuCarro = new carro('Toyota', 'Corolla', 4)
console.log(meuCarro.info());

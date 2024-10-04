class Animal {
    som(){
        return 'som de animal'
    }
}

class cachorro extends Animal {
    som(){
    return 'au au'
    }
}

class gato extends Animal {
    som(){
    return 'miau'
    }
}

const meuCachorro = new cachorro();
const meuGato = new gato();

console.log(meuCachorro.som());
console.log(meuGato.som());
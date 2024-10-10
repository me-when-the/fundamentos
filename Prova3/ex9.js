class Animal {
    fazerSom(){
        return 'som de animal'
    }
}

class Cachorro extends Animal {
    fazerSom(){
    return 'Au Au'
    }
}

const meuCachorro = new Cachorro();
console.log(meuCachorro.fazerSom());
 
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros[numeros.length] = 10;

numeros.push(11);
numeros.push(12, 13);

Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[1] = this[i - 1];
    }
    this[0] = value;
};
numeros.insertFirstPosition(-1);
console.log(numeros);
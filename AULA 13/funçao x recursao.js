function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3))

function fatorial(n){
    if (n === 0 || n ===1) {
        return 1;
    }

    return n * fatorial(n - 1);
}

console.log(fatorial(5));
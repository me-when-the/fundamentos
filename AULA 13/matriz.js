let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matriz[0][1]);

matriz[1][2] = 10;
console.log(matriz[1][2]);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`elemento na posiçção [${i}][${j}] = ${matriz[i][j]}`);
    }
}

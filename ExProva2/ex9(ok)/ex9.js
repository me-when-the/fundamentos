var nota1 = Number (prompt('nota1'));
var nota2 = Number (prompt('nota2'));
var nota3 = Number (prompt('nota3'));
var media = (nota1 + nota2 + nota3) / 3;

if(media >=7){
    alert('aprovado');
}
else{
    alert('reprovado');
}
document.write(media);
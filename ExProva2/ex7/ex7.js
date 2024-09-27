var limvel = Number(60)
var vel = Number(prompt('velocidade'))

switch(vel){
    case vel <= limvel:
        document.write('sem multa')
        break

    case vel > limvel < limvel + limvel * 0.20:
        document.write('multa media')
        break

    case vel > limvel + limvel * 0.20:
        document.write('multa grave')
        break
}

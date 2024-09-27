var num1 = Number (prompt('numero 1'))
var op = prompt('operador')
var num2 = Number (prompt('numero 2'))

switch(op){
    case op = '/':
        document.write(num1 / num2)
        break

    case op = '*':
        document.write(num1 * num2)
        break

    case op = '-':
        document.write(num1 - num2)
        break

    case op = '+':
        document.write(num1 + num2)
        break    
}
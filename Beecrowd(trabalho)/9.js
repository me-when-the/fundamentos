//1009
/**
 * Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). 
 * Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.
 */
let vendedor = "JOÂO";
let salario = parseFloat(500.00);
let vendas = parseFloat(1230.30);

let total = salario + 0.15 * vendas;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
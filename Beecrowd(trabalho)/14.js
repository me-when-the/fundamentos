//1014
/**
 * Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

Input
The input file contains two values: one integer value X representing the total distance (in Km) and the second one is a floating point number Y  representing the spent fuel total, 
with a digit after the decimal point.

Output
Present a value that represents the average consumption of a car with 3 digits after the decimal point, followed by the message "km/l".
 */
let X = parseInt(500);
let Y = parseFloat(3.5);

let consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);
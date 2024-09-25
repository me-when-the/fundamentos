//1006
/**
 *Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, 
 grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

Input
The input file contains 3 values of floating points (double) with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.
 */
let A = parseFloat (5.0);
let B = parseFloat (6.0);
let C = parseFloat (7.0);

var mediaA = A * 2;
var mediaB = B * 3;
var mediaC = C * 5;

var mediaFinal = (mediaA + mediaB + mediaC) /10;

console.log("MEDIA =", mediaFinal.toFixed(1));
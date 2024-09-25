//1019
/**
 * Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.
 */
let segundos = parseInt(556);

let horas = Math.floor(segundos / 3600);
segundos %= 3600;
let minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);
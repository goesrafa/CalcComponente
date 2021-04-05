/**
 * Efetua a soma entre dois numeros 
 * @autor Rafaela Góes
 * @version 1.0
 * @param {num1} float
 * @param {num2} float
 * @returns {soma} float
 */

 function soma(num1, num2){
     return (parseFloat(num1)+parseFloat(num2)).toFixed(2)
 }

 module.exports = soma
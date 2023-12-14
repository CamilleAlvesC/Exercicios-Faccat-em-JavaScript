function executarExercicio12(){

    alert("Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius: ")

 

    let graus = parseFloat(prompt("Digite um valor em  graus Farenheit para ser convertido em graus celsius: "))

 

    let resultado = (9 * graus + 160) / 5

 

    alert("O valor de "+graus+"°F convertido em Farenheit para Celsius é: "+resultado+"°C")

}
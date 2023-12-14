function executarExercicio09(){
    alert("Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.")

    let salarioMensalAtual = parseFloat(prompt("Digite o valor do salário mensal atual:"))
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "))
   
    let bonus = percentualReajuste / 100 * salarioMensalAtual
    let salarioFinal = salarioMensalAtual + bonus

    alert("O valor do novo salário é: "+salarioFinal+",00")

}
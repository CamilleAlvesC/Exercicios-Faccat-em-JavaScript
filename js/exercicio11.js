function executarExercicio11(){

 

    alert("Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. ")

 

    let salarioFixo = parseFloat(prompt("Digite o valor do salário fixo: "))

    let carrosVendidos = parseFloat(prompt("Digite a quantidade de carros vendidos: "))

    let vendas = parseFloat(prompt("Digite o valor total de vendas: "))

    let comissao = parseFloat(prompt("Digite o valor da comissão para cada carro vendido: "))

 

    let salarioFinal = salarioFixo + carrosVendidos + comissao + ((5/100)*vendas)

 

    alert("O salário final do vendedor é: "+salarioFinal)

}
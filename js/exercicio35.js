function executarExercicio35 (){
    alert("Um posto está vendendo combustíveis com a seguinte tabela de descontos:\n\n Álcool:\n- Até 20 litros, desconto de 3% por litro \n- Acima de 20 litros, desconto de 5% por litro\n\n Gasolina:\n- Até 20 litros, desconto de 4% por litro \n- Acima de 20 litros, desconto de 6% por litro")

    alert("Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.")

    let tipoCombustivel = (prompt("Digite o tipo de combustível usado, escreva 'A' para Álcool e 'G' para Gasolina: "))

    let litros = parseFloat(prompt("Quantos litros foram comprados? "))

    if (tipoCombustivel =="A"){
        if(litros<=20){
            valorSD = litros * 2.90
            desconto = valorSD * 0.03
            valorTotal = valorSD - desconto
        }
        else{
            valorSD = litros * 2.90
            desconto = valorSD * 0.05
            valorTotal = valorSD - desconto
        }

    }
    else{
        if(litros<=20){
            valorSD = litros * 3.30
            desconto = valorSD * 0.04
            valorTotal = valorSD -desconto
        }
        else{
            valorSD = litros * 3.30
            desconto = valorSD * 0.06
            valorTotal = valorSD - desconto
        }
    }

    alert("O valor final da compra é: R$" + valorTotal)
}
//TERMINAR
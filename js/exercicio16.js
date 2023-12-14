function executarExercicio16(){

    alert("As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. ")

    let quantidade = parseInt(prompt("Qual a quantidade de maçãs você deseja adquirir?"))

    let maca

    if (quantidade<12) {

        maca = 1.30

    }

    else if (quantidade>=12) {

        maca = 1

    }

    alert("O valor total da compra é de: R$"+maca*quantidade)

}
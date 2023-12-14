function executarExercicio37(){
    alert("Uma fruteira está vendendo frutas com a seguinte tabela de preços:\n\nMorango:\nAté 5 Kg = R$ 2,50 por Kg\nAcima de 5 Kg = R$ 2,20 por Kg\n\nMaçã:\nAté 5 Kg = R$ 1,80 por Kg\nAcima de 5 Kg = R$ 1,50 por Kg")

    alert("Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.")

    let qtdMorango = parseInt(prompt("Digite a quantidade em Kg de morangos adquiridos: "))
    let qtdMaca = parseInt(prompt("Digite a quantidade em Kg  de maças adquiridas: "))
    let totalPrecoMorango
    let totalPrecoMaca
    let desconto
    let qtdFrutas = qtdMorango + qtdMaca
    let valorFinal 

    if (qtdMorango <= 5){
        totalPrecoMorango = qtdMorango * 2.50
        totalPrecoMorango = parseFloat (totalPrecoMorango)
    }
    else{
        totalPrecoMorango = qtdMorango * 2.20
        totalPrecoMorango = parseFloat (totalPrecoMorango)
    }

    if (qtdMaca <= 5){
        totalPrecoMaca = qtdMaca * 1.80
        totalPrecoMaca = parseFloat (totalPrecoMaca)
    }
    else{
        totalPrecoMaca = qtdMaca * 1.50
        totalPrecoMaca = parseFloat (totalPrecoMaca)
    }

    valorFinal = totalPrecoMorango + totalPrecoMaca

    if ((qtdFrutas >= 8) || (valorFinal > 25)){
        desconto = valorFinal * 0.1 // 0.1 = 0.10
        valorFinal = valorFinal - desconto
    }

    alert(`O total a pagar é: ${valorFinal.toFixed(2)}`)
}
//terminar 
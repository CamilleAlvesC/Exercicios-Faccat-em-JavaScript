function executarExercicio40(){
    alert("Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:\n\n- Se quantidade <= 5 o desconto será de 2%\n- Se quantidade > 5 e quantidade <=10 o desconto será de 3%\n- Se quantidade > 10 o desconto será de 5%")

    let nomeProduto = (prompt("Digite a descrição do produto (nome): "))
    let quantidadeAdquirida = parseInt(prompt("Digite a quantidade adquirida do produto: "))
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: "))

    let total= quantidadeAdquirida * precoUnitario

    if (quantidadeAdquirida <= 5){
        percentual=0.02
        let desconto = total * percentual
        let totalPagar= total - desconto
        alert(`O valor final de ${nomeProduto} é: ${totalPagar}`)
    }
    else if ((quantidadeAdquirida > 5) && (quantidadeAdquirida<=10)){
        percentual=0.03
        let desconto = total * percentual
        let totalPagar= total - desconto
        alert(`O valor final de ${nomeProduto} é: ${totalPagar}`)
    }

    else{
        percentual=0.05
        let desconto = total * percentual
        let totalPagar= total - desconto
        alert(`O valor final de ${nomeProduto} é: ${totalPagar}`)
    }
}

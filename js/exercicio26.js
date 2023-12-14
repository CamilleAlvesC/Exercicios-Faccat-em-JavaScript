function executarExercicio26(){
    alert("Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.")

    let quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque de um produto: "))
    let quantidadeMax = parseInt(prompt("Digite a quantidade máxima em estoque do produto: "))
    let quantidadeMin = parseInt(prompt("Digite a quantidade mínima em estoque do produto: "))

    quantidadeMedia = ((quantidadeMax + quantidadeMin) / 2)

    alert("A quantidade média em estoque é: "+ quantidadeMedia)

    if (quantidadeAtual>=quantidadeMedia){
        alert("Não efetuar compra.")
    }
    else{
        alert("Efetuar compra.")
    }
}
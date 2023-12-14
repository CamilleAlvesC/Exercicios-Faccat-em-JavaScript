function executarExercicio25(){
    alert("Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.")

    let numeroConta = parseInt(prompt("Digite o número da conta: "))
    let saldo = parseFloat(prompt("Digite o saldo da conta: "))
    let debito = parseFloat(prompt("Digite o débito da conta: "))
    let credito = parseFloat(prompt("Digite crédito da conta: "))

    saldoAtual = saldo - debito + credito

    alert("Seu saldo atual é: "+saldoAtual)

    if (saldoAtual>=0){
        alert("Saldo Positivo.")
    }
    else{
        alert("Saldo Negativo")
    }

}
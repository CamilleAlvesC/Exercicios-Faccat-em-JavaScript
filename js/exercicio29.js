function executarExercicio29(){
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.")

    let valor1 = parseFloat(prompt("Digite um valor:"))
    let valor2 = parseFloat(prompt("Digite mais um valor:"))
    let valor3 = parseFloat(prompt("Digite mais um valor:"))

    if ((valor1>valor3) && (valor2>valor3)){
        soma = valor1 + valor2
        alert("A soma dos dois maiores é: "+soma)
    }

    else if ((valor1>valor2) && (valor3>valor2)){
        soma = valor1 + valor3
        alert("A soma dos dois maiores é: "+soma)
    }
    else{
        soma= valor2+valor3
        alert("A soma dos dois maiores é: "+soma)
    }
}

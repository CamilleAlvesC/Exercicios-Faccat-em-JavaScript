function executarExercicio28(){
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.")  
    
    let valor1 = parseFloat(prompt("Digite um valor: "))
    let valor2 = parseFloat(prompt("Digite mais um valor: "))
    let valor3 = parseFloat(prompt("Digite o último valor: "))

    if ((valor1>valor2) && (valor1>valor3)){
        alert("O maior valor é: " + valor1)
    }

    else if ((valor2>valor1) && (valor2>valor3)){
        alert("O maior valor é: " + valor2)
    }
    else{
        alert("O maior valor é: " + valor3)
    }
}
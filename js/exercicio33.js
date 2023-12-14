function executarExercicio33 (){
    alert("Ler dois valores e imprimir uma das três mensagens a seguir: \n‘Números iguais’, caso os números sejam iguais \n‘Primeiro é maior’, caso o primeiro seja maior que o segundo;\n‘Segundo maior’, caso o segundo seja maior que o primeiro.")

    let valor1 = parseFloat(prompt("Digite um valor: "))
  
    let valor2 = parseFloat(prompt("Digite mais um valor: "))

    if (valor1>valor2){
        alert("O primeiro é maior.")
    }

    else if (valor2>valor1){
        alert("O segundo maior.")
    }
    
    else{
        alert("Números iguais")
    }
  
}
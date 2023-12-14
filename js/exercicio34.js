function executarExercicio34(){
    alert("Seja o seguinte algoritmo: \n Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:")

    let x = parseInt(prompt("Digite o valor de x: "))
    let y = parseInt(prompt("Digite o valor de y: "))

    z = (x * y) + 5

    if (z<=0){
        resposta = "A"
    }

    else if (z<=100){
        resposta = "B"
    }

    else{
        resposta = "C"
    }

    alert(z+" "+resposta)
}
function executarExercicio43(){
    alert("Seja o seguinte algoritmo:\n\nFaça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:")

    let a = parseFloat(prompt("Digite o valor de 'A': "))
    let b = parseFloat(prompt("Digite o valor de 'B': "))
    let c = parseFloat(prompt("Digite o valor de 'C': "))
    let mens
    if ((a<b+c) && (b<a+c) && (c<a+b)){
        if ((a=b) && (b=c)){
            mens= 'Triângulo Equilátero'
        }
        else if ((a=b) || (b=c) || (a=c)){
            mens= 'Triângulo Isósceles'
        }
        else{
            mens= 'Triângulo Escaleno'
        }
    }
    else{
        mens = 'Não e possível formar um triângulo' 
    }
    alert(mens)
}
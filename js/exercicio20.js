function executarExercicio20(){
    alert("Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.")
    let numero1=parseInt(prompt("Digite um valor: "))
    let numero2=parseInt(prompt("Digite mais um valor: "))

    if (numero1<numero2){
        alert("A ordem crescente é: "+numero1+", "+numero2)
    }
    else{
        alert("A ordem crescente é: "+numero2+", "+numero1)
    }
}
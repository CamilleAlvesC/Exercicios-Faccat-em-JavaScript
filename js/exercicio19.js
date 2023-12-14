function executarExercicio19(){
    alert("Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.")
    let numero1 = parseInt(prompt("Digite um valor: "))
    let numero2 = parseInt(prompt("Digite mais um valor: "))

    if (numero1>numero2){
        alert(numero1+" é o maior.")
    }

    else{
        alert(numero2+" é o maior")
    }

} 
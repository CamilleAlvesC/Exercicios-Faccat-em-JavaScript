function executarExercicio30(){
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.")

    let valor1 = parseFloat(prompt("Digite um valor:"))
    let valor2 = parseFloat(prompt("Digite mais um valor:"))
    let valor3 = parseFloat(prompt("Digite mais um valor:"))
    
    let menor 
    let maior 
    let media

   if((valor1>valor2) && (valor1>valor3)){
    maior=valor1
    if(valor2>valor3){
        media=valor2
        menor=valor3
    }
    else{
        media=valor3
        menor=valor2
    }
    alert(`A ordem crescente dos números é: ${menor}, ${media}, ${maior}.`)
   }
   else if ((valor2>valor1) && (valor2>valor3)){
    maior=valor2
    if(valor1>valor3){
        media=valor1
        menor=valor3
    }
    else{
        media=valor3
        menor=valor1
    }
    alert(`A ordem crescente dos números é: ${menor}, ${media}, ${maior}.`)
   }
   else{
    maior=valor3
    if(valor2>valor1){
        media=valor2
        menor=valor1
    }
    else{
        media=valor1
        menor=valor2
    }
    alert(`A ordem crescente dos números é: ${menor}, ${media}, ${maior}.`)
   }

   

}
//TERMINAR
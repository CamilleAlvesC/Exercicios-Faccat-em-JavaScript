function executarExercicio36 (){

    alert("Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.")

    let idadeHomem1 = parseInt(prompt("Digite a idade do 1° homem: "))
    let idadeHomem2 = parseInt(prompt("Digite a idade do 2° homem: "))
    let idadeMulher1 = parseInt(prompt("Digite a idade da 1° mulher: "))
    let idadeMulher2 = parseInt(prompt("Digite a idade da 2° mulher: "))

    let somaIdades
    let produtoIdades 

    if ((idadeHomem1>idadeHomem2) && (idadeMulher1<idadeMulher2)){
        somaIdades = (idadeHomem1 + idadeMulher1)
        produtoIdades = (idadeHomem2*idadeMulher2)
    }
    else if ((idadeHomem1>idadeHomem2) && (idadeMulher1>idadeMulher2)){
        somaIdades = (idadeHomem1 + idadeMulher2)
        produtoIdades = (idadeHomem2*idadeMulher1)
    }

    else if ((idadeHomem1<idadeHomem2) && (idadeMulher1<idadeMulher2)){
        somaIdades = (idadeHomem2 + idadeMulher1)
        produtoIdades = (idadeHomem1*idadeMulher2)
    }
    else{
        somaIdades = (idadeHomem2 + idadeMulher2)
        produtoIdades = (idadeHomem1*idadeMulher1)
    }
     
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + somaIdades)
    alert("O produto da idade do homem mais novo com a mulher mais velha é: "+produtoIdades)
}

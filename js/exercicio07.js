function executarExercicio07(){
    alert("Faça um algoritmo que leia a idade da pessoa expressa em ano, meses e dias e escreva a idade dessa pessoa expressa apenas em dias")

    let anos = parseInt(prompt("Digite sua idade em anos"))

    let meses  = parseInt(prompt("Digite sua idade em meses"))

    let dias = parseInt(prompt("Digite sua idade em dias"))
    
    let diasMes = 30
    let idade = (anos * 365) + meses * diasMes + dias

    alert("Os dia de vida corresponde a: " +idade)
    
}
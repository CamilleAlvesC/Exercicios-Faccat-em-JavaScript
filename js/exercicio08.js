function executarExercicio08(){
    alert("Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.")

    let eleitores = parseInt(prompt("Digite um número total de eleitores: "))

    let votosBrancos = parseInt(prompt("Digte a quantidade total de votos brancos: "))

    let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
    
    let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "))

    let porcentagemBrancos = votosBrancos * 100 /eleitores
    let porcentagemNulos = votosNulos * 100 /eleitores 
    let porcentagemValidos = votosValidos * 100 /eleitores 

    alert("O total de votos brancos: " + porcentagemBrancos+"%")
    alert("O total de votos nulos: " + porcentagemNulos+"%")
    alert("O total de votos válidos: " + porcentagemValidos+"%")
}
function executarExercicio23(){
    alert("Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: \n- Para sexo masculino: peso ideal = (72.7 * altura) - 58 \n- Para sexo feminino: peso ideal = (62.1 * altura) - 44.7")

    let nome = (prompt("Qual seu nome? "))
    let altura = (prompt("Qual sua altura? "))
    let sexo = (prompt("Qual seu sexo? (Digite 'M' para masculino e 'F' para feminino) "))

    if (sexo='M'){
        pesoIdeal = (72.7 * altura) - 58 
    }

    else{
        pesoIdeal = (62.1 * altura) - 44.7
    }

    alert("Seu peso ideal é: " + pesoIdeal.toFixed(2))
}
function executarExercicio41(){
    alert("Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:\n\nN1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios/7 = Média_de_Aproveitamento\n\nA atribuição de conceitos obedece a tabela abaixo:\n\nMédia de Aproveitamento:\n> = 9,0 = Conceito A\n> = 7,5 e < 9,0 = Conceito B\n> = 6,0 e < 7,5 = Conceito C\n< 6,0 = Conceito D")

    let n1 = parseFloat(prompt("Digite a 1° nota: "))
    let n2 = parseFloat(prompt("Digite a 2° nota: "))
    let n3 = parseFloat(prompt("Digite a 3° nota: "))
    let mediaExercícios = parseFloat(prompt("Digite a média de exercícios: "))

    let mediaAproveitamento = (n1 + (n2 * 2) + (n3 * 3) + mediaExercícios ) / 7

    if(mediaAproveitamento>=9.0){
        alert("Conceito A.")
    }
    else if ((mediaAproveitamento>=7.5) && (mediaAproveitamento<9.0)){
        alert("Conceito B.")
    }
    else if ((mediaAproveitamento>=6.0)&&(mediaAproveitamento<7.5)) {
        alert("Conceito C.")
    }
    else{
        alert("Conceito D.")
    }
}
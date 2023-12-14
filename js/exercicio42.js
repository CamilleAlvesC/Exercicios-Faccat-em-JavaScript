function executarExercicio42(){
    alert("Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:\n\n- Ter no mínimo 65 anos de idade.\n- Ter trabalhado no mínimo 30 anos.\n- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.\n\nCom base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.")

    let codigo = parseInt(prompt("Digite o número do empregado (código): "))
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado: "))
    let anoIngresso = parseInt(prompt("Digite o ano que o empregado ingressou na empresa: "))

    let idade = 2023 - anoNascimento
    let tempoTrabalho = 2023 - anoIngresso

    if ((idade>=65) || (tempoTrabalho>=30) || (idade>=60) && (tempoTrabalho>=25)){
        alert("Requerer aposentadoria.")
    }
    else{
        alert("Não requerer.")
    }
}
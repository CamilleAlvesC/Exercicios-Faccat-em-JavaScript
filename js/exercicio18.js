function executarExercicio18(){
    alert("Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).")

    let anoAtual = parseInt(prompt("Digite o ano atual: "))
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

    let idade = anoAtual - anoNascimento

    if (idade<16){

        alert(" Não pode votar.")
    }

    else if ((idade>=16) && (idade<18)) {

        alert("Voto opcional.")

   }

    else {
        alert("Voto obrigatório.")
    }
}
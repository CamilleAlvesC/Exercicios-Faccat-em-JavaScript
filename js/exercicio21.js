function executarExercicio21(){
    alert("Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.")

    let horaInicio = parseInt(prompt("Digite a hora de início do jogo de Xadrez: "))
    let horaFim = parseInt(prompt("Digite a hora que o jogo de Xadrez acabou: "))

    if (horaFim < horaInicio){ //jogo no dia seguinte 
        total = (24 - horaInicio) + horaFim
    }

    else if (horaFim > horaInicio){ //jogo no mesmo dia
        total = horaFim - horaInicio

    }

    else{
        total = 24
    }

    alert("O total de horas jogadas foram: "+total)
}
function executarExercicio22(){
    alert("A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas(considere que o mês possua 4 semanas exatas.")

    let horasTrabalhadasMes = parseInt(prompt("Digite as horas trabalhadas em um mês: "))
    let salarioHora= parseInt(prompt("Digite o salário por hora: "))

    if (horasTrabalhadasMes<=160){
        salarioTotal = horasTrabalhadasMes * salarioHora
    }
    else{
        salarioTotal = (160 * salarioHora) + ((horasTrabalhadasMes - 160) * salarioHora * 1.5) 
    }
    
    alert("O salário final do funcionário é: " + salarioTotal)

}
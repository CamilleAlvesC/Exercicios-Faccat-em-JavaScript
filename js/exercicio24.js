function executarExercicio24(){
   alert(" Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.") 

   let  salarioFixo= parseFloat(prompt("Digite o valor do salário fixo do vendedor "))
   let  valorVendas= parseFloat(prompt("Digite o valor das vendas efetuadas pelo vendedor "))

   if (valorVendas<=1500){
    salarioTotal = (salarioFixo+(valorVendas*0.03))
   }
   else{
    salarioTotal= (salarioFixo + (valorVendas* 0.05))
   }

   alert("O salário total do vendedor é: "+salarioTotal)
}
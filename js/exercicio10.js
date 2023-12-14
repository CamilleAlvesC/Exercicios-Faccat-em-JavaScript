function executarExercicio10(){

        alert("O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. ")
        
         
        
        var fabrica = parseFloat(prompt("Digite o valor de fábrica do carro: "))
        
         
        
        let imposto = (fabrica*45) / 100
        
        let distribuidor = (fabrica*28) / 100
        
        let custo = fabrica + imposto + distribuidor
        
         
        
        alert("O valor do carro com percentual do distribuidor e os impostos é: "+custo)
        
         
        
        }
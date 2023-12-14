function executarExercicio31(){

    alert("Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. ")
  
    let a = parseFloat(prompt("Digite o valor de 'A': "))
  
    let b = parseFloat(prompt("Digite o valor de 'B': "))
  
    let c = parseFloat(prompt("Digite o valor de 'C': "))
  
    if (a<(b+c)){
        if (b<(a+c)){
            if (c<(a+b)){
                alert("A medida dos lados formam um triângulo.")
            }
        }
    }
    else{
        alert("A medida dos lados não formam um triângulo.")
    }
  }

  
function executarExercicio32 (){

    alert("Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. ")
  
    let time1 = (prompt("Digite o nome do 1° Time"))
  
    let time2 = (prompt("Digite o nome do 2° Time"))
  
    let gol1 = parseInt(prompt("Digite o número de gols do 1° time "))
  
    let gol2 = parseInt(prompt("Digite o número de gols do 2° time "))
  
    if (gol1>gol2){
  
      alert(time1+" é o vencedor")
  
    }
  
    else if (gol2>gol1){
  
      alert(time2+" é o vencedor")
  
    }
  
    else{
  
      alert("EMPATE")
  
    }
  
  }
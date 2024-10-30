// Exercicios de decisão Nota escolar
let nota1 = 3

let nota2 = 3

let media = (nota1 + nota2) / 2

//console.log(media)

if (media >= 6 ){
    console.log( "O aluno está aprovado" )
}
else if( media <= 4 ){
    console.log("O aluno esta reprovado")
}
else if(media > 4 && media <= 5.9 ){
    console.log ("O aluno esta em recuperaçao")
}
else{
    console.log("Nota desconhecida!")
}
//Exercicio definiçao lados triangulo

let lado1 = 7
let lado2 = 7
let lado3 = 3

if (lado1 == lado2 && lado1 == lado3){
    console.log("Triangulo Equilatero") 
}
else if ((lado1 != lado2) && (lado2 != lado3) && (lado3 != lado1)){
    console.log ("Triangulo Isoceles")
}else{
    console.log ("Triangulo Escaleno")
}
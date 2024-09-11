const input = require ('prompt-sync') ();

var n = parseInt (input("DIGITE UM NUMERO INTEIRRO QUALQUER: "));
var resultado = n%2;

if(resultado==0){
    console.log((n)+ " é: PAR.");
}
else{
    console.log((n) +" é: IMPAR.")
}
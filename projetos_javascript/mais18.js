const input = require ('prompt-sync') ();

var idade = parseInt (input("DIGITE SUA IDADE: "));

if(idade >= 18){
    console.log("sua idade é " +(idade)+" anos", " Decalrado: MAIOR DE IDADE.")
}
else{
    console.log("sua idade é " +(idade)+" anos", " Decalrado: MENOR DE IDADE.")
}
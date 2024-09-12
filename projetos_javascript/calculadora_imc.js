const input = require ('prompt-sync') ();

let altura = parseFloat (input("DIGITE SUA ALTURA DE FORMA DECIMAL (USANDO '.'): "));
let peso = parseFloat (input("DIGITE SEU PESO DE FORMA DECMAL (USANDO '.'): "));
let imc = undefined;

function calc (){

   imc = peso / (altura*altura);

    if(imc < 18.5){
        console.log("seu IMC é de " + (imc.toFixed(2)) +" Declarado: ABAIXO DO PESO");
    }
    else if(imc >= 18.5 && imc <= 24.9){
        console.log("seu IMC é de " + (imc.toFixed(2))+ " Declarado: PESO NORMAL");
    }
    else if(imc >= 30 && imc <= 35){
        console.log("seu IMC é de " +(imc.toFixed(2))+ " Declarado: OBESIDADE GRAU I");
    }
    else if(imc >= 30 && imc <= 40){
        console.log("seu IMC é de " + (imc.toFixed(2))+ " Declarado: OBESIDADE GRAU II");
    }
    else if(imc > 40){
        console.log("seu IMC é de " + (imc.toFixed(2))+ " Declarado: OBESIDADE GRAU III");
    }

    
}

calc();


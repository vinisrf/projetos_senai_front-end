let min = 1;  
let max = 6;  

function jogadaP1(){  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

function jogadaP2(){  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

function start(){  
    // Obtenha novos rolos para ambos os jogadores 

    let resultP1 = jogadaP1();  
    let resultP2 = jogadaP2();  
    // Atualiza os resultados no documento
    document.getElementById("resultP1").textContent = `${resultP1}`;  
    document.getElementById("resultP2").textContent = `${resultP2}`;  

    // Determinar o vencedor ou se foi empate  
    if(resultP1 > resultP2){  
        document.getElementById("resultado").textContent = "PLAYER 1 VENCEU ESSA!";  
    } else if(resultP2 > resultP1){  
        document.getElementById("resultado").textContent = "PLAYER 2 VENCEU ESSA!";  
    } else {  
        document.getElementById("resultado").textContent = "ESSA FOI EMPATE!";  
    }  
}  

// Ouvinte de eventos para o botão  
document.getElementById("btn-start").addEventListener("click", start);
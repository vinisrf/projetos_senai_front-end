/**
 *  
 * 
 */
let maxClicks = 0; // Máximo de cliques permitido  
let currentClicks = 0; // Contador de cliques atuais  
let cliquesTrue = 0; // Contador de cliques em células true  
let cliquesFalse = 0; // Contador de cliques em células false
let somaScore = 0;

//função gera os dados boleanos que serão adicionados na tabela
function gerarDadosBooleanos(tamanho) {  
    const dados = [];  
    const checkboxFacil = document.getElementById("checkbox-facil").checked;  
    const checkboxDificil = document.getElementById("checkbox-dificil").checked;  
            
    if (checkboxFacil) {  
        maxClicks = 15;  
        document.getElementById("n-balas").textContent = "15 munições disponíveis";  
        for (let i = 0; i < tamanho; i++) {  
            dados.push(Math.random() < 0.67); // 60% de chance de ter mais valores false
        }  
        } else if (checkboxDificil) {  
            maxClicks = 5;  
            document.getElementById("n-balas").textContent = "5 munições disponíveis";  
        for (let i = 0; i < tamanho; i++) {  
            dados.push(Math.random() < 0.33); // 30% de chance de mais valores true  
        }  
        } else { // checkbox moderado  
            maxClicks = 10;  
            document.getElementById("n-balas").textContent = "10 munições disponíveis";  
        for (let i = 0; i < tamanho; i++) {  
            dados.push(Math.random() < 0.5); // nivelar valores true e false  
            }  
        }  
            
            return dados;  
}  

// Função para preencher as células da tabela  
let jogoTerminado = false; /* variável que armazena a confirmação se o jogo terminou*/  

function preencherTabela(dadosBooleanos) {  
    // Loop em cada célula e preencher com valor booleano  
    dadosBooleanos.forEach((valor, index) => {  
        const cell = document.querySelector(`.cell-${index + 1}`); // identifica as 25 células  
        
        if (cell) {  
            cell.textContent.none = valor; // Armazena o valor booleano como texto  
            cell.classList.add('clickable'); // Adiciona classe que é clicável  
            cell.dataset.valor = valor; // Armazena o valor booleano no dataset  

            // Adiciona um evento de clique para a célula  
            cell.addEventListener('click', function() {  

                if (jogoTerminado == true) { // se o jogo terminou  
                    alert("Rodada acabou! Tecle RESET Escolha um NÍVEL e tecle START, para começar uma nova rodada.");  
                    return;   
                }  
                
                if (currentClicks < maxClicks) {  
                    if (!cell.classList.contains('clicado')) { // verificando se a célula em questão já foi clicada  
                        currentClicks++;   
                        cell.classList.add('clicado'); // Marca a célula como clicada  

                        if (cell.dataset.valor === 'true') {  
                            cliquesTrue++;   
                            somaScore += 10;  
                            document.getElementById('score').textContent = somaScore;  
                            cell.style.backgroundImage = "url('img/tiro-no-navio.png')";  
                            cell.style.backgroundSize = 'cover';  
                            cell.style.backgroundPosition = 'center';  

                        } else {  
                            cliquesFalse++;  
                            cell.style.backgroundImage = "url('img/tiro-na-agua.png')";  
                            cell.style.backgroundSize = 'cover';  
                            cell.style.backgroundPosition = 'center';  
                        }  
                        atualizaMunicao();   

                        if (currentClicks >= maxClicks) {  
                            exibirResultado();   
                        }  
                    } else {  // se a célula for clicada novamente 
                        alert("célula já clicada, escolha outra");  
                        return;
                    }  
                }  
            });   
        }  
    });  
};         

/* função que tualiza a mensagem de munições disponíveis  */
function atualizaMunicao() {  
    const muniçõesRestantes = maxClicks - currentClicks;      
    document.getElementById("n-balas").textContent = `${muniçõesRestantes} munições disponíveis`;  
}  


function exibirResultado() {  
    const resultado = document.getElementById("resultado");  
    if (cliquesTrue > cliquesFalse) {  
        resultado.textContent = "Você Ganhou!";   
    } else {  
        resultado.textContent = "Você Perdeu!";  
    }  
    jogoTerminado = true; /* confirma que terminou o jogo*/   
}  
   

/*funcao de inicio da partida */  
function iniciarPartida() {  

    /* começa com todos contadores zerados*/
    currentClicks = 0;   
    cliquesTrue = 0;   
    cliquesFalse = 0; 
          
        /* preenche as 25 celulas aleatoriamente*/
        const dadosBooleanos = gerarDadosBooleanos(25);  
        preencherTabela(dadosBooleanos);  
            

}  

/*evento de clique ao botão start que chama a função que inicia a rodada*/
const bttStart = document.getElementById('btt-start');


 

/* função para selecionar apenas um checkbox  */
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {  
    checkbox.addEventListener('change', function() {  
    if (this.checked) {
        bttStart.addEventListener('click', iniciarPartida);
    /* desmarca os outros checkboxes   */
        document.querySelectorAll('input[type="checkbox"]').forEach((otherCheckbox) => {  
        if (otherCheckbox !== this) {  
            otherCheckbox.checked = false;
            }  
        });  
            }  
    });  
});

//adiciona evento  clique ao botão reset
const bttReset = document.getElementById('btt-reset');

bttReset.addEventListener('click', function() { 
    /* recarrega a página  */
    location.reload();

    bttReset.addEventListener('click', function(){
        currentClicks = 0; // reseta o contador dos cliques  
        cliquesTrue = 0;   
        cliquesFalse = 0; 
        

    });
});


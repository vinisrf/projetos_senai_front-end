/**VARIAVEIS GLOBIAS */  
const input = require ('prompt-sync') ();
const conta1 = [];
const conta2 = [];
const allContas = [];

/*------------------------ */

class contaBancaria{
    cosnructor(NomeTitular, SaldoConta, NumeroConta){
        this._nome = NomeTitular;
        this._saldo = SaldoConta;
        this._numeroconta = NumeroConta;
    }

    get nome(){
        return this._nome;
    }
    set nome(nomeDoTitular){
        this._nome = nomeDoTitular;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valorSado){
        this._saldo = valorSado;
    }
    get numconta(){
        return this._numeroconta;
    }
    set numconta(numIdConta){
        this._numeroconta = numIdConta;
    }
}


/** FUNÇÕES */

/** sistema */
const myConta1 = new contaBancaria();

console.log("--------------------ABRIR CONTA---------------------");
console.log("PARA ABARIR CONTA TECLE [1]");
console.log("CANCELAR OPERAÇÃO TECLE [2]");
let startSistema = parseInt(input(":"));
console.log("----------------------------------------------------");

switch (startSistema){
    
    case 1:
        
        addName();
        confirmaDados();


        break;

    case 2:
        console.log("OPERAÇÃO CANCELADA!");
        
        break;

    default:
        console.log("OPÇÃO INVÁLIDA!");
        retornoInicio();
     
}

function homeSistema(){
    console.log("-----------------------HOME SISTEMA-----------------")
    console.log("-PARA VER CONTAS EXISTENTES TECLE [1]");
    console.log("-PARA ACESSAR |CONTA1| TECLE [2]")
    console.log("PARA SAIR DO SISTEMA TECLE [0]")
    const option = parseInt (input(": "));
    console.log("-----------------------------------------------------")
    
    if(option == 0){
        console.log("LOGOUT SUCESSFUL")

    }else if(option == 1){
        console.log(allContas);
    }else if(option == 2){
        acessConta1();

    }else{
        console.log("ERRO! COMANDO INVÁLIDO")
        homeSistema()
    }
    
}
/**-------------------sistema end---------------------------- */

/** conta 1 */
function retornoInicio(){

    console.log("--------------------ABRIR CONTA---------------------");
    console.log("PARA ABARIR CONTA TECLE [1]");
    console.log("CANCELAR OPERAÇÃO TECLE [2]");
    let startSistema = parseInt(input(":"));
    console.log("-----------------------------------------------------")

    while (startSistema != 1 && startSistema != 2) {
        console.log("OPÇÃO INVÁLIDA!");
            retornoInicio();
            break;

    }if(startSistema == 1){
        addName();
        confirmaDados();

    }else if(startSistema == 2){
        console.log("OPERAÇÃO CANCELADA!");
        
    }
}


function addName(){
    const myName = input("DIGITE SEU NOME: ");
    //const myConta1 = new contaBancaria();

    myConta1._nome = myName;
    
    conta1.splice(0,1,myConta1._nome); //sempre irá atualizar o nome inserido anteriormente.
    
}
// função: gera numero aleatorio de identificação da conta
function geraNumConta (){
    let min = 0;
    let max = 9;
    let nConta = [null,null,null,null,'.',null,null,null,null,'.',null,null,null,null,'.',null,null,null,null];
    nConta = nConta.map( value => digitosConta = Math.floor(Math.random() * (max - min + 1)) + min);
        nConta.splice(4,1,'.')
        nConta.splice(9,1,'.')
        nConta.splice(14,1,'.');

        //const myConta1 = new contaBancaria();
        myConta1.numconta = nConta.join(' ');

        //return myConta1
        conta1.splice(1,1,myConta1.numconta);

        
}

function saldoInicial(){
    //const myConta1 = new contaBancaria();
    myConta1.saldo = 0;
    conta1.push(myConta1.saldo.toFixed(3));
    
}

function AddSaldoConta1(){
    console.log("------------------ADICONAR SALDO-------------------");
    const addSaldo = parseFloat(input("DIGITE O VALOR DA OPERAÇÃO: "));
    console.log("---------------------------------------------------");
    //const myConta1 = new contaBancaria();
    myConta1.saldo = (myConta1.saldo + addSaldo);
    //myConta1.splice(2.1,addSaldoConta.toFixed(3))

    conta1.splice(2,1,myConta1.saldo.toFixed(3));
    console.log(conta1);
    
} 

// função: salvar conta1    
function saveConta1(){
    allContas.push(conta1);
    console.log("-----------------------------------------------------");
    console.log("CONTA1 CRIADA COM SUCESSO!");
    console.log("-----------------------------------------------------");
}

// função: o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados(){
    console.log("-----------------CONFIRMAR DADOS---------------------")
    console.log("PARA CONFIRMAR E CRIAR CONTA TECLE [1]");
    console.log("PARA ALTERAR OS DADOS TECLE [2]");
    let confDados = parseInt (input(": "));
    console.log("-----------------------------------------------------");

    if(confDados == 1){
        geraNumConta();
        saldoInicial();
        saveConta1();
        homeSistema();
        

    }else if(confDados == 2){
        addName();
        confirmaDados();

    }else{
        return confirmaDados();
    }
}

function acessConta1(){
    console.log("----------------------CONTA 1----------------------")
    console.log("Numero conta: ",conta1[1]);
    console.log("Nome titular: ",conta1[0]);
    console.log("Saldo: ",conta1[2]);
    console.log("----------------------------------------------------")
    optionsConta1();

}
function optionsConta1(){
    console.log("----------------------OPTIONS CONTA1-----------------")
    console.log("-PARA ADICIONAR SALDO TECLE [1]");
    console.log("-PARA RETIRAR SALDO TECLE [2]");
    console.log("-PARA TRANSFERIR VALOR TECLE [3]")
    console.log("PARA VOLTAR A TELA INICIAL TECLE [0]")
    const optConta1 = parseInt (input(": "));
    console.log("-----------------------------------------------------")

    if(optConta1 == 1){
        AddSaldoConta1();
        optionsConta1();
    }else if(optConta1 == 0){
        homeSistema();
    }
}
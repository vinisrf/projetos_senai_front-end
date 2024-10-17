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
const myConta2 = new contaBancaria();

console.log("--------------------ABRIR CONTA 1---------------------");
console.log("-ABARIR CONTA TECLE [1]");
console.log("-CANCELAR OPERAÇÃO TECLE [2]");
let startSistema = parseInt(input(":"));
console.log("----------------------------------------------------");

// switch: inicio do sistema, criando conta 1
switch (startSistema){
    
    case 1:
        
        addNameconta1();
        confirmaDados();


        break;

    case 2:
        console.log("OPERAÇÃO CANCELADA!");
        
        break;

    default:
        console.log("OPÇÃO INVÁLIDA!");
        retornoInicio();
     
}

// função: 1° tela principal do sistema
function homeSistema(){
    console.log("-----------------------HOME SISTEMA-----------------")
    console.log("-VER CONTAS EXISTENTES TECLE [1]");
    console.log("-ACESSAR >CONTA1< TECLE [2]");
    console.log("-ABRIR CONTA 2 TECLE [3]");
    console.log("-SAIR DO SISTEMA TECLE [0]");
    const option = parseInt (input(": "));
    console.log("-----------------------------------------------------")
    
    if(option == 0){
        console.log("LOGOUT SUCESSFUL")

    }else if(option == 1){
        console.log(allContas);
        homeSistema();

    }else if(option == 2){
        acessConta1();
        

    }else if(option == 3){
        abrirConta2();
        confirmaDados2();
    }
    else{
        console.log("ERRO! COMANDO INVÁLIDO")
        homeSistema()
    }
    
}
// função: 2° tela principal do sistema
function homeSistemaV2(){
    console.log("-----------------------HOME SISTEMA-----------------")
    console.log("-VER CONTAS EXISTENTES TECLE [1]");
    console.log("-ACESSAR >CONTA1< TECLE [2]");
    console.log("-ACESSAR >CONTA2< TECLE [3]");
    console.log("-SAIR DO SISTEMA TECLE [0]");
    const option2 = parseInt (input(": "));
    console.log("-----------------------------------------------------")
    
        if(option2 == 0){

            console.log("LOGOUT SUCESSFUL");

        }else if(option2 == 1){
            console.log(allContas);
            homeSistemaV2();

        }else if(option2 == 2){
            acessConta1_2();

        }else if(option2 == 3){
            acessConta2();
        }
        else{
            console.log("ERRO! COMANDO INVÁLIDO")
            homeSistemaV2()
        }
    
}

/**-------------------sistema end---------------------------- */

/** conta 1 */

// função: retornar a primeira fase de abertura de conta
function retornoInicio(){

    console.log("--------------------ABRIR CONTA 1---------------------");
    console.log("-PARA ABARIR CONTA TECLE [1]");
    console.log("-PARA CANCELAR OPERAÇÃO TECLE [2]");
    let startSistema = parseInt(input(":"));
    console.log("-----------------------------------------------------")

    while (startSistema != 1 && startSistema != 2) {
        console.log("OPÇÃO INVÁLIDA!");
            retornoInicio();
            break;

    }if(startSistema == 1){
        addNameconta1();
        confirmaDados();

    }else if(startSistema == 2){
        console.log("OPERAÇÃO CANCELADA!");
        
    }
}

//funcção: criar nome do titular da conta1
function addNameconta1(){
    let myName1 = undefined;
    //const myConta1 = new contaBancaria();
    const analisaName = /^[A-Za-z' ']+$/;
    
    do{
        console.log("--------------------NOME TITULAR CONTA 1-------------------");
        myName1 = input("-DIGITE SEU NOME: ");
        console.log("-----------------------------------------------------------");

        if(!analisaName.test(myName1)){
            console.log("---------------------------------------ERRO-------------------------------------------")
            console.log('ERRO! O NOME DO TITULAR DEVE CONTER APENAS DADOS DO TIPO "a-z OU A-Z" TENTE NOVEMENTE.');
            console.log("---------------------------------------------------------------------------------------")
        }
    }while(!analisaName.test(myName1));
   
    myConta1._nome = myName1;
    
    conta1.splice(0,1,myConta1._nome); //sempre irá atualizar o nome inserido anteriormente. 
    
}
// função: gera numero aleatorio de identificação da conta1
function geraNumConta1 (){
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

// função: saldo inicial da conta zerado
function saldoInicialConta1(){
    //const myConta1 = new contaBancaria();
    myConta1.saldo = 0;
    conta1.push(myConta1.saldo.toFixed(2));
    
}

//função: adicionar saldo conta1
function AddSaldoConta1(){
    console.log("------------------ADICONAR SALDO-------------------");
    console.log('VALOR SEGUINDO O PADRÃO DECIMAL "EX: 0.00.."');
    const saldoEntrada = parseFloat (input("-DIGITE O VALOR DA OPERAÇÃO: "));
    console.log("---------------------------------------------------");
     
    
        myConta1.saldo = myConta1.saldo + saldoEntrada;

        conta1.splice(2,1,myConta1.saldo.toFixed(2));
    
} 

// função: salvar conta1    
function saveConta1(){
    allContas.push(conta1);
    console.log("-----------------------------------------------------");
    console.log("CONTA 1 CRIADA COM SUCESSO!");
    console.log("-----------------------------------------------------");
}

// função: o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados(){
    console.log("---------------CONFIRMAR DADOS CONTA 1----------------")
    console.log("-PARA CONFIRMAR E CRIAR CONTA TECLE [1]");
    console.log("-PARA ALTERAR OS DADOS TECLE [2]");
    let confDados = parseInt (input(": "));
    console.log("-----------------------------------------------------");

    if(confDados == 1){
        geraNumConta1();
        saldoInicialConta1();
        saveConta1();
        homeSistema();
        

    }else if(confDados == 2){
        addNameconta1();
        confirmaDados();

    }else{
        return confirmaDados();
    }
}

//função: exibe os dados da conta1
function acessConta1(){
    console.log("----------------------CONTA 1----------------------")
    console.log("Numero conta: ",conta1[1]);
    console.log("Nome titular: ",conta1[0]);
    console.log("Saldo: ",conta1[2]);
    console.log("----------------------------------------------------")
    optionsConta1();

}

//função: opções de operação da conta1
function optionsConta1(){
    console.log("----------------------OPTIONS CONTA1-----------------")
    console.log("-ADICIONAR SALDO TECLE [1]");
    console.log("-RETIRAR SALDO TECLE [2]");
    console.log("-TRANSFERIR VALOR TECLE [3]");
    console.log("-VOLTAR PARA TELA INICIAL TECLE [0]");
    const optConta1 = parseInt (input(": "));
    console.log("-----------------------------------------------------")

    if(optConta1 == 1){
        AddSaldoConta1();
        optionsConta1();
    }else if(optConta1 == 3){
        console.log("ERRO! NÃO FOI ENCONTRADA UMA CONTA PARA REALIZAR A TRANSFERENCIA.");
        homeSistema();
    }else if(optConta1 == 0){
        homeSistema();
    }
}
//função: exibe os dados da conta1 modo 2 contas
function acessConta1_2(){
    console.log("----------------------CONTA 1----------------------")
    console.log("Numero conta: ",conta1[1]);
    console.log("Nome titular: ",conta1[0]);
    console.log("Saldo: ",conta1[2]);
    console.log("----------------------------------------------------")
    optionsConta1_2();

}

//função: opções de operação da conta1 modo 2 contas
function optionsConta1_2(){
    console.log("----------------------OPTIONS CONTA1-----------------")
    console.log("-ADICIONAR SALDO TECLE [1]");
    console.log("-RETIRAR SALDO TECLE [2]");
    console.log("-TRANSFERIR VALOR TECLE [3]");
    console.log("-VOLTAR PARA TELA INICIAL TECLE [0]");
    const optConta1 = parseInt (input(": "));
    console.log("-----------------------------------------------------")

    if(optConta1 == 1){
        AddSaldoConta1();
        optionsConta1_2();
    }else if(optConta1 == 3){
        transfByConta1();
        
    }else if(optConta1 == 0){
        homeSistemaV2();
    }
}
// função: tranferir valor de uma conta para outra
function transfByConta1(){

    console.log("----------------------TRANSFERIR PARA SEGUINTE CONTA-----------------");
    console.log("Conta: ",allContas[1][0]," Saldo: ", allContas[1][2]);
    const valortransf = parseFloat(input("-INFORME O VALOR A SER TRANSFERIDO: "));
    console.log("---------------------------------------------------------------------");

    if(valortransf > myConta1.saldo){
        console.log("------------------SEM SALDO---------------");
        console.log("SEM SALDO DISPONÍVEL PARA REALIZAR OPERÇÃO!")
        console.log("------------------------------------------");

        console.log("------------------------------------------");
        console.log("-PARA TENTAR NOVAMENTE TECLE [1]");
        console.log("-PARA VOLTA A TELA ANTERIOR TECLE [0]");
        let optionsAreaTransf = input (": ")
        console.log("------------------------------------------");
        
        do{
            console.log("------------------------------------------");
            console.log("-PARA TENTAR NOVAMENTE TECLE [1]");
            console.log("-PARA VOLTA A TELA ANTERIOR TECLE [0]");
            optionsAreaTransf = input (": ")
            console.log("------------------------------------------");

        }while(optionsAreaTransf != 1 && optionsAreaTransf != 0)
            
        if(optionsAreaTransf == 1){
            transfByConta1();

        }else if(optionsAreaTransf == 0){
            optionsConta1_2();
        }
    }else{

        myConta1.saldo = myConta1.saldo - valortransf;
        conta1.splice(2,1,myConta1.saldo.toFixed(2));

        myConta2.saldo = myConta2.saldo + valortransf;
        conta2.splice(2,1,myConta2.saldo.toFixed(2));

    }
    
    
}
/**----------------conta 1 end----------------------*/


/** conta 2 */

// função: retornar a primeira fase de abertura de conta 
function abrirConta2(){

    console.log("--------------------ABRIR CONTA 2---------------------");
    console.log("-PARA ABARIR CONTA TECLE [1]");
    console.log("-PARA CANCELAR OPERAÇÃO TECLE [2]");
    let startSistema2 = parseInt(input(":"));
    console.log("-----------------------------------------------------")

    while (startSistema2 != 1 && startSistema2 != 2) {
        console.log("OPÇÃO INVÁLIDA!");
            abrirConta2();
            break;

    }if(startSistema2 == 1){
        addNameconta2();
        //confirmaDados2();
    }else if(startSistema2 == 2){
        console.log("OPERAÇÃO CANCELADA!");
        homeSistema();
    }
}
//funcção: criar nome do titular da conta2
function addNameconta2(){
    let myName2 = undefined;

    const analisaName = /^[A-Za-z' ']+$/;
    
    do{
        console.log("--------------------NOME TITULAR CONTA 2-------------------");
        myName2 = input("-DIGITE SEU NOME: ");
        console.log("-----------------------------------------------------------");

        if(!analisaName.test(myName2)){
            console.log("---------------------------------------ERROS--------------------------------------------")
            console.log('ERRO! O NOME DO TITULAR DEVE CONTER APENAS DADOS DO TIPO "a-z OU A-Z" TENTE NOVEMENTE.');
            console.log("---------------------------------------------------------------------------------------")
        }

    
    }while(!analisaName.test(myName2));
    
    myConta2._nome = myName2;
    
    conta2.splice(0,1,myConta2._nome); //sempre irá atualizar o nome inserido anteriormente.
    
}
// função: gera numero aleatorio de identificação da conta2
function geraNumConta2 (){
    let min = 0;
    let max = 9;
    let nConta = [null,null,null,null,'.',null,null,null,null,'.',null,null,null,null,'.',null,null,null,null];
    nConta = nConta.map( value => digitosConta = Math.floor(Math.random() * (max - min + 1)) + min);
        nConta.splice(4,1,'.')
        nConta.splice(9,1,'.')
        nConta.splice(14,1,'.');

        //const myConta1 = new contaBancaria();
        myConta2.numconta = nConta.join(' ');

        //return myConta1
        conta2.splice(1,1,myConta2.numconta);

        
}
// função: saldo inicial da conta zerado
function saldoInicialConta2(){
    //const myConta1 = new contaBancaria();
    myConta2.saldo = 0;
    conta2.push(myConta2.saldo.toFixed(2));
    
}
//função: adicionar saldo conta2
function AddSaldoConta2(){
    console.log("------------------ADICONAR SALDO-------------------");
    console.log('VALOR SEGUINDO O PADRÃO DECIMAL "EX: 0.00.."');
    const saldoEntrada = parseFloat(input("-DIGITE O VALOR DA OPERAÇÃO: "));
    console.log("---------------------------------------------------");

    myConta2.saldo = myConta2.saldo + saldoEntrada;
    

    conta2.splice(2,1,myConta2.saldo.toFixed(2));
    
} 
// função: o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados2(){
    console.log("-----------------CONFIRMAR DADOS CONTA 2---------------------")
    console.log("-PARA CONFIRMAR E CRIAR CONTA TECLE [1]");
    console.log("-PARA ALTERAR OS DADOS TECLE [2]");
    let confDados2 = parseInt (input(": "));
    console.log("-----------------------------------------------------");

    if(confDados2 == 1){
        geraNumConta2();
        saldoInicialConta2();
        saveConta2();
        homeSistemaV2();
        
    }else if(confDados2 == 2){
        addNameconta2();
        confirmaDados2();

    }else{
        return confirmaDados2();
    }
}
// função: salvar conta2    
function saveConta2(){
    allContas.push(conta2);
    console.log("-----------------------------------------------------");
    console.log("CONTA 2 CRIADA COM SUCESSO!");
    console.log("-----------------------------------------------------");
}


//função: exibe os dados da conta2
function acessConta2(){
    console.log("----------------------CONTA 2----------------------")
    console.log("Numero conta: ",conta2[1]);
    console.log("Nome titular: ",conta2[0]);
    console.log("Saldo: ",conta2[2]);
    console.log("----------------------------------------------------")
    optionsConta2();

}

//função: opções de operação da conta2
function optionsConta2(){
    console.log("----------------------OPTIONS CONTA 2-----------------")
    console.log("-ADICIONAR SALDO TECLE [1]");
    console.log("-RETIRAR SALDO TECLE [2]");
    console.log("-TRANSFERIR VALOR TECLE [3]");
    console.log("-VOLTAR PARA TELA INICIAL TECLE [0]");
    const optConta2 = parseInt (input(": "));
    console.log("-----------------------------------------------------")

    if(optConta2 == 1){
        AddSaldoConta2();
        optionsConta2();

    }else if(optConta2 == 3){
        transfByConta2();
    }else if(optConta2 == 0){
        homeSistemaV2();
    }
}
// função: tranferir valor de uma conta para outra
function transfByConta2(){

    console.log("----------------------TRANSFERIR PARA SEGUINTE CONTA-----------------");
    console.log("Conta: ",allContas[0][0]," Saldo: ", allContas[0][2]);
    const valortransf = parseFloat(input("-INFORME O VALOR A SER TRANSFERIDO: "));
    console.log("---------------------------------------------------------------------");

    if(valortransf > myConta1.saldo){
        console.log("------------------SEM SALDO---------------");
        console.log("SEM SALDO DISPONÍVEL PARA REALIZAR OPERÇÃO!")
        console.log("------------------------------------------");

        console.log("------------------------------------------");
        console.log("-PARA TENTAR NOVAMENTE TECLE [1]");
        console.log("-PARA VOLTA A TELA ANTERIOR TECLE [0]");
        let optionsAreaTransf = parseInt (input (": "));
        console.log("------------------------------------------");
        
        do{
            console.log("------------------------------------------");
            console.log("-PARA TENTAR NOVAMENTE TECLE [1]");
            console.log("-PARA VOLTA A TELA ANTERIOR TECLE [0]");
            optionsAreaTransf = parseInt (input (": "));
            console.log("------------------------------------------");

        }while(optionsAreaTransf != 1 && optionsAreaTransf != 0)
            
        if(optionsAreaTransf == 1){
            transfByConta2();

        }else if(optionsAreaTransf == 0){
            optionsConta2();
        }
    }else{

        myConta2.saldo = myConta2.saldo - valortransf;
        conta2.splice(2,1,myConta2.saldo.toFixed(2));

        myConta1.saldo = myConta1.saldo + valortransf;
        myConta1.splice(2,1,myConta1.saldo.toFixed(2));

    }
    
    
}
/**----------------conta 2 end----------------------*/
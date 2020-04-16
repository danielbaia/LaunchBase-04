  

// Maior >
// Menor < 
// Maior e igual >=
// Menor e igual <=
// Igual a ==
// Igual e do mesmo tipo ===
// Diferente de !=
// Diferente de e inclusive do tipo !=

/*
console.log( 6 > 5); //true
console.log( 10 < 9); //false
console.log( 11 >= 12 ); //false
console.log( 13 <= 15); //true 


//verifica apenas o valor
console.log( 4 == "4"); //true
//verifica o valor e o tipo
console.log( 4 === "4"); //false

//verifica apenas o valor
console.log( 4 != "4"); //false
//verifica o valor e o tipo
console.log( 4 !== "4"); //true



//DESAFIO 01

const idade = 17;
//Verifica se a pessoa e maior e igual a 18
console.log(idade >= 18);

//Se sim deixa entrar, se nao, bloquear a entrada
if(idade >= 18){
 console.log("Deixar Entrar");
 
}else{
    console.log("Bloquear Entrada");
    
}
//Se a pessoa tiver 17 anos
//Avisa para voltar quando tiver 18 anos
if(idade < 18){
    console.log("Voltar quando tiver 18 anos");
    
}

*/

/* ==========================================================
    OPERADORES DE LOGICOS

    && "E" As duas condicoes devem ser verdadeiras
        para que a condicao seja verdadeira
    || "OU" Uma das condicoes deve ser veidadeira
        para que a condicao seja verdadeira
    !   "NAO" Nega uma condicao

==============================================================*/




//DESAFIO 01

const idade = 18;
//Verifica se a pessoa e maior e igual a 18
//Se sim deixa entrar, se nao, bloquear a entrada
//Se a pessoa tiver 17 anos
//Avisa para voltar quando tiver 18 anos

if( !(idade >= 18) || idade === 17 ){
    
    console.log("Bloquear Entrada");

}else{
    console.log("Deixa entrar");
  
    
}





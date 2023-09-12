console.log('Salve Baker')

// -------------- RELEMBRANDO ----------------
/*
- OPERADORES RELACIONAIS => 

    === Verifica se o valor e tipo são iguais 
    let explicarIgual = 'atribuir'
     numero1 === numero 2 => 2 === '2' => false

    !== Verifica se o valor e tipo são diferente
    numero1 !== numero 2 => 2 === '2' => true

    > Primeiro, maior que o segundo 
    numero1 > numero 2 

    < Primeiro é menor que o segundo 
    numero1 < numero 2 

    >= Verifica se o primeiro é maior ou igual ao segundo(ordem importa => arrow function )
    numero1 >= numero 2  

    <= Verifica se o primeiro é menor ou igual ao segundo
    numero1 <=  numero 2  

Importante: Tomar cuidado com a sequencia dos símbolos, para não confundir com arrown function 

----

- OPERADORES LÓGICOS : 

    && (E) => Verifica se ambas condicoes são verdadeiras
    
    sou mulher && instrutora da Labenu ===> Retorna um true

    || (OU)=> Verifica se pelo menos uma condição é verdadeira 

    sou mulher && tenho 20 anos ===> retorna um true , pelo menos uma das condicoes é verdadeira

    ! (NÃO)=> Oposto da resposta 
    !true === false

-----

- TABELA VERDADE => 

- Quando é o operador E , só será verdade se os dois termos forem verdadeiros 

- Quando é o operador OU, só será falso se os dois termos forem falsos.

- Comparação retorna um valor boleano 

numero1 = 29  
numero2 = 29

numero1 !== numero2 => false

//-------------- CONDICIONAIS ----------------

Condicional composta  (if/else): 

function compararValores (){
    let numero1 = 29 
    let numero2 = 30 

    if(SE alguma coisas){
        // faça isso
    }else{
        se não, faça isso
    }
}

-----
function compararValores (){
    let numero1 = 29 
    let numero2 = 30 

    if(numero1 === numero2){
        console.log('Os números são iguais')
    }else{
       console.log('Os números são diferentes')
    }
}

---

function verificarClimaParasair (){
    let chuva = prompt('Está chovendo ? Digite sim ou não')
    if(chuva === 'sim'){
        console.log('Leve o guarda chuva')
    }else{
         console.log('Leve o óculos de sol')
    }
}

----

Condicional aninhada  (if/else | else if): 

1. Verificar se tá chovendo 
2. Se tiver chovendo , pegue o guarda chuva => 4. Verificar se o guarda-chuva tá aberto => 5. Se tiver aberto, saía de casa | 6. Se estiver fechado, abra-o e saia de casa
3. Se não, pegue o óculos de sol 

function verificarClimaParasair (){
    let chuva = prompt('Está chovendo ? Digite sim ou não')
    let guardaChuvaAberto = prompt('O guarda-chuva está aberto ? Digite sim ou não')

    if(chuva === 'sim'){
        console.log('Leve o guarda chuva')
    }else if (guardaChuvaAberto=== 'sim'){
        console.log('pegue o seu guarda chuva e saia')
    }else if (guardaChuvaAberto=== 'não'){
        console.log('Abra o guarda chuva para sair')
    }else{
         console.log('Leve o óculos de sol')
    }
}

Condicional escolha de caso  (switch case): 

CENAS DOS PRÓXIMOS CAPÍTULOS, NOS VEMOS NO MESMO CANAL

*/

//-------------- EXERICICIO 1 ----------------

/*
function compararNumeros (booleano1,booleano2){
    //booleano1=  prompt('Digite true ou false').toLocaleLowerCase()
    //console.log(booleano1)
    if(booleano1 === true){
        alert('O booleano 1 é true')
    }else{
        alert('O booleano 1 não é true')
    }
}

compararNumeros (true,false)

*/


//-------------- EXERICICIO 2 ----------------

/*
Crie um terceiro parâmetro chamado booleano3 e passe o valor true
Crie um if que verifica se booleano1 e booleano2 são iguais e exiba um alert caso positivo
Crie um else if que verifica se booleano2 e booleano3 são iguais e exiba um alert caso positivo
Crie mais um else if que verifica se booleano1 e booleano3 são iguais e exiba um alert.
Crie um else que exiba um alert caso não existam valores iguais.
*/

function compararNumeros (booleano1,booleano2,booleano3){
    //booleano1 = Number(prompt('Digite o número 1 a ser comparado'))
    //booleano2 = Number(prompt('Digite o número 2 a ser comparado'))
    //booleano3 = Number(prompt('Digite o número 3 a ser comparado'))

   if (booleano1 === booleano2) {
        alert('O booleano 1 é igual ao booleano 2')
   } else if (booleano2 === booleano3){
        alert('O booleano 2 é igual ao booleano 3')
   }else if (booleano1 === booleano3){
    alert('O booleano 1 é igual ao booleano 3')
   }else {
    alert('Não há valores iguais')
   }
}

//compararNumeros (true, false, true)

//compararNumeros ()

//-------------- EXERICICIO 3 ----------------

/*
Crie uma função que recebe a idade como parâmetro. Chame a função e passe um valor de idade para ela.
Agora crie uma lógica com os seguintes requisitos:
Pode votar: pessoas com 18 anos ou mais
Não pode votar: pessoas menores de 18 anos
Casos facultativos: 
Pessoas com idade entre 16 e 17 anos
Pessoas com 70 anos ou mais
*/ 

/*
function verificarSeVota (idade){
    idade = Number(prompt('Digite a sua idade'))
    // Idade obrigatória = 18 a 69
    if (idade >= 18 && idade <= 69) {
       alert('Seu voto é obrigatório')
    } else if (idade >= 16 && idade <=18 ||idade >= 70){
        alert('Seu voto é facultativo')
    }else {
        alert('Você não precisa votar')
    }
}

verificarSeVota()

*/

//-------------- EXERICICIO EXTRA ------------

/*Crie uma função que recebe média como parâmetro, e passe para ela um valor numérico entre 0 e 10. Dentro da função faça:
Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada
Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”.
Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.
*/ 

const verificarMedia = (media)=>{
    media = Number(prompt('Digite um número de 0 a 10, para a sua nota'))

    if(media >= 5){
        alert ('Parabéns! Você não fez mais que sua obrigação e foi aprovade')
    }else if(media >=3){
        alert ('Vai para a recuperação, xoven!')
    }else if(media <=3){
        alert ('Reprovade, xoven! Já era, perdeu! Bye bye see you next year')
    }else{
        alert ('Passe uma nota válida')
    }
}

verificarMedia()



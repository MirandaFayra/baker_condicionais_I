console.log('Salve Baker')

// -------------- RELEMBRANDO ----------------
/*
- OPERADORES RELACIONAIS => 

    === Verifica se o valor e tipo são iguais 

    !== Verifica se o valor e tipo são diferente

    > Primeiro, maior que o segundo 

    < Primeiro é menor que o segundo 

    >= Verifica se o primeiro é maior ou igual ao segundo 

    <= Verifica se o primeiro é menor ou igual ao segundo 

Importante: Tomar cuidado com a sequencia dos símbolos, para não confundir com arrown function 

----

- OPERADORES LÓGICOS : 

    && (E) => Verifica se ambas condicoes são verdadeiras 

    || (OU)=> Verifica se pelo menos uma condição é verdadeira 

    ! (NÃO)=> Oposto da resposta 

-----

- TABELA VERDADE => 

- Quando é o operador E , só será verdade se os dois termos forem verdadeiros 

- Quando é o operador OU, só será falso se os dois termos forem falsos.

- Comparação retorna um valor boleano 

*/

//-------------- EXERICICIO 1 ----------------

/*
function compararNumeros(boleano1, boleano2) {
   boleano1 = Number(prompt('Digite um número a ser comparado'))
    boleano2 = Number(prompt('Digite um número a ser comparado'))
    if(boleano1 === boleano2){
        alert('Os números são iguais')
    }else{
        alert('Os números são diferentes')
    }
}

//compararNumeros()
*/

//-------------- EXERICICIO 2 ----------------

/*
function compararNumeros(boleano1, boleano2,  boleano3) {
    //boleano1 = Number(prompt('Digite um número a ser comparado'))
    //boleano2 = Number(prompt('Digite um número a ser comparado'))
    //boleano3 = Number(prompt('Digite um número a ser comparado'))

     if(boleano1 === boleano2){
         alert('Os números um e dois são iguais')
     }else if(boleano2 === boleano3){
        alert('Os números dois e três são iguais')
     }else if(boleano3 === boleano1){
        alert('Os números três e um são iguais')
     }else{
         alert('Os números são diferentes')
     }
 }

//compararNumeros()

*/

//-------------- EXERICICIO 3 ----------------

/*
function verificarIdade(idade){
    idade = Number(prompt('Digite a idade desejada'))
    if(idade >=18 && idade<70){
        alert('Você deve votar')
    }else if(idade>= 16 && idade<18){
        alert('Caso queira, pode votar pois é facultativo')
    }else if(idade >= 70){
        alert('Seu voto é facultativo')
    }else {
        alert('Informe corretamente sua idade')
    }
}

verificarIdade( ) */ 


//-------------- EXERICICIO EXTRA ------------

function verificarSePassou (media){
    media = Number(prompt('Digite a sua nota'))

    if(media >= 5){
        console.log('Foi aprovade, parabéns!')
    }else if(media >= 3){
        console.log('Vai para recuperação!')
    }else if(media < 3){
        console.log('Estudante reprovade!')
    }else{
        console.log('Dado inválido!')
    }
}

verificarSePassou()
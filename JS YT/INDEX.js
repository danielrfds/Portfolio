// VARIÁVEIS
// let idade = 22
// let altura = 174
// let peso = 74
// console.log(`Você tem ${idade} anos, com ${altura} cm de altura e ${peso} kg.`)

// OBJECT
// let pessoa = {
//     nome: 'Daniel',
//     idade: 22,
//     peso: 74,
//     estaAprovado: true,
// };
// console.log(pessoa);

// ARRAYS
// let Daniel = ['Rodrigues', 'Brasileiro', 'RJ', 22, 174, 74];
// console.log(Daniel)
// console.log(Daniel[0])
// console.log(Daniel[1])
// console.log(Daniel[4])

// FUNCTIONS
// let corSite = 'Azul'
// function trocarCor(cor){  // Dentro do () pode colocar parâmetros
//     corSite = cor         // a let corSite vai ser alterada para o parâmetro de trocarCor('')
// }
// console.log(corSite)
// trocarCor('vermelho') // Função com parâmetro definido
// console.log(corSite)

// TIPOS DE FUNCTIONS

// 1. Realiza a tarafa, mas não devolve nada 
// function dizerNome(){
//     console.log('Daniel')
// }
// dizerNome();

// 2. Realiza a tarefa e retorna um resultado
// function multiplicarPorDois(valor){
//     return valor * 2;
// }
// console.log(multiplicarPorDois(5))
// let resultado = multiplicarPorDois(10);
// console.log(resultado)

// OPERADOR TERNÁRIO
// Se a média for maior que 6, aprovado. Se não, reprovado
// let média = 10
// let situação = média > 6 ? 'APROVADO' : 'REPROVADO'
// console.log(situação)

// OPERADOR LÓGICO 'E' - &&
// Retorna TRUE se as duas condições forem TRUE
// let maiorDeIdade = true
// let alfabetizado = true
// let podeVotar = maiorDeIdade && alfabetizado
// console.log(podeVotar)

// OPERADOR LÓGICO 'OU' - ||
// Retorna True se uma pelo menos uma condição for true
// OPERADOR LÓGICO 'NOT' - !

// IF ... ELSE
// let hora = new Date()
// let agora = hora.getHours()
// agora = 15

// if (agora < 12){
//     console.log(`Bom dia! Agora são ${agora} horas.`)
// } else if (agora >= 12 && agora < 18){
//     console.log(`Boa tarde! Agora são ${agora} horas.`)
// } else { 
//     console.log(`Boa noite! Agora são ${agora} horas.`)
// }

// SWITCH ... CASE
// let permissão = ''; //comum, gestor, diretor

// switch(permissão){ 
//     case 'comum':
//         console.log('usuário comum')
//         break
//     case 'gestor':
//         console.log('usuário gestor')
//         break
//     case 'diretor':
//         console.log('usuário diretor')
//         break
//     default:
//         console.log('usuário não identificado')
// }

// LOOPS
// 1. FOR
// for(let i = 0 ; i < 5 ; i++){
//     console.log('estou aprendendo')
// }

// 2. WHILE
// let i = 5; 

// while (i >= 1){
//      if (i % 2 !== 0){ 
//          console.log(i);
//      }
//      i--;
//  }
// console.log("Hello, World!");
// alert("Hello, World!");
// document.write("Hello, World!");

// const n = 1;

// if (n === 1) {
//   console.log("Sou único");
// } else if (n == 16) {
//   console.log("Somos dois ");
// } else if (n == 16) {
//   console.log("Somos três ");
// } else {
//   console.log("Somos muitos ");
// }

// switch (n) {
//   case 1:
//     console.log("SWITCH: Sou único");
//     break;
//   case 2:
//     console.log("SWITCH: Somos dois ");
//     break;
//   case 3:
//     console.log("SWITCH: Somos três ");
//     break;
//   default:
//     console.log("SWITCH: somos muitos");
//     break;
// }

// // for e while
// for (let i = 0; i < 10; i++) {
//   console.log("FOR: " + i);
// }

// let x = 0;
// while (x < 10) {
//   console.log("WHILE: " + x);
//   x++;
// }

// // do while
// let y = 0;
// do {
//   console.log("DO WHILE: " + y);
//   y++;
// } while (y < 10);

// // EXERCICIO

// // 1. Crie um loop que imprima os números de 1 a 10
// // 2. Dentro do loop, verifique se o número é par ou ímpar e imprima uma mensagem correspondente
// // 3. Use os três tipos de loops: for, while e do while

// // for
// // for (let i = 1; i <= 10; i++) {

// // for (let n = 1; n <= 10; n++) {
// //   console.log("No for é " + n);
// //   if (n % 2 === 0) {
// //     console.log("O número " + n + " é par");
// //   } else {
// //     console.log("O número " + n + " é ímpar");
// //   }
// // }

// // // while

// // let i = 1;
// // while (i <= 10) {
// //   console.log("No while é " + i);
// //   i++;

// //   if (i % 2 === 0) {
// //     console.log("O número " + i + " é par");
// //   } else {
// //     console.log("O número " + i + " é ímpar");
// //   }
// // }

// // // do while
// // let j = 1;
// // do {
// //   console.log("Escreve isto até a condição do While seja verdadeira " + j);
// //   j++;
// //   if (j % 2 === 0) {
// //     console.log("O número " + j + " é par");
// //   } else {
// //     console.log("O número " + j + " é ímpar");
// //   }
// // } while (j <= 10);

// // // Funções

// // function eNumeroPar(numero) {
// //   const restoDivisao = numero % 2;
// //   if (restoDivisao === 0) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // EXERCICIO

// // 1.Criar uma função de soma que recebe dois números e retorna a soma deles

// function soma(a, b) {
//   const resultado = a + b;
//   return resultado;
// }
// console.log(soma(2, 3));

// // 2. Criar uma funcao de multiplicação que recebe dois números e retorna a multiplicação deles
// function multiplicacao(a, b) {
//   const resultado = a * b;
//   return resultado;
// }
// console.log(multiplicacao(2, 3));

// // 3.Criar uma funcao que gera uma pessoa com nome e idade

// function criaPessoa(nomePessoa, idadePessoa) {
//   const pessoa = {
//     nome: nomePessoa,
//     idade: idadePessoa,
//   };
//   return pessoa;
// }
// console.log(criaPessoa("João", 30));

// EXERCICIO

function processarDesconto(preco, desconto) {
  if (desconto < 10 && desconto > 0) {
    console.log(preco + desconto);
  } else if (desconto >= 10) {
    console.log(preco - desconto);
  } else if (desconto == 0) {
    console.log(preco * preco);
  } else {
    console.log("Tudo treta");
  }
}
processarDesconto(100, 5);

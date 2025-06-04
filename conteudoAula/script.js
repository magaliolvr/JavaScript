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

// EXERCICIO FUNCTION

// function processarDesconto(preco, desconto) {
//   if (desconto < 10 && desconto > 0) {
//     return preco + desconto;
//   } else if (desconto >= 10 && desconto < 30) {
//     return preco - desconto;
//   } else if (desconto == 0) {
//     preco * preco;
//   } else {
//     return "Tudo treta";
//   }
// }
// console.log(processarDesconto(100, 45));

// ARRAYS

const arrayVazio = new Array(2);

arrayVazio[0] = 10;
arrayVazio[1] = 20;

console.log(arrayVazio);

const arrayComValores = [10, "joao", true, null, undefined, { nome: "Maria", idade: 30 }];

console.log(arrayComValores);

for (let i = 0; i < arrayComValores.length; i++) {
  console.log(arrayComValores[i], "for com length");
}
// lenghth retorna o tamanho do array(uma propriedade do array)

// FUNÇOES DO ARRAY

// push adiciona um elemento no final do array(é uma função do array)
arrayComValores.push(100, "Novo valor");
console.log(arrayComValores, " push(100, 'Novo valor')");

// splaice remove um elemento do array
arrayComValores.splice(0, 1); // remove o primeiro elemento
console.log(arrayComValores, " splice(0, 1)");
arrayComValores.splice(0, 2); // remove os dois primeiros elementos
console.log(arrayComValores, " splice(0, 2)");
arrayComValores.splice(1); // remove todos os elementos a partir do segundo
console.log(arrayComValores, " splice(1)");

// slice retorna uma parte do array

arrayComValores.slice(0, 0); // retorna o primeiro elemento
console.log(arrayComValores, "slice(0, 0)");

// EXERCICIO ARRAY

console.log("EXERCICIO ARRAYS");

// 1. criar um array com duas strings e obtem o numero de posiçoes desse array
const arrayLenght = ["João", "Maria"];
console.log(arrayLenght.length, "length"); // retorna o tamanho do array

// 2.
const arrayString = ["João", "Maria", "Jose"];
console.log(arrayString.toString(), "toString"); // transforma o array em string

// 3.
const arrayNumeros = [1, 2, 3];
arrayNumeros.pop(); // remove o último elemento
arrayNumeros.shift(); // remove o primeiro elemento
console.log(arrayNumeros, "pop e shift");

// 4
const arrayNew = ["uva", "banana"];
arrayNew.push("maça"); // adiciona um elemento no final do array
console.log(arrayNew, "push('maça')");

// 5
const arrayComBarra = ["banana", "maça"];
console.log(arrayComBarra.join(" / "), "join(' / ')"); // junta os elementos do array com o separador "|"

// 6
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.concat(array2); // junta os dois arrays
console.log(array1.concat(array2), "concatenação de 2 arrays");

// OBJETOS

const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "desenvolvedor",
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo",
  },
};
console.log(pessoa, "pessoa");

pessoa.nome = "Maria"; // altera o nome da pessoa
console.log(pessoa, "pessoa");

// EXERCICIO OBJETOS

console.log("EXERCICIO OBJETOS");

const euzinha = {
  nome: "Magali",
  sobrenome: "oliveira",
  idade: 35,
  profissao: "Frontend Developer",
  cidade: "Vila Franca de Xira",
  pais: "Portugal",
};
console.log(euzinha, "euzinha");

Object.keys(euzinha);
// retorna as chaves do objeto

// EXERCICIO PRATICO

console.log("EXERCICIO PRATICO");

// const textinho = "isto é um EXEMPLO de um texto";

//       const split = textinho.split("texto");
//       const textoNovo = "<b>texto</b>";
//       split.push(textoNovo.toUpperCase());
//       const textinhoAlterado = split.join("");

// tranformado em function

function transformTextinho(textinho, palavrinha) {
  if (textinho.indexOf(palavrinha) !== -1) {
    const split = textinho.split(palavrinha);
    const textoNovo = "<b>" + palavrinha + "<b>";
    split.push(textoNovo.toUpperCase());
    const textinhoAlterado = split.join("");

    return textinhoAlterado;
  } else {
    return textinho;
  }
}
console.log(transformTextinho("isto é um EXEMPLO de um texto", "texto"), "transformTextinho");

// EXERCICIO 2

let textinhoComprimento = "isto é um texto string";

textinhoComprimento.length;

textinhoComprimento.indexOf("é");

textinhoComprimento = textinhoComprimento.replace("texto string", "javascript espetacular");

textinhoComprimento.toUpperCase();

textinhoComprimento.toLowerCase();

textinhoComprimento.split("espetacular");

// document.write(textinhoComprimento); // escreve o texto na tela

// EXERCICIo CONCATENAR

console.log("EXERCICIO CONCATENAR");

let frase1 = "Isto é um teste";
let frase2 = "e tu vai passar";

console.log(frase1 + " " + frase2); // concatena as duas frases

// DATES

console.log("DADOS DE DATA");

const data = new Date(); // cria um objeto de data

console.log(data.setDate(70)); // altera o dia da data

// FUNÇOES ANONIMA
console.log("FUNÇOES ANONIMAS"); // retorna o dia atual

setTimeout(function () {
  console.log("Teste");
}, 5000); // chama a função depois de 5 segundos

// EXERCICIO FUNÇOES ANONIMAS

console.log("EXERCICIO FUNÇOES ANONIMAS");

let funçãoAnonima = function () {
  console.log("Magali Oliveira");
};
console.log(funçãoAnonima()); // chama a função

let funçãoAnonima2 = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(funçãoAnonima2(10, 20)); // chama a função

// CLOSURES

console.log("CLOSURES");

// closures são funções que têm acesso ao escopo de uma função externa mesmo depois que a função externa foi executada

// EVENTS

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

alert("Olá! Existe conteúdo na console do navegador, abra o console para ver.");

// Conteudos na dom referentes as 2 primeiras semanas do curso.

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
// uma função anônima é uma função que não tem um nome definido. Elas são frequentemente usadas como argumentos para outras funções ou como callbacks.

console.log("FUNÇOES ANONIMAS");

setTimeout(function () {
  console.log("Teste");
}, 5000); // chama a função depois de 5 segundos

// EXERCICIO FUNÇOES ANONIMAS

console.log("EXERCICIO FUNÇOES ANONIMAS");

// Cria uma função anônima que imprime o seu nome no console

let funçãoAnonima = function () {
  console.log("Magali Oliveira");
};
console.log(funçãoAnonima()); // chama a função

// Cria uma função anônima que recebe dois números e retorna a soma deles

let funçãoAnonima2 = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(funçãoAnonima2(10, 20)); // chama a função

// CLOSURES

console.log("CLOSURES EXEMPLO IVA");

// closures são funções que têm acesso ao escopo de uma função externa mesmo depois que a função externa foi executada
// CLOSURES é uma função que retorna outra função, e essa função interna tem acesso às variáveis da função externa mesmo depois que a função externa foi executada.

function calcularIva(imposto) {
  return function (preco) {
    return preco * imposto;
  };
}

const calcularIVAroupa = calcularIva(0.23);
console.log(calcularIVAroupa(100)); // 23

// a funcao calcularIVAroupa é uma função interna que tem acesso à variável imposto da função externa calcularIva. Quando você chama calcularIVAroupa(100), ela retorna o valor do imposto sobre o preço de 100, que é 23 (100 * 0.23).
// CLOSURES são úteis para criar funções que têm acesso a variáveis específicas, mesmo depois que a função externa foi executada. Elas permitem encapsular dados e comportamentos, tornando o código mais modular e reutilizável.
// CLOSURES são frequentemente usadas em programação funcional e são uma parte importante do JavaScript, especialmente quando se trata de manipulação de eventos, callbacks e funções de ordem superior.
// CLOSURES são uma característica poderosa do JavaScript que permite criar funções que "lembram" o ambiente em que foram criadas, mesmo depois que esse ambiente não está mais acessível. Elas são frequentemente usadas para encapsular dados e criar funções que têm acesso a variáveis específicas.

// EXEMPLO FÁCIL DE CLOSURES

console.log("EXEMPLO FACIL CLOSURES");

function criarMensagem(nome) {
  return function (mensagem) {
    return `${mensagem}, ${nome}!`; // o ${nome} serve para interpolar a variável nome dentro da string
  };
}
console.log(criarMensagem("Maria")("Olá"));

// "Olá, Maria!"
// chama a função criarMensagem e recebe a função interna de volta

// Você criou uma função criarMensagem.

// Dentro dela, existe uma variável nome = "Maria".

// Você retorna uma outra função, que usa essa variável.

// Quando você roda criarMensagem(), você recebe essa função interna de volta, que ainda lembra da variável nome.

// -------------------------------------------------------//

// ARROW FUNCTIONS
// Arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas são especialmente úteis para funções anônimas e callbacks, pois permitem uma sintaxe mais limpa e legível.
console.log("ARROW FUNCTIONS");

function construirCamposForm(campo) {
  return campo;
} // função normal

const construirCamposFormArrow = (campo) => campo; // arrow function
// A sintaxe de arrow function é mais curta e não requer a palavra-chave "function". Além disso, elas não têm seu próprio this, o que pode ser útil em alguns casos, como em callbacks.
// Arrow functions são especialmente úteis quando você precisa passar uma função como argumento para outra função, como em métodos de array (map, filter, reduce, etc.).
// Elas também são úteis quando você precisa criar funções anônimas, pois a sintaxe é mais limpa e legível.

// EXEMPLO DE ARROW FUNCTION
// como seria se fosse uma funcao normal

function somarNormal(a, b) {
  return a + b; // função que recebe dois parâmetros e retorna a soma deles
}
// como seria se fosse uma arrow function

console.log("EXEMPLO DE ARROW FUNCTION");
const somar = (a, b) => a + b; // função que recebe dois parâmetros e retorna a soma deles
console.log(somar(2, 3)); // 5

// -------------------------------------------------------//

// PARAMETROS DEFAULT

// Parâmetros default são valores padrão que podem ser atribuídos a parâmetros de função quando nenhum argumento é passado ou quando o argumento é undefined. Eles permitem que você defina valores padrão para parâmetros, tornando as funções mais flexíveis e fáceis de usar.
console.log("PARAMETROS DEFAULT");
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`; // se o parâmetro nome não for passado, o valor padrão será "Visitante"
}
console.log(saudacao()); // "Olá, Visitante!"
console.log(saudacao("João")); // "Olá, João!"
// Parâmetros default são especialmente úteis quando você deseja garantir que uma função tenha um valor válido, mesmo que nenhum argumento seja passado. Eles ajudam a evitar erros e tornam o código mais robusto e fácil de entender.

// -------------------------------------------------------//

// TEMPLATE STRINGS

// Template strings são uma forma de criar strings em JavaScript que permitem interpolação de variáveis e expressões, além de suportar múltiplas linhas. Elas são delimitadas por crases (``) em vez de aspas simples ou duplas.
console.log("TEMPLATE STRINGS");

const nome = "Magali";
const idade = 35;
const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`; // interpolação de variáveis
console.log(mensagem); // "Olá, meu nome é João e tenho 30 anos."

// -------------------------------------------------------//

// OPERADOR CONDICIONAL (TERNÁRIO)
// O operador condicional (ternário) é uma forma concisa de escrever uma expressão condicional em JavaScript. Ele é usado para avaliar uma condição e retornar um valor com base no resultado dessa condição. A sintaxe é: condição ? valorSeVerdadeiro : valorSeFalso.
console.log("OPERADOR CONDICIONAL (TERNÁRIO)");

// Exemplo de uso do operador condicional (ternário)
const idadePessoa = 18;
const mensagemIdade = idadePessoa >= 18 ? "Você é maior de idade." : "Você é menor de idade."; // se a condição for verdadeira, retorna "Você é maior de idade.", caso contrário, retorna "Você é menor de idade."
console.log(mensagemIdade); // "Você é maior de idade."

// Exemplo de condiçao sem operador ternario

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade.";
  } else {
    return "Você é menor de idade.";
  }
}
console.log(verificarIdade(20)); // "Você é maior de idade."

// Exemplo com operador ternário

function verificarIdadeTernario(idade) {
  return idade >= 18 ? "Você é maior de idade." : "Você é menor de idade."; // se a condição for verdadeira, retorna "Você é maior de idade.", caso contrário, retorna "Você é menor de idade."
}
console.log(verificarIdadeTernario(16)); // "Você é menor de idade."

// Exemplo com operador ternario e arrow function

console.log("EXEMPLO COM ARROW FUNCTION E OPERADOR TERNARIO");
// Arrow function com operador ternário

const verificarIdadeArrow = (idade) => (idade >= 18 ? "Você é maior de idade." : "Você é menor de idade."); // se a condição for verdadeira, retorna "Você é maior de idade.", caso contrário, retorna "Você é menor de idade."
console.log(verificarIdadeArrow(15)); // "Você é maior de idade."

// O operador condicional (ternário) é uma forma compacta de escrever uma expressão condicional, tornando o código mais legível e fácil de entender. Ele é frequentemente usado para atribuir valores a variáveis com base em condições simples, evitando a necessidade de escrever estruturas if-else mais longas.

// -------------------------------------------------------//

// ARRAYS NO ES6 ECMASCRIPT
// No ES6 (ECMAScript 2015), foram introduzidas várias melhorias e novas funcionalidades para trabalhar com arrays, tornando o código mais conciso e legível. Algumas dessas melhorias incluem o uso de spread operator, destructuring assignment e métodos de array aprimorados.
console.log("ARRAYS NO ES6 ECMASCRIPT");

// ARRAY FOREACH
// O método forEach é usado para iterar sobre os elementos de um array, executando uma função para cada elemento. Ele é uma alternativa mais legível ao loop for tradicional.
const numeros = [1, 2, 3, 4, 5];

// com for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // imprime cada número do array
}
// com forEach e arrow function
console.log("EXEMPLO DE FOREACH e ARROW FUNCTION");

numeros.forEach((numero) => {
  console.log(numero); // imprime cada número do array
});

// ARRAY MAP
// O método map é usado para criar um novo array com os resultados da aplicação de uma função a cada elemento do array original. Ele é útil para transformar os elementos de um array sem modificar o array original.

const letras = ["a", "b", "c", "d", "e"];
// com for
for (let i = 0; i < letras.length; i++) {
  console.log(letras[i]);
} // imprime cada letra do array

// com map e arrow function
console.log("EXEMPLO DE MAP e ARROW FUNCTION");

const frase = letras.map((i) => `a letra é : ${i}`); // cria um novo array com as letras transformadas
console.log(frase); // imprime o novo array com as letras transformadas

// ARRAY FIND & FILTER
// O método filter é usado para criar um novo array com todos os elementos que passam em um teste definido por uma função. Ele é útil para filtrar elementos de um array com base em uma condição específica.
const words = ["apple", "banana", "cherry", "date", "elderberry"];

words.indexOf("banana");

const indice = words.indexOf("banana"); // retorna o índice do elemento "banana" no array, se existir, ou -1 se não existir
console.log(indice); // imprime o índice do elemento "banana", se existir, ou -1 se não existir

// retorna o índice do elemento "banana" no array, se existir, ou -1 se não existir
console.log("EXEMPLO DE FIND e ARROW FUNCTION");

// com filter e arrow function
const palavra = words.find((word) => word.length > 5 && word.length < 10); // encontra a primeira palavra que tem mais de 5 e menos de 10 letras
console.log(palavra); // imprime a palavra encontrada, se existir, ou undefined se não existir
// com filter e arrow function
const resultados = words.filter((word) => word.length > 4 && word.length < 10); // filtra as palavras que têm mais de 5 e menos de 10 letras

console.log(resultados); // imprime o novo array com as palavras filtradas

// ARRAY REDUCE
// O método reduce é usado para aplicar uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor. Ele é útil para realizar operações de agregação, como somas, médias, contagens, etc.

console.log("EXEMPLO DE REDUCE e ARROW FUNCTION");

const fraseCompleta = words.reduce((frase, word) => `${frase} - ${word}`, "as minhas palavras são"); // reduz o array de palavras a uma única string, separando as palavras por " - "

console.log(fraseCompleta); // imprime a frase completa formada pelas palavras do array, separadas por " - "

// -------------------------------------------------------//

// DESTRUCTURING ASSIGNMENT
// Destructuring assignment é uma forma de extrair valores de arrays ou propriedades de objetos em variáveis distintas. Ele permite que você extraia valores de forma mais concisa e legível, evitando a necessidade de acessar cada valor individualmente.
console.log("DESTRUCTURING ASSIGNMENT");

const wordsArray = ["apple", "banana", "cherry", "date", "elderberry"];

const numbersArray = [1, 2, 3, 4, 5];

const [primeiraPalavra, segundaPalavra, ...resto] = wordsArray; // extrai as primeiras duas palavras do array e o restante em uma nova variável
console.log(primeiraPalavra); // "apple"
console.log(segundaPalavra); // "banana"
console.log(resto); // ["cherry", "date", "elderberry"]

console.log("EXEMPLO DE DESTRUCTURING ASSIGNMENT CONCATENANDO ARRAYS");
// concatenação de arrays diferentes

const wordsNumbersArray = [...wordsArray, ...numbersArray]; // concatena os dois arrays usando o spread operator
console.log(wordsNumbersArray); // ["apple", "banana", "cherry", "date", "elderberry", 1, 2, 3, 4, 5]

// DESTRUCTURING COM OBJETOS

console.log("DESTRUCTURING COM OBJETOS");
// Destructuring assignment com objetos permite extrair propriedades de um objeto em variáveis distintas, tornando o código mais legível e fácil de entender.

const pessoaObj = {
  nomezinho: "Magali",
  idadezinha: 35,
  profissao: "Frontend Developer",
};
const { nomezinho, idadezinha, profissao } = pessoaObj; // extrai as propriedades do objeto em variáveis distintas
// é preciso usar o mesmo nome que a chave do objeto para extrair as propriedades corretamente

console.log(`O meu nome é ${nomezinho}, tenho ${idadezinha} anos e sou ${profissao}.`); // "O meu nome é Magali, tenho 35 anos e sou Frontend Developer."

// EXERCICIO ES6

console.log("EXERCICIO ES6");

const estudantes = [
  { id: 1, nome: "João", idade: 20 },
  { id: 2, nome: "Maria", idade: 22 },
  { id: 3, nome: "José", idade: 21 },
  { id: 4, nome: "Ana", idade: 19 },
];

// EXERCICIO 1

console.log("ENCONTRAR PELO ID");

console.log("EXEMPLO SEM ARROW FUNCTION");
// Exemplo sem arrow function
function encontrarEstudantePorId(id) {
  return estudantes.find((estudante) => estudante.id === id); // usa o método find para encontrar o estudante pelo id
}
const resultadoEstudante = encontrarEstudantePorId(2); // chama a função passando o id do estudante
console.log(resultadoEstudante); // imprime o estudante encontrado, se existir, ou undefined se não existir
// Explicação do código acima:
//  Linha por linha:
// function encontrarEstudantePorId(id)
// → Declara uma função tradicional chamada encontrarEstudantePorId.
// → Recebe um parâmetro chamado id (o número do estudante que você quer procurar).

// { return ... }
// → O bloco da função: tudo dentro dessas chaves {} será executado quando a função for chamada.

// estudantes.find((estudante) => estudante.id === id)
// → Usa o método .find() para procurar um item no array estudantes.
// → Para cada item do array, o método .find() executa a função (estudante) => estudante.id === id.
// → estudante representa cada item (objeto) do array, por exemplo { id: 2, nome: "João" }.
// → Ele compara: estudante.id === id

// Se for verdadeiro, .find() retorna esse objeto.

// Se nenhum item casar com o id, ele retorna undefined.

// Exemplo com arrow function

console.log("EXEMPLO COM ARROW FUNCTION");

const findEstudante = (id = 1) => estudantes.find((estudante) => estudante.id === id); // usa o método find para encontrar o estudante pelo id
const resultadoEstudantes = findEstudante(3); // chama a função passando o id do estudante
console.log(resultadoEstudantes); // imprime o estudante encontrado, se existir, ou undefined se não existir

// Explicação do código acima:

// Linha por linha:
// const findEstudante = ...
// → Cria uma constante chamada findEstudante.
// → O valor dessa constante é uma função (arrow function).

// (id) => ...
// → Esta é a arrow function.
// → Ela recebe um parâmetro id (igual ao exemplo anterior).
// → Se não passar nada, o id padrão será 1.
// → A função retorna o resultado de estudantes.find(...).
// → O método .find() procura dentro do array estudantes.

// estudantes.find((estudante) => estudante.id === id)
// → Mesmo comportamento da função anterior:

// Usa .find() para buscar dentro do array estudantes.

// Para cada item, executa (estudante) => estudante.id === id.

// Retorna o primeiro objeto onde o id bate com o id passado como argumento.

// EXERCICIO 2

console.log("NOMES DOS ESTUDANTES");

const estudante = estudantes.map((estudante) => `nome do estudante é: ${estudante.nome}`);
// retorna um novo array com os nomes dos estudantes formatados

console.log(estudante);

// Exemplo de uso do método map com arrow function

console.log("EXEMPLO DE USO DO MÉTODO MAP COM ARROW FUNCTION");

const nomesEstudantes = () => estudantes.map((estudante) => `nome do estudante é: ${estudante.nome}`); // usa o método map para retornar os nomes dos estudantes
console.log(nomesEstudantes()); // chama a função e imprime o novo array com os nomes dos estudantes formatados

// .
// .
// .
// EXERCICIO 3
console.log("IDADE DOS ESTUDANTES");

const resultadoIdadeEstudante = estudantes.filter((estudante) => estudante.idade >= 21); // filtra os estudantes com base na idade

console.log(resultadoIdadeEstudante); // imprime os estudantes com idade maior ou igual a 20 anos

// Exemplo de uso do método filter com arrow function
console.log("EXEMPLO DE USO DO MÉTODO FILTER COM ARROW FUNCTION");

const resultadoIdadeEstudantes = (idade = 22) => estudantes.filter((estudante) => estudante.idade >= idade); // filtra os estudantes com base na idade
console.log(resultadoIdadeEstudantes(19)); // chama a função passando a idade e imprime os estudantes com idade maior ou igual a 20 anos

// explicação do código acima:
// Linha por linha:
// const resultadoIdadeEstudantes = (idade = 22) => ...
// → Cria uma constante chamada resultadoIdadeEstudantes.
// → O valor dessa constante é uma função (arrow function) que recebe um parâmetro idade, com valor padrão(default) 22.

// -------------------------------------------------------//

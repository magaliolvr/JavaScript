// MANIPULAÇÃO DE DOM

// SELECTORES E MANIPULAÇÃO DE DOM

console.log("GET ELEMENTS BY ID");
// getElementById é usado para selecionar um elemento HTML pelo seu id

const buttonIdTest = document.getElementById("buttonTest"); // seleciona o elemento com o id "buttonTest"
console.log(buttonIdTest); // imprime o elemento selecionado

console.log("GET ELEMENTS BY CLASS NAME");

const buttonClassTeste = document.getElementsByClassName("buttonTestClass"); // seleciona todos os elementos com a classe "buttonTeste"
console.log(buttonClassTeste); // imprime os elementos selecionados

console.log("GET ELEMENTS BY TAG NAME");
const buttonTagTeste = document.getElementsByTagName("button"); // seleciona todos os elementos do tipo "button"
console.log(buttonTagTeste); // imprime os elementos selecionados

console.log("QUERY SELECTOR all");
// querySelector é usado para selecionar o primeiro elemento que corresponde ao seletor CSS fornecido, usa a mesma sintaxe de seletores CSS. É útil para selecionar elementos com base em classes, ids ou outros atributos, inclusive condiçoes mais complexas.

const buttonQuerySelector = document.querySelectorAll(".buttonTestClass, #buttonTest"); // seleciona o primeiro elemento com a classe "buttonTeste"

console.log(buttonQuerySelector); // imprime o elemento selecionado
// -------------------------------------------------------//

// CRIAR ELEMENTOS E ADICIONAR AO DOM

// createElement é usado para criar um novo elemento HTML. Você pode usar esse método para criar elementos dinamicamente e, em seguida, adicioná-los ao DOM.

const paragrafo = document.createElement("p"); // cria um novo elemento <p>
const texto = document.createTextNode("Este é um parágrafo criado dinamicamente."); // cria um novo nó de texto
const atributoId = document.createAttribute("id"); // cria um novo atributo id
atributoId.value = "paragrafo"; // define o valor do atributo id

paragrafo.append(texto); // adiciona o nó de texto ao elemento <p> paragrafo

// document.body.append(paragrafo); // adiciona o elemento <p> ao corpo do documento

// CREATE ATRIBUTE/SET ATRIBUTE
// createAttribute é usado para criar um novo atributo HTML. Você pode usar esse método para adicionar atributos a elementos HTML dinamicamente.

const juca = document.getElementById("juca");
juca.setAttribute("class", "valor do atributo 2");

// EXERCICIO

const div = document.createElement("div"); // cria um novo atributo div
document.body.prepend(div); // adiciona o atributo div ao corpo do documento

const textoDiv = document.createTextNode("Este é um texto dentro de uma div."); // cria um novo nó de texto
div.append(textoDiv, "Muito dificil"); // adiciona o nó de texto ao atributo div
// adiciona uma string ao atributo div
div.append(juca, juca2); // adiciona o elemento juca e juca2 ao atributo div
div.setAttribute("style", "display: flex;width: fit-content;flex-direction: column;gap: 24px; border: 1px solid red; padding:16px; margin:16px;"); // define o estilo do atributo div
// -------------------------------------------------------//

// EVENTS e MANIPULAÇÃO DE CONTEÚDO
// vistos no ecra, body ou na dom

const container = document.createElement("div");
document.body.append(container);

container.classList.add("teste");
container.classList.remove("teste");
container.classList.toggle("javascript"); //toggle funciona como um switch, se a classe existir ela remove, se não existir ela adiciona.

// += serve para concatenar strings, mas não é recomendado para manipulação de conteúdo HTML, pois pode causar problemas de segurança (XSS - Cross-Site Scripting).

// $ serve para interpolação de strings, mas não é recomendado para manipulação de conteúdo HTML, pois pode causar problemas de segurança (XSS - Cross-Site Scripting).

const elemento = document.createElement("div");
elemento.innerHTML = "<b>Olá, Mundo!</b>";
elemento.innerHTML += "<p><i>Este é um parágrafo.</i></p>";
elemento.innerHTML = `${elemento.innerHTML}<p>Este é um parágrafo.</p>`; // Interpolação de strings, mas não é recomendado para manipulação de conteúdo HTML, pois pode causar problemas de segurança (XSS - Cross-Site Scripting).
elemento.setAttribute("style", "border:1px solid; padding: 16px; margin: 24px;");
document.body.append(elemento);

// EVENTOS DOS ELEMENTOS
// Os eventos são ações que ocorrem no navegador, como cliques, teclas pressionadas, etc. Você pode usar eventos para executar funções quando essas ações ocorrem.
// os eventos nos elementos HTML são usados para detectar e responder a ações do usuário, como cliques, teclas pressionadas, etc. Você pode usar eventos para executar funções quando essas ações ocorrem.

// CRIA A DIV PRÁTICA EVENTOS
const criarDiv = document.createElement("div"); // cria um novo elemento div
criarDiv.innerText = "PRÁTICA EVENTOS"; // define o texto do elemento div
criarDiv.setAttribute("style", "border:1px solid;  padding: 16px; margin: 24px; background-color: lightyellow;"); // define o estilo do elemento div
document.body.insertBefore(criarDiv, document.body.children[4]);

// CRIA O CONTEUDO DA DIV PRÁTICA EVENTOS
const botaoClick = document.createElement("button"); // cria um novo elemento button
botaoClick.setAttribute("style", "display:block;"); // define o id do elemento button
botaoClick.setAttribute("id", "buttonTestClick"); // define o id do elemento button
botaoClick.innerText = "Clique eventos dos elementos"; // define o texto do elemento button
criarDiv.append(botaoClick); // adiciona o elemento button ao elemento div

const eventButtonClick = document.getElementById("buttonTestClick"); // seleciona o elemento com o id "buttonTest"
eventButtonClick.onclick = () => {
  console.log("click"); // imprime uma mensagem no console quando o botão é clicado
};

// DIFERENÇA ENTRE EVENTOS DOS ELEMENTOS E EVENT LISTENERS

// Os eventos dos elementos são ações que ocorrem no navegador, como cliques, teclas pressionadas, etc. Você pode usar eventos para executar funções quando essas ações ocorrem.
// Os event listeners são usados para ouvir eventos do usuário, como cliques, teclas pressionadas, etc. Eles permitem que você execute uma função quando um evento específico ocorre em um elemento HTML.

// EVENT LISTENERS
// event listeners são usados para ouvir eventos do usuário, como cliques, teclas pressionadas, etc. Eles permitem que você execute uma função quando um evento específico ocorre em um elemento HTML.

// PRATICA EVENT LISTNERS
// CRIA O CONTEUDO DA DIV PRÁTICA EVENTOS
const botaoClick2 = document.createElement("button"); // cria um novo elemento button
botaoClick2.setAttribute("style", "display:block;"); // define o id do elemento button
botaoClick2.setAttribute("id", "buttonTestClick2"); // define o id do elemento button
botaoClick2.innerText = "Clique aqui"; // define o texto do elemento button
criarDiv.append(botaoClick2); // adiciona o elemento button ao elemento div

const eventButtonClick2 = document.getElementById("buttonTestClick2"); // seleciona o elemento com o id "buttonTest"

const onClickButton2 = () => console.log("click click");

eventButtonClick2.addEventListener("click", onClickButton2);

// melhor pratica é usar addEventListener para adicionar eventos aos elementos HTML, pois permite que você adicione vários eventos ao mesmo elemento e remova eventos facilmente.
// remover event listeners é importante na navegação de paginas, pois evita que eventos antigos sejam acionados quando o usuário navega para uma nova página. Isto faz com que o código seja mais eficiente e evite problemas de desempenho.
setTimeout(() => eventButtonClick2.removeEventListener("click", onClickButton2), 5000); // remove o event listener do botão após 5 segundos

// ---------------------------
// PSEUDO EVENTS

console.log("PSEUDO EVENTS");

setTimeout(() => {
  console.log("Set timeout dispara apenas uma vez, após o tempo em milisegundos que é definido");
}, 3000);

const eventInterval = setInterval(() => {
  console.log("Set interval, dispara a cada X mls");
}, 2000);

const botaoStop = document.createElement("button");
botaoStop.setAttribute("id", "botaoStop");
botaoStop.innerText = "STOP EVENT pseudo event"; //cria o botao STOP EVENT
criarDiv.append(botaoStop);

// evento para parar o event interval

const clickStop = document.getElementById("botaoStop");
botaoStop.addEventListener("click", () => clearInterval(eventInterval));

// EXERCICIO PSEUDO ELEMENTO

// CRIA A DIV EXRCICIO PSEUDO EVENTOS
const criarDiv2 = document.createElement("div"); // cria um novo elemento div
criarDiv2.innerText = "EXERCICIO PSEUDO EVENTOS"; // define o texto do elemento div
criarDiv2.setAttribute("style", "border:1px solid;  padding: 16px; margin: 24px; background-color: orange;"); // define o estilo do elemento div
document.body.insertBefore(criarDiv2, document.body.children[5]);

const createButton = document.createElement("button");
createButton.innerText = "Botao 1";
criarDiv2.append(createButton); //cria o botao 1 e adiciona a div
const createButton2 = document.createElement("button");
createButton2.innerText = "Botao 2";
criarDiv2.append(createButton2); //cria o botao 2 e adiciona a div

// funcoes para serem usadas no event listner
const eventListenerOver = () => console.log("MOUSEOVER eventlistener");
const eventListenerOut = () => console.log("MOUSEOut eventlistener");

// SOLUÇÂO ALTERNATIVA; seleciona os botoes pela tag. OBS: so funciona com elementos diretamente no html, nao funciona com elementos adicionados por JS

// const buttons = document.getElementsByTagName("button");
// buttons[0].addEventListener("mouseover", () => console.log("MOUSEOVER eventlistener"));
// buttons[1].addEventListener("mouseover", () => console.log("MOUSEOVER eventlistener"));

// buttons[0].addEventListener("mouseout", () => console.log("MOUSEOut eventlistener"));
// buttons[1].addEventListener("mouseout", () => console.log("MOUSEOut eventlistener"));

// setTimeout(() => {
//   buttons[0].setAttribute("id", "btn3");
// }, 4000);

// MINHA SOLUÇÂO adiciona o event
createButton.addEventListener("mouseover", eventListenerOver);
createButton.addEventListener("mouseout", eventListenerOut);

createButton2.addEventListener("mouseover", eventListenerOver);
createButton2.addEventListener("mouseout", eventListenerOut);

setTimeout(() => {
  createButton.setAttribute("style", "background:blue; color: white;");
}, 4000);

// ---------------------------------------------------------------

const clickElemento = (event) => {
  console.log(event);
  if (event.type === "click") {
    console.log("clicado!");
  } else {
    console.log("não foi clicado!");
  }
};

elemento.addEventListener("click", clickElemento);
elemento.addEventListener("mouseover", clickElemento);
elemento.addEventListener("mouseout", clickElemento);
elemento.addEventListener("focus", clickElemento);

// esta parte do código adiciona um evento de clique ao elemento criado, e quando o elemento é clicado, ele executa a função clickElemento, que verifica o tipo de evento e imprime uma mensagem no console.

// EXERCICIO

// Cria uma função chamada captureEvent que reage ao tipo de evento
const captureEvent1 = (event) => {
  if (event.type === "click") {
    event.target.classList.toggle("clicked");
  } else if (event.type === "mouseover") {
    event.target.classList.toggle("hover");
  }
};

// EXERCICIO 2

// Cria uma função chamada captureEvent que faça console.log do objecto evento.
const captureEvent = (event) => {
  if (event.type === "click") {
    event.target.classList.toggle("clicked");
  } else if (event.type === "mouseover") {
    event.target.classList.toggle("hover");
  }
};

// Cria 2 botões e, com o addEventListener, adicionas 2 eventos diferentes que chamem a função acima criada.
const button01 = document.createElement("button");
const button02 = document.createElement("button");
button01.innerText = "botao 01";
button02.innerText = "botao 02";
document.body.append(button01, button02);

button01.addEventListener("click", captureEvent);
button01.addEventListener("mouseover", captureEvent);
button02.addEventListener("click", captureEvent);
button02.addEventListener("mouseover", captureEvent);

// Na função acima, adiciona os seguintes cenários:
// Se o type do evento for click, altera para a class clicked;
// Se o type do evento for mouseover, altera para a class hover.

// PROMISE

// Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado. Elas permitem que você escreva código assíncrono de forma mais legível e fácil de entender, evitando o chamado "callback hell".

const promise = new Promise((sucesso, falha) => {
  //new promese é uma função que recebe duas funções como parâmetros: sucesso e falha. Essas funções são chamadas quando a promessa é resolvida ou rejeitada, respectivamente.

  const total = 3;

  setTimeout(() => {
    if (total > 5) {
      // sucesso fullfild
      sucesso("Aprovado");
    } else {
      falha("Reprovado"); // falha rejected
    }
  }, 5000);
});

promise.then((resultado) => console.log("sucesso", resultado)).catch((erro) => console.log("falha", erro)); // A função catch é usada para lidar com erros que ocorrem durante a execução da promessa. Se a promessa for rejeitada, a função de erro será chamada com o motivo da rejeição.

// then é um método que recebe duas funções como parâmetros: uma para o caso de sucesso e outra para o caso de falha. Essas funções são chamadas quando a promessa é resolvida ou rejeitada, respectivamente.

// EXERCICIO PROMISE ASYNC

const resolver = true;
const promise2 = new Promise((resolve, reject) => {
  if (resolver) {
    resolve("tudo bem");
  } else {
    reject("tudo mal");
  }
});

async function teste() {
  const resultado = await promise2;
  console.log(resultado);
}

// ligação a API

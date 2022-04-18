// PASSO 2: Envolva todo o conteúdo de SpeakHello.js dentro de um IIFE
// Veja Aula 52, parte 2


// PASSO 3: Crie um objeto, chamado 'helloSpeaker' ao qual você irá anexar
// o método "speak" e que você irá expor ao contexto global
// Veja Aula 52, parte 1
//var helloSpeaker = 

// NÃO anexe a variável speakWord ao objeto 'helloSpeaker'.
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

// PASSO 4: Reescreva a função 'speak' de forma que seja anexada ao
// objeto helloSpeaker em vez de ser uma função independente.
// Veja Aula 52, parte 2
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);

// PASSO 5: Expor o objeto 'helloSpeaker' ao escopo global. Diga
// 'helloSpeaker' no escopo global também.
// Veja Aula 52, parte 2
// (Observe que a Etapa 6 será feita no arquivo SpeakGoodBye.js.)
// xxxx.xxxx = helloSpeaker;
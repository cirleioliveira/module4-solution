// NOTA! As etapas neste arquivo são basicamente idênticas às que você
// executado no arquivo SpeakHello.js.

// PASSO 6: Envolva todo o conteúdo de SpeakGoodBye.js dentro de um IIFE
// Veja Aula 52, parte 2


// PASSO 7: Crie um objeto, chamado 'byeSpeaker' ao qual você irá anexar
// o método "speak" e que você irá expor ao contexto global
// Veja Aula 52, parte 1
// var byeSpeaker =

// NÃO anexe a variável speakWord ao objeto 'byeSpeaker'.
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

// PASSO 8: Reescreva a função 'speak' de forma que seja anexada ao
// objeto byeSpeaker em vez de ser uma função independente.
// Veja Aula 52, parte 2
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);

// PASSO 9: Expor o objeto 'byeSpeaker' ao escopo global. Diga
// 'byeSpeaker' no escopo global também.
// xxxx.xxxx = byeSpeaker;
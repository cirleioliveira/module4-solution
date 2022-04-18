//********************************
// COMECE AQUI SE QUISER UM PONTO DE PARTIDA MAIS FÁCIL PARA ESTA ATRIBUIÇÃO
//********************************
//
// Instruções de atribuição do módulo 4.
//
// A ideia desta atribuição é pegar um array de nomes existente
// e, em seguida, envie Hello 'Name' ou Good Bye 'Name' para o console.
// O programa deve dizer "Olá" para qualquer nome, exceto nomes que começam com "J"
// ou "j", caso contrário, o programa deve dizer "Good Bye". Assim, a saída final
// no console deve ficar assim:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

AVISO!!! AVISO!!!
O código NÃO funciona atualmente! É SEU trabalho fazê-lo funcionar
conforme descrito nos requisitos e nas etapas para concluir este
tarefa.
AVISO!!! AVISO!!!

*/

// PASSO 1: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
// Envolva todo o conteúdo de script.js dentro de um IIFE
// Veja Aula 52, parte 2
// (Observação, a Etapa 2 será feita no arquivo SpeakHello.js.)
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// PASSO 10: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
// Faz um loop no array de nomes e diz 'Hello' ou "Good Bye"
// usando o método 'speak' de helloSpeaker ou byeSpeaker.
// Veja Aula 50, parte 1
for (var i = 0; i < names.length; i++) {


 // PASSO 11: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
  // Recupera a primeira letra do nome atual no loop.
  // Use a função 'charAt' do objeto string. Já que estamos procurando
  // nomes que começam com 'J'/'j' maiúsculo ou minúsculo, chama
  // método 'toLowerCase' do objeto string no resultado para que possamos comparar
  // para o caractere 'j' minúsculo depois.
  // Procure esses métodos no site da Mozilla Developer Network, se necessário.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // PASSO 12: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
  // Compara a 'firstLetter' recuperada no PASSO 11 com letras minúsculas
  // 'j'. Se for o mesmo, chame o método 'speak' do byeSpeaker com o nome atual
  // no laço. Caso contrário, chame o método 'speak' do helloSpeaker com o
  // nome no loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
};

})(window);

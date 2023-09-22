// Solicita ao usuário que insira um texto e armazena o texto inserido na variável textoDoUsuario
let textoDoUsuario = prompt("Insira um texto");

// Define uma função chamada outraFuncao que recebe um parâmetro texto
const outraFuncao = function(texto) {
  // Converte o texto para letras minúsculas e verifica se ele inclui a palavra "cenoura"
  return texto.toLowerCase().includes("cenoura");
}

// Chama a função outraFuncao com o texto inserido pelo usuário e armazena o resultado em resposta
const resposta = outraFuncao(textoDoUsuario);

// Imprime a resposta (true ou false) no console
console.log(resposta);

`Eu gosto de cenoura` //true
`CENOURA é bom pra vista` //true
`Cenouras crescem na terra` //true
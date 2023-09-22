// Função para somar dois números e imprimir o resultado no console:

function somarNumeros(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
  }
  
  const resultadoSoma = somarNumeros(5, 3);
  console.log("A soma é:", resultadoSoma);

// Função para verificar se o primeiro número é maior ou igual ao segundo:

function verificarMaiorOuIgual(numero1, numero2) {
    return numero1 >= numero2;
  }
  
  const resultadoComparacao = verificarMaiorOuIgual(7, 3);
  console.log("O primeiro número é maior ou igual ao segundo:", resultadoComparacao);

// Função para verificar se um número é par:

function verificarPar(numero) {
    return numero % 2 === 0;
  }
  
  const resultadoPar = verificarPar(6);
  console.log("O número é par:", resultadoPar);

// Função para imprimir o tamanho de uma mensagem e sua versão em letras maiúsculas:

function imprimirDetalhesDaMensagem(mensagem) {
    const tamanhoDaMensagem = mensagem.length;
    const mensagemEmMaiusculas = mensagem.toUpperCase();
    
    console.log("Tamanho da mensagem:", tamanhoDaMensagem);
    console.log("Mensagem em letras maiúsculas:", mensagemEmMaiusculas);
  }
  
  imprimirDetalhesDaMensagem("Olá, mundo!");
  
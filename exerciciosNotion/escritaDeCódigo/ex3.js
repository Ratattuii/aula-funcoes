    // Função para realizar a soma de dois números
    function soma(a, b) {
        return a + b;
  }
  
    // Função para realizar a subtração de dois números
    function subtracao(a, b) {
        return a - b;
  }
  
    // Função para realizar a multiplicação de dois números
    function multiplicacao(a, b) {
        return a * b;
  }
  
    // Função para realizar a divisão de dois números
    function divisao(a, b) {
        return a / b;
  }
  
    // Solicitar ao usuário que insira dois números
    const numero1 = parseFloat(prompt("Insira o primeiro número:"));
    const numero2 = parseFloat(prompt("Insira o segundo número:"));
  
    // Chamar as funções com os números inseridos pelo usuário
    const resultadoSoma = soma(numero1, numero2);
    const resultadoSubtracao = subtracao(numero1, numero2);
    const resultadoMultiplicacao = multiplicacao(numero1, numero2);
    const resultadoDivisao = divisao(numero1, numero2);
  
    // Exibir os resultados no console
    alert("Soma: " + resultadoSoma);
    alert("Subtração: " + resultadoSubtracao);
    alert("Multiplicação: " + resultadoMultiplicacao);
    alert("Divisão: "+ resultadoDivisao);
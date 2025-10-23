// Controles de áudio
const themeAudio = document.getElementById('theme-audio');
const playBtn = document.getElementById('play-audio');
const pauseBtn = document.getElementById('pause-audio');

playBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Elementos principais
const calculateBtn = document.getElementById('calculate-btn');
const returnBtn = document.getElementById('return-btn');
const numberInput = document.getElementById('number-input');
const resultContent = document.getElementById('result-content');

// Função para verificar se um número é primo
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função para encontrar todos os números primos em um array
function findPrimes(arr) {
  return arr.filter(num => isPrime(num));
}

// Função para encontrar números não primos
function findNonPrimes(arr) {
  return arr.filter(num => !isPrime(num));
}

// Função para encontrar a maior subsequência crescente
function findLongestIncreasingSubsequence(arr) {
  if (arr.length === 0) return [];

  let longestSequence = [];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSequence[currentSequence.length - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
      currentSequence = [arr[i]];
    }
  }

  if (currentSequence.length > longestSequence.length) {
    longestSequence = [...currentSequence];
  }

  return longestSequence;
}

// Função para exibir o resultado
function displayResult(numbers) {
  // Encontrar números primos
  const primes = findPrimes(numbers);

  // Calcular soma dos primos
  const sumOfPrimes = primes.reduce((acc, num) => acc + num, 0);

  // Verificar se a soma é prima
  const isSumPrime = isPrime(sumOfPrimes);

  // Encontrar não primos
  const nonPrimes = findNonPrimes(numbers);

  // Encontrar maior subsequência crescente de não primos
  const longestSequence = findLongestIncreasingSubsequence(nonPrimes);

  // Construir HTML do resultado
  let resultHTML = '';

  // Entrada original
  resultHTML += `
        <div class="result-item">
            <div class="result-title">📊 ENTRADA DE DADOS:</div>
            <div class="result-value">[${numbers.join(', ')}]</div>
        </div>
    `;

  // Números primos encontrados
  resultHTML += `
        <div class="result-item">
            <div class="result-title">🔢 NÚMEROS PRIMOS IDENTIFICADOS:</div>
            <div class="result-value">[${primes.length > 0 ? primes.join(', ') : 'Nenhum'}]</div>
            <div class="result-detail">Total: ${primes.length} número(s) primo(s)</div>
        </div>
    `;

  // Cálculo da soma
  if (primes.length > 0) {
    resultHTML += `
            <div class="result-item">
                <div class="result-title">➕ SOMA DOS PRIMOS:</div>
                <div class="result-value">${primes.join(' + ')} = ${sumOfPrimes}</div>
                <div class="result-detail">Cálculo: Adição de todos os números primos identificados</div>
            </div>
        `;

    // Verificação se a soma é prima
    resultHTML += `
            <div class="result-item">
                <div class="result-title">🔍 VERIFICAÇÃO DA SOMA (${sumOfPrimes}):</div>
                <div class="result-value">${
                  isSumPrime ? '✅ A soma É um número primo!' : '❌ A soma NÃO é um número primo'
                }</div>
                <div class="result-detail">
                    ${
                      isSumPrime
                        ? 'Coordenadas para a sala do tesouro DESBLOQUEADAS!'
                        : 'Acesso à sala do tesouro NEGADO. Continue procurando...'
                    }
                </div>
            </div>
        `;
  } else {
    resultHTML += `
            <div class="result-item">
                <div class="result-title">⚠️ AVISO:</div>
                <div class="result-value">Nenhum número primo encontrado na entrada</div>
            </div>
        `;
  }

  // Números não primos
  resultHTML += `
        <div class="result-item">
            <div class="result-title">🔓 NÚMEROS NÃO PRIMOS:</div>
            <div class="result-value">[${nonPrimes.length > 0 ? nonPrimes.join(', ') : 'Nenhum'}]</div>
            <div class="result-detail">Utilizados para cálculo do escudo extra</div>
        </div>
    `;

  // Maior subsequência crescente
  resultHTML += `
        <div class="result-item">
            <div class="result-title">📈 MAIOR SUBSEQUÊNCIA CRESCENTE (NÃO PRIMOS):</div>
            <div class="result-value">[${longestSequence.length > 0 ? longestSequence.join(', ') : 'Nenhuma'}]</div>
            <div class="result-detail">
                ${
                  longestSequence.length > 0
                    ? `Sequência de ${longestSequence.length} elemento(s) - Escudo extra ${
                        longestSequence.length >= 2 ? 'ATIVADO' : 'INSUFICIENTE'
                      }`
                    : 'Nenhuma sequência crescente encontrada'
                }
            </div>
        </div>
    `;

  // Resultado final
  const finalStatus =
    isSumPrime && longestSequence.length >= 2
      ? '🎯 ACESSO TOTAL CONCEDIDO! Tesouro e escudo desbloqueados!'
      : isSumPrime
      ? '⚠️ ACESSO PARCIAL - Tesouro desbloqueado, mas escudo insuficiente'
      : longestSequence.length >= 2
      ? '⚠️ ACESSO PARCIAL - Escudo ativado, mas tesouro bloqueado'
      : '🚫 ACESSO NEGADO - Continue tentando...';

  resultHTML += `
        <div class="final-result">
            <div class="final-result-text">${finalStatus}</div>
        </div>
    `;

  resultContent.innerHTML = resultHTML;
}

// Evento do botão CALCULAR
calculateBtn.addEventListener('click', () => {
  const input = numberInput.value.trim();

  if (!input) {
    resultContent.innerHTML =
      '<p class="error-message">⚠️ ERRO: Entrada de dados vazia. Por favor, insira números.</p>';
    return;
  }

  try {
    // Converter entrada em array de números
    const numbers = input.split(',').map(str => {
      const num = parseInt(str.trim());
      if (isNaN(num)) {
        throw new Error('Entrada inválida');
      }
      return num;
    });

    if (numbers.length === 0) {
      throw new Error('Nenhum número válido encontrado');
    }

    displayResult(numbers);
  } catch (error) {
    resultContent.innerHTML =
      '<p class="error-message">⚠️ ERRO: Formato de entrada inválido. Use números separados por vírgula (ex: 2, 3, 4, 5).</p>';
  }
});

// Evento do botão RETORNAR
returnBtn.addEventListener('click', () => {
  numberInput.value = '';
  resultContent.innerHTML = '<p class="waiting-message">Aguardando entrada de dados...</p>';
});

// Permitir pressionar Enter para calcular
numberInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});

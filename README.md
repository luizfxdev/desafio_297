# 🛡️ Fortaleza Digital de Algoritmópolis

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge)

> Uma interface futurista sci-fi para resolver desafios algorítmicos envolvendo números primos e subsequências crescentes.

## 📋 Sobre o Projeto

**Fortaleza Digital** é uma aplicação web interativa que combina design futurista com lógica de programação. O projeto apresenta um desafio que envolve:

- ✅ Identificação de números primos
- ✅ Cálculo de soma de primos
- ✅ Verificação de primalidade da soma
- ✅ Análise de subsequências crescentes
- ✅ Interface holográfica com animações

## 🎯 O Desafio

Você recebe uma sequência de números e precisa:

1. **Encontrar todos os números primos** na lista
2. **Calcular a soma** desses números primos
3. **Verificar se a soma é um número primo** (coordenadas do tesouro)
4. **Encontrar a maior subsequência crescente** de números não primos (ativação do escudo)

### Exemplo Prático

**Entrada:** `2, 3, 4, 5, 10, 11, 13, 17`

**Processamento:**
- Números Primos: [2, 3, 5, 11, 13, 17]
- Soma: 2 + 3 + 5 + 11 + 13 + 17 = 51
- 51 é primo? Não (51 = 3 × 17)
- Não Primos: [4, 10]
- Maior Subsequência Crescente: [4, 10]

**Status:** ⚠️ Acesso Parcial - Escudo ativado, mas tesouro bloqueado

**Entrada:** `7, 8, 9, 11, 12, 13, 15`

**Processamento:**
- Números Primos: [7, 8, 9, 11, 12, 13, 15]
- Soma: 7 + 11 + 13 = 31
- 31 é primo? Sim!
- Não Primos: [8, 9, 12, 15]
- Maior Subsequência Crescente: [8, 9, 12, 15]

**Status:** ✅ ACESSO TOTAL CONCEDIDO! Tesouro e escudo desbloqueados!


## 🚀 Aplicações em Projetos Reais

### 1. **Sistemas de Criptografia**
- Verificação de números primos é fundamental em algoritmos de criptografia (RSA, DSA)
- Validação de chaves públicas e privadas

### 2. **Análise de Séries Temporais**
- Identificação de subsequências crescentes em dados financeiros
- Detecção de tendências em análise de mercado

### 3. **Otimização de Algoritmos**
- Busca de padrões em grandes conjuntos de dados
- Otimização de consultas em bancos de dados

### 4. **Sistemas de Validação**
- Verificação de integridade de dados
- Sistemas de segurança baseados em propriedades matemáticas

### 5. **Machine Learning**
- Feature engineering em datasets numéricos
- Pré-processamento de dados para modelos preditivos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design futurista com animações
- **JavaScript (Vanilla)** - Lógica de negócio
- **Google Fonts** - Tipografia (Orbitron, Rajdhani)

## 🔧 Função Principal do Algoritmo

A função core que resolve o desafio de verificação de números primos:

```javascript
/**
 * Verifica se um número é primo
 * @param {number} num - Número a ser verificado
 * @returns {boolean} - True se for primo, False caso contrário
 */
function isPrime(num) {
    // Números menores que 2 não são primos
    if (num < 2) return false;
    
    // 2 é o único número primo par
    if (num === 2) return true;
    
    // Números pares não são primos
    if (num % 2 === 0) return false;
    
    // Verifica divisibilidade apenas até a raiz quadrada
    // Otimização: reduz complexidade de O(n) para O(√n)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}
```

### Por que esta implementação é eficiente?

1. **Otimização até √n**: Não precisa testar divisores maiores que a raiz quadrada
2. **Pula números pares**: Após verificar o 2, só testa números ímpares (i += 2)
3. **Complexidade**: O(√n) em vez de O(n)
4. **Casos base otimizados**: Retorna rapidamente para casos triviais

### Função Complementar - Subsequência Crescente

```javascript
/**
 * Encontra a maior subsequência crescente em um array
 * @param {number[]} arr - Array de números
 * @returns {number[]} - Maior subsequência crescente
 */
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
```

## 📦 Estrutura do Projeto

```
desafio_297/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos futuristas e animações
├── script.js           # Lógica de negócio e algoritmos
├── README.md           # Documentação do projeto
│
└── assets/
    ├── background.mp4  # Vídeo de fundo futurista
    └── theme.mp3       # Música tema sci-fi
```

## 🎮 Como Usar

1. **Clone o repositório:**
```bash
git clone https://github.com/luizfxdev/desafio_297.git
cd desafio_297
```

2. **Adicione os arquivos de mídia:**
   - Coloque seu vídeo `background.mp4` na pasta `assets/`
   - Coloque sua música `theme.mp3` na pasta `assets/`

3. **Abra o projeto:**
   - Simplesmente abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local (Live Server, http-server, etc.)

4. **Interaja com a interface:**
   - Digite números separados por vírgula no campo de entrada
   - Clique em "CALCULAR" para ver o resultado
   - Use "RETORNAR" para limpar e começar de novo

## 💡 Exemplos de Entrada

### Exemplo 1 - Acesso Total
```
Entrada: 7, 8, 9, 11, 12, 13, 15
Status: 🎯 ACESSO TOTAL CONCEDIDO!
```

### Exemplo 2 - Acesso Parcial
```
Entrada: 3, 6, 9, 12, 15, 18, 23
Status: ⚠️ ACESSO PARCIAL - Escudo ativado
```

### Exemplo 3 - Acesso Negado
```
Entrada: 2, 5, 7, 11, 13, 17, 19
Status: 🚫 ACESSO NEGADO
```

## 🎨 Features

- ✨ Design futurista sci-fi com efeitos holográficos
- 🎬 Background em vídeo fullscreen
- 🎵 Controles de áudio integrados
- 📱 Totalmente responsivo
- ⚡ Animações suaves e transições
- 🔍 Validação de entrada em tempo real
- 📊 Exibição detalhada dos cálculos

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Repositório: [desafio_297](https://github.com/luizfxdev/desafio_297)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

## 🌟 Mostre seu apoio

Se este projeto te ajudou, considere dar uma ⭐️!

---

<div align="center">
  <p>Desenvolvido com 💙 e JavaScript</p>
  <p><i>"A Fortaleza Digital não é construída apenas por tecnologia, mas por hábitos responsáveis".,</i></p>(*Dan Brown*)
</div>

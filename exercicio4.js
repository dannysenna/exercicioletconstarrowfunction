//Lista Exercícios Let, Const e Aroow Function

//Exercício 1
// Leitura das quantidades de morangos e maçãs compradas
const qMorangos = parseFloat(prompt("Digite a quantidade de morangos em kg:"));
const qMacas = parseFloat(prompt("Digite a quantidade de maçãs em kg:"));

// Cálculo do preço dos morangos
let pMorangos;
if (qMorangos <= 5) {
  pMorangos = qMorangos * 2.5;
} else {
  pMorangos = qMorangos * 2.2;
}

// Cálculo do preço das maçãs
let pMacas;
if (qMacas <= 5) {
  pMacas = qMacas * 1.8;
} else {
  pMacas = qMacas * 1.5;
}

// Cálculo do valor total da compra
const Total = pMorangos + pMacas;

// Verifica se o cliente tem direito ao desconto
let Final;
if (qMorangos + qMacas > 8 || Total > 25) {
  Final = Total * 0.9; // Aplica o desconto de 10%
} else {
  Final = Total;
}

// Exibição do valor a ser pago pelo cliente
console.log(`O valor a ser pago pelo cliente é de R$${Final.toFixed(2)}, 
sendo que foram comprados ${qMorangos} kg de morangos e ${qMacas} kg de maçãs.`);


/*

const qMorangos = parseFloat(prompt("Digite a quantidade de morangos em kg:"));
const qMacas = parseFloat(prompt("Digite a quantidade de maçãs em kg:"));

let pMorangos;
if (qMorangos <= 5) {
  pMorangos = qMorangos * 2.5;
} else {
  pMorangos = qMorangos * 2.2;
}

let pMacas;
if (qMacas <= 5) {
  pMacas = qMacas * 1.8;
} else {
  pMacas = qMacas * 1.5;
}

const Total = pMorangos + pMacas;

let Final;
if (qMorangos + qMacas > 8 || Total > 25) {
  Final = Total * 0.9; // Aplica o desconto de 10%
} else {
  Final = Total;
}

console.log(`O valor a ser pago pelo cliente é de R$${Final.toFixed(2)}, 
sendo que foram comprados ${qMorangos} kg de morangos e ${qMacas} kg de maçãs.`); 
*/


//Exercício 2

let v1, v2, r;

do {
  v1 = parseFloat(prompt("Digite o primeiro valor: "));
  v2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero): "));

  if (v2 === 0) {
    console.log("O segundo valor não pode ser zero. Digite um valor diferente de zero!");
  }

} while (v2 === 0);

r = v1 / v2;

console.log(`O resultado da divisão de ${v1} por ${v2} é ${r}.`);


//Exercício 3

let valores = [];

for (let i = 1; i <= 10; i++) {
    const valor = parseInt(prompt(`Digite o valor  ${i}: `));

    valores.push(valor);
}

let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] >= 10 && valores[i] <= 20) {
      dentroIntervalo++;
    } else {
      foraIntervalo++;
    }
}

console.log(`Valores digitados foram: ${valores}`);
console.log(`Valores dentro do intervalo: ${dentroIntervalo}`);
console.log(`Valores fora do intervalo: ${foraIntervalo}`);



//Exercício 4

let salario;
let Filhos;
let tSalario = 0;
let tFilhos = 0;
let maiorSalario = 0;
let SalarioAbaixo1000 = 0;
let Habitantes = 0;

do {
    salario = parseFloat(prompt("Digite o salário do habitante: "));
  
    if (salario >= 0) {
        nFilhos = parseInt(prompt("Digite o número de filhos do habitante: "));

        tSalario += salario;
        tFilhos += nFilhos;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    if (salario < 1000) {
        SalarioAbaixo1000++;
    }

    Habitantes++;
    }
} while (salario >= 0);

const mSalario = tSalario / Habitantes;
const mFilhos = tFilhos / Habitantes;
const pSalarioAbaixo1000 = (SalarioAbaixo1000 / Habitantes) * 100;

console.log(`Média de salário da população é de: R$${mSalario.toFixed(2)}`);
console.log(`Média do número de filhos é de: ${mFilhos.toFixed(2)}`);
console.log(`Maior salário dos habitantes é: R$${maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário abaixo de R$1000,00 é de: ${pSalarioAbaixo1000.toFixed(2)}%`);



//Exercício 5

let vetorA = [];

for(let i=0;i<10;i++)
{
    num= parseInt(prompt("Digite um valor para o vetor A"));
    vetorA.push(num);
}

let x = parseInt(prompt("Digite um número para x"));

let m = [];

for(let i=0;i<vetorA.length;i++)
{
    let resultado = vetorA[i]*x;
    m.push(resultado);
}
 console.log(`O vetor A é: ${vetorA} e o vetor M é:${m} .`);



//Exercício 6

const v1 = parseFloat(prompt("Digite o primeiro valor:"));
const v2 = parseFloat(prompt("Digite o segundo valor:"));
const v3 = parseFloat(prompt("Digite o terceiro valor:"));
const valores = [v1,v2,v3];

const encontrarMaior = (a, b, c) => {
    let maior = a; 
  
    if (b > maior) {
      maior = b;
    }else
    {
      maior = c;
    }
  
    return maior;
};
  
const encontrarMenor = (a, b, c) => {
    let menor = a;
  
    if (b < menor) {
      menor = b;
    }else
    {
      menor = c;
    }
  
    return menor;
};
  
const maiorValor = encontrarMaior(...valores);
const menorValor = encontrarMenor(...valores);
  
console.log(`Os valores digitados são: ${valores}, sendo que o maior valor é: ${maiorValor} e o menor valor é: ${menorValor}`);



//Exercício 7
  
// Solicita um número ao usuário
const numero = parseInt(prompt("Digite um número:"));
const valor = numero;

function verificarPrimo(numero) {
    // Verifica se o número é menor que 2, que não é primo
    if (numero < 2) {
      return false;
    }
    // Percorre os números de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Se o número for divisível por algum número no intervalo, não é primo
      if (numero % i === 0) {
        return false;
      }
    }
    // Se o número não foi divisível por nenhum número no intervalo, é primo
    return true;
}

function exibirNumerosPrimos(valor) {
    for (let numero = 2; numero <= valor; numero++) {
      if (verificarPrimo(numero)) {
        console.log(numero);
      }
    }
}

  // Chama a função verificarPrimo e exibe o resultado
if (verificarPrimo(numero)) {
    console.log(`O número: ${numero} é primo.`);
} else {
    console.log(`O número: ${numero} não é primo.`);
}
  
console.log(`Estes são os números primos existentes entre 1 e ${numero}: `);
exibirNumerosPrimos(valor);



//Exercício 8

const n = parseInt(prompt("Digite um número inteiro positivo:"));


const padrao = (n) => {
  if(n<=0){
    console.log('Digite um valor que seja maior que zero!');
    return;
  }

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    console.log(line);
  }
};

console.log(`Esse é o padrão solicitado de acordo com o valor ${n} que foi informado:`);
padrao(n);



//Exercício 9

const numUsuario = parseInt(prompt("Digite um número inteiro:"));

const contarDigitos = (numero) => {
    let numeroString = numero.toString();
    return numeroString.length;
}

const Digitos = contarDigitos(numUsuario);
console.log(`O número digitado possui ${Digitos} dígitos.`);




//Exercício 10

const valor = [];

for(let i=0;i<3;i++){
    const num = parseInt(prompt(`Digite um valor ${(i + 1) } :`));
    valor.push(num);
}

const maior = (valor) => {
    let maiorValor = [0]; 
    for (let i = 1; i < valor.length; i++) {
        if (valor[i] > maiorValor) {
            maiorValor = valor[i]; 
        }
    }
    return maiorValor;
};

const menor = (valor) => {
    let menorValor = Infinity; 
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] < menorValor) {
            menorValor = valor[i]; 
        }
    }
    return menorValor;
};

const maiorValor = maior(valor);
const menorValor = menor(valor);
console.log(`O maior valor é: ${maiorValor} e o menor valor é: ${menorValor}`);



//Exercício 11
//palíndromo é quando a frase de tras pra frente é igual a frase normal

const texto = prompt('Digite uma frase ou palavra:');
const Palindromo = (texto) => {
    const textoFormatado = texto.toLowerCase().replace(/\s/g, '');
    const textoInvertido = textoFormatado.split('').reverse().join('');
  
    if (textoFormatado === textoInvertido) {
      return 'é um palíndromo.';
    } else {
      return 'não é um palíndromo.';
    }
  };

const resultado = Palindromo(texto);
console.log(`A palavra: ${texto} ${resultado}`);



//Exercício 12

const numero = parseInt(prompt("Digite um número:"));
const valor = numero;

const verificarPrimo = (numero) => {
    // Verifica se o número é menor que 2, que não é primo
    if (numero < 2) {
      return false;
    }
    // Percorre os números de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Se o número for divisível por algum número no intervalo, não é primo
      if (numero % i === 0) {
        return false;
      }
    }
    // Se o número não foi divisível por nenhum número no intervalo, é primo
    return true;
}
if (verificarPrimo(numero)) {
    console.log(`O número: ${numero} é um número primo.`);
} else {
    console.log(`O número: ${numero} não é um número primo.`);
}  



//Exercício 13

const numero = parseFloat(prompt('Digite um valor:'));

const inverso = (numero) => {
    const numFormatado = numero.toString();
    const Invertido = numFormatado.split('').reverse().join('');

    return Invertido;
};

const resultado = inverso(numero);
console.log(`O inverso do número ${numero} é: ${resultado}`);



//Exercício 14

const n = parseFloat(prompt("Digite a quantidade de números que deseja somar: "));
const valor = [];

for(let i=0;i<n;i++){
    const num = parseInt(prompt(`Digite um valor para a posição ${(i + 1) } :`));
    valor.push(num);
}

const somar = (valor) => {
    let S =0;
    for(let i=0;i<valor.length;i++){
        S += valor[i];
    }
    return S;
}

const soma = somar(valor);
console.log(`A soma dos valores ${valor} é: ${soma}.`);


//Exercício 15

const frase = (prompt("Digite uma frase que goste: "));
const letra = prompt(`Digite uma letra para contarmos:`);

const contadorLetra = (letra) =>{
  let contador = 0;
  for (let i=0;i<frase.length;i++){
    if(frase[i] === letra) {
      contador++;
    }
  }
  return contador;
}

const quantidadeLetra = contadorLetra(letra);
console.log(`Esta foi a frase que você escreveu: ${frase}, 
e a letra "${letra}" que você escolheu, aparece nela ${quantidadeLetra} vezes.`);


//Exercício 16

const largura = parseInt(prompt("Digite a largura para o retângulo:"));
const altura = parseInt(prompt("Digite a altura para o retângulo:"));
const caractere = prompt("Digite o caractere que deseja ser mostrado para preencher o retângulo:");

const formarRetangulo = (largura,altura,caractere) => {
  let retangulo = '';
  for( let i=0;i<altura;i++){
    let linha = '';
    for(let j=0;j<largura;j++){
      linha += caractere;
    }
    retangulo += linha + '\n';
  }
  return retangulo;
}

const retangulo = formarRetangulo(largura, altura, caractere);
console.log(`Segue o retângulo conforme o desejado: com ${altura} de altura, ${largura} de largura e preenchido com o caractere "${caractere}" como desejado.`);
console.log(retangulo);



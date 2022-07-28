// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  // verificar se o array tem 11 numeros
  if (numeros.lenght != 11) {
    return 'Array com tamanho incorreto';
  }
  // verificar se os numeros são menor que 0 ou maior que 9
  for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0 || numeros[i] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

//verificar se um numero se repete 3 vezes ou mais
let maiorNumero = numeros[0];
let countMaiorNumero = 1;
for (let i = 1; i < numeros.length; i += 1) {
  let numeroAtual = numeros[i];
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual;
    countMaiorNumero = 1;
  } else if (numeroAtual === maiorNumero) {
    countMaiorNumero += 1;
  }
}
return countMaiorNumero;

  // retornar o valor no formato de telefone (12) 34567-8901
}
console.log(generatePhoneNumber([-4, 15, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

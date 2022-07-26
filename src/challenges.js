// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return (sentence.split(' '));
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    return (`${array[(array.length - 1) - index]}, ${array[0]}`);
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties * 1;
  let numberOfPoints = (vitorias + empates);

  return (numberOfPoints);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let contRepetido = 0;
  let contNumero = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    let verificaNumero = numeros[i];
    for (let j = 1; j < numeros.length; j += 1) {
      if (verificaNumero === numeros[j]) {
        contNumero += 1;
      }
    }
  }
  if (contNumero > contRepetido) {
    contRepetido = contNumero;
  }
  contNumero = 0;
  return numeros[contRepetido];
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

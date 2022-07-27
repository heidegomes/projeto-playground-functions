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
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return ('cat1');
  } if ((cat1 - mouse) > (cat2 - mouse)) {
    return ('cat2');
  } if (cat1 === cat2) {
    return ('Os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let arrRet = [];
  for (let index = 0; index < numeros.length; index++) {
    let valor = numeros[index]
    if (valor % 3 == 0 && valor % 5 == 0) {
      arrRet.push ('fizzBuzz');
    } else if (valor % 5 == 0) {
      arrRet.push ('buzz');
    } else if (valor % 3 == 0) {
      arrRet.push ('fizz');
    } else {
      arrRet.push ('bug!');
    }
  }
  return arrRet;
}

// Desafio 9 *
function encode(frase) {
  // seu código aqui
  let arrayLetras = frase.split('');
  console.log(arrayLetras);

  return arrayLetras;
}
console.log(encode('hi there!'));

function decode() {
  // seu código aqui
}

// Desafio 10
function techList(lista, nome) {
  // seu código aqui
  let arrRet = [];

  if (lista.length === 0) {
    return 'Vazio!';
  }
  lista.sort();
  for (let index = 0; index < lista.length; index += 1) {
    let obj = {
      tech: lista[index],
      name: nome,
    };
    arrRet.push(obj);
  }

  return arrRet;
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

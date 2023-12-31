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
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  if ((positionCat1) < (positionCat2)) {
    return ('cat1');
  } if ((positionCat1) > (positionCat2)) {
    return ('cat2');
  } if (positionCat1 === positionCat2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let arrRet = [];
  for (let index = 0; index < numeros.length; index++) {
    let valor = numeros[index];
    if (valor % 3 == 0 && valor % 5 == 0) {
      arrRet.push('fizzBuzz');
    } else if (valor % 5 == 0) {
      arrRet.push('buzz');
    } else if (valor % 3 == 0) {
      arrRet.push('fizz');
    } else {
      arrRet.push('bug!');
    }
  }
  return arrRet;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let arrayLetras = frase.split('');
  for (let i = 0; i < arrayLetras.length; i += 1) {
    switch (arrayLetras[i]) {
    case 'a':
      arrayLetras[i] = 1;
      break;
    case 'e':
      arrayLetras[i] = 2;
      break;
    case 'i':
      arrayLetras[i] = 3;
      break;
    case 'o':
      arrayLetras[i] = 4;
      break;
    case 'u':
      arrayLetras[i] = 5;
      break;
    }
  }
  return arrayLetras.join('');
}

function decode(frase) {
  // seu código aqui
  let arrayLetras = frase.split('');
  for (let i = 0; i < arrayLetras.length; i += 1) {
    switch (arrayLetras[i]) {
    case '1':
      arrayLetras[i] = 'a';
      break;
    case '2':
      arrayLetras[i] = 'e';
      break;
    case '3':
      arrayLetras[i] = 'i';
      break;
    case '4':
      arrayLetras[i] = 'o';
      break;
    case '5':
      arrayLetras[i] = 'u';
      break;
    }
  }
  return arrayLetras.join('');
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

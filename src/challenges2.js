// // Desafio 11
// function generatePhoneNumber(numeros) {
//   // seu código aqui
//   // verificar se o array tem 11 numeros
//   if (numeros.lenght != 11) {
//     return 'Array com tamanho incorreto';
//   }
//   // verificar se os numeros são menor que 0 ou maior que 9
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] < 0 || numeros[i] > 9) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }

  //verificar se um numero se repete 3 vezes ou mais
  function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([-4, 15, 1, 7, 1, 9, 0, 1]));


  // retornar o valor no formato de telefone (12) 34567-8901
}
console.log(generatePhoneNumber([-4, 15, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  somaLados = Math.abs(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB);

  subtraiLados = Math.abs(lineA > lineB - lineC && lineB > lineA - lineC && lineC < lineA > lineB);

  eTriangulo = true;

  if (somaLados == true && subtraiLados == true){
    eTriangulo = true;
  } else {
    eTriangulo = false;
  }
console.log(triangleCheck(10, 14, 8))
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let resposta = ' ' + 'copos de água';

  if()
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

// filtrando elementos

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {  // filter => retonar apenas verdadeiros
  return medias[indice] < 7;
});

console.log(reprovados);

// somando com reduce

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);  //reduce => soma valores de uma array

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//clorando array

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];   //spread operator (...) => copia os valores de um array para uma nova lista sem alterar a lista original

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


// removendo elementos

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];  // set => elimina valores duplicados

console.log(nomesAtualizados);

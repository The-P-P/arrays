const alunosI = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia',
 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

alunosI.splice(1,2, 'Rodrigo'); // splice => retira ou add

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const alunoadd = salaJS.concat(salaPython) // concat => juntar arrays
const alunos = alunosI.concat(alunoadd)  

const sala1 = alunos.slice(0, 10) // slice => divide
const sala2 = alunos.slice(10)

const sala3 = alunos.slice(0, alunos.length/2);
const sala4 = alunos.slice(alunos.length/2);


console.log(alunos)
console.log(sala1)
console.log(sala2)
console.log(sala3)
console.log(sala4)


const alunosN = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunosN, medias];

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
    `
  );
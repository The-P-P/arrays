const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, media] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = media[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");

//for 
const numeros = [100, 200, 300, 400, 500, 600]

for(let indice = 0; indice < numeros.length; indice ++){
     console.log(numeros[indice])
}

//for media 

const notasx = [10, 6.5, 8, 7.5];
let somas = 0;
for (let i = 0; i < notasx.length; i ++){
    somas += notasx[i];

}
console.log(somas);

const mediax = somas / notasx.length;


console.log(mediax);


// for of
const notasy = [10, 6.5, 8, 7.5];
let somasy = 0;

for (let notas of notasy) {
    somasy += notas;
}

const mediay = somasy / notasy.length;

console.log(mediay)

//for each
const notasz = [10, 6.5, 8, 7.5];
let somasz = 0;
notasz.forEach((nota, indice) => {
    somasz += nota
    console.log(indice)
});

const mediaz = somasz / notasz.length;

console.log(mediaz)

//map

const notasc = [ 10, 9.5, 8, 7, 6]

const notasA = notasc.map((nota) => {
    return nota +1 >= 10 ? 10 : nota + 1;

})

console.log(notasA)

const nomes = ['pedro', 'luis', 'lucas']

const nomesp = nomes.map((nome) => {
    return nome.toUpperCase();

})

console.log(nomesp)
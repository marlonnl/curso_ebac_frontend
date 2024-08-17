// alunos
const alunos = [
    'Joao',
    'Pedro',
    'Maria',
    'Ana',
    'Paula',
    'Cintia',
    'Angela',
    'Carlos',
    'Pablo',
    'Ricardo'
];
// notas
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array de objetos com nome do aluno e respectiva nota
// [ { aluno: aluno, nota: nota }, {  }, ... ]
const notaDosAlunos = [];
alunos.forEach((aluno, index) => {
    notaDosAlunos.push({
        aluno: aluno,
        nota: notas[index]
    })
})

function verificarNota(aluno) {
    return aluno.nota >= 6;
}

// const alunosComNotaAcimaDeSeis = notaDosAlunos.filter((aluno) => aluno.nota >= 6);

const alunosComNotaAcimaDeSeis = notaDosAlunos.filter(verificarNota);
console.log(alunosComNotaAcimaDeSeis);
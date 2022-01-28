var alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '5b',
    },
    {
        nome: 'Pedro',
        nota: 8,
        turma: '3A',
    },
    {
        nome: 'janananaina',
        nota: 9,
        turma: '12z',
    },
];

function examData (arr, media){
    let theyPass = [];

    for (let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if (nota >= media){
            theyPass.push(nome);
        }       
    }

    return theyPass;
}

console.log(examData(alunos, 7));
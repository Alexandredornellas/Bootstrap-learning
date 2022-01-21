function insiraNumeros(){
    var num1 = parseInt(prompt('insira o primeiro número'));
    var num2 = parseInt(prompt('insira o 2º número'));

    var resultado = document.createElement('p');
    
    alert(criaFrase(num1, num2));
}

function criaFrase(num1, num2){
    const frase1 = criaFrase1(num1, num2);
    const frase2 = criaFrase2(num1, num2);

    return `${frase1} ${frase2}`;
}

function criaFrase1(num1, num2){
    let saoIguais = '';
    
    if(num1 !== num2){
        let saoIguais = 'não';
    }

    return `os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaFrase2 (num1, num2){
    let soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        resultado10 = 'maior';
    }

    if (compara20){
        resultado20 = 'maior';
    }

    return `sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
};

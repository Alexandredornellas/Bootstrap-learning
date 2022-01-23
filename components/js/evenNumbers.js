// Recebe um array
// verifica se os números do array são pares
// se for par, substitui insere no array "evenNumbers"
// se não, mantém o número.

function getNumber(){
    var inputWrapper = document.getElementById("evenInput");
    var numbers =  inputWrapper.value;

    isEvenNumber(numbers);
}


function isEvenNumber(numbers){
    if (!numbers.length) return "Insert some numbers please"
    let evenNumbers = [];

    for( let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
    }
    alert(`The numbers ${evenNumbers} are even`);
}

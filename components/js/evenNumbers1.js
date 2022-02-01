function getNumber(){
    var inputWrapper = document.getElementById("evenInput");
    var numbers =  inputWrapper.value;
    let separator = ',';

    isEvenNumber(numbers, separator);
}

function isEvenNumber(numbers, separator){
    if (!numbers.length) return "Coloque valores";

    let evenMap = new Map();
    let evenOdd = 'isEven';
    let evenNumbers = [];

    let arraying = numbers.split(separator);

    for (let i = 0; i < arraying.length; i++){
        if(arraying[i] % 2 == 0){
            evenMap.set(arraying[i], evenOdd);
        }
    }

    for([key, value] of evenMap){
        if(value === 'isEven'){
            evenNumbers.push(key);
        }
    }

    return console.log(`Os números selecionados foram: ${numbers} \nDesses, os números pares são ${evenNumbers}`);
}

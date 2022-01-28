function getNumber(){
    var inputWrapper = document.getElementById("evenInput");
    var numbers =  inputWrapper.value;
    let separator = ' ';

    isEvenNumber(numbers, separator);
}

function isEvenNumber(numbers, separator){
    if (!numbers.length) return "Coloque valores";

    let arraying = numbers.split(separator);

    for (let i = 0; i < arraying.length; i++){
        if(arraying[i] % 2 == 0){
            arraying[i] = 0;
        }
    }

    return console.log(arraying);

}

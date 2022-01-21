var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    compare(currentNumber, 10, 0);
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    compare(currentNumber, 10, 0);
}

document.getElementById("zero").addEventListener("click", function(){
    document.getElementById("currentNumber").innerHTML = "0";
    currentNumberWrapper.style.color= "black";
    currentNumber = 0;
})

function compare(currentNumber, maxTarget, minTarget){
    if(currentNumber === maxTarget){
        alert("10 days without bugs? Really? Liar, lol")
    } else if (currentNumber < minTarget){
        currentNumberWrapper.style.color = "red";
    }
    else if (currentNumber >= minTarget){
        currentNumberWrapper.style.color = "black";
    }
}

// Checklist JS --------------------------------------

var getInputWrapper = document.getElementById("writeCheck");
var inputValue = 0

function sendValue() {
    inputValue = getInputWrapper.value;
    adcElemento();
}

function adcElemento(){
    var lista = document.getElementById ("listaElementos");
    var li = document.createElement("li");
    lista.appendChild(li);

    //creating input
    var input = document.createElement("input");
    lista.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.classList.add('form-check-input');

    //creating label
    var label = document.createElement("label");
    lista.appendChild(label);
    label.textContent = inputValue;
    label.classList.add('form-check-label');
}


  
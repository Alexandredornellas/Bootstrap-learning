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
    currentNumber = 0;
})

function compare(currentNumber, maxTarget, minTarget){
    if(currentNumber === maxTarget){
        alert("Liar, lol.")
    } else if (currentNumber < minTarget){
        currentNumberWrapper.style.color = "red";
    }
    else if (currentNumber >= minTarget){
        currentNumberWrapper.style.color = "black";
    }
}


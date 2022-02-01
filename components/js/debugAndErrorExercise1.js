function validaArray(arr, num){
    try{ 
        if (!arr || !num) throw new ReferenceError("Favor enviar algum parâmetro");

        if (typeof arr !== 'object') throw TypeError("Favor enviar um array do tipo objeto");

        if (typeof num !== 'number') throw TypeError("Favor enviar um número do tipo número");

        if (arr.length !== num) throw RangeError ("Favor enviar um array com o mesmo tamanho do número");

        return arr;
    }

    catch(e){
        if (e instanceof ReferenceError){
            console.log("This is a Reference error");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("This is a Typeerror");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("This is a Range error");
            console.log(e.message);
        } else {
            console.log("Erro desconhecido")
            console.log(e);
        }
    }
}

// function rodaBagaca(arr, num){
//     try {
//         validaArray(arr, num);
//     }
// }

console.log(validaArray([2,3,4], 4));

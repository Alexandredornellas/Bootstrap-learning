function validateArray(array, num){
    try{
        if (!array && !num) throw new ReferenceError ("Send the parameters");
    
        if (typeof array !== 'object') throw new TypeError ("The array must be type Object");

        if (typeof num !== 'number') throw new TypeError ("You should send numbers only");

        if (array.length !== num) throw new RangeError ("Invalid size");

        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('This is a referenceError!');
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log('This is a TypeError!');
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log('This is a RangeError!');
            console.log(e.message);
        } else {
            console.log ('Error type not expected' + e);
        }
    }
}

console.log(validateArray({1: 2}));


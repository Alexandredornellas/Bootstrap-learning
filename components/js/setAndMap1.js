function getAdmins(map){
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}


const users = new Map();

users.set('João', 'User');
users.set('Pedro', 'Admin');
users.set('Alexandre', 'Admin');
users.set('Thiago', 'User');

console.log(getAdmins(users));


// Set

//[30, 30, 40, 5, 223, 2049, 3034, 5]

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(arr){
    let meuSet = new Set(arr);

    return meuSet;
}

console.log(uniqueValues(arr));
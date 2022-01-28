//Map exercise

function getAdmins(map){
    let admins = [];

    for ([key, value] of map){
        if (value === 'admin'){
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('alexandre', 'admin');
usuarios.set('Pedro', 'admin');
usuarios.set('Joao', 'user');
usuarios.set('renata', 'user');
usuarios.set('Denis', 'admin');

console.log(getAdmins(usuarios));

// Sets exercise
// Return other array with unique values [30, 30, 40, 50, 60, 60, 9]

const myArray = [30, 30, 40, 50, 60, 60, 9];

function uniqueValues(array){
    const mySet = new Set(array);

    return [...mySet];
}

console.log(uniqueValues(myArray));
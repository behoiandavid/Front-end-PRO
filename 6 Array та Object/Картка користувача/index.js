'use strict'

let information = {
    name: 'Nazar',
    age: 18,
    city: 'Niva'
}

function getInfromation(obj) {
    return Object.values(obj)
}

console.log(getInfromation(information))
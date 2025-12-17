'use strict'

let arrayWith = [1, 'string', true, 122312n, ['Array'], {}, undefined, Symbol, null] // an Array and nul are the same as an object

function getTypeOfFromArray(array) {
    return array.map(arr => typeof (arr))
}

console.log(getTypeOfFromArray(arrayWith))

'use strict'

let numbers = [1, 2, 3, 4, 5, 23, 2, 3, 4, 3, 34, 2, 3, 4, 5, 6, 4, 4]

let result = numbers.filter((item, index, arr) => {
    return arr.indexOf(item) !== arr.lastIndexOf(item) && index === arr.indexOf(item)
})

console.log(result)
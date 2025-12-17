'use strict'

let numebr = 10369

function getSplitNum(num) {
    num = String(num)
    return num.split('')
}

console.log(getSplitNum(numebr))
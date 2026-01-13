'use strict'

let writeNumber = prompt('Напишить будь ласка число')

for (let i = 1; i <= 100; i++) {
    i = i ** 2
    console.log(i)
    if (i < writeNumber) {
        alert(i)
    }

}
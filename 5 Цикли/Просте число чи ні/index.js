'use strict'

let number = +prompt("Напишить будь ласка число")

function numberJust(num) {

    if (num <= 1) {
        return 'Число не є простим'
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'Число не є простим'
        }
    }

    return 'Число є простим'
}

alert(numberJust(number))
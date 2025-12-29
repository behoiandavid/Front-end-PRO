// 'use strict'
function getNmeberfromUser() {
    let getNumberFromGuest = prompt('Напишите число будь ласкадля перевірки, трех значене')


    if (getNumberFromGuest === null || getNumberFromGuest.length !== 3 || isNaN(getNumberFromGuest)) {
        alert('Будь ласка напишите правильне значення')
    } else {
        let a = getNumberFromGuest[0]
        let b = getNumberFromGuest[1]
        let c = getNumberFromGuest[2]

        let result = ''

        if (a === b && b === c) {
            result += 'Всі цифри однакові'
        } else {
            result += "Всі цифри не єє однакові"
        }


        if (a === b || b === c || c === a) {
            result += 'Є повторюющи цифри'
        } else {
            result += 'Усі літери не є повторні'
        }

        alert(result)
    }

}

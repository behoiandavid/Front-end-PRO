'use strict'

function getFullInformationAboutPerson() {
    let askAboutAge = prompt('Рік вашого народження?')
    let askABoutHimCity = prompt('Місто де ви живите?')
    let askAboutSport = prompt('Любимий вид спорту?')

    let result = '';

    if (askAboutAge === null || askAboutAge === '') {
        result += "Шкода, що Ви не захотіли ввести свій(ю) дату народження \n"
    } else {
        let date = new Date().getFullYear()
        let age = date - askAboutAge
        result += `Вам ${age} \n`
    }



    if (askABoutHimCity === null || askABoutHimCity === '') {
        result += "Шкода, що Ви не захотіли ввести свій(ю) місто \n"
    } else {
        let country = {
            'Київ': 'Україна',
            'Вашингто': 'США',
            'Лондон': 'Великобританія',
        }

        if (country[askABoutHimCity]) {
            result += `Ти живеш у столиці ${country[askABoutHimCity]} \n`
        } else {
            result += `ти живеш у місті ${askABoutHimCity} \n`
        }
    }


    if (askAboutSport === null || askAboutSport === '') {
        result += "Шкода, що Ви не захотіли ввести свій(ю) вид спорту \n"
    } else {
        let sport = {
            'Футбол': "Месcі",
            "Гонки": "Льюїс Гамільтон",
            "Бокс": "Сонні Лістон",
        }
        if (sport[askABoutHimCity]) {
            result += `Круто! Хочеш стати ${sport[askAboutSport]} \n`
        } else {
            result += `Круто твій вид спорту ${askAboutSport}`
        }
    }

    alert(result)
}
getFullInformationAboutPerson()
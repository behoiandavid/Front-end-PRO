'use strict'


// Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
//  Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я,
//  номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


let mainObj = {
    contacts: [
        { name: 'Nazar', number: 50141604, email: 'nazar@gmail.dk' },
        { name: 'Karina', number: 50142323, email: 'karina@gmail.dk' },
    ],


    addContact(name, number, email) {
        this.contacts.push({ name, number, email })
    },

    findContact(name) {
        return this.contacts.find(contacts => contacts.name === name)
    },

}

mainObj.addContact('Nazar', 45323707, 'nazaryr@gmail.dk')
console.log(mainObj.findContact('Karina'))
console.log(mainObj)
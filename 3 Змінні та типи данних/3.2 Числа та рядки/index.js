'use strict'

function askQuestionsfromGuests(question) {
    while (true) {
        let answer = prompt(question)
        if (answer === null || answer === "") {
            alert('Something wrongs')
        } else {
            return answer
        }
    }
}

function getInformFromGuests() {
    const firstQuestion = askQuestionsfromGuests('Write the first answer')
    const secondQuestion = askQuestionsfromGuests('Write the second answer')
    const thirdQuestion = askQuestionsfromGuests('Write the third answer')

    alert(`Your fisrt answer: ${firstQuestion} \n` +
        `Your second answer ${secondQuestion} \n` +
        `Your third answer ${thirdQuestion}`
    );
};

getInformFromGuests()


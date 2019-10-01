const myButton = document.getElementById('action');

function isYesOrNo(userAnswer) {
    const lowerCaseAnswer = userAnswer.toLowerCase()
    if (lowerCaseAnswer.includes('y',) === true) {
        return true;
    } else if (lowerCaseAnswer.includes('n') === true) {
        return false;
    }
}

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?')

    if (myConfirmation === true) {

        const userAnswer = prompt('Questions 1');

        const sanitizedUserAnswer = isYesOrNo(userAnswer)

    }
}
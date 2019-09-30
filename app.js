const myButton = document.getElementById('action');

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?')

    if (myConfirmation === true) {

        const userAnswer = prompt('do i like to read? (yes/no)');

        console.log(userAnswer);

        const sanitizedUserAnswer = userAnswer.toLocaleLowerCase().trim();

        if (sanitizedUserAnswer === 'yes') {
            alert('You are correct!')
        } else {
            alert('do you even know me?')
        }
    }
}
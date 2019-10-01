const myButton = document.getElementById('action');

let score = 0

function isYesOrNo(userAnswer) {
    const lowerCaseAnswer = userAnswer.toLowerCase()
    if (lowerCaseAnswer.startsWith('y') === true) {
        return true;
    } else if (lowerCaseAnswer.startsWith('n', 0) === true) {
        return false;
    }
}

function isCorrect(userAnswer, actualAnswer, answerBox) {
    if (isYesOrNo(userAnswer) === actualAnswer) {
        score += 1;
        answerBox.style.color = '#00b512';
        answerBox.style.border = 'solid 2px #00b512';
    } else {
        answerBox.style.color = '#d60000';
        answerBox.style.border = 'solid 2px #d60000';
    }
}

myButton.onclick = () => {
    const myConfirmation = confirm('Do you want to take my quiz?');

    if (myConfirmation === true) {

        const userName = prompt('What is your name?');

        const answer1 = prompt(`Hey ${userName}, Do I like boooooooks?`);
        const answer1Box = document.getElementById('answer1');
        answer1Box.textContent = answer1;
        isCorrect(answer1, true, answer1Box);

        const answer2 = prompt('Have only read 48 books this year.');
        const answer2Box = document.getElementById('answer2');
        answer2Box.textContent = answer2;
        isCorrect(answer2, false, answer2Box);

        const answer3 = prompt(`Last one, ${userName}. Was a touring actor?`);
        const answer3Box = document.getElementById('answer3');
        answer3Box.textContent = answer3;
        isCorrect(answer3, true, answer3Box);

        alert(`Thanks ${userName}. Scroll down for results.`)

        //Display Score
        const nameBox = document.getElementById('userName');
        nameBox.textContent = userName;

        const scoreBox = document.getElementById('score');
        scoreBox.textContent = score;

        const percentage = ((score/3)*100).toFixed(0)
        const percentBox = document.getElementById('percentage');
        percentBox.textContent = percentage

        results.style.display = 'block';
        

    }
}
const myButton = document.getElementById('action');

var score = 0

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
        score += 10;
        answerBox.style.color = '#00b01a';
    } else {
        answerBox.style.color = '#d60000';
    }
}

myButton.onclick = () => {
    const myConfirmation = confirm('Do you want to take my quiz?');

    if (myConfirmation === true) {

        aboutme.style.display = "none"

        const answer1 = prompt('Do I like boooooooks?');
        const answer1Box = document.getElementById('answer1');
        answer1Box.textContent = answer1;
        isCorrect(answer1, true, answer1Box);

        const answer2 = prompt('I have read about 45 books this year.');
        const answer2Box = document.getElementById('answer2');
        answer2Box.textContent = answer2;
        isCorrect(answer2, false, answer2Box);

        const answer3 = prompt('I was a touring actor.');
        const answer3Box = document.getElementById('answer3');
        answer3Box.textContent = answer3;
        isCorrect(answer3, true, answer3Box);

        //Display Score
        const scoreBox = document.getElementById('score');
        scoreBox.textContent = score;

        results.style.display = "block"

        //reveal hidden section

        //make something that jumps to the next section
        

    }
}